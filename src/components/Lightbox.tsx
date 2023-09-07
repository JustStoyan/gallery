import { Outlet, useParams } from "react-router-dom";
import { useSearchForPhotoQuery } from "../store/api/fetchPexelImages";

export const Lightbox = () => {
  const { photoId }: any = useParams();

  const { data, isLoading } = useSearchForPhotoQuery(photoId);
  const imageSrc = data ? data.src.large2x : "";
  const imageAlt = data ? data.alt && data.alt : "";

  return (
    <>
      <div className="container__lightbox-element">
        {isLoading ? "It is loading" : <img src={imageSrc} alt={imageAlt} />}
      </div>
    </>
  );
};
