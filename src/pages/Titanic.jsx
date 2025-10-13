// src/pages/Titanic.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import MyCard from '../components/MyCard';
import TitanicPie from '../TitanicPie';

export default function Titanic() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Two-column responsive layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
        }}
      >
        {/* Left Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="Titanic Dataset Analysis">
            <Typography paragraph>
              Add some description or instructions here for your data or chart.
            </Typography>
            <Button variant="contained" fullWidth>
              Click Me
            </Button>
          </MyCard>
        </Box>

        {/* Right Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="Titanic Survival Pie Chart">
            <TitanicPie />
          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
