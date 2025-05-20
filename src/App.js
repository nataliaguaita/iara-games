import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { NotFound } from './screens/NotFound';
import { Home } from './screens/Home';
import { NormalizeStyles } from './shared/NomalizeStyles';
import { NavBar } from './components/NavBar/NavBar';
import "./App.css";

export function App() {
  return (
    <>
      <NormalizeStyles />
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pesquisa" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </>
  );
}