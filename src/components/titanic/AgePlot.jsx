import React from "react";
import Plot from "react-plotly.js";
import titanicData from "../../data/titanic.json";

export default function AgePlot() {
  // Filter out missing ages and separate by Survived / Not survived
  const survivedAges = titanicData
    .filter((d) => d.Age != null && d.Survived === "Survived")
    .map((d) => d.Age);

  const notSurvivedAges = titanicData
    .filter((d) => d.Age != null && d.Survived === "Not survived")
    .map((d) => d.Age);

  // Define colors (consistent palette)
  const colors = {
    Survived: "#E69F00",       // gold/orange
    "Not survived": "#009E73", // teal/green
  };

  return (
    <Plot
      data={[
        {
          x: notSurvivedAges,
          type: "histogram",
          name: "Not survived",
          marker: { color: colors["Not survived"] },
          opacity: 0.5,
          autobinx: false,
          xbins: {
            start: 0,
            end: 80,
            size: 5,
          },
          histnorm: "percent",
        },
        {
          x: survivedAges,
          type: "histogram",
          name: "Survived",
          marker: { color: colors.Survived },
          opacity: 0.5,
          autobinx: false,
          xbins: {
            start: 0,
            end: 80,
            size: 5,
          },
          histnorm: "percent",
        },
      ]}
      layout={{
        barmode: "overlay",
        title: {
          text: "Survival by Age",
          font: { size: 18 },
        },
        xaxis: {
          title: "Age",
          range: [0, 80],
          gridcolor: "#e0e0e0",
        },
        yaxis: {
          title: "Percent (%)",
          gridcolor: "#e0e0e0",
        },
        legend: {
          orientation: "h",
          y: -0.25,
          xanchor: "center",
          x: 0.5,
        },
        margin: { t: 40, l: 60, r: 40, b: 60 },
        plot_bgcolor: "white",
        paper_bgcolor: "white",
      }}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
      style={{ width: "100%", height: "500px" }}
    />
  );
}
