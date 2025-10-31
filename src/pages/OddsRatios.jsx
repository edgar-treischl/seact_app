// src/pages/OddsRatios.jsx

import React, { useState, useEffect } from "react";
import {
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Box
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import PageWrapper from "../components/PageWrapper";
import CardPanel from "../components/CardPanel";

// Import local JSON data
import or_m1 from "../data/or_m1.json";
import or_m2 from "../data/or_m2.json";
import or_m3 from "../data/or_m3.json";

export default function OddsRatios() {
  const [model, setModel] = useState("m1");
  const [data, setData] = useState([]);

  // ✅ Label mapping — matches R output exactly
  const labelMap = {
    "Sexmale": "Male",
    "PclassSecond class": "2nd Class",
    "PclassThird class": "3rd Class",
    "Age": "Age",
  };

  // ✅ Load model data and attach display labels
  useEffect(() => {
    const datasets = { m1: or_m1, m2: or_m2, m3: or_m3 };

    const withLabels = (datasets[model] || []).map((d) => ({
      ...d,
      displayLabel: labelMap[d.term] || d.term,
    }));

    setData(withLabels);
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
            The odds ratio (OR) compares the odds of an event between groups. 
            For example, if men had the same odds of survival as women, the OR would be 1.
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
            Men’s OR = 0.08, indicating much lower survival odds compared to women. 
            For continuous variables like age, predicted probabilities are often easier to interpret.
          </Typography>
          <Typography paragraph>
            Try different models to see how each variable affects survival probabilities in a more intuitive way.
          </Typography>
        </CardPanel>

        {/* Right Panel: OR Plot */}
        <CardPanel sx={{ flex: 1 }} title="Odds Ratio">
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

          {model !== "m0" && (
            <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
              {modelTitles[model]}
            </Typography>
          )}

          <Box sx={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 10, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="displayLabel" angle={-30} textAnchor="end" />
                <YAxis
                  domain={[0, 1]}
                  label={{
                    value: "Odds Ratio",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip
                  formatter={(value) => value.toFixed(3)}
                  labelFormatter={(label) => `Term: ${label}`}
                />
                {/* Add a reference line for OR = 1 */}
                <ReferenceLine y={1} stroke="#E74C3C" strokeDasharray="4 4" />
                <Bar dataKey="oddsRatio" fill="#2C3E50">
                  <LabelList
                    dataKey="oddsRatio"
                    position="top"
                    formatter={(v) => v.toFixed(3)}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </CardPanel>
      </Box>
    </PageWrapper>
  );
}
