import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { AuthState, User } from './interfaces';

const initialState: AuthState = {
  authToken: null,
  refreshToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state: AuthState,
      action: PayloadAction<{ authToken: string; refreshToken: string }>
    ) => {
      state.authToken = action.payload.authToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setUser: (state: AuthState, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    logout: (state: AuthState) => {
      state.authToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { setTokens, setUser, logout } = authSlice.actions;

export default authSlice.reducer;
