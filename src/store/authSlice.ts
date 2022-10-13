import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { AuthState, User } from './interfaces';

const initialState: AuthState = {
  token: null,
  refresh: null,
  user: null,
  type: null,
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
    setType: (
      state: AuthState,
      action: PayloadAction<'partner' | 'client'>
    ) => {
      state.type = action.payload;
    },
    logout: (state: AuthState) => {
      state.token = null;
      state.refresh = null;
      state.user = null;
    },
  },
});

export const { setTokens, setUser, setType, logout } = authSlice.actions;

export default authSlice.reducer;
