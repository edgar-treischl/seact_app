// src/pages/Titanic.jsx
import React from 'react';
import { Box, Typography, Container, CardMedia } from '@mui/material';
import MyCard from '../components/MyCard';
import TitanicPie from '../components/titanic/TitanicPie';

export default function TitanicOld() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Two-column responsive layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
        }}
      >
        {/* Left Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="The Titanic">
            <Typography paragraph>
              The RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in April 1912 after striking an iceberg during its maiden voyage from Southampton to New York City.
              
              Over 1,500 people lost their lives in the disaster, making it one of the deadliest commercial peacetime maritime tragedies in modern history.
            </Typography>
            <Typography paragraph>
              This app shows you some basic aspects about logistic regression. We use passenger's sex, class, and age to estimate the effect on the survival of the Titanic accident.

            </Typography>
            {/* Placeholder image */}
            <CardMedia
              component="img"
              image="https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg"
              alt="RMS Titanic"
              sx={{ borderRadius: 1, mt: 2, maxHeight: 200, objectFit: 'cover', width: '100%' }}
            />
            <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
              Image: RMS Titanic, Wikimedia Commons
            </Typography>
          </MyCard>
        </Box>

        {/* Right Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="Survival">
            <TitanicPie />
          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
