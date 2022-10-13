import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LoginData } from '../components/LoginUser/interfaces';
import { SignupData } from '../components/SignupUser/interfaces';
import { AuthState } from './interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/auth',
  }),
  endpoints: (builder) => ({
    signupUser: builder.query<AuthState, SignupData>({
      query: (data) => ({
        url: '/register/',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.query<AuthState, LoginData>({
      query: (data) => ({
        url: '/login/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLazySignupUserQuery, useLazyLoginUserQuery } = authApi;
