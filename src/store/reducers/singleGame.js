import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleGame } from "Api/request/index";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    game: [],
    loading: false,
    error: null,
    
  },
  reducers: {
    setGame: (state, action) => {
      state.game = action.payload;
    },
  },
  extraReducers: {
    [fetchSingleGame.fulfilled]: (state, action) => {
      state.game = action.payload;
      state.loading = false;
    },
    [fetchSingleGame.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleGame.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default gameSlice.reducer;
export const { setGame } = gameSlice.actions;

