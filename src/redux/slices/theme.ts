import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from '../../interfaces/themeInterface';
import { darkTheme, lightTheme } from '../../themes/themes';

const initialState: ThemeState = {
  ...lightTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
