// src/pages/OddsRatios.jsx
import React, { useState, useEffect } from "react";
import { Typography, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import CardPanel from "../components/CardPanel";
import orCount from "../assets/or_count.png";
import orM1 from "../assets/or_m1.png";
import orM2 from "../assets/or_m2.png";
import orM3 from "../assets/or_m3.png";

export default function OddsRatios() {
  const [model, setModel] = useState("m0");
  const [imageSrc, setImageSrc] = useState(orCount);

  useEffect(() => {
    switch (model) {
      case "m0":
        setImageSrc(orCount);
        break;
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
        setImageSrc(orCount);
    }
  }, [model]);

  const modelTitles = {
    m1: "Model 1: Sex",
    m2: "Model 2: Sex + Passenger Class",
    m3: "Model 3: Sex + Passenger Class + Age",
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {/* Left Panel: Explanation */}
        <CardPanel sx={{ flex: 1 }} title="Understanding Odds Ratios">
          <Typography paragraph>
            The odds ratio (OR) compares the odds of an event between groups. For example, if men had the same odds of survival as women, the OR would be 1.
          </Typography>
          <Typography paragraph>
            The odds for men are calculated as survived / not survived = 109 / 468. 
            For women, the odds are 233 / 81. Dividing the men’s odds by the women’s odds gives the Odds Ratio (OR). 
            Therefore, the OR for men is 0.081, indicating that men were less likely to survive compared to women.
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
        </CardPanel>

        {/* Right Panel: OR Images */}
        <CardPanel sx={{ flex: 1 }} title="Odds Ratio">
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={model}
            onChange={(e, newModel) => newModel && setModel(newModel)}
            sx={{ mb: 2 }}
          >
            <ToggleButton value="m0">By Hand</ToggleButton>
            <ToggleButton value="m1">Model 1</ToggleButton>
            <ToggleButton value="m2">Model 2</ToggleButton>
            <ToggleButton value="m3">Model 3</ToggleButton>
          </ToggleButtonGroup>

          {model !== "m0" && (
            <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
              {modelTitles[model]}
            </Typography>
          )}

          <Box
            component="img"
            src={imageSrc}
            alt={`Odds Ratio Plot ${model}`}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: 400,
              borderRadius: 1,
              objectFit: "contain",
              backgroundColor: "#fafafa",
            }}
          />
        </CardPanel>
      </Box>
    </PageWrapper>
  );
}
