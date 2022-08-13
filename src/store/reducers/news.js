import { createSlice } from "@reduxjs/toolkit";
import { fetchNewsRedux } from "Api/request/index";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    loading: false,
    error: null,
    
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
  extraReducers: {
    [fetchNewsRedux.fulfilled]: (state, action) => {
      state.news = action.payload;
      state.loading = false;
    },
    [fetchNewsRedux.pending]: (state) => {
      state.loading = true;
    },
    [fetchNewsRedux.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default newsSlice.reducer;
export const { setNews } = newsSlice.actions;

