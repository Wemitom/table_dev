import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from './authApi';
import authReducer from './authSlice';
import { localizationApi } from './localizationApi';
import localizationReducer from './localizeSlice';

const persistConfigAuth = {
  key: 'auth',
  version: 1,
  storage,
};
const persistConfigLocalization = {
  key: 'localization',
  version: 1,
  storage,
};

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);
const persistedReducerLocalization = persistReducer(
  persistConfigLocalization,
  localizationReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    localization: persistedReducerLocalization,
    [authApi.reducerPath]: authApi.reducer,
    [localizationApi.reducerPath]: localizationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, localizationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
