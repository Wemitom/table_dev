import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Languages } from '../interfaces';

export const localizationApi = createApi({
  reducerPath: 'localizationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/localization/',
  }),
  endpoints: (builder) => ({
    getTranslation: builder.query<any, Languages>({
      query: (language: Languages) => ({
        url: `${language}.json`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTranslationQuery } = localizationApi;
