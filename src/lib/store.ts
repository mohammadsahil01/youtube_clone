import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "./videosSlice";
import CategorySlice from "./CategorySlice";

const store = configureStore({
  reducer: { 
    videos: videosSlice,
    Category: CategorySlice,
  },
});

export default store;
