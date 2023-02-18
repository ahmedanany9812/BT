import { configureStore } from "@reduxjs/toolkit";
import { Loading } from "./LoaderSlice";
const Store = configureStore({
  reducer: {
    Loading,
  },
});
export default Store;
