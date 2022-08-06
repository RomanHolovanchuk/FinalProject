import { createSlice } from "@reduxjs/toolkit";
import { fetchGamesRedux } from "Api/request/index";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    loading: false,
    error: null,
  },
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
    },
  },
  extraReducers: {
    [fetchGamesRedux.fulfilled]: (state, action) => {
      state.games = action.payload;
      state.loading = false;
    },
    [fetchGamesRedux.pending]: (state) => {
      state.loading = true;
    },
    [fetchGamesRedux.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default gamesSlice.reducer;
export const { setGames } = gamesSlice.actions;

