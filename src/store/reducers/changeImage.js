import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "changeImage",
  initialState: {
    isDarkTheme: false,
    
  },
  reducers: {
    changeImage: (state) => {
     
      state.isDarkTheme = !state.isDarkTheme;
    },
    
  },
});
export default imageSlice.reducer;
export const { changeImage } = imageSlice.actions;