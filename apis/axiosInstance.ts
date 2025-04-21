// apis/axiosInstance.ts
/* eslint-disable no-param-reassign */
import { API_BASE_URL } from '@constants/endpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

console.log('Axios initialized with API_BASE_URL:', API_BASE_URL); // Debug

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log('Request:', {
      url: config.url,
      method: config.method,
      data: config.data,
      headers: config.headers,
    }); // Debug
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error); // Debug
    return Promise.reject(error);
  },
);

let refreshTokenPromise: Promise<
  AxiosResponse<{ accessToken: string; refreshToken: string }>
> | null = null;

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response.data); // Debug
    return response.data;
  },
  async (error: AxiosError) => {
    console.error('Response error:', {
      message: error.message,
      code: error.code,
      config: error.config,
      response: error.response?.data,
    }); // Debug
    const originalRequest = error.config as AxiosRequestConfig & {
      retry?: boolean;
    };
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest.retry
    ) {
      originalRequest.retry = true;
      if (!refreshTokenPromise) {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        if (!refreshToken) {
          await AsyncStorage.multiRemove([
            'accessToken',
            'refreshToken',
            'user',
          ]);
          setTimeout(() => {
            router.replace('/(auth)/sign-in');
          }, 2000);
          return Promise.reject(error);
        }
        refreshTokenPromise = axiosInstance
          .post('/auth/refresh-tokens', { refreshToken })
          .then(async (response) => {
            const newAccessToken = response.data.access.token;
            const newRefreshToken = response.data.refresh.token;
            await AsyncStorage.multiSet([
              ['accessToken', newAccessToken],
              ['refreshToken', newRefreshToken],
            ]);
            axiosInstance.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${newAccessToken}`,
            };
            return axiosInstance(originalRequest);
          })
          .catch(async (err) => {
            await AsyncStorage.multiRemove([
              'accessToken',
              'refreshToken',
              'user',
            ]);
            Toast.show({
              type: 'error',
              text1: 'Session expired',
              text2: 'Please log in again.',
            });
            setTimeout(() => {
              router.replace('/(auth)/sign-in');
            }, 2000);
            return Promise.reject(err);
          })
          .finally(() => {
            refreshTokenPromise = null;
          });
      }
      return refreshTokenPromise.then(() => axiosInstance(originalRequest));
    }
    return Promise.reject(error);
  },
);

export const axiosBaseQuery =
  (
    { baseUrl } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      console.error('Axios error:', {
        message: err.message,
        code: err.code,
        config: err.config,
      }); // Debug
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosInstance;
