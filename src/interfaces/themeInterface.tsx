import { Theme } from '@react-navigation/native';

export interface ThemeState {
  currentTheme: 'dark' | 'light';
  dividerColor: string;
  theme: Theme;
}
