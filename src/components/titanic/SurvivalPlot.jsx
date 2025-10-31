// src/components/titanic/SurvivalPlot.jsx
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
  Cell,
} from "recharts";
import titanicData from "../../data/titanic.json";

export default function SurvivalPlot() {
  // Count survived vs not survived
  const counts = titanicData.reduce(
    (acc, row) => {
      const key = row.Survived; // "Survived" or "Not survived"
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    },
    { Survived: 0, "Not survived": 0 } // ensure both keys exist
  );

  // Convert counts to percentage
  const total = titanicData.length;
  const data = Object.keys(counts).map((key) => ({
    status: key,
    percent: (counts[key] / total) * 100,
  }));

  // Define colors for each category
  const colors = {
    Survived: "#E69F00",       // green
    "Not survived": "#009E73", // red
  };

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis label={{ value: "Percent (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => value.toFixed(1) + "%"} />
          <Bar dataKey="percent">
            {data.map((entry) => (
              <Cell key={entry.status} fill={colors[entry.status]} />
            ))}
            <LabelList
              dataKey="percent"
              position="top"
              formatter={(value) => value.toFixed(1) + "%"}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

