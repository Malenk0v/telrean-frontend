import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeStatsFollowers,
  changeStatsLike,
} from '../reducers/statsReducer';
import Avatar from './Avatar';

const UserStats = () => {
  const { user, stats }: any = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="user-stats">
      <div>
        <Avatar />
        {user.name}
      </div>
      <div className="stats">
        <div
          onClick={() => dispatch(changeStatsFollowers(1))}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeStatsFollowers(-1));
          }}
        >
          Followers: {stats.followers}
        </div>
        <div
          onClick={() => dispatch(changeStatsLike(1))}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeStatsLike(-1));
          }}
        >
          Following: {stats.following}
        </div>
      </div>
    </div>
  );
};

export default UserStats;
