import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: "search",
  initialState: {
    suggestionObj : {},
    isClose: true
  },
  reducers: {
    cacheResults: (state, action) => {
      state.suggestionObj = Object.assign(state.suggestionObj, action.payload);
      state.isClose = false;
    },
    closeSuggestions: (state, action) =>{
      state.isClose = action.payload;
    }
  },
});

export const { cacheResults, closeSuggestions } = searchSlice.actions;

export const selectCacheResults = (store:any)=>store?.search?.suggestionObj

export default searchSlice.reducer;
