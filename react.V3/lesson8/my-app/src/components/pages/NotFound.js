import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Սխալ 404</h2>
      <p> Ձեր փնտրած էջը գոյություն չունի։</p>
      <button 
        onClick={() => navigate('/')} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;