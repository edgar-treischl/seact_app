// src/components/RocCurve.jsx
import React from "react";
import Plot from "react-plotly.js";

/**
 * ROC Curve Component
 * @param {Array} fpr - False positive rate (x-axis)
 * @param {Array} tpr - True positive rate (y-axis)
 */
export default function RocCurve({ fpr, tpr }) {
  return (
    <Plot
      data={[
        {
          x: fpr,
          y: tpr,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#E69F00" },
          line: { shape: "linear" },
          name: "ROC Curve"
        },
        {
          x: [0, 1],
          y: [0, 1],
          type: "scatter",
          mode: "lines",
          line: { dash: "dash", color: "#999" },
          name: "Random Chance"
        }
      ]}
      layout={{
        xaxis: { title: "False Positive Rate" },
        yaxis: { title: "True Positive Rate" },
        title: "ROC Curve",
        margin: { t: 50, l: 50, r: 50, b: 50 },
        width: "100%",
        height: 400,
        legend: { orientation: "h" }
      }}
      style={{ width: "100%", height: "100%" }}
      config={{ responsive: true }}
    />
  );
}
