import { Select } from "./Select";
import { useSelector } from "react-redux";
import "./filters.css";
import { AltNameSearch } from "./AltNameSearch";


export const Filters = () => {

  const showFilters = useSelector((state:any) => state.filter.toggleFilters)
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

  

  return (
    <div className={!showFilters ? "container__filters" : "container__filters--hidden"}>
      <AltNameSearch />
      <Select
        selectName="Photographers"
        options={photographers}
      />
    </div>
  );
};
