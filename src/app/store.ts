import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./story/storySlice";

export default configureStore({
  reducer: {
    storyReducer
  },
})