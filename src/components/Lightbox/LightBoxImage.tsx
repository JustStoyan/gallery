import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NextIcon } from "./Icons/NextIcon";
import { PreviouseIcon } from "./Icons/PreviouseIcon";


import { useSelector } from "react-redux";

export const LightboxImage = ({ src, alt }: any) => {
  const navigate = useNavigate();
  const openedImageIndex = useSelector((state: any) => state.photo.imageIndex);
  const [index, setIntex] = useState(Number(openedImageIndex));
  const photoCollection = useSelector(
    (state: any) => state.photo.photoCollection
  );

  const nextImageHandler = () => {
    setIntex((prev: any) => {
      if (prev === photoCollection.length - 1) {
        navigate(`/lightbox/${photoCollection[photoCollection.length - 1].id}`);
        return (prev = photoCollection.length - 1);
      } else {
        navigate(`/lightbox/${photoCollection[prev + 1].id}`);
        return (prev = prev + 1);
      }
    });
  };

  const prevImageHandler = () => {
    setIntex((prev: any) => {
      if (prev === 0) {
        navigate(`/lightbox/${photoCollection[prev].id}`);
        return (prev = 0);
      } else {
        navigate(`/lightbox/${photoCollection[prev - 1].id}`);
        return (prev = prev - 1);
      }
    });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape") {
      navigate("/");
    } else if (e.key === "ArrowRight") {
      setIntex((prev: any) => {
        if (prev === photoCollection.length - 1) {
          navigate(
            `/lightbox/${photoCollection[photoCollection.length - 1].id}`
          );
          return (prev = photoCollection.length - 1);
        } else {
          navigate(`/lightbox/${photoCollection[prev + 1].id}`);
          return (prev = prev + 1);
        }
      });
    } else if (e.key === "ArrowLeft") {
      setIntex((prev: any) => {
        if (prev === 0) {
          navigate(`/lightbox/${photoCollection[prev].id}`);
          return (prev = 0);
        } else {
          navigate(`/lightbox/${photoCollection[prev - 1].id}`);
          return (prev = prev - 1);
        }
      });
    }
  };

  return (
    <div
      tabIndex={1}
      onKeyDown={handleKeyDown}
      className="container__lightbox-image"
    >
      <PreviouseIcon onClick={prevImageHandler} />
      <img src={src} alt={alt} />
      <NextIcon onClick={nextImageHandler} />
    </div>
  );
};
