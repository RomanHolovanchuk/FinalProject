import { createSlice } from "@reduxjs/toolkit";
import { fetchGiveAways } from "Api/request/index";

const giveAwaysSlice = createSlice({
  name: "giveAways",
  initialState: {
    giveAways: [],
    loading: false,
    error: null,
    
  },
  reducers: {
    setGiveAways: (state, action) => {
      state.giveAways = action.payload;
    },
  },
  extraReducers: {
    [fetchGiveAways.fulfilled]: (state, action) => {
      state.giveAways = action.payload;
      state.loading = false;
    },
    [fetchGiveAways.pending]: (state) => {
      state.loading = true;
    },
    [fetchGiveAways.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default giveAwaysSlice.reducer;
export const { setGiveAways } = giveAwaysSlice.actions;

