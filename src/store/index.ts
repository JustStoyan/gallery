import { configureStore } from "@reduxjs/toolkit";
import { pexelApi } from "./api/fetchPexelImages";
import filterSlice from "./slices/filterSlice";
import photoSlice from "./slices/photoSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [pexelApi.reducerPath]: pexelApi.reducer,
    filter: filterSlice,
    photo: photoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pexelApi.middleware),
});

setupListeners(store.dispatch);
