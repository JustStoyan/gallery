import { FiltersIcon } from "./Icons/FiltersIcon";
import { GridIcon } from "./Icons/GridIcon";
import { ListIcon } from "./Icons/ListIcon";

import './header.css'

export const Header = () => {
  return (
    <div className="container__header-element">
      <h1 className="header-element__title">Image Gallery</h1>
      <div className="header-element__view-settings">
        <div className="header-element__view-icons">
          <GridIcon />
          <ListIcon />
        </div>
        <div className="header-element__toggle-filters-icon">
          <FiltersIcon />
        </div>
      </div>
    </div>
  );
};
