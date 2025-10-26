import React from 'react';
import Plot from 'react-plotly.js';
import titanicData from '../../data/titanic.json';

export default function SexPlot() {
  const maleSurvived = titanicData.filter(d => d.Sex === 'male' && d.Survived === 'Survived').length;
  const maleNotSurvived = titanicData.filter(d => d.Sex === 'male' && d.Survived === 'Not survived').length;
  const femaleSurvived = titanicData.filter(d => d.Sex === 'female' && d.Survived === 'Survived').length;
  const femaleNotSurvived = titanicData.filter(d => d.Sex === 'female' && d.Survived === 'Not survived').length;

  const sexes = ['male', 'female'];

  const survivedPercent = sexes.map((s, i) => {
    const total = (s === 'male' ? maleSurvived + maleNotSurvived : femaleSurvived + femaleNotSurvived);
    return s === 'male' ? (maleSurvived / total) * 100 : (femaleSurvived / total) * 100;
  });

  const notSurvivedPercent = sexes.map((s, i) => {
    const total = (s === 'male' ? maleSurvived + maleNotSurvived : femaleSurvived + femaleNotSurvived);
    return s === 'male' ? (maleNotSurvived / total) * 100 : (femaleNotSurvived / total) * 100;
  });

  return (
    <Plot
      data={[
        { x: sexes, y: notSurvivedPercent, type: 'bar', name: 'Not survived', marker: { color: '#009E73' } },
        { x: sexes, y: survivedPercent, type: 'bar', name: 'Survived', marker: { color: '#E69F00' } },
      ]}
      layout={{
        barmode: 'stack',
        title: 'Survival by Sex',
        yaxis: { title: 'Percent', range: [0, 100] },
        legend: { orientation: 'h', y: -0.2 },
      }}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
