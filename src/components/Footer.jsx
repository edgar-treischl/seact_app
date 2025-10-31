import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactIcon from '@mui/icons-material/AutoAwesome'; // Or your preferred React logo

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
        Built with <ReactIcon fontSize="small" /> by Edgar J. Treischl
        © {new Date().getFullYear()}
        <IconButton
          component={Link}
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener"
          size="small"
          sx={{ ml: 1 }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Typography>
    </Box>
  );
}
