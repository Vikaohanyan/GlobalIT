import React, { useState } from 'react';
import Login from './components/Login'; 
import Home from './components/Home';  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser('');
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2c2c2c] font-sans antialiased">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Home username={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;