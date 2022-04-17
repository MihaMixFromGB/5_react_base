import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { App } from "./App";
import { store, persistor } from "./store";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import './index.css';

const theme = createTheme({
  palette: {
    customGrey: {
      main: "#edecdf"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);