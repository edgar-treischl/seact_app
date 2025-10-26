// src/components/titanic/ClassPlot.jsx
import React from 'react';
import Plot from 'react-plotly.js';
import titanicData from '../../data/titanic.json';

export default function ClassPlot() {
  // Passenger classes as strings
  const classes = ['1', '2', '3'];

  // Count survived / not survived per class
  const survivedCounts = classes.map(cls =>
    titanicData.filter(d => d.Pclass === cls && d.Survived === 'Survived').length
  );

  const notSurvivedCounts = classes.map(cls =>
    titanicData.filter(d => d.Pclass === cls && d.Survived === 'Not survived').length
  );

  // Convert counts to percentages
  const total = survivedCounts.map((_, i) => survivedCounts[i] + notSurvivedCounts[i]);
  const survivedPercent = survivedCounts.map((c, i) => (c / total[i]) * 100);
  const notSurvivedPercent = notSurvivedCounts.map((c, i) => (c / total[i]) * 100);

  return (
    <Plot
      data={[
        {
          x: classes,
          y: notSurvivedPercent,
          name: 'Not survived',
          type: 'bar',
          marker: { color: '#009E73' },
        },
        {
          x: classes,
          y: survivedPercent,
          name: 'Survived',
          type: 'bar',
          marker: { color: '#E69F00' },
        },
      ]}
      layout={{
        barmode: 'stack', // 100% stacked bars
        title: 'Survival by Class',
        xaxis: { title: 'Passenger Class' },
        yaxis: { title: 'Percent', range: [0, 100] },
        legend: { orientation: 'h', y: -0.2 },
        margin: { t: 50, l: 60, r: 40, b: 60 },
      }}
      config={{ responsive: true }}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
