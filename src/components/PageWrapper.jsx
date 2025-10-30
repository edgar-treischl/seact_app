// src/components/PageWrapper.jsx
import React from 'react';
import { Container, Box } from '@mui/material';

export default function PageWrapper({ children, gap = 3, paddingY = 2 }) {
  return (
    <Container maxWidth="lg" sx={{ py: paddingY, px: { xs: 1, md: 2 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: gap,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
