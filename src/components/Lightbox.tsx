import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchForPhotoQuery } from "../store/api/fetchPexelImages";
import { useSelector } from "react-redux";

export const Lightbox = () => {
  const photoCollection = useSelector(
    (state: any) => state.photo.photoCollection
  );
  const navigate = useNavigate();
  const { photoId }: any = useParams();
  const openedImageIndex = photoCollection.findIndex(
    (photo: any) => photo.id == Number(photoId)
  );

  const [index, setIntex] = useState(Number(openedImageIndex));

  const { data, isLoading } = useSearchForPhotoQuery(photoId);
  const imageSrc = data ? data.src.landscape : "";
  const imageAlt = data ? data.alt && data.alt : "";

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape") {
      navigate("/");
    } else if (e.key === "ArrowRight") {
      console.log(openedImageIndex);
      setIntex((prev: any) => {
        if (prev === photoCollection.length - 1) {
          return (prev = photoCollection.length - 1);
        } else {
          return (prev = prev + 1);
        }
      });
      // console.log(index);
      // console.log(photoCollection[index].id);
      navigate(`/lightbox/${photoCollection[index].id}`);
    } else if (e.key === "ArrowLeft") {
      setIntex((prev: any) => {
        if (prev === 0) {
          return (prev = 0);
        } else {
          return (prev = prev - 1);
        }
      });
      // console.log(index);
      // console.log(photoCollection[index].id);

      navigate(`/lightbox/${photoCollection[index].id}`);
    }

    console.log(e.key);
  };

  return (
    <>
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="container__lightbox-element"
      >
        <div
          onClick={() => navigate("/")}
          className="container__lightbox-element__close-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
          </svg>
        </div>
        {isLoading ? "It is loading" : <img src={imageSrc} alt={imageAlt} />}
      </div>
    </>
  );
};
