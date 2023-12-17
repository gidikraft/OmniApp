import axios from 'axios';
import { getFromLS } from '../storage/localStorage';

export const SERVER = axios.create({
  baseURL: 'https://api-dev.ompy.ng/',
});

SERVER.interceptors.request.use(
  async (config) => {
    const token = await getFromLS('__token__')

    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);
