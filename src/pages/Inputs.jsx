// src/components/TemperatureCard.jsx
import React, { useState, useEffect } from "react";
import DataStateCard from "../components/DataStateCard";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

export default function TemperatureCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching or processing data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        // Example: Replace this with your own dataset
        const simulatedData = [
          { day: "Mon", temp: 21 },
          { day: "Tue", temp: 23 },
          { day: "Wed", temp: 19 },
          { day: "Thu", temp: 25 },
          { day: "Fri", temp: 22 },
        ];

        // Uncomment next line to simulate an empty state:
        // const simulatedData = [];

        // Uncomment next line to simulate an error:
        // throw new Error("Data source not found");

        setData(simulatedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 2000); // simulate network delay
  }, []);

  const isEmpty = !data || data.length === 0;

  return (
    <DataStateCard
      title="Weekly Temperatures"
      loading={loading}
      error={error}
      empty={isEmpty}
      onRetry={() => window.location.reload()}
      skeleton
    >
      <List>
        {data.map((item) => (
          <ListItem key={item.day} disablePadding>
            <ListItemText
              primary={`${item.day}`}
              secondary={`Temperature: ${item.temp}°C`}
            />
          </ListItem>
        ))}
      </List>
    </DataStateCard>
  );
}
