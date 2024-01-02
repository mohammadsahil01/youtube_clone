import { createSlice } from "@reduxjs/toolkit";

const vidoesSlice = createSlice({
  name: "videos",
  initialState: {
    currentVideos: null,
  },

  reducers: {
    setCurrentVideos: (state, action) => {
      state.currentVideos = action.payload;
    },
  },
});

export const { setCurrentVideos } = vidoesSlice.actions;
export const currentVideos = (store:any)=>store.videos?.currentVideos;
export default vidoesSlice.reducer;

