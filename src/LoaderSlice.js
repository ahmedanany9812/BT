import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loaded: false,
};

const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    LoadingFinishd: (state, action) => {
      state.loaded = true;
    },
  },
});

export const Loading = LoadingSlice.reducer;
export const loaded = (state) => state.Loading.loaded;
export const { LoadingFinishd } = LoadingSlice.actions;
