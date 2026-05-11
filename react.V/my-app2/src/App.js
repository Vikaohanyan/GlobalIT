import React from 'react';
import './App.css'; 
import { initialUsers, books, products } from './data';
import { UserCard, BookCard, ProductCard } from './Components';

function App() {
  const onlineUsers = initialUsers.filter(u => u.isOnline);

  return (
    <div className="container">
      <h1>Lesson 5 — Components & Props</h1>
      
      <section>
        <h2>All Users ({initialUsers.length})</h2>
        <div className="grid">
          {initialUsers.map(u => <UserCard key={u.id} user={u} />)}
        </div>
      </section>

      <section>
        <h2>Online Now ({onlineUsers.length})</h2>
        <div className="grid">
          {onlineUsers.map(u => <UserCard key={u.id} user={u} />)}
        </div>
      </section>

      <section>
        <h2>Book List ({books.length})</h2>
        <div className="grid">
          {books.map(b => <BookCard key={b.id} {...b} />)}
        </div>
      </section>

      <section className="task-section">
        <h2> Your Task: Products</h2>
        <div className="grid">
          {products.map(p => (
            <ProductCard key={p.id} name={p.name} price={p.price} inStock={p.inStock} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;