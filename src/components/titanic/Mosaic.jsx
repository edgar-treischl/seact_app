import React from "react";
import Plot from "react-plotly.js";

export default function Mosaic({ data }) {
  // Extract unique x and y categories
  const xCategories = [...new Set(data.map(d => d.x))];
  const yCategories = [...new Set(data.map(d => d.y))];

  // Create z matrix
  const z = yCategories.map(y =>
    xCategories.map(x => {
      const item = data.find(d => d.x === x && d.y === y);
      return item ? item.value : 0;
    })
  );

  // Create text labels for hover + annotations
  const text = yCategories.map(y =>
    xCategories.map(x => {
      const item = data.find(d => d.x === x && d.y === y);
      return item ? `${item.value}` : "";
    })
  );

  return (
    <Plot
      data={[
        {
          x: xCategories,
          y: yCategories,
          z,
          type: "heatmap",
          colorscale: [["0", "#FFFFFF"], ["1", "#E69F00"]],
          showscale: false,
          text,
          hoverinfo: "x+y+text",
        },
      ]}
      layout={{
        margin: { t: 20, b: 50, l: 80, r: 20 },
        xaxis: { title: "Observed" },
        yaxis: { title: "Predicted" },
        annotations: data.map(d => ({
          x: d.x,
          y: d.y,
          text: d.value,
          showarrow: false,
          font: { color: "#2C3E50", size: 16, family: "Arial" }
        })),
        height: 400,
      }}
      config={{ displayModeBar: false }}
    />
  );
}
