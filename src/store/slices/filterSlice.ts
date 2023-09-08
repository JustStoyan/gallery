import { createSlice } from "@reduxjs/toolkit";

interface FilterInterface {
  filterByPhotographer: string;
  filterByName: string;
}

const initialFiltersState: FilterInterface = {
  filterByPhotographer: "all",
  filterByName: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFiltersState,
  reducers: {
    changePhotographerFilter(state, action) {
      const newAuthorFilter = action.payload;
      state.filterByPhotographer = newAuthorFilter;
    },
    changeNameFilter(state, action) {
      const newNameFilter = action.payload;
      state.filterByName = newNameFilter;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
