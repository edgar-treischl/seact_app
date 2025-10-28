// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Inputs from './pages/Inputs';
import Outputs from './pages/Outputs';
import Idea from './pages/Idea';
import Alluvial from './pages/Alluvial';
import Models from './pages/Models';
import OddsRatios from './pages/OddsRatios';


export default function App() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oddsratios" element={<OddsRatios />} />
          <Route path="/models" element={<Models />} />
          <Route path="/variables" element={<Alluvial />} />
          <Route path="/idea" element={<Idea />} />
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
