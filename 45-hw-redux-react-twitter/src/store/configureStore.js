import { legacy_createStore } from "@reduxjs/toolkit"; 
import { twitterReducer } from "../reducers/twitterReducer";

export const initialState = {
    user: {
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

export const store = legacy_createStore(twitterReducer, initialState);