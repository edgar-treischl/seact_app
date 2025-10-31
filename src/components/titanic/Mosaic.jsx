import React from "react";
import Plot from "react-plotly.js";

export default function Mosaic({ data }) {
  // Add a root node
  const rootLabel = "All passengers";

  const labels = [rootLabel, ...data.map(d => d.True + " / " + d.Predicted)];
  const parents = ["", ...data.map(d => rootLabel)]; // all tiles have root as parent
  const values = [0, ...data.map(d => d.num)]; // root value is 0, ignored
  const colors = ["#fff", ...data.map(d => (d.Predicted === "Survived" ? "#009E73" : "#E69F00"))];

  return (
    <Plot
      data={[
        {
          type: "treemap",
          labels,
          parents,
          values,
          textinfo: "label+value",
          texttemplate: "%{label}<br>%{value}",
          marker: { colors, line: { width: 2, color: "#fff" } },
          tiling: { pad: 15 },
          hoverinfo: "label+value+percent parent",
        },
      ]}
      layout={{
        margin: { t: 0, l: 0, r: 0, b: 0 },
        height: 400,
        uniformtext: { minsize: 14, mode: "hide" },
      }}
      config={{ responsive: true }}
      style={{ width: "100%" }}
    />
  );
}
