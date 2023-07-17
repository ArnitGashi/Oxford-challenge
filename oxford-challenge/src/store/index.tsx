import { configureStore } from "@reduxjs/toolkit";

import imageDataSlice from "./imageDataSlice";

export const store = configureStore({
  reducer: {
    imageData: imageDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
