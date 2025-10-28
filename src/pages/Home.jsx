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
  const tabLabels = ['Survival', 'Sex', 'Class', 'Age'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
        }}
      >
        {/* Left Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="The Titanic">
                    <Typography paragraph>
                      The RMS Titanic was a British passenger liner that sank in the North 
                      Atlantic Ocean in April 1912 after striking an iceberg during 
                      its maiden voyage from Southampton to New York City.              
                    </Typography>
                    <Typography paragraph>
                      Over 1,500 people lost their lives in the disaster, making it one of 
                      the deadliest commercial peacetime maritime tragedies in modern history.
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
