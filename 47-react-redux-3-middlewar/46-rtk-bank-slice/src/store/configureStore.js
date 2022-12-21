import { configureStore } from '@reduxjs/toolkit';
import { loggerEnhancer } from '../middlewares/loggerEnhancer';
import { thunkEnhancer } from '../middlewares/thunkEnhancer';
import accountReducer from '../reducers/accountReducer';
import quoteReducer from '../reducers/quoteReducer';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    quote: quoteReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(thunkEnhancer, loggerEnhancer),
});
