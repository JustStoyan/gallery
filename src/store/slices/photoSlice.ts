import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = {
  photoCollection: [],
};

const photoSlice = createSlice({
  name: "photo",
  initialState: initialPhotos,
  reducers: {
    updateCollection(state, action) {
      const newCollection = action.payload;
      state.photoCollection = newCollection;
    },
  },
});

export const photoActions = photoSlice.actions;
export default photoSlice.reducer;
