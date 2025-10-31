// src/components/titanic/ClassPlot.jsx
import React from "react";
import { Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import titanicData from "../../data/titanic.json";

export default function ClassPlot() {
  // Passenger classes as strings
  const classes = ["1", "2", "3"];

  // Count survived / not survived per class
  const survivedCounts = classes.map(
    (cls) =>
      titanicData.filter(
        (d) => d.Pclass === cls && d.Survived === "Survived"
      ).length
  );

  const notSurvivedCounts = classes.map(
    (cls) =>
      titanicData.filter(
        (d) => d.Pclass === cls && d.Survived === "Not survived"
      ).length
  );

  // Convert counts to percentages
  const totals = survivedCounts.map(
    (_, i) => survivedCounts[i] + notSurvivedCounts[i]
  );
  const survivedPercent = survivedCounts.map(
    (c, i) => (c / totals[i]) * 100
  );
  const notSurvivedPercent = notSurvivedCounts.map(
    (c, i) => (c / totals[i]) * 100
  );

  // Build chart data
  const data = classes.map((cls, i) => ({
    class: cls,
    Survived: survivedPercent[i],
    "Not survived": notSurvivedPercent[i],
  }));

  // Define colors
  const colors = {
    Survived: "#E69F00",       // gold/orange
    "Not survived": "#009E73", // teal/green
  };

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="class" label={{ value: "Passenger Class", position: "bottom", dy: 20 }} />
          <YAxis
            label={{ value: "Percent (%)", angle: -90, position: "insideLeft" }}
            domain={[0, 100]}
          />
          <Tooltip formatter={(value) => value.toFixed(1) + "%"} />

          {/* Not survived (bottom of stack) */}
          <Bar dataKey="Not survived" stackId="a" fill={colors["Not survived"]}>
            <LabelList
              dataKey="Not survived"
              position="center"
              formatter={(value) => value.toFixed(1) + "%"}
              fill="#fff"
            />
          </Bar>

          {/* Survived (top of stack) */}
          <Bar dataKey="Survived" stackId="a" fill={colors.Survived}>
            <LabelList
              dataKey="Survived"
              position="center"
              formatter={(value) => value.toFixed(1) + "%"}
              fill="#fff"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
