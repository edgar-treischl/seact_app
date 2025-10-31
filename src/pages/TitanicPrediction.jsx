// src/pages/TitanicPrediction.jsx
import React, { useState } from "react";
import { Typography, TextField, MenuItem, Box } from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import CardPanel from "../components/CardPanel";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

export default function TitanicPrediction() {
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState(30);
  const [pclass, setPclass] = useState(1);

  const prediction = predictSurvival(sex, age, pclass);

  const data = {
    labels: ["Predicted Probability"],
    datasets: [
      {
        label: "Prediction",
        data: [prediction],
        backgroundColor: "#E69F00",
        borderRadius: 8,
      }
    ],
  };

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      datalabels: {
        color: '#2C3E50',
        anchor: 'end',
        align: 'end',
        font: { size: 18, weight: 'bold' },
        formatter: (value) => `${value}%`
      },
      tooltip: {
        callbacks: {
          label: (context) => `Survival: ${context.raw}%`
        }
      }
    },
    scales: {
      x: { max: 100, title: { display: true, text: "Survival Probability (%)" } },
      y: { display: false }
    }
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {/* Left Panel: Explanation */}
        <CardPanel sx={{ flex: 1 }} title="Titanic Survival Prediction">
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Make a Prediction
            </Typography>
            <Typography paragraph>
              This is probably the most intuitive way to understand logistic regression — because what we really care about is the <strong>probability of survival</strong>, not log-odds or odds ratios.
            </Typography>
            <Typography paragraph>
              Using the model, we can predict survival probabilities! Try switching from female to male and watch how the predicted chance of survival changes.
            </Typography>
            <Typography paragraph>
              You can also adjust the passenger's age and class to see how these factors influence the probability of survival.
            </Typography>
          </Box>
        </CardPanel>

        {/* Right Panel: Inputs + Prediction */}
        <CardPanel sx={{ flex: 1 }} title="Set Passenger Details">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
            <TextField
              select
              label="Sex"
              value={sex}
              onChange={e => setSex(e.target.value)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>

            <TextField
              type="number"
              label="Age"
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              onBlur={() => {
                if (age < 1) setAge(1);
                if (age > 99) setAge(99);
              }}
              inputProps={{ min: 1, max: 99 }}
            />

            <TextField
              select
              label="Passenger Class"
              value={pclass}
              onChange={e => setPclass(Number(e.target.value))}
            >
              <MenuItem value={1}>First class</MenuItem>
              <MenuItem value={2}>Second class</MenuItem>
              <MenuItem value={3}>Third class</MenuItem>
            </TextField>
          </Box>

          <Bar data={data} options={options} />
        </CardPanel>
      </Box>
    </PageWrapper>
  );
}

// Logistic regression prediction function
function predictSurvival(sex, age, pclass) {
  const coef = { intercept: 5.056, sexMale: -2.522, age: -0.0369, pclass: -1.2885 };
  let x = coef.intercept;
  if (sex === "male") x += coef.sexMale;
  x += coef.age * age;
  x += coef.pclass * pclass;
  return Math.round((1 / (1 + Math.exp(-x))) * 100);
}
