import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/slices/filterSlice";
import { uniqueValuesFromArray } from "../../utils";

export const Select = (props: any) => {
  const dispatch = useDispatch();
  const uniqueOptions: any = uniqueValuesFromArray(props.options);
  const [selectedOption, setSelectedOption] = useState("all");

  const selectOptionHandler = (e: any) => {
    setSelectedOption((prev: string) => (prev = e.target.value));
    dispatch(filterActions.changePhotographerFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor={props.selectName}>{props.selectName}</label>
      <select
        onChange={selectOptionHandler}
        name={props.selectName}
        id={props.selectName}
        value={selectedOption}
      >
        <option value="all">All</option>
        {uniqueOptions.map((currentOption: any) => (
          <option key={currentOption} value={currentOption}>
            {currentOption}
          </option>
        ))}
      </select>
    </div>
  );
};
