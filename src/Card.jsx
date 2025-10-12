import React from 'react';

export default function Card({ title, children }) {
  return (
    <div style={styles.card}>
      {title && <h2 style={styles.title}>{title}</h2>}
      <div>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '1rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',      // fill available height
    overflowY: 'auto',   // scroll if content overflows vertically
  },
  title: {
    marginBottom: '0.75rem',
  },
};
