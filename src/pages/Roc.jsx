// src/pages/Roc.jsx
import React, { useState, useEffect } from "react";
import { Typography, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import CardPanel from "../components/CardPanel";
import rocPlot from "../assets/prediction.png";
import sensitivityPlot from "../assets/sensitivity.png";

export default function Roc() {
  const [view, setView] = useState("sensitivity");
  const [imageSrc, setImageSrc] = useState(sensitivityPlot);

  useEffect(() => {
    switch (view) {
      case "sensitivity":
        setImageSrc(sensitivityPlot);
        break;
      case "roc":
        setImageSrc(rocPlot);
        break;
      default:
        setImageSrc(sensitivityPlot);
    }
  }, [view]);

  const viewTitles = {
    sensitivity: "Sensitivity and Specificity",
    roc: "ROC Curve",
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
        <CardPanel sx={{ flex: 1 }} title="How well does the model perform?">
          <Typography paragraph>
            Unlike linear models, logistic regression doesn’t have a straightforward R². Instead, two key metrics are used: <b>sensitivity</b> and <b>specificity</b>.
          </Typography>

          <Typography paragraph>
            - <b>Sensitivity</b> measures how well the model identifies true positives — passengers who survived. Calculated as true positives divided by all survivors (207 / 290 ≈ 0.71).<br/>
            - <b>Specificity</b> measures how well the model identifies true negatives — passengers who did not survive. Calculated as true negatives divided by all non-survivors (356 / 424).
          </Typography>

          <Typography paragraph>
            These metrics can be combined in an <b>ROC curve</b>, which plots sensitivity (y-axis) against the false positive rate, 1 − specificity (x-axis).
          </Typography>

          <Typography paragraph>
            <b>Interpreting the ROC curve:</b><br/>
            1. Ideally, sensitivity = 1 and false positive rate = 0 (black point on the plot).<br/>
            2. A model with no predictive power produces a diagonal line, like flipping a fair coin.<br/>
            3. The further the ROC curve is from the diagonal and closer to the ideal point, the stronger the model’s predictive power.
          </Typography>
        </CardPanel>

        {/* Right Panel: Plots */}
        <CardPanel sx={{ flex: 1 }} title={viewTitles[view]}>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={view}
            onChange={(e, newView) => newView && setView(newView)}
            sx={{ mb: 2 }}
          >
            <ToggleButton value="sensitivity">Sensitivity / Specificity</ToggleButton>
            <ToggleButton value="roc">ROC Curve</ToggleButton>
          </ToggleButtonGroup>

          <Box
            component="img"
            src={imageSrc}
            alt={`${viewTitles[view]} Plot`}
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
