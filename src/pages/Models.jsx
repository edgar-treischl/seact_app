// src/pages/Models.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import modelData from "../assets/model_summaries.json";
import PageWrapper from "../components/PageWrapper";
import CardPanel from "../components/CardPanel";

export default function Models() {
  const [model, setModel] = useState("m1");
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    setSummary(modelData[model] || []);
  }, [model]);

  const modelTitles = {
    m1: "Model 1: Sex",
    m2: "Model 2: Sex + Passenger Class",
    m3: "Model 3: Sex + Passenger Class + Age",
  };

  return (
    <PageWrapper>
      {/* Left Panel: Explanation */}
      <CardPanel flex={2} title="Understanding the Logistic Models">
        <Typography paragraph>
          Let’s run a logistic regression. Choose which variables to include
          to estimate their effect on survival.
        </Typography>

        <Typography paragraph>
          For example, starting with <b>Sex</b> as a predictor gives an
          estimate of about <code>-2.51</code> for males. Logistic regression
          models the <i>logarithm of the odds</i> of survival. Positive
          coefficients increase the odds; negative ones decrease them.
        </Typography>

        <Typography paragraph>
          Odds ratios (<code>exp(estimate)</code>) make interpretation easier
          and predicted probabilities provide an intuitive understanding of survival
          chances.
        </Typography>

        <Typography paragraph>Three models are available:</Typography>

        <ul>
          <li><b>Model 1:</b> <code>Survived ~ Sex</code></li>
          <li><b>Model 2:</b> <code>Survived ~ Sex + Pclass</code></li>
          <li><b>Model 3:</b> <code>Survived ~ Sex + Pclass + Age</code></li>
        </ul>

        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
          <code>Intercept</code> gives log-odds for the reference group; other coefficients
          show relative changes.
        </Typography>
      </CardPanel>

      {/* Right Panel: Model Selector + Output */}
      <CardPanel flex={1} title="Model Summary">
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
            p: 1.5,
            fontFamily: "monospace",
            fontSize: "0.75rem",
            backgroundColor: "#f8f9fa",
            overflowX: "auto",
            whiteSpace: "pre",
          }}
        >
          {summary.length > 0 ? (
            <>
              <Typography
                sx={{ fontFamily: "monospace", fontSize: "0.75rem", mb: 1 }}
              >
                <b>Coefficients:</b>
              </Typography>
              <pre style={{ margin: 0 }}>
                {`${"term".padEnd(22)} ${"estimate".padStart(9)} ${"std.error".padStart(
                  11
                )} ${"statistic".padStart(11)} ${"p.value".padStart(12)}\n${"-".repeat(
                  70
                )}\n${summary
                  .map(
                    (row) =>
                      `${row.term.padEnd(22)} ${row.estimate
                        .toFixed(3)
                        .padStart(9)} ${row["std.error"]
                        .toFixed(3)
                        .padStart(11)} ${row.statistic
                        .toFixed(3)
                        .padStart(11)} ${row["p.value"]
                        .toExponential(2)
                        .padStart(12)}`
                  )
                  .join("\n")}`}
              </pre>
            </>
          ) : (
            <Typography sx={{ fontSize: "0.75rem" }}>No summary available.</Typography>
          )}
        </Paper>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mt: 2,
            p: 2,
            backgroundColor: "#fffbe6",
            borderRadius: 1,
          }}
        >
          <LightbulbOutlinedIcon color="warning" sx={{ mr: 1, mt: 0.3 }} />
          <Typography variant="body2">
            Tip: Convert estimates to <b>odds ratios</b> with <code>exp(estimate)</code> with R for easier interpretation.
          </Typography>
        </Box>
      </CardPanel>
    </PageWrapper>
  );
}
