import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomImage } from "../services/ImageService";

type imageDataSliceType = {
  image: string;
  hasImage: boolean;
  title: string;
};

const initialState: imageDataSliceType = {
  image: "",
  hasImage: false,
  title: "",
};

export const getRandomImage = createAsyncThunk(
  "imageDataSlice/getRandomImage",
  async () => {
    return await fetchRandomImage();
  }
);

export const slice = createSlice({
  name: "imageDataSlice",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state = { ...state, title: action.payload };

      return state;
    },
    setHasImage: (state, action) => {
      state = { ...state, hasImage: action.payload };

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomImage.fulfilled, (state, action) => {
      state = {
        ...state,
        image: action.payload.data,
        hasImage: action.payload.isSuccess,
      };

      return state;
    });
  },
});

export const { setTitle, setHasImage } = slice.actions;

export default slice.reducer;
