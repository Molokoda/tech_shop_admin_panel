import jwt_decode from 'jwt-decode';
import axios from 'axios';

import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from './constants';

export const refreshAuth = async () => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    let decodeAccessToken: { exp: null | number } = { exp: null };
    if (accessToken) {
      decodeAccessToken = jwt_decode<{ exp: number }>(accessToken);
    }
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (decodeAccessToken.exp && refreshToken && decodeAccessToken.exp < Date.now() / 1000) {
      const response = await axios.post(`${BASE_URL}/admins/refresh`, { refreshToken });
      localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
      localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
    }
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
