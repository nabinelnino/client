import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { psetsApi } from "./features/apiSlice";
export const store = configureStore({
  reducer: {
    [psetsApi.reducerPath]: psetsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});
