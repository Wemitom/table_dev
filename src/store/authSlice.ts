import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { AuthState, User } from './interfaces';

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state: AuthState,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state: AuthState) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { setTokens, setUser, logout } = authSlice.actions;

export default authSlice.reducer;
