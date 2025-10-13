// src/pages/Inputs.jsx
import React from 'react';
import Card from '../Card';

export default function Inputs() {
  return (
    <div style={styles.container}>
      <Card title="Text Input">
        <input type="text" placeholder="Enter some text" style={styles.input} />
      </Card>

      <Card title="Select Option">
        <select style={styles.input}>
          <option value="">Choose one</option>
          <option value="one">One</option>
          <option value="two">Two</option>
        </select>
      </Card>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: 4,
    border: '1px solid #ccc',
    width: '100%',
  },
};
