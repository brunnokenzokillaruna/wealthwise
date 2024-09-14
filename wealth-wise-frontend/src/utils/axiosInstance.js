// wealth-wise-frontend/src/utils/axiosInstance.js

import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Adjust the baseURL as needed
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
