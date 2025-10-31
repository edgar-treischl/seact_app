import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PieChartIcon from '@mui/icons-material/PieChart';
// import InputIcon from '@mui/icons-material/Input';
// import OutputIcon from '@mui/icons-material/TableChart';
import IdeaIcon from '@mui/icons-material/Lightbulb';
import FunctionIcon from '@mui/icons-material/Functions';
import OrIcon from '@mui/icons-material/Scale';
import RocIcon from '@mui/icons-material/PrecisionManufacturing';
import PredictionIcon from '@mui/icons-material/RocketLaunch';



const navItems = [
  { label: 'Idea', to: '/idea', icon: <IdeaIcon fontSize="small" /> },
  { label: 'Variables', to: '/Variables', icon: <PieChartIcon fontSize="small" /> },
  { label: 'Models', to: '/models', icon: <FunctionIcon fontSize="small" /> },
  { label: 'Odds Ratio', to: '/OddsRatios', icon: <OrIcon fontSize="small" /> },
  { label: 'Prediction', to: '/prediction', icon: <PredictionIcon fontSize="small" /> },
  { label: 'Performance', to: '/Roc', icon: <RocIcon fontSize="small" /> },

];

export default function Navbar() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: '#fff', borderBottom: '1px solid #000' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, md: 3 } }}>
        {/* Clickable App Title with Home Icon */}
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            textDecoration: 'none',
            color: '#000',
            '&:hover': { color: '#1976d2' },
          }}
        >
          <HomeIcon fontSize="medium" />
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Titanic App
          </Typography>
        </Box>

        {/* Navigation Items */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {navItems.map(({ label, to, icon }) => {
            const isActive = location.pathname === to;

            return (
              <Box
                key={to}
                component={RouterLink}
                to={to}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: isActive ? '#1976d2' : '#000',
                  fontWeight: isActive ? 'bold' : 'normal',
                  textDecoration: 'none',
                  borderBottom: isActive ? '2px solid #1976d2' : '2px solid transparent',
                  '&:hover': {
                    color: '#1976d2',
                    borderBottom: '2px solid #1976d2',
                  },
                  transition: 'all 0.2s',
                }}
              >
                {icon}
                {label}
              </Box>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
