import { FiltersIcon } from "./Icons/FiltersIcon";
import { GridIcon } from "./Icons/GridIcon";
import { ListIcon } from "./Icons/ListIcon";

import { useDispatch } from "react-redux";
import { filterActions } from "../../store/slices/filterSlice";
import { photoActions } from "../../store/slices/photoSlice";

import "./header.css";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="container__header-element">
      <h1 className="header-element__title">Gallery</h1>
      <div className="header-element__view-settings">
        <div className="header-element__view-icons">
          <div onClick={() => dispatch(photoActions.changeView("grid"))}>
            <GridIcon />
          </div>
          <div onClick={() => dispatch(photoActions.changeView("list"))}>
            <ListIcon />
          </div>
        </div>
        <div
          onClick={() => dispatch(filterActions.changeToggle())}
          className="header-element__toggle-filters-icon"
        >
          <FiltersIcon />
        </div>
      </div>
    </div>
  );
};
