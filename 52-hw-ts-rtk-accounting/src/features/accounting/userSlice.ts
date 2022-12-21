import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from '../../utils/types';

const initialState = null as UserProfile | null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    putUser: (state, action: PayloadAction<UserProfile>) => {
      return action.payload;
    },
    userLogout: (state) => {
      return null;
    },
  },
});

export const { putUser, userLogout } = userSlice.actions;

export default userSlice.reducer;
