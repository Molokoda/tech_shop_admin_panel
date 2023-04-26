import axios from 'axios';
import { addRefreshAuthToAuthProvider } from 'react-admin';

import { BASE_URL, ACCESS_TOKEN, REFRESH_TOKEN } from './constants';
import { LoginParamsType, ErrorCheckType } from './types';
import { refreshAuth } from './refreshAuth';

const myAuthProvider = {
  login: async ({ username, password }: LoginParamsType) => {
    try {
      const response = await axios.post(`${BASE_URL}/admins/login`, { login: username, password });
      localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
      localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  },

  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    return Promise.resolve();
  },

  checkError: ({ status }: ErrorCheckType) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem(ACCESS_TOKEN) ? Promise.resolve() : Promise.reject();
  },

  getPermissions: () => Promise.resolve()
};

export const authProvider = addRefreshAuthToAuthProvider(myAuthProvider, refreshAuth);
