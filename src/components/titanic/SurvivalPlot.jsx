// src/components/titanic/SurvivalPlot.jsx
import React from 'react';
import Plot from 'react-plotly.js';
import titanicData from '../../data/titanic.json';

export default function SurvivalPlot() {
  // Count survived vs not survived
  const counts = titanicData.reduce(
    (acc, row) => {
      const key = row.Survived; // "Survived" or "Not survived"
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    },
    { Survived: 0, 'Not survived': 0 } // ensure both keys exist
  );

  const labels = Object.keys(counts);
  const values = Object.values(counts);

  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: labels,
          y: values.map(v => (v / titanicData.length) * 100),
          marker: { color: '#999999' },
        },
      ]}
      layout={{
        title: 'Survival of the Titanic',
        xaxis: { title: 'Survival' },
        yaxis: { title: 'Percent' },
        margin: { t: 40, l: 50, r: 30, b: 40 },
      }}
      config={{ responsive: true }}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
