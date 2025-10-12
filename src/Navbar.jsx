import React from 'react';

const styles = {
  navbar: {
    backgroundColor: '#282c34',
    padding: '1rem 2rem',
    color: 'white',
    height: '64px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
};

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={{ margin: 0 }}>seact_app</h1>
      {/* You can add links/buttons here later */}
    </nav>
  );
}
