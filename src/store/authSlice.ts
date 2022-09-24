import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { useSelector } from 'react-redux';

import { AuthState, User } from './interfaces';
import { RootState } from './store';

const initialState: AuthState = {
  token: null,
  refresh: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state: AuthState,
      action: PayloadAction<{ token: string; refresh: string }>
    ) => {
      state.token = action.payload.token;
      state.refresh = action.payload.refresh;
    },
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state: AuthState) => {
      state.token = null;
      state.refresh = null;
      state.user = null;
    },
  },
});

export const { setTokens, setUser, logout } = authSlice.actions;

export default authSlice.reducer;
