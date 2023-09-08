import "./empty-gallery.css";

export const EmptyGallery = () => {
  return (
    <div className="container__empty-gallery">
      <img
        src="https://c1.wallpaperflare.com/preview/883/131/712/smiley-sorry-excuse-me-sad.jpg"
        alt="Sad emojy"
      />
      <h1>Nothing was found</h1>
    </div>
  );
};
