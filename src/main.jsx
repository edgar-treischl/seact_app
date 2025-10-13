import '@fontsource/roboto'; // ✅ loads Roboto font for MUI

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme(); // Customize if needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
