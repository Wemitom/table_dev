import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LoginData } from '../components/LoginUser/interfaces';
import { SignupData } from '../components/SignupUser/interfaces';
import { AuthState } from './interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    signupUser: builder.query<AuthState, SignupData>({
      query: (data) => ({
        url: '/sign_up',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.query<AuthState, LoginData>({
      query: (data) => ({
        url: '/log_in',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLazySignupUserQuery, useLazyLoginUserQuery } = authApi;
