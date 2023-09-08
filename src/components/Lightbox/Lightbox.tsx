import { useParams, useNavigate } from "react-router-dom";
import { useSearchForPhotoQuery } from "../../store/api/fetchPexelImages";
import { CloseIcon } from "./Icons/CloseIcon";
import { LoadingState } from "./LoadingState";
import { LightboxImage } from "./LightBoxImage";

export const Lightbox = () => {
  const navigate = useNavigate();
  const { photoId }: any = useParams();

  const { data, isLoading } = useSearchForPhotoQuery(photoId);
  const imageSrc = data ? data.src.landscape : "";
  const imageAlt = data ? data.alt && data.alt : "";

  return (
    <>
      <div className="container__lightbox-element">
        <div
          onClick={() => navigate("/")}
          className="container__lightbox-element__close-icon"
        >
          <CloseIcon />
        </div>
        {isLoading ? (
          <LoadingState />
        ) : (
          <LightboxImage src={imageSrc} alt={imageAlt} />
        )}
      </div>
    </>
  );
};
