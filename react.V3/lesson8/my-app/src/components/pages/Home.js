import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.heroCard}>
        <span style={styles.badge}>Welcome to DevApp</span>
        
        <h1 style={styles.title}>
          Manage Your Connections <span style={styles.accentText}>Effortlessly</span>
        </h1>
        
        <p style={styles.subtitle}>
          Explore public posts, look through detailed user profiles, and keep track of your core data in a clean, minimal dashboard interface.
        </p>
        
        <button style={styles.primaryButton} onClick={() => navigate('/users')}>
          Explore Users &rarr;
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 65px)',
    backgroundColor: '#f8fafc',
    padding: '20px',
    boxSizing: 'border-box',
  },
  heroCard: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '50px 40px',
    maxWidth: '650px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.015)',
    border: '1px solid #f1f5f9',
  },
  badge: {
    display: 'inline-block',
    color: 'hsl(47, 85%, 41%)', 
    backgroundColor: 'hsl(47, 85%, 95%)', 
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '750',
    letterSpacing: '0.5px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '36px',
    color: '#0f172a',
    fontWeight: '800',
    lineHeight: '1.25',
    margin: '0 0 16px 0',
    letterSpacing: '-0.5px',
  },
  accentText: {
    color: 'hsl(47, 85%, 41%)',
  },
  subtitle: {
    fontSize: '16px',
    color: '#475569',
    lineHeight: '1.6',
    margin: '0 0 35px 0',
  },
  primaryButton: {
    backgroundColor: 'hsl(47, 85%, 41%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 32px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(174, 142, 27, 0.25)',
  },
};

export default Home;