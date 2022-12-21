import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deleteToken } from '../../features/accounting/tokenSlice';
import { userLogout } from '../../features/accounting/userSlice';
import ProfileData from './ProfileData';
import UpdateUser from './UpdateUser';

const Profile = () => {
  const dispatch = useAppDispatch();
  const handleClickLogout = () => {
    dispatch(userLogout());
    dispatch(deleteToken());
    console.log('Logout');
  };
  return (
    <div>
      <ProfileData />
      <button onClick={handleClickLogout}>Logout</button>
      <UpdateUser />
    </div>
  );
};

export default Profile;
