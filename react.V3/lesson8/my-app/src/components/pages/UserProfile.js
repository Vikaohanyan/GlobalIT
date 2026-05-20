import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id || 1}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p style={{ textAlign: 'center', padding: '25px' }}>Բեռնվում է...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <div style={styles.topRow}>
          <button style={styles.backButton} onClick={() => navigate('/users')}>
            &larr; back to users
          </button>
          <div style={styles.idBadge}>
            ID #{user.id}
          </div>
        </div>

        <div style={styles.avatarWrapper}>
          <div style={styles.avatarGradient}>
            <div style={styles.avatarInner}>
              <span style={{ fontSize: '32px', fontWeight: '700', color: 'hsl(47, 85%, 41%)' }}>
                {user.name ? user.name.charAt(0) : ''}
              </span>
            </div>
          </div>
        </div>

        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.username}>@{user.username}</p>

        <div style={styles.divider}></div>

        <div style={styles.infoGrid}>
          <div style={styles.infoBox}>
            <div style={styles.iconCircle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(47, 85%, 41%)" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div style={styles.infoTextWrapper}>
              <span style={styles.infoLabel}>ԷԼ. email</span>
              <span style={styles.infoValue}>{user.email}</span>
            </div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.iconCircle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(47, 85%, 41%)" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div style={styles.infoTextWrapper}>
              <span style={styles.infoLabel}>phone</span>
              <span style={styles.infoValue}>{user.phone}</span>
            </div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.iconCircle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(47, 85%, 41%)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div style={styles.infoTextWrapper}>
              <span style={styles.infoLabel}>website</span>
              <span style={styles.infoValue}>{user.website}</span>
            </div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.iconCircle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(47, 85%, 41%)" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div style={styles.infoTextWrapper}>
              <span style={styles.infoLabel}>company</span>
              <span style={styles.infoValue}>{user.company?.name}</span>
            </div>
          </div>
        </div>

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
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '35px',
    maxWidth: '650px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    border: '1px solid #f1f5f9',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
  },
  backButton: {
    backgroundColor: 'hsl(47, 85%, 41%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(174, 142, 27, 0.2)',
  },
  idBadge: {
    backgroundColor: 'hsl(47, 85%, 95%)',
    color: 'hsl(47, 85%, 41%)',
    padding: '6px 14px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '700',
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  avatarGradient: {
    width: '90px',
    height: '90px',
    backgroundColor: 'hsl(47, 85%, 41%)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3px',
  },
  avatarInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#1e293b',
    margin: '0 0 4px 0',
    fontWeight: '700',
  },
  username: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#94a3b8',
    margin: '0 0 25px 0',
  },
  divider: {
    height: '1px',
    backgroundColor: '#f1f5f9',
    margin: '0 0 25px 0',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    border: '1px solid #f1f5f9',
  },
  iconCircle: {
    width: '40px',
    height: '40px',
    backgroundColor: 'hsl(47, 85%, 95%)',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '14px',
    flexShrink: 0,
  },
  infoTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  infoLabel: {
    fontSize: '11px',
    color: 'hsl(47, 85%, 41%)',
    fontWeight: '700',
    letterSpacing: '0.5px',
    marginBottom: '2px',
  },
  infoValue: {
    fontSize: '14px',
    color: 'hsl(47, 85%, 41%)',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
};

export default UserProfile;