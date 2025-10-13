// src/Navbar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/Outbox';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Reapp
        </Typography>

        {/* Nav Links */}
        <Stack direction="row" spacing={1}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/Titanic"
            startIcon={<PieChartIcon />}
          >
            Titanic
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/inputs"
            startIcon={<InputIcon />}
          >
            Inputs
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/outputs"
            startIcon={<OutputIcon />}
          >
            Outputs
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
