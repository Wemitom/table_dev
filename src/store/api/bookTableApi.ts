import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HallSchemeState } from '../../components/HallScheme/interfaces';
import { TableState } from '../interfaces';

export const bookTableApi = createApi({
  reducerPath: 'bookTableApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getTablesInfo: builder.query<TableState[], HallSchemeState>({
      query: (data) => ({
        url: 'info',
        method: 'GET',
      }),
    }),
    bookTable: builder.query<void, number>({
      query: (data) => ({
        url: 'book',
        method: 'POST',
        body: {
          numTable: data,
        },
      }),
    }),
  }),
});

export const { useGetTablesInfoQuery, useLazyBookTableQuery } = bookTableApi;
