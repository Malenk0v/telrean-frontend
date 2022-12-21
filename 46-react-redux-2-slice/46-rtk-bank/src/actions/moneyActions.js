import { createAction } from '@reduxjs/toolkit';

export const deposit = createAction('DEPOSIT');
export const withdraw = createAction('WITHDRAW');

// export const DEPOSIT = 'DEPOSIT';
// export const WITHDRAW = 'WITHDRAW';

// export const deposit = (sum) => {
//   return {
//     type: DEPOSIT,
//     payload: sum,
//   };
// };

// export const withdraw = (sum) => {
//   return {
//     type: WITHDRAW,
//     payload: sum,
//   };
// };
