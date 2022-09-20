import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import { setTokens, logout } from './authSlice';
import { AuthState } from './interfaces';

const mutex = new Mutex();

// Ставим хедеры в запрос (если токен имеется)
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://2table.ru/api/v1',
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = getState() as AuthState;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Ждем пока освободится мьютекс
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          '/refreshToken',
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(
            setTokens(
              refreshResult.data as {
                accessToken: string;
                refreshToken: string;
              }
            )
          );
          // Повторяем первый запрос
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
