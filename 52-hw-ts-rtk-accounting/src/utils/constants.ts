export const editUser = 'editUserProfile';
export const changePassword = 'changePassword';

export const homePage = '/';
export const profilePage = 'profile';

export const base_url = 'https://webaccounting.herokuapp.com/account';

export const createToken = (login: string, password: string) => {
  return `Basic ${window.btoa(login + ':' + password)}`;
};
