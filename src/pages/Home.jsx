import React, { useState } from 'react';
import { Typography, Tabs, Tab, CardMedia, Box } from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import CardPanel from '../components/CardPanel';

import SurvivalPlot from '../components/titanic/SurvivalPlot';
import SexPlot from '../components/titanic/SexPlot';
import ClassPlot from '../components/titanic/ClassPlot';
import AgePlot from '../components/titanic/AgePlot';

export default function Titanic() {
  const [tab, setTab] = useState(0);
  const tabLabels = ['Survival', 'Sex', 'Class', 'Age'];

  return (
    <PageWrapper gap={3} paddingY={2}>
      {/* Left Panel */}
      <CardPanel flex={1}>
        <Typography variant="h5" gutterBottom>
          The Titanic
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          The RMS Titanic was a British passenger liner that sank in the North Atlantic Ocean in April 1912 after striking an iceberg during its maiden voyage from Southampton to New York City.
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          Over <strong>1,500 people</strong> lost their lives in the disaster, making it one of the deadliest commercial peacetime maritime tragedies in modern history.
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          This app shows you some basic aspects about logistic regression. We use passenger's sex, class, and age to estimate the effect on the survival of the Titanic accident.
        </Typography>

        <CardMedia
          component="img"
          image="https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg"
          alt="RMS Titanic"
          sx={{ borderRadius: 2, mt: 2, width: '100%', maxHeight: 200, objectFit: 'cover' }}
        />

        <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
          Image: RMS Titanic, Wikimedia Commons
        </Typography>
      </CardPanel>

      {/* Right Panel */}
      <CardPanel flex={1}>
        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 2 }}
        >
          {tabLabels.map((label, i) => (
            <Tab key={i} label={label} sx={{ textTransform: 'none', fontWeight: 'medium' }} />
          ))}
        </Tabs>

        {/* Plots */}
        <Box sx={{ mt: 2 }}>
          {tab === 0 && <SurvivalPlot />}
          {tab === 1 && <SexPlot />}
          {tab === 2 && <ClassPlot />}
          {tab === 3 && <AgePlot />}
        </Box>
      </CardPanel>
    </PageWrapper>
  );
}
