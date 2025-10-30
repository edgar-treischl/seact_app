// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Inputs from './pages/Inputs';
import Outputs from './pages/Outputs';
import Idea from './pages/Idea';
import Alluvial from './pages/Alluvial';
import Models from './pages/Models';
import OddsRatios from './pages/OddsRatios';

export default function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: '1rem', md: '1rem 2rem' },
          backgroundColor: '#f0f2f5',
          boxSizing: 'border-box',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oddsratios" element={<OddsRatios />} />
          <Route path="/models" element={<Models />} />
          <Route path="/variables" element={<Alluvial />} />
          <Route path="/idea" element={<Idea />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/outputs" element={<Outputs />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}
