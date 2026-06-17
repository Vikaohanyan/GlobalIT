import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

import Home from './components/Home';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('aura_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('aura_token');
    localStorage.removeItem('aura_user');
    setUser(null);
  };

  return (
    <Router>
      <div style={{ fontFamily: "'Segoe UI', sans-serif", margin: 0, padding: 0, minHeight: '100vh' }}>
        
        {/* GLOBAL NAVIGATION */}
        <nav style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 40px', background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.05)',
          position: 'sticky', top: 0, zIndex: 100
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111' }}>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '300', letterSpacing: '4px' }}>AURA</h1>
          </Link>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#555', fontSize: '14px' }}>Գլխավոր</Link>
            <Link to="/shop" style={{ textDecoration: 'none', color: '#555', fontSize: '14px' }}>Խանութ</Link>

            <span style={{ color: '#ccc' }}>|</span>

            {user ? (
              <>
                <span style={{ fontSize: '14px' }}>Հարգելի, <b>{user.name}</b></span>
                <button onClick={handleLogout} style={{
                  padding: '6px 12px', background: 'none', border: '1px solid #000', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase'
                }}>Ելք</button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: 'none', color: '#111', fontSize: '14px' }}>Մուտք</Link>
                <Link to="/register" style={{ textDecoration: 'none', color: '#a08a75', fontSize: '14px', fontWeight: '600' }}>Գրանցվել</Link>
              </>
            )}
          </div>
        </nav>

        {/* PAGES ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;