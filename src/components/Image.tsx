import { useNavigate } from "react-router-dom";

export interface ImageData {
  alt?: string;
  avg_color?: string;
  height?: number;
  id?: string;
  liked?: boolean;
  photographer?: string;
  photographer_id?: number;
  photographer_url?: string;
  src?: string;
  url?: string;
  width?: number;
  onClick?: Function;
}

export const Image = (props: ImageData) => {
  const navigate = useNavigate();

  const openLightboxHandler = (e: any) => {
    navigate(`/lightbox/${e.target.id}`);
  };
  return (
    <div>
      <img
        className="img__image-gallery"
        id={props.id}
        src={props.src}
        alt={props.alt || "Image without name"}
        onClick={openLightboxHandler}
      />
       
    </div>
  );
};
