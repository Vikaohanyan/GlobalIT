import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Our Users</h1>
      <div style={styles.grid}>
        {users.map((user) => {
          const firstLetter = user.name ? user.name.charAt(0) : '';

          return (
            <div key={user.id} style={styles.card}>
              
              <div style={styles.avatarWrapper}>
                <div style={styles.avatarGradient}>
                  <div style={styles.avatarInner}>
                    {firstLetter}
                  </div>
                </div>
              </div>

              <h3 style={styles.name}>{user.name}</h3>
              <p style={styles.username}>@{user.username}</p>
              <p style={styles.email}>{user.email}</p>

              <Link to={`/users/${user.id}`} style={styles.button}>
                View profile
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#f8fafc',
    minHeight: 'calc(100vh - 65px)',
  },
  mainTitle: {
    textAlign: 'center',
    color: '#0f172a',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '35px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '28px 24px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    border: '1px solid #e2e8f0',
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  avatarGradient: {
    width: '70px',
    height: '70px',
    backgroundColor: 'hsl(47, 85%, 41%)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2.5px',
  },
  avatarInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    fontWeight: '700',
    color: 'hsl(47, 85%, 41%)',
  },
  name: {
    fontSize: '19px',
    color: '#1e293b',
    margin: '0 0 4px 0',
    fontWeight: '700',
  },
  username: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: '0 0 14px 0',
  },
  email: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0 0 22px 0',
  },
  button: {
    display: 'block',
    padding: '11px 0',
    backgroundColor: 'hsl(47, 85%, 41%)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '14px',
    fontWeight: '600',
    fontSize: '14px',
    boxShadow: '0 4px 12px rgba(174, 142, 27, 0.2)',
  },
};

export default Users;