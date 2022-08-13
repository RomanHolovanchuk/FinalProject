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
          // && - ||
          category: genre,
        },
      })
      .then((res) => res.data);

    return response;
  }
);

export const fetchSingleGame = createAsyncThunk(
  "game/fetchSingleGame",
  async (id) => {
    const response = instance
      .get("/game", {
        params: {id} 
      })
      .then((res) => res.data);

    return response;
  }
);

export const fetchNewsRedux = createAsyncThunk(
  "latestnews/fetchNewsRedux",
  async () => {
    const response = await instance.get("/latestnews");

    return response.data;
  }
);
export const fetchGiveAways = createAsyncThunk(
  "giveaways/fetchGiveAways",
  async () => {
    const response = await instance.get("/giveaways");

    return response.data;
  }
);

export const fetchTagsGames = createAsyncThunk(
  "games/fetchTagsGames",
  async (genre) => {
    const response = instance
      .get("/games", {
        params: genre || {
          // && - ||
          category: genre,
        },
      })
      .then((res) => res.data);

    return response;
  }
);
