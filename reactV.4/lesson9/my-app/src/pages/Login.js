import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      localStorage.setItem('aura_token', data.token);
      localStorage.setItem('aura_user', JSON.stringify(data.user));
      setUser(data.user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: 'calc(100vh - 75px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '40px 30px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', backdropFilter: 'blur(5px)' }}>
        <h2 style={{ fontWeight: '300', textAlign: 'center', marginBottom: '30px', letterSpacing: '1px' }}>ՄՈՒՏՔ</h2>
        {error && <p style={{ color: '#e63946', fontSize: '13px', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <input type="email" placeholder="Էլ. Փոստ" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '14px', borderRadius: '10px', border: '1px solid #dee2e6', fontSize: '14px' }} required />
          <input type="password" placeholder="Գաղտնաբառ" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: '14px', borderRadius: '10px', border: '1px solid #dee2e6', fontSize: '14px' }} required />
          <button type="submit" style={{ padding: '14px', background: '#111', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', marginTop: '10px' }}>Մտնել</button>
        </form>
      </div>
    </div>
  );
}

export default Login;