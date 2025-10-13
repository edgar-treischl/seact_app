// src/pages/Inputs.jsx
import React from 'react';
import { Container, Grid, TextField, MenuItem } from '@mui/material';
import MyCard from '../components/MyCard';

export default function Inputs() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MyCard title="Text Input">
            <TextField
              fullWidth
              label="Enter some text"
              variant="outlined"
              size="small"
              placeholder="Enter some text"
            />
          </MyCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <MyCard title="Select Option">
            <TextField
              select
              fullWidth
              label="Choose one"
              variant="outlined"
              size="small"
              defaultValue=""
            >
              <MenuItem value="">Choose one</MenuItem>
              <MenuItem value="one">One</MenuItem>
              <MenuItem value="two">Two</MenuItem>
            </TextField>
          </MyCard>
        </Grid>
      </Grid>
    </Container>
  );
}
