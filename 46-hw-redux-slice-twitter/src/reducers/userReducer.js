import { createSlice } from '@reduxjs/toolkit';

const defStateUser = {
  avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
  name: 'Monster',
};

const userSlice = createSlice({
  name: 'user',
  initialState: defStateUser,
  reducers: {
    changeAvatar(user, action) {
      user.avatar = action.payload;
    },
    changeName(user, action) {
      user.name = action.payload;
    },
  },
});

export const { changeName, changeAvatar } = userSlice.actions;
export default userSlice.reducer;
