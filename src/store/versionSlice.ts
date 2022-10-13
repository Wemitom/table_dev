import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { VersionState } from './interfaces';

const initialState: VersionState = {
  version: 'forClients',
};

export const versionSlice = createSlice({
  name: 'version',
  initialState,
  reducers: {
    setVersion: (
      state: VersionState,
      action: PayloadAction<'forClients' | 'forPartners'>
    ) => {
      state.version = action.payload;
    },
  },
});

export const { setVersion } = versionSlice.actions;

export default versionSlice.reducer;
