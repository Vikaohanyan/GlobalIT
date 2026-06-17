import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem('aura_token');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, brand, price: Number(price), image, description };

    const url = editingId ? `http://localhost:5000/api/products/${editingId}` : 'http://localhost:5000/api/products';
    const method = editingId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(productData)
    });

    if (res.ok) {
      clearForm();
      fetchProducts();
    }
  };

  const handleEdit = (p) => {
    setEditingId(p._id);
    setName(p.name);
    setBrand(p.brand);
    setPrice(p.price);
    setImage(p.image);
    setDescription(p.description);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Վստա՞հ եք, որ ուզում եք ջնջել այս ապրանքը:')) {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) fetchProducts();
    }
  };

  const clearForm = () => {
    setEditingId(null);
    setName('');
    setBrand('');
    setPrice('');
    setImage('');
    setDescription('');
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px', display: 'flex', gap: '40px' }}>
      
      {/* FORM: ADD & EDIT */}
      <div style={{ flex: '1', background: '#fff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', height: 'fit-content' }}>
        <h3 style={{ fontWeight: '400', marginTop: 0 }}>{editingId ? 'Խմբագրել Ապրանքը' : 'Ավելացնել Նոր Ապրանք'}</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input type="text" placeholder="Ապրանքի Անուն" value={name} onChange={e => setName(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} required />
          <input type="text" placeholder="Բրենդ (CHANEL, DIOR...)" value={brand} onChange={e => setBrand(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} required />
          <input type="number" placeholder="Գին ($)" value={price} onChange={e => setPrice(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} required />
          <input type="text" placeholder="Նկարի URL" value={image} onChange={e => setImage(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} required />
          <textarea placeholder="Նկարագրություն" value={description} onChange={e => setDescription(e.target.value)} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd', height: '80px' }} required />
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" style={{ flex: 1, padding: '12px', background: '#111', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              {editingId ? 'Պահպանել' : 'Ավելացնել'}
            </button>
            {editingId && <button type="button" onClick={clearForm} style={{ padding: '12px', background: '#ddd', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Չեղարկել</button>}
          </div>
        </form>
      </div>

      {/* PRODUCTS LIST */}
      <div style={{ flex: '1.5' }}>
        <h3 style={{ fontWeight: '400', marginTop: 0 }}>Ապրանքների Ամբողջ Ցանկը</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {products.map(p => (
            <div key={p._id} style={{ display: 'flex', background: '#fff', padding: '15px', borderRadius: '12px', border: '1px solid #eee', alignItems: 'center', gap: '15px' }}>
              <img src={p.image} alt={p.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }} />
              <div style={{ flex: 1 }}>
                <h5 style={{ margin: 0, fontSize: '15px' }}>{p.name} ({p.brand})</h5>
                <span style={{ fontSize: '13px', color: '#777' }}>${p.price}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleEdit(p)} style={{ background: '#f5f1eb', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Խմբագրել</button>
                <button onClick={() => handleDelete(p._id)} style={{ background: '#ffebee', color: '#e63946', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Ջնջել</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AdminPanel;