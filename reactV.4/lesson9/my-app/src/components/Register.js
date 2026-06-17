import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '0 40px', marginTop: '40px' }}>
      
      {/* ՖՈՆԱՅԻՆ ԲԼՈԿ՝ ԼՐԻՎ ՆՈՐ ՈՒ ՇՔԵՂ ՕԾԱՆԵԼԻՔԻ ՆԿԱՐՈՎ */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75vh',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        
        {/* Գրանցման սպիտակ ֆորման */}
        <div style={{ 
          maxWidth: '380px', 
          width: '100%', 
          padding: '40px 30px', 
          background: 'rgba(255, 255, 255, 0.95)', 
          borderRadius: '20px', 
          boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
          margin: '0 20px'
        }}>
          <h2 style={{ fontWeight: '300', textAlign: 'center', marginBottom: '30px', letterSpacing: '2px', color: '#111' }}>ԳՐԱՆՑՈՒՄ</h2>
          
          {error && <p style={{ color: '#e63946', fontSize: '13px', textAlign: 'center' }}>{error}</p>}
          
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <input type="text" placeholder="Անուն" value={name} onChange={e => setName(e.target.value)} style={{ padding: '14px', borderRadius: '10px', border: '1px solid #dee2e6', fontSize: '14px' }} required />
            <input type="email" placeholder="Էլ. Փոստ" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '14px', borderRadius: '10px', border: '1px solid #dee2e6', fontSize: '14px' }} required />
            <input type="password" placeholder="Գաղտնաբառ (մին. 6 նիշ)" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: '14px', borderRadius: '10px', border: '1px solid #dee2e6', fontSize: '14px' }} required />
            <button type="submit" style={{ padding: '14px', background: '#111', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', marginTop: '10px' }}>Հաստատել</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;