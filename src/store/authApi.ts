import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
});

export const { useLazySignupUserQuery } = authApi;
