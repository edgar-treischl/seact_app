import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/TableChart';

const navItems = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'Titanic', to: '/Titanic', icon: <PieChartIcon /> },
  { label: 'Inputs', to: '/inputs', icon: <InputIcon /> },
  { label: 'Table', to: '/outputs', icon: <OutputIcon /> },
];

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>

        <Stack direction="row" spacing={1}>
          {navItems.map(({ label, to, icon }) => (
            <Button
              key={to}
              color="inherit"
              component={RouterLink}
              to={to}
              startIcon={icon}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
