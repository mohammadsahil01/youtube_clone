import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    currentCategory: "All",
  },

  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCategory } = CategorySlice.actions;
export const selectCurrentCategory = (store:any)=>store.Category?.currentCategory;
export default CategorySlice.reducer;

