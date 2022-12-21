import { createSlice } from '@reduxjs/toolkit';

const defAccount = {
  balance: 0,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: defAccount,
  reducers: {
    deposit(account, action) {
      account.balance += action.payload;
    },
    withdraw(account, action) {
      const res = account.balance - action.payload;
      account.balance = res < 0 ? account.balance : res;
    },
  },
});

export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
// export const accountReducer = createReducer(defAccount, {
//   [deposit]: (account, action) => {
//     account.balance += action.payload;
//   },
//   [withdraw]: (account, action) => {
//     const res = account.balance - action.payload;
//     account.balance = res < 0 ? account.balance : res;
//   },
// });
//-------------------------------------------
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
