import { Select } from "./Select";
import { useSelector } from "react-redux";
import "./filters.css";
import { AltNameSearch } from "./AltNameSearch";

export const Filters = () => {
  const photoCollection = useSelector(
    (state: any) => state.photo.photoCollection
  );
  const altName = useSelector((state: any) => state.filter.filterByName);

  const photographers = photoCollection
    .filter((currentPhoto: any) => {
      if (altName === "") {
        return true;
      } else {
        return currentPhoto.alt?.toLowerCase().includes(altName.toLowerCase());
      }
    })
    .map((currentPhoto: any) => currentPhoto.photographer);

  const filterCollectionHandler = (e: any) => {};

  return (
    <div className="container__filters">
      <AltNameSearch />
      <Select
        selectName="Photographers"
        options={photographers}
        onChange={filterCollectionHandler}
      />
    </div>
  );
};
