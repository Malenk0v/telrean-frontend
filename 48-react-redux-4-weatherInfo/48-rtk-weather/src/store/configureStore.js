// const state = {
//     weatherInfo: {
//         temp: number,
//         city: string,
//         country: string,
//         pressure: number,
//         sunset: number,
//     },
//     message: string
// }

import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../reducers/messageReducer";
import weatherReducer from "../reducers/weatherReducer";

export const store = configureStore({
    reducer: {
        weatherInfo: weatherReducer,
        message: messageReducer
    }
})