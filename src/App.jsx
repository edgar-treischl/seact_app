// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Inputs from './pages/Inputs';
import Outputs from './pages/Outputs';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/outputs" element={<Outputs />} />
        </Routes>
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: '1rem 2rem',
    backgroundColor: '#f0f2f5',
    minHeight: 'calc(100vh - 64px)',
    boxSizing: 'border-box',
  },
};
