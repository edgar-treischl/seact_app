// src/components/TableComponent.jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const rows = [
  { id: 1, name: 'Alice', age: 30, country: 'USA' },
  { id: 2, name: 'Bob', age: 25, country: 'Canada' },
  { id: 3, name: 'Charlie', age: 35, country: 'UK' },
  { id: 4, name: 'Diana', age: 28, country: 'Germany' },
  { id: 5, name: 'Eva', age: 32, country: 'France' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 120,
    type: 'number',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 180,
    headerClassName: 'super-app-theme--header',
  },
];

export default function TableComponent() {
  return (
    <Box sx={{ height: 420, width: '100%', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        User Overview
      </Typography>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableColumnMenu
        disableSelectionOnClick
        density="comfortable"
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 2,
          fontSize: 14,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#fafafa',
          },
          '& .MuiDataGrid-cell': {
            padding: '8px',
          },
        }}
      />
    </Box>
  );
}
