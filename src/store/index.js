import { configureStore } from '@reduxjs/toolkit';

// import counterReducer from './reducers/counter';
// import todosReducer from './reducers/todos';
import authReducer from './reducers/auth';
import gamesReducer from './reducers/games';
import singleGameReducer from './reducers/singleGame';
import tagsReducer from './reducers/tags';
import newsReducer from './reducers/news';
import giveAwaysReducer from './reducers/giveAways';
import changeImageReducer from './reducers/changeImage';
import favoriteGamesReducer from './reducers/favorite';

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    gamesReducer: gamesReducer,
    singleGameReducer: singleGameReducer,
    tagsReducer: tagsReducer,
    newsReducer: newsReducer,
    giveAwaysReducer: giveAwaysReducer,
    changeImageReducer: changeImageReducer,
    favoriteGamesReducer: favoriteGamesReducer,
  },
});

export default store;