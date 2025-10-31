import React from "react";
import PageWrapper from "../components/PageWrapper";
import Mosaic from "../components/titanic/Mosaic";
import { Box, Typography } from "@mui/material";

export default function TestVis() {
  const mosaicData = [
    { x: "Not survived", y: "Not survived", value: 424 },
    { x: "Survived", y: "Survived", value: 290 },
    { x: "Not survived", y: "Survived", value: 424 },
    { x: "Survived", y: "Not survived", value: 290 }
  ];

  return (
    <PageWrapper>
      <Typography variant="h4" gutterBottom>
        Test Visualization Sandbox
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Mosaic Plot
        </Typography>
        <Mosaic data={mosaicData} />
      </Box>
    </PageWrapper>
  );
}
