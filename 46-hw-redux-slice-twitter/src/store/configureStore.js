import { configureStore } from '@reduxjs/toolkit';
import statsReducer from '../reducers/statsReducer';
import userReducer from '../reducers/userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    stats: statsReducer,
  },
});
