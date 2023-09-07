import { useSearchForCuratedImagesQuery } from "../store/api/fetchPexelImages";
import { Outlet } from "react-router-dom";
import { Image } from "./Image";

export const ImageGallery = () => {
  const { data } = useSearchForCuratedImagesQuery("");

  const photos = data ? data.photos : [];

  return (
    <>
      <div className="container__image-gallery">
        {photos.map((photo: any) => {
          return (
            <Image
              id={photo.id}
              key={photo.id}
              src={photo.src.landscape}
              alt={photo.alt}
            />
          );
        })}
      </div>
      <Outlet />
    </>
  );
};
