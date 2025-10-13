// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // optional, resets default styles

// You can customize the theme here later
const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' if you want to test dark mode
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize default styles */}
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
