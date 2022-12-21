import { AppDispatch, RootState } from '../../app/store';
import { base_url, createToken } from '../../utils/constants';
import { UserRegister } from '../../utils/types';
import { putToken } from './tokenSlice';
import { putUser } from './userSlice';

export const registerUser = (user: UserRegister) => {
  return (dispatch: AppDispatch) => {
    fetch(`${base_url}/user`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((userProfile) => {
        dispatch(putUser(userProfile));
        dispatch(putToken(createToken(user.login, user.password)));
      })
      .catch((e) => {
        console.log(e.message);
        //TODO handle error
      });
  };
};

export const fetchUser = (token: string) => {
  return (dispatch: AppDispatch) => {
    fetch(`${base_url}/login`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((userProfile) => {
        dispatch(putUser(userProfile));
        dispatch(putToken(token));
      })
      .catch((e) => {
        console.log(e.message);
        //TODO handle error
      });
  };
};

export const updateUser = (firstName: string, lastName: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    fetch(`${base_url}/user`, {
      method: 'PUT',
      body: JSON.stringify({ firstName, lastName }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: getState().token!,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((userProfile) => {
        dispatch(putUser(userProfile));
      })
      .catch((e) => {
        console.log(e.message);
        //TODO handle error
      });
  };
};

export const changePassword = (oldPassword: string, newPassword: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    fetch(`${base_url}/user/password`, {
      method: 'PUT',
      headers: {
        Authorization: createToken(getState().user!.login, oldPassword),
        'X-Password': newPassword,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(putToken(createToken(getState().user!.login, newPassword)));
        } else {
          throw new Error(response.status.toString());
        }
      })
      .catch((e) => {
        console.log(e.message);
        //TODO handle error
      });
  };
};
