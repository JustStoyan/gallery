import { Filters } from "../components/Filters/Filters";
import { ImageGallery } from "../components/ImageGallery";
import { Header } from "../components/Header/Header";

export const GalleryPage = () => {
  return (
    <>
    <div className="container__gallery-page">
      <Header/>
      <Filters/>
      <ImageGallery />
    </div>
    
    </>
  );
};
