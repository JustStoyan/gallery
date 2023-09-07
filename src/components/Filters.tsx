import { useSearchForCuratedImagesQuery } from "../store/api/fetchPexelImages";

export const Filters = () => {
  const { data } = useSearchForCuratedImagesQuery("");
  const photos = data ? data.photos : [];

  const allPhotographers = photos.map((currPhoto: any) => currPhoto.photographer);
  const uniqueSet = new Set(allPhotographers);
  const photographers = Array.from(uniqueSet);

  return (
    <div>
      <select name="photographer" id="photographer">
        {photographers.map((authorName: any) => {
          return <option key={authorName} value={authorName}>{authorName}</option>;
        })}
      </select>
    </div>
  );
};
