import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PlayerAuthPage } from './screens/PlayerAuthPage';
import { DevAuthPage } from './screens/DevAuthPage';
import { NotFound } from './screens/NotFound';
import { Home } from './screens/Home';
import { NormalizeStyles } from './shared/NomalizeStyles';
import { NavBar } from './components/NavBar/NavBar';
import  { Footer }  from "./components/Footer/Footer";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./shared/theme";
export function App() {
  return (
    <>
      <NormalizeStyles />
      <ThemeProvider theme={theme}>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/player" element={<PlayerAuthPage />} />
            <Route path="/register/player" element={<PlayerAuthPage />} />
            <Route path="/login/dev" element={<DevAuthPage />} />
            <Route path="/register/dev" element={<DevAuthPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </ThemeProvider>          
    </>
  );
}