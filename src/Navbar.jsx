// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {
    backgroundColor: '#282c34',
    padding: '1rem 2rem',
    color: 'white',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={{ margin: '0 1rem 0 0' }}>Reapp</h1>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/Titanic" style={styles.link}>Titanic</Link>
      <Link to="/inputs" style={styles.link}>Inputs</Link>
      <Link to="/outputs" style={styles.link}>Outputs</Link>
    </nav>
  );
}
