import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>DevApp</div>
      <div style={styles.links}>
        <NavLink 
          to="/" 
          style={({ isActive }) => isActive ? styles.homeActiveLink : styles.link}
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/posts" 
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Posts
        </NavLink>
        
        <NavLink 
          to="/users" 
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    height: '65px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: '0.5px',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#64748b',
    fontWeight: '500',
    fontSize: '14px',
    padding: '6px 12px',
  },
  activeLink: {
    textDecoration: 'none',
    color: '#0f172a',
    fontWeight: '600',
    fontSize: '14px',
    padding: '6px 12px',
    borderBottom: '2px solid #0f172a',
  },
  homeActiveLink: {
    textDecoration: 'none',
    color: 'hsl(47, 85%, 41%)',
    fontWeight: '600',
    fontSize: '14px',
    padding: '6px 12px',
    borderBottom: '2px solid hsl(47, 85%, 41%)', 
  },
};

export default Navbar;