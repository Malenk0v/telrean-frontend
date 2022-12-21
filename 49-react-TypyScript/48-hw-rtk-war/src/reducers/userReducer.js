import { createSlice } from "@reduxjs/toolkit";
import { start } from "../utils/contants";

const defaultUser = {
    page: start,
    name: 'You'
}

const userSlice = createSlice({
    name: 'user',
    initialState: defaultUser,
    reducers: {
        changePage(user, action){
            user.page = action.payload;
        },
        changeName(user, action){
            user.name = action.payload;
        }
    }
})

export const {changeName, changePage} = userSlice.actions;
export default userSlice.reducer;