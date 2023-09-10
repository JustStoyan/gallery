import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = {
  photoCollection: [],
  imageIndex: 0,
  viewStyle: 'grid'
};

const photoSlice = createSlice({
  name: "photo",
  initialState: initialPhotos,
  reducers: {
    updateCollection(state, action) {
      const newCollection = action.payload;
      state.photoCollection = newCollection;
    },
    updateIndex(state, action) {
      const newIndex = action.payload;
      state.imageIndex = newIndex;
    },
    changeView(state,action) {
      const newView = action.payload;
      state.viewStyle = newView;
    }
  },
});

export const photoActions = photoSlice.actions;
export default photoSlice.reducer;
