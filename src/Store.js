import { configureStore } from "@reduxjs/toolkit";
import { Loading } from "./LoaderSlice";
import { MenuReducer } from "./NavSlice";
const Store = configureStore({
  reducer: {
    Loading,
    MenuReducer,
  },
});
export default Store;
