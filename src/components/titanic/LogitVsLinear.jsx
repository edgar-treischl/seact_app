import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import linearImg from "../../assets/linear_regression.png";
import logitImg from "../../assets/logistic_regression.png";

export default function LogitVsLinear() {
  const [useLogit, setUseLogit] = useState(true);

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h6">
        {useLogit ? "Linear Regression": "Logistic Regression"}
      </Typography>

      <Box
        component="img"
        src={useLogit ? linearImg: logitImg}
        alt={useLogit ? "Linear regression" : "Logistic regression"}
        sx={{
          width: "100%",
          maxWidth: 500,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: "#fafafa",
        }}
      />

      <Button
        variant="outlined"
        size="small"
        onClick={() => setUseLogit(!useLogit)}
      >
        Switch to {useLogit ? "Logistic" : "Linear"}
      </Button>

      <Typography variant="body2" color="text.secondary">
        This illustration shows the difference between a linear and logistic fit.
      </Typography>
    </Box>
  );
}
