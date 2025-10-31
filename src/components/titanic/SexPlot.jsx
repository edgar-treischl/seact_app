// src/components/titanic/SexPlot.jsx

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

export default function SexPlot() {
  // Count survivors by sex
  const maleSurvived = titanicData.filter(
    (d) => d.Sex === "male" && d.Survived === "Survived"
  ).length;
  const maleNotSurvived = titanicData.filter(
    (d) => d.Sex === "male" && d.Survived === "Not survived"
  ).length;
  const femaleSurvived = titanicData.filter(
    (d) => d.Sex === "female" && d.Survived === "Survived"
  ).length;
  const femaleNotSurvived = titanicData.filter(
    (d) => d.Sex === "female" && d.Survived === "Not survived"
  ).length;

  // Prepare data in stacked bar format
  const data = [
    {
      sex: "male",
      Survived:
        (maleSurvived / (maleSurvived + maleNotSurvived)) * 100,
      "Not survived":
        (maleNotSurvived / (maleSurvived + maleNotSurvived)) * 100,
    },
    {
      sex: "female",
      Survived:
        (femaleSurvived / (femaleSurvived + femaleNotSurvived)) * 100,
      "Not survived":
        (femaleNotSurvived / (femaleSurvived + femaleNotSurvived)) * 100,
    },
  ];
  
  const colors = {
    Survived: "#E69F00",       // green
    "Not survived": "#009E73", // red
  };

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sex" />
          <YAxis
            label={{
              value: "Percent (%)",
              angle: -90,
              position: "insideLeft",
            }}
            domain={[0, 100]}
          />
          <Tooltip formatter={(value) => value.toFixed(1) + "%"} />
          <Bar dataKey="Not survived" stackId="a" fill={colors["Not survived"]}>
            <LabelList
              dataKey="Not survived"
              position="center"
              formatter={(value) => value.toFixed(1) + "%"}
              fill="#fff"
            />
          </Bar>
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
