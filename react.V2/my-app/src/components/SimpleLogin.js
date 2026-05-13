import React, { useState } from 'react';

const SimpleLogin = () => {
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login-card">
      {isLoggedIn ? (
        <h2>Բարև, {name}! 👋</h2>
      ) : (
        <div className="login-input-group">
          <input 
            placeholder="Մուտքագրեք անունը..." 
            onChange={(e) => setName(e.target.value)} 
          />
          <button onClick={() => name && setIsLoggedIn(true)}>Մուտք</button>
        </div>
      )}
    </div>
  );
};
export default SimpleLogin;