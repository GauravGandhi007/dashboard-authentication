import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAxiosAuth = () => {
  const { auth, login, logout } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.freeapi.app/api/v1',
  });

  // Request interceptor: Attach Authorization header if token exists
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = auth?.token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor: Handle 401 Unauthorized and refresh token
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If 401 error and no retry attempt made yet
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshTokenResponse = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/users/refresh-token`,
            { refreshToken: auth.refreshToken }
          );

          const newToken = refreshTokenResponse.data.token;
          // Update token in AuthContext
          login({ ...auth, token: newToken });
          
          // Retry the original request with the new token
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh error:', refreshError);
          logout(); // Log out user on token refresh failure
          return Promise.reject(refreshError);
        }
      }
      console.error('Response error:', error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosAuth;
