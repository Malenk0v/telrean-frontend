import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../reducers/gameReducer";
import userReducer from "../reducers/userReducer";

// const state = {
//     user: {
//         page: string,
//         name: string,
//     },
//     game: {
//         score: array of number,
//         result: string
//     }
// }

export const store = configureStore({
    reducer: {
        game: gameReducer,
        user: userReducer
    }
})