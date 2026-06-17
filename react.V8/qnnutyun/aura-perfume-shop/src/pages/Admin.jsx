import React, { useState } from 'react';
import AdminChart from '../components/AdminChart';

const initialCards = [
  { id: 1, name: 'Tom Ford Lost Cherry', category: 'Tom Ford', price: 395, img: 'https://lifestyleperfume.am/images/product/2231/1631282715-lifestyle%20perfume%20(45).jpg' },
  { id: 2, name: 'Chanel No. 5', category: 'Chanel', price: 175, img: 'https://perfumedubai.com/cdn/shop/files/8643C_460x@2x.jpg?v=1728923321' },
  { id: 3, name: 'YSL Libre Intense', category: 'Yves Saint Laurent', price: 155, img: 'https://lifestyleperfume.am/images/product/2241/1631478606-lifestyle%20perfume%20-%202021-09-12T222853.296.jpg' }
];

const Admin = () => {
  const [cards, setCards] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState(null);
  const [formValues, setFormValues] = useState({ name: '', category: '', price: '', img: '' });

  const resetForm = () => {
    setSelectedCard(null);
    setFormValues({ name: '', category: '', price: '', img: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedCard = {
      id: selectedCard ? selectedCard.id : cards.length ? Math.max(...cards.map((card) => card.id)) + 1 : 1,
      name: formValues.name.trim(),
      category: formValues.category.trim(),
      price: Number(formValues.price),
      img: formValues.img.trim() || 'https://via.placeholder.com/400x300?text=Perfume'
    };

    if (!updatedCard.name || !updatedCard.category || !updatedCard.price) {
      alert('Please fill in the name, category, and price.');
      return;
    }

    if (selectedCard) {
      setCards((prev) => prev.map((card) => (card.id === selectedCard.id ? updatedCard : card)));
    } else {
      setCards((prev) => [...prev, updatedCard]);
    }

    resetForm();
  };

  const handleEdit = (card) => {
    setSelectedCard(card);
    setFormValues({
      name: card.name,
      category: card.category,
      price: String(card.price),
      img: card.img
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemove = (cardId) => {
    if (!window.confirm('Remove this card from the collection?')) {
      return;
    }
    setCards((prev) => prev.filter((card) => card.id !== cardId));
    if (selectedCard && selectedCard.id === cardId) {
      resetForm();
    }
  };

  return (
    <main
      className="page-content page-bg-admin admin-page"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 10, 8, 0.75), rgba(13, 10, 8, 0.95)), url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="page-inner">
      <section className="section-block admin-header">
        <div>
          <span className="eyebrow">Admin Dashboard</span>
          <h2>Manage Perfume Cards</h2>
          <p>Use the form below to add new cards or edit existing perfume entries in the collection.</p>
        </div>
        <div className="admin-chart-wrap">
          <AdminChart />
        </div>
      </section>

      <section className="section-block admin-form-block">
        <h3>{selectedCard ? 'Edit Card' : 'Add New Card'}</h3>
        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formValues.name} onChange={handleChange} placeholder="Perfume name" />
          </label>
          <label>
            Category
            <input name="category" value={formValues.category} onChange={handleChange} placeholder="Brand or category" />
          </label>
          <label>
            Price
            <input name="price" value={formValues.price} onChange={handleChange} type="number" min="0" placeholder="Price in USD" />
          </label>
          <label>
            Image URL
            <input name="img" value={formValues.img} onChange={handleChange} placeholder="https://..." />
          </label>
          <div className="admin-form-actions">
            <button type="submit" className="btn-premium">{selectedCard ? 'Save Changes' : 'Add Card'}</button>
            {selectedCard && (
              <button type="button" className="btn-secondary" onClick={resetForm}>Cancel</button>
            )}
          </div>
        </form>
      </section>

      <section className="section-block admin-list-block">
        <h3>Current Cards</h3>
        <div className="admin-card-grid">
          {cards.map((card) => (
            <article key={card.id} className="glass-card admin-card">
              <img src={card.img} alt={card.name} />
              <div className="card-content">
                <h4>{card.name}</h4>
                <p>{card.category}</p>
                <span>${card.price}</span>
              </div>
              <div className="card-actions">
                <button className="btn-secondary" onClick={() => handleEdit(card)}>Edit</button>
                <button className="btn-premium" onClick={() => handleRemove(card.id)}>Remove</button>
              </div>
            </article>
          ))}
          {cards.length === 0 && <p className="empty-state">No cards found. Add a card to begin.</p>}
        </div>
      </section>
      </div>
    </main>
  );
};

export default Admin;
