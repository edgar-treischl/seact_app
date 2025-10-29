// src/pages/Titanic.jsx
import React from 'react';
import { Box, Typography, Container, CardMedia } from '@mui/material';
import MyCard from '../components/MyCard';
import LogitVsLinear from '../components/titanic/LogitVsLinear';


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
          <MyCard title="Logistic Regression — But Why?">
            <Typography paragraph>
              There are several reasons why logistic regression was invented to model binary outcomes. 
              The most obvious one is right there in the figure below. Imagine trying to fit a 
              simple regression line to predict a binary outcome. Now, picture how a scatter plot 
              would look in that situation.
              </Typography>
            <Typography paragraph>
              In linear regression, we fit a line that minimizes error assuming the error variance 
              is constant (homoscedastic). But when the outcome is binary, the error variance 
              depends on the value of X — and here’s the catch: the outcome can only be 0 or 1. 
              There are no values in between, even though a regression line models values continuously 
              between 0 and 1. This mismatch causes problems.
              </Typography>
            <Typography paragraph>
              Next up, you’ll see how logistic and probit functions distribute probabilities differently. 
              Both the logistic and probit models are popular choices for binary outcomes in social sciences. 
              Instead of trying to fit a straight line, logistic regression uses a sigmoid (S-shaped) curve — 
              the logit function — to better capture the relationship between X and Y.
            </Typography>
            <Typography variant="caption" display="block" sx={{ mt: 1, color: "text.secondary" }}>
              Note: The scatter plot data is simulated, which is why it looks nice and smooth. 
              But I hope it gives you a clear first impression of the key differences between 
              linear and logistic regression.
              </Typography>
            {/* Placeholder image */}
          </MyCard>
        </Box>

        {/* Right Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard>
            <LogitVsLinear />
          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
