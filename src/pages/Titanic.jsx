// src/pages/Titanic.jsx
import React, { useState } from 'react';
import { Box, Container, Tabs, Tab, Typography, CardMedia } from '@mui/material';
import MyCard from '../components/MyCard';
import TitanicPie from '../TitanicPie';


import SexPlot from '../components/titanic/SexPlot';
import ClassPlot from '../components/titanic/ClassPlot';
import AgePlot from '../components/titanic/AgePlot';

export default function Titanic() {
  const [tab, setTab] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        Survival by ...
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        sx={{ mb: 3 }}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Survival" />
        <Tab label="Sex" />
        <Tab label="Class" />
        <Tab label="Age" />
      </Tabs>

      {/* Two-column responsive layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
        }}
      >
        {/* Left panel: text and image */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="About the Titanic">
            <Typography paragraph>
              The RMS Titanic was a British passenger liner that sank in April 1912 after hitting an iceberg during her maiden voyage.
            </Typography>
            <Typography paragraph>
              The tragedy claimed over 1,500 lives. The Titanic dataset became a classic resource for teaching statistical modeling, especially logistic regression.
            </Typography>
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

        {/* Right panel: plot changes by tab */}
        <Box sx={{ flex: 1 }}>
          <MyCard title={`Visualization: ${['Survival', 'Sex', 'Class', 'Age'][tab]}`}>
            {tab === 0 && <TitanicPie />}
            {tab === 1 && <SexPlot />}
            {tab === 2 && <ClassPlot />}
            {tab === 3 && <AgePlot />}
          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
