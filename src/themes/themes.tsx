import { ThemeState } from '../interfaces/themeInterface';

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0, 0, 0, 0.7)',
  theme: {
    dark: false,
    colors: {
      primary: '#084F6A',
      background: 'white',
      card: 'white',
      text: 'black',
      border: 'black',
      notification: 'teal',
    },
  },
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(255, 255, 255, 0.7)',
    theme: {
      dark: true,
      colors: {
        primary: '#5856D6',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'black',
        notification: 'teal',
      },
    },
  };
