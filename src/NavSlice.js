import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const MenuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    OpenMenuList: (state, action) => {
      state.open = true;
    },
    CloseMenuList: (state, action) => {
      state.open = false;
    },
  },
});

export const MenuReducer = MenuSlice.reducer;
export const menu = (state) => state.MenuReducer.open;
export const { OpenMenuList, CloseMenuList } = MenuSlice.actions;
