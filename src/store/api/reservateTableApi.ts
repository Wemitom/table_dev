import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HallSchemeState } from '../../components/HallScheme/interfaces';
import { TableState, TableTimeInfo } from '../interfaces';
import { baseQueryWithReauth } from './baseQueryWithReauth';

export const reservateTableApi = createApi({
  reducerPath: 'reservateTableApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getTablesInfo: builder.query<TableState[], HallSchemeState>({
      query: (data) => ({
        url: `info/${data}`,
        method: 'GET',
      }),
    }),
    getOneTableInfo: builder.query<TableTimeInfo[], number>({
      query: (data) => ({
        url: `oneInfo/${data}`,
        method: 'GET',
      }),
    }),
    reservateTable: builder.query<void, number>({
      query: (data) => ({
        url: 'book',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetTablesInfoQuery, useLazyReservateTableQuery } =
  reservateTableApi;
