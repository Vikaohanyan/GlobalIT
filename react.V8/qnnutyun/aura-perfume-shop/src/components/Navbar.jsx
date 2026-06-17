import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Compass, Info, Mail, UserCheck, ShoppingCart, ShieldAlert } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center',
      padding: '20px 40px', background: 'rgba(13, 10, 8, 0.9)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(212,175,55,0.1)',
      position: 'sticky', top: 0, zIndex: 100, justifyContent: 'space-between'
    }}>
      <div className="brand-name" style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
        AURA PERFUME
      </div>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={navLinkStyle}><Compass size={18} /> Home</Link>
        <Link to="/shop" style={navLinkStyle}><ShoppingBag size={18} /> Shop</Link>
        <Link to="/about" style={navLinkStyle}><Info size={18} /> About</Link>
        <Link to="/contact" style={navLinkStyle}><Mail size={18} /> Contact</Link>
        <Link to="/admin" style={{ ...navLinkStyle, color: '#d4af37' }}><ShieldAlert size={18} /> Admin</Link>
      </div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button onClick={onCartClick} style={{
          background: 'none', border: 'none', color: '#f5f2eb', 
          display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', position: 'relative'
        }}>
          <ShoppingCart size={22} color="#d4af37" />
          {cartCount > 0 && (
            <span style={{
              background: '#d4af37', color: '#0d0a08', fontSize: '0.75rem',
              fontWeight: 'bold', borderRadius: '50%', padding: '2px 6px',
              position: 'absolute', top: '-10px', right: '-10px'
            }}>{cartCount}</span>
          )}
        </button>

        <Link to="/admin" className="btn-premium" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserCheck size={16} /> Sign In
        </Link>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: '#f5f2eb', textDecoration: 'none', display: 'flex', alignItems: 'center',
  gap: '8px', fontSize: '0.9rem', fontWeight: '400', letterSpacing: '1px'
};

export default Navbar;