import { Filters } from "../components/Filters";
import { ImageGallery } from "../components/ImageGallery";

export const GalleryPage = () => {
  return (
    <>
    <div className="container__gallery-page">
      <Filters/>
      <ImageGallery />
    </div>
    
    </>
  );
};
