// src/components/titanic/AgePlot.jsx
import React from 'react';
import Plot from 'react-plotly.js';
import titanicData from '../../data/titanic.json';

export default function AgePlot() {
  // Filter out missing or invalid ages
  const survivedAges = titanicData.filter(d => d.Age !== null && d.Survived === 1).map(d => d.Age);
  const notSurvivedAges = titanicData.filter(d => d.Age !== null && d.Survived === 0).map(d => d.Age);

  return (
    <Plot
      data={[
        {
          x: notSurvivedAges,
          type: 'histogram',
          name: 'Not survived',
          marker: { color: '#009E73' },
          opacity: 0.6,
        },
        {
          x: survivedAges,
          type: 'histogram',
          name: 'Survived',
          marker: { color: '#E69F00' },
          opacity: 0.6,
        },
      ]}
      layout={{
        barmode: 'group', // overlay histograms to compare
        title: 'Survival by Age',
        xaxis: { title: 'Age' },
        yaxis: { title: 'Count' },
        legend: { orientation: 'h', y: -0.2 },
        margin: { t: 50, l: 60, r: 40, b: 60 },
      }}
      config={{ responsive: true }}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
