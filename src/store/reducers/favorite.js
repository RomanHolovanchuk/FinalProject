import { createSlice } from "@reduxjs/toolkit";
import { fetchGamesRedux } from "Api/request/index";

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
    favoriteGames: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToFav: (state, action) => {
      state.favoriteGames.push(action.payload);
      localStorage.setItem('fav', JSON.stringify(state.favoriteGames));
    },
    setFavGames: (state, action) => {
      state.favoriteGames = action.payload;
    },
  },
  extraReducers: {
    [fetchGamesRedux.fulfilled]: (state, action) => {
      state.favorite = action.payload;
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

export default favoriteSlice.reducer;
export const { setFavGames, addToFav } = favoriteSlice.actions;