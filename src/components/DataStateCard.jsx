// src/components/DataStateCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Alert,
  Button,
  Skeleton,
} from "@mui/material";

export default function DataStateCard({
  title,
  loading = false,
  error = null,
  empty = false,
  onRetry,
  children,
  skeleton = true,
}) {
  return (
    <Card
      elevation={3}
      sx={{
        minWidth: 280,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {title && (
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        )}

        {/* LOADING STATE */}
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 120,
            }}
          >
            {skeleton ? (
              <Box sx={{ width: "100%" }}>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="rectangular" height={40} sx={{ mt: 1 }} />
              </Box>
            ) : (
              <CircularProgress />
            )}
          </Box>
        )}

        {/* ERROR STATE */}
        {error && !loading && (
          <Alert
            severity="error"
            action={
              onRetry && (
                <Button color="inherit" size="small" onClick={onRetry}>
                  Retry
                </Button>
              )
            }
          >
            {typeof error === "string" ? error : "Something went wrong."}
          </Alert>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && empty && (
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            No data available.
          </Typography>
        )}

        {/* SUCCESS STATE */}
        {!loading && !error && !empty && children}
      </CardContent>
    </Card>
  );
}