import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 75px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '55px', fontWeight: '300', letterSpacing: '8px', margin: '0 0 15px 0', textTransform: 'uppercase' }}>AURA PERFUME</h1>
      <p style={{ fontSize: '20px', fontWeight: '300', letterSpacing: '2px', marginBottom: '40px', color: '#f5eee6' }}>
        Բացահայտիր քո անհատական բույրը մեր բացառիկ հավաքածուից
      </p>
      <button 
        onClick={() => navigate('/shop')} 
        style={{
          padding: '16px 40px', background: '#fff', color: '#111', border: 'none', borderRadius: '50px',
          cursor: 'pointer', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
        Դիտել Տեսականին →
      </button>
    </div>
  );
}

export default Home;