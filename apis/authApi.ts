// apis/authApi.ts
import { axiosBaseQuery } from '@apis/axiosInstance';
import { AUTH_ENDPOINT } from '@constants/endpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi } from '@reduxjs/toolkit/query/react';
import { loginSuccess } from '@stores/slices/userSlice';
import type { Auth } from 'auth';
import Toast from 'react-native-toast-message';
import type { User } from 'user';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: AUTH_ENDPOINT,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<
      Auth,
      { email: string; password: string; name: string }
    >({
      query: ({ email, password, name }) => ({
        url: '/register',
        method: 'POST',
        data: {
          email,
          password,
          name,
        },
      }),
    }),
    login: builder.mutation<Auth, { email: string; password: string }>({
      query: ({ email, password }) => {
        console.log('Login request data:', { email, password }); // Debug
        return {
          url: '/login',
          method: 'POST',
          data: {
            email,
            password,
          },
        };
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          const accessToken = data.tokens.access.token;
          const refreshToken = data.tokens.refresh.token;

          await AsyncStorage.multiSet([
            ['accessToken', accessToken],
            ['refreshToken', refreshToken],
            ['user', JSON.stringify(data.user)],
          ]);

          AsyncStorage.multiGet(['accessToken', 'refreshToken', 'user']).then(
            (values) => console.log('Stored:', values),
          );

          dispatch(loginSuccess(data.user));

          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            text2: `Welcome, ${data.user.name}!`,
          });
        } catch (error: any) {
          console.error('Login error:', error);
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: error?.error?.data?.message || 'Please try again.',
          });
        }
      },
    }),
    me: builder.query<User, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useMeQuery } = authApi;
