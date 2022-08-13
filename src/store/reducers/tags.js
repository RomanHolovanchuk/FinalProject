import { createSlice } from "@reduxjs/toolkit";
import { fetchTagsGames } from "Api/request/index";

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
    [fetchTagsGames.fulfilled]: (state, action) => {
      state.games = action.payload;
      state.loading = false;
    },
    [fetchTagsGames.pending]: (state) => {
      state.loading = true;
    },
    [fetchTagsGames.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default gamesSlice.reducer;
export const { setGames } = gamesSlice.actions;

