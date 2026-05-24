import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.length >= 4) {
      onLogin(username);
    } else {
      setError('Խնդրում ենք լրացնել ճիշտ տվյալներ (Մինիմում 4 նիշ)։');
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: "url('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        boxSizing: 'border-box'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h2 style={{ color: '#fff', fontSize: '32px', fontWeight: '300', tracking: '4px', margin: '0 0 5px 0', letterSpacing: '6px' }}>AURA</h2>
          <p style={{ color: '#ccc', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Haute Parfumerie</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#eee', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Օգտանուն</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Մուտքագրեք ձեր անունը"
              style={{
                width: '100%',
                padding: '12px 15px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#eee', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Գաղտնաբառ</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 15px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {error && <p style={{ color: '#ff6b6b', fontSize: '12px', textAlign: 'center', margin: 0 }}>{error}</p>}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: '#fff',
              border: 'none',
              borderRadius: '8px',
              color: '#000',
              fontWeight: '6px',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'background 0.3s'
            }}
          >
            Մուտք գործել
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;