import { createTheme, ThemeOptions } from '@mui/material/styles';

export const darkTheme : ThemeOptions = {
  palette: {
    primary: {
      main: 'rgb(77, 122, 183)',
    },
    secondary: {
      main: '#f90a96',
    },
    background: {
      default: '#212121',
      paper: '#332e2e',
    },
    text: {
      primary: '#fff5e0',
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
    h1: {
      fontFamily: 'Grandstander',
    },
    h2: {
      fontFamily: 'Grandstander',
    },
    h3: {
      fontFamily: 'Grandstander',
    },
    h4: {
      fontFamily: 'Grandstander',
    },
    h5: {
      fontFamily: 'Grandstander',
    },
    h6: {
      fontFamily: 'Grandstander',
    },
  },
  shape: {
    borderRadius: 2,
  },
};