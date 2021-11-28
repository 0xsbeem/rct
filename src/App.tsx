import React from 'react';
import { Landing, } from './pages/Landing';
import { Overview, } from './pages/Overview';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './styles/theme';


export const App = () => {



  return (
    <ThemeProvider theme={createTheme(darkTheme)}>
      <Landing/>
    </ThemeProvider>
  );
};

export default App;
