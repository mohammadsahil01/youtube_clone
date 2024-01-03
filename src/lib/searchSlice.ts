import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
  name: "search",
  initialState: {
    suggestionObj : {},
    searchVideos:[],
    isClose: true
  },
  reducers: {
    cacheResults: (state, action) => {
      state.suggestionObj = Object.assign(state.suggestionObj, action.payload);
      state.isClose = false;
    },
    closeSuggestions: (state, action) =>{
      state.isClose = action.payload;
    },
    AddSearchVideos:(state,action)=>{
      state.searchVideos=action.payload
    }
  },
});

export const { cacheResults, closeSuggestions,AddSearchVideos } = searchSlice.actions;

export const selectCacheResults = (store:any)=>store?.search?.suggestionObj

export const SelectSearchVideos = (store:any)=>store.search.searchVideos

export default searchSlice.reducer;
