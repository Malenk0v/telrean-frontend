import { createSlice } from '@reduxjs/toolkit';

const defStateStats = {
  followers: 0,
  following: 0,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState: defStateStats,
  reducers: {
    changeStatsFollowers(stats, action) {
      const res = stats.followers + action.payload;
      stats.followers = res < 0 ? 0 : res;
    },
    changeStatsLike(stats, action) {
      const res = stats.following + action.payload;
      stats.following = res < 0 ? 0 : res;
    },
  },
});

export const { changeStatsLike, changeStatsFollowers } = statsSlice.actions;
export default statsSlice.reducer;
