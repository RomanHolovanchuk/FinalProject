import { instance } from "../index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGames = async (genre) => {
  const response = await instance.get("/games", {
    params: genre && {
      category: genre,
    },
  });

  return response.data;
};
export const fetchNews = async (genre) => {
  const response = await instance.get("/latestnews");

  return response.data;
};

export const fetchGamesRedux = createAsyncThunk(
  "games/fetchGamesRedux",
  async (genre) => {
    const response = instance
      .get("/games", {
        params: genre && {
          category: genre,
        },
      })
      .then((res) => res.data);

    return response;
  }
);
