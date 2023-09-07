import { configureStore } from "@reduxjs/toolkit";
import { pexelApi } from "./api/fetchPexelImages";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [pexelApi.reducerPath]: pexelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pexelApi.middleware),
});

setupListeners(store.dispatch);
