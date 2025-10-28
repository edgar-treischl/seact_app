// src/pages/Stats.jsx
import React, { useState } from 'react';
import { Box, Container, Tabs, Tab, Typography, CardMedia } from '@mui/material';
import MyCard from '../components/MyCard';

import SurvivalPlot from '../components/titanic/SurvivalPlot';
import SexPlot from '../components/titanic/SexPlot';
import ClassPlot from '../components/titanic/ClassPlot';
import AgePlot from '../components/titanic/AgePlot';


export default function Titanic() {
  const [tab, setTab] = useState(0);
  const tabLabels = ['Survival', 'Sex', 'Class', 'Age', 'Models'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
        }}
      >
        {/* Left panel: static text and image */}
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

        {/* Right panel: tabs + plots */}
        <Box sx={{ flex: 1 }}>
          <MyCard>
            {/* Tabs inside the card */}
            <Tabs
              value={tab}
              onChange={(e, newValue) => setTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 3 }}
            >
              {tabLabels.map((label, index) => (
                <Tab key={index} label={label} />
              ))}
            </Tabs>

            {/* Render selected plot */}
            {tab === 0 && <SurvivalPlot />}
            {tab === 1 && <SexPlot />}
            {tab === 2 && <ClassPlot />}
            {tab === 3 && <AgePlot />}

          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
