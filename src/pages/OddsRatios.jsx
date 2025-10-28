// src/pages/OddsRatios.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import MyCard from "../components/MyCard";
import orM1 from "../assets/or_m1.png";
import orM2 from "../assets/or_m2.png";
import orM3 from "../assets/or_m3.png";

export default function OddsRatios() {
  const [model, setModel] = useState("m1");
  const [imageSrc, setImageSrc] = useState(orM1);

  useEffect(() => {
    switch (model) {
      case "m1":
        setImageSrc(orM1);
        break;
      case "m2":
        setImageSrc(orM2);
        break;
      case "m3":
        setImageSrc(orM3);
        break;
      default:
        setImageSrc(orM1);
    }
  }, [model]);

  const modelTitles = {
    m1: "Model 1: Sex",
    m2: "Model 2: Sex + Passenger Class",
    m3: "Model 3: Sex + Passenger Class + Age",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {/* --- LEFT CARD: Explanation --- */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="Understanding Odds Ratios">
            <Typography variant="h6" paragraph>
              Odds Ratio?
            </Typography>

            <Typography paragraph>
              The odds ratio (OR) compares the odds of an event between groups. For example, if men had the same odds of survival as women, the OR would be 1.
            </Typography>

            <Typography paragraph>
              Men’s odds = survived / not survived (109 / 468), Women’s odds = 233 / 81. Divide men’s odds by women’s odds to get the OR. Software handles this automatically.
            </Typography>

            <Typography variant="h6" paragraph>
              Interpretation:
            </Typography>

            <ul style={{ paddingLeft: "1.2em", marginTop: 0 }}>
              <li><b>OR &gt; 1</b>: Predictor increases survival odds</li>
              <li><b>OR = 1</b>: No effect</li>
              <li><b>0 &lt; OR &lt; 1</b>: Predictor decreases survival odds</li>
            </ul>

            <Typography paragraph>
              Men’s OR = 0.08, indicating much lower survival odds compared to women. For continuous variables like age, predicted probabilities are often easier to interpret.
            </Typography>

            <Typography paragraph>
              Try different models to see how each variable affects survival probabilities in a more intuitive way.
            </Typography>
          </MyCard>
        </Box>

        {/* --- RIGHT CARD: OR Image --- */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="Odds Ratio Plot">
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={model}
              onChange={(e, newModel) => newModel && setModel(newModel)}
              sx={{ mb: 2 }}
            >
              <ToggleButton value="m1">Model 1</ToggleButton>
              <ToggleButton value="m2">Model 2</ToggleButton>
              <ToggleButton value="m3">Model 3</ToggleButton>
            </ToggleButtonGroup>

            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
              {modelTitles[model]}
            </Typography>

            <Paper
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt={`Odds Ratio Plot ${model}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: 350,
                  borderRadius: 1,
                  objectFit: "contain",
                }}
              />
            </Paper>
          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
