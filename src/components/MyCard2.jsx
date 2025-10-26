// src/components/MyCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function MyCard({ title, children }) {
  return (
    <Card
      elevation={3}
      sx={{
        minWidth: 280,
        height: '100%',     // fill parent height to align cards evenly
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {title && (
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
