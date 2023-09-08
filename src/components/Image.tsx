import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { photoActions } from "../store/slices/photoSlice";

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
  title: string;
}

export const Image = (props: ImageData) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openLightboxHandler = (e: any) => {
    dispatch(photoActions.updateIndex(e.target.title));
    navigate(`/lightbox/${e.target.id}`);
  };
  return (
    <div>
      <img
        className="img__image-gallery"
        title={props.title}
        id={props.id}
        src={props.src}
        alt={props.alt || "Untitled"}
        onClick={openLightboxHandler}
      />
    </div>
  );
};
