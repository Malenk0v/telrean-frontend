import { accountReducer } from '../reducers/accountReducer';
import { createStore } from '../redux/createStrore';

const initialState = {
  balance: 0,
};
export const store = createStore(accountReducer, initialState);
