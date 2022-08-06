import axios from 'axios';

const URL = 'https://mmo-games.p.rapidapi.com';

export const instance = axios.create({
  baseURL: URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  },
});