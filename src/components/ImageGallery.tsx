import { useEffect } from "react";
import { useSearchForCuratedImagesQuery } from "../store/api/fetchPexelImages";
import { useSelector, useDispatch } from "react-redux";
import { photoActions } from "../store/slices/photoSlice";
import { EmptyGallery } from "./EmptyGallery/EmptyGallery";
import { Image } from "./Image";
import { Outlet } from "react-router-dom";

export const ImageGallery = () => {
  const dispatch = useDispatch();
  const viewStyle = useSelector((state: any) => state.photo.viewStyle);
  const photoCollection = useSelector(
    (state: any) => state.photo.photoCollection
  );
  const selectedPhtographer = useSelector(
    (state: any) => state.filter.filterByPhotographer
  );

  const altName = useSelector((state: any) => state.filter.filterByName);
  const { data } = useSearchForCuratedImagesQuery("");

  const filteredImages = photoCollection
    .filter((currentPhoto: any) => {
      if (altName === "") {
        return true;
      } else {
        return currentPhoto.alt?.toLowerCase().includes(altName.toLowerCase());
      }
    })
    .filter((currentPhoto: any) => {
      if (selectedPhtographer === "all") {
        return true;
      } else {
        return currentPhoto.photographer === selectedPhtographer;
      }
    })
    .map((photo: any, index: string) => {
      return (
        <Image
          title={index}
          id={photo.id}
          key={photo.id}
          src={viewStyle === 'grid'? photo.src.landscape : photo.src.large}
          alt={photo.alt}
          photographer={photo.photographer}
        />
      );
    });

  useEffect(() => {
    const photos = data ? data.photos : [];
    dispatch(photoActions.updateCollection(photos));
  }, [data, dispatch]);

  return (
    <>
      <div
        className={
          viewStyle === "grid"
            ? "container__image-gallery"
            : "container__image-gallery--list"
        }
      >
        {filteredImages.length === 0 ? <EmptyGallery /> : filteredImages}
      </div>
      <Outlet />
    </>
  );
};
