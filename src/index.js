import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'

import { createTheme, ThemeProvider } from "@mui/material/styles";
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#edecdf"
    },
    secondary: {
      main: "#ffe8a5"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);