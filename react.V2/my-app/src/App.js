import React from 'react';
import './App.css';
import SimpleLogin from './components/SimpleLogin';
import ProductCounter from './components/ProductCounter';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <div className="container">
      <SimpleLogin />
      <div className="product-card">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" 
          alt="Sneakers" 
          className="product-image"
        />
        <div className="product-info">
          <h3 style={{margin: '0'}}>Nike Air Max 270</h3>
          <p style={{color: '#777', fontSize: '0.9rem'}}>Running Collection 2024</p>
          <div className="price">42,000 ֏</div>
          
          <ProductCounter />
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

export default App;