import { configureStore } from '@reduxjs/toolkit';

// import counterReducer from './reducers/counter';
// import todosReducer from './reducers/todos';
import authReducer from './reducers/auth';
import gamesReducer from './reducers/games';

const store = configureStore({
  reducer: {
    // counterReducer: counterReducer,
    // todosReducer: todosReducer,
    authReducer: authReducer,
    gamesReducer: gamesReducer,
    
  },
});

export default store;