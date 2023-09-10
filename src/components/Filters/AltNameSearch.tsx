import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../../store/slices/filterSlice";

export const AltNameSearch = () => {
  const dispatch = useDispatch();
  const altName = useSelector((state: any) => state.filter.filterByName);
  const [text, setText] = useState<string>(altName);

  const changeTextHandler = (e: any) => {
    setText((prevValue: string) => {
      return (prevValue = e.target.value);
    });

    dispatch(filterActions.changeNameFilter(e.target.value));
  };
  return (
    <div className="filters__text-filter">
      <label htmlFor="search">Search</label>
      <input
        onChange={changeTextHandler}
        value={text}
        type="text"
        name="search"
        id="search"
      />
    </div>
  );
};
