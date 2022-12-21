import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, changeName } from '../reducers/userReducer';

interface Props {
  size?: string;
}

interface StateUser {
  avatar: string;
  name: string;
}
const Avatar = ({ size }: Props) => {
  const { user }: any = useSelector((state: StateUser) => state);
  const dispatch = useDispatch();

  return (
    <img
      onClick={() => {
        const url = prompt('Enter new avatar url');
        dispatch(changeAvatar(url));
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        const name = prompt('Enter new name');
        dispatch(changeName(name));
      }}
      className={`user-avatar ${size}`}
      src={user.avatar}
      alt={user.name}
    />
  );
};

export default Avatar;
