import React from 'react';

export const UserCard = ({ user }) => (
  <div className="card user-card">
    <h3>{user.name}</h3>
    <p>Age: {user.age}</p>
    <p>City: {user.city}</p>
    <p>Email: {user.email}</p>
    <div className={`status ${user.isOnline ? 'online' : 'offline'}`}>
      {user.isOnline ? '● Online' : '○ Offline'}
    </div>
  </div>
);

export const BookCard = ({ title, author, info }) => (
  <div className="card book-card">
    <h4>{title}</h4>
    <p className="author">by {author}</p>
    <p className="info">{info}</p>
  </div>
);

export const ProductCard = ({ name, price, inStock }) => (
  <div className="card product-card">
    <h4>{name}</h4>
    <p>Price: ${price}</p>
    {inStock ? (
      <button className="buy-btn">Buy Now</button>
    ) : (
      <p className="out-of-stock">Out of Stock</p>
    )}
  </div>
);