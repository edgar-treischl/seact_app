// src/components/CardPanel.jsx
import React from 'react';
import { Box } from '@mui/material';

export default function CardPanel({ children, flex = 1, padding = 2 }) {
  return (
    <Box
      sx={{
        flex: flex,
        bgcolor: 'background.paper',
        borderRadius: 2,
        p: padding,
        boxShadow: 1,
      }}
    >
      {children}
    </Box>
  );
}
