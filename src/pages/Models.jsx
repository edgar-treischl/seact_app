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
import modelData from "../assets/model_summaries.json";

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
          <MyCard title="Understanding the Logistic Models">
            <Typography paragraph>
              To illustrate how logistic regression works, we’ve fitted three
              models predicting **Survival** on the Titanic dataset. Each model
              adds more predictors to explain survival odds.
            </Typography>

            <Typography paragraph>
              <b>Model overview:</b>
            </Typography>
            <ul>
              <li>
                <b>Model 1:</b> <code>Survived ~ Sex</code> — compares survival
                odds for males vs. females.
              </li>
              <li>
                <b>Model 2:</b>{" "}
                <code>Survived ~ Sex + Pclass</code> — adds passenger class.
              </li>
              <li>
                <b>Model 3:</b>{" "}
                <code>Survived ~ Sex + Pclass + Age</code> — adds age for the
                most complete model.
              </li>
            </ul>

            <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
              The <code>Intercept</code> term gives the log-odds for the
              reference group (e.g., females in 1st class). Other coefficients
              represent changes relative to that group.
            </Typography>
          </MyCard>
        </Box>

        {/* --- RIGHT CARD: Selector + Output --- */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="Model Summary">
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
                fontFamily: "monospace",
                backgroundColor: "#f8f9fa",
                overflowX: "auto",
                whiteSpace: "pre",
              }}
            >
              {summary.length > 0 ? (
                <>
                  <Typography sx={{ fontFamily: "monospace", mb: 1 }}>
                    <b>Coefficients:</b>
                  </Typography>
                  <pre style={{ margin: 0 }}>
{`${"term".padEnd(22)} ${"estimate".padStart(9)} ${"std.error".padStart(11)} ${"statistic".padStart(11)} ${"p.value".padStart(12)}\n${"-".repeat(70)}\n${summary
  .map(
    (row) =>
      `${row.term.padEnd(22)} ${row.estimate.toFixed(3).padStart(9)} ${row["std.error"]
        .toFixed(3)
        .padStart(11)} ${row.statistic.toFixed(3).padStart(11)} ${row["p.value"]
        .toExponential(2)
        .padStart(12)}`
  )
  .join("\n")}`}
                  </pre>
                </>
              ) : (
                <Typography>No summary available.</Typography>
              )}
            </Paper>
          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
