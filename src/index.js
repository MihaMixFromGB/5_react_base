import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { App } from './App';
import { Header } from "./components";
import { ChatsPage, ProfilePage } from "./pages";

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
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<ChatsPage />} />
          {/* <Route path="/" element={<h2>Hello World!</h2>} /> */}
          <Route path="/chats/*" element={<ChatsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);