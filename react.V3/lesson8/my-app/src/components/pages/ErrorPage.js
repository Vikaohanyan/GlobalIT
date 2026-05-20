import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.title}>Page not found</h2>
        <p style={styles.subtitle}>
         The page you are looking for does not exist or has moved to another address.
        </p>
        <button style={styles.button} onClick={() => navigate('/')}>
         Return to Home Page
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '50px 40px',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    border: '1px solid #f1f5f9',
  },
  errorCode: {
    fontSize: '96px',
    fontWeight: '800',
    color: 'hsl(47, 85%, 41%)',
    margin: '0 0 10px 0',
    lineHeight: '1',
    letterSpacing: '-2px',
  },
  title: {
    fontSize: '24px',
    color: '#0f172a',
    fontWeight: '700',
    margin: '0 0 14px 0',
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: '1.6',
    margin: '0 0 35px 0',
  },
  button: {
    backgroundColor: 'hsl(47, 85%, 41%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 28px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(174, 142, 27, 0.2)',
  },
};

export default ErrorPage;