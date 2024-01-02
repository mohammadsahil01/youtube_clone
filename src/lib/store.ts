import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "./videosSlice";
import CategorySlice from "./CategorySlice";
import searchSlice from "@/lib/searchSlice"
const store = configureStore({
  reducer: { 
    videos: videosSlice,
    Category: CategorySlice,
    search:searchSlice
  },
});

export default store;
