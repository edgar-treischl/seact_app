import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <Card title="Inputs">
          {/* Add your input controls here later */}
          <p>Input controls will go here</p>
        </Card>
        <Card title="Outputs">
          {/* Add your charts/graphs here later */}
          <p>Graphs and outputs will be displayed here</p>
        </Card>
      </main>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem 2rem',
    backgroundColor: '#f0f2f5',
    height: 'calc(100vh - 64px)', // fills viewport height minus navbar height
    boxSizing: 'border-box',
  },
};
