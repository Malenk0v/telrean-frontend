import { createReducer } from '@reduxjs/toolkit';
import { deposit, withdraw } from '../actions/moneyActions';

const defAccount = {
  balance: 0,
};

export const accountReducer = createReducer(defAccount, {
  [deposit]: (account, action) => {
    account.balance += action.payload;
  },
  [withdraw]: (account, action) => {
    const res = account.balance - action.payload;
    account.balance = res < 0 ? account.balance : res;
  },
});

// export const accountReducer = (account = defAccount, action) => {
//   console.log(account);
//   switch (action.type) {
//     case deposit.toString():
//       return { ...account, balance: account.balance + action.payload };
//     case withdraw.toString():
//       const res = account.balance - action.payload;
//       return { ...account, balance: res < 0 ? account.balance : res };
//     default:
//       return account;
//   }
// };
