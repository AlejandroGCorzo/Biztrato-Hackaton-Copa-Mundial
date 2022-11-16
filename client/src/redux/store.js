import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./info/infoSlice.js";

export default configureStore({
  reducer: {
    info: infoSlice,
  },
});
