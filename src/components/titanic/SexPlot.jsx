// src/components/titanic/SexPlot.jsx
import React from 'react';
import Plot from 'react-plotly.js';
import titanicData from '../../data/titanic.json';

export default function SexPlot() {
  // compute grouped counts by Sex and Survived
  const groups = {};
  titanicData.forEach(row => {
    const sex = row.Sex;
    const survived = row.Survived === 1 ? 'Survived' : 'Not survived';
    if (!groups[sex]) groups[sex] = { Survived: 0, 'Not survived': 0 };
    groups[sex][survived] += 1;
  });

  const sexes = Object.keys(groups);
  const survivedValues = sexes.map(s => (groups[s]['Survived'] / (groups[s]['Survived'] + groups[s]['Not survived'])) * 100);
  const notSurvivedValues = sexes.map(s => (groups[s]['Not survived'] / (groups[s]['Survived'] + groups[s]['Not survived'])) * 100);

  return (
    <Plot
      data={[
        {
          x: sexes,
          y: notSurvivedValues,
          name: 'Not survived',
          type: 'bar',
          marker: { color: '#009E73' },
        },
        {
          x: sexes,
          y: survivedValues,
          name: 'Survived',
          type: 'bar',
          marker: { color: '#E69F00' },
        },
      ]}
      layout={{
        barmode: 'stack',
        title: 'Survival by Sex',
        yaxis: { title: 'Percent', range: [0, 100] },
        xaxis: { title: 'Sex' },
        legend: { orientation: 'h', y: -0.2 },
        margin: { t: 50, l: 60, r: 40, b: 60 },
      }}
      config={{ responsive: true }}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
