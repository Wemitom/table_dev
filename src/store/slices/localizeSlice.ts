import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Languages, LocalizationState } from '../interfaces';

const initialState: LocalizationState = {
  language: Languages.ru,
  translations: {},
};

const localizeSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setTranslations: (state: LocalizationState, action: PayloadAction<any>) => {
      state.translations = action.payload;
    },
    setLanguage: (
      state: LocalizationState,
      action: PayloadAction<Languages>
    ) => {
      state.language = action.payload;
    },
  },
});

export const { setTranslations, setLanguage } = localizeSlice.actions;
export default localizeSlice.reducer;
