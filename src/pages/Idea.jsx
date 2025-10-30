import React from 'react';
import { Typography, Box } from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import CardPanel from '../components/CardPanel';
import LogitVsLinear from '../components/titanic/LogitVsLinear';

export default function Idea() {
  return (
    <PageWrapper gap={3} paddingY={2}>
      {/* Left Panel */}
      <CardPanel flex={1}>
        <Typography variant="h5" gutterBottom>
          Logistic Regression — But Why?
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          There are several reasons why logistic regression was invented to model binary outcomes. 
          The most obvious one is right there in the figure below. Imagine trying to fit a simple regression line to predict a binary outcome. Now, picture how a scatter plot would look in that situation.
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          In linear regression, we fit a line that minimizes error assuming the error variance is constant (homoscedastic). But when the outcome is binary, the error variance depends on the value of X — and here’s the catch: the outcome can only be 0 or 1. There are no values in between, even though a regression line models values continuously between 0 and 1. This mismatch causes problems.
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          Next up, you’ll see how logistic and probit functions distribute probabilities differently. Both the logistic and probit models are popular choices for binary outcomes in social sciences. Instead of trying to fit a straight line, logistic regression uses a sigmoid (S-shaped) curve — the logit function — to better capture the relationship between X and Y.
        </Typography>

        <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
          Note: The scatter plot data is simulated, which is why it looks nice and smooth. But I hope it gives you a clear first impression of the key differences between linear and logistic regression.
        </Typography>
      </CardPanel>

      {/* Right Panel */}
      <CardPanel flex={1}>
        <Typography variant="h5" gutterBottom>
          Visual Example
        </Typography>

        <Box sx={{ mt: 1 }}>
          <LogitVsLinear />
        </Box>
      </CardPanel>
    </PageWrapper>
  );
}
