import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice.js";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authSlice.middleware),
});
