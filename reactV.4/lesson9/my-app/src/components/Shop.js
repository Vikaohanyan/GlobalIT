import React, { useState, useEffect } from 'react';

function Shop() {
  // ՔՈ ՀԻՆ 9 ԱՊՐԱՆՔՆԵՐԸ՝ ՃԻՇՏ ՀԵՐԹԱԿԱՆՈՒԹՅԱՄԲ
  const defaultProducts = [
    { _id: "1", name: "Chanel No. 5", price: 150, description: "Լեգենդար և էլեգանտ բույր իսկական կանանց համար:", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80", category: "Chanel" },
    { _id: "2", name: "Dior Sauvage", price: 130, description: "Թարմ և վայրի բույր՝ նախատեսված տղամարդկանց համար:", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80", category: "Dior" },
    { _id: "3", name: "Tom Ford Lost Cherry", price: 310, description: "Հագեցած, էկզոտիկ և անդիմադրելի անուշաբույր՝ բալի նոտաներով:", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80", category: "Tom Ford" },
    { _id: "4", name: "YSL Black Opium", price: 140, description: "Էներգետիկ և կախվածություն առաջացնող բույր՝ սուրճի և վանիլի նոտաներով:", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80", category: "YSL" },
    { _id: "5", name: "Bleu De Chanel", price: 145, description: "Անժամանակ ժամանակակից տղամարդու կերպարն ընդգծող բույր:", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80", category: "Chanel" },
    { _id: "6", name: "Creed Aventus", price: 425, description: "Հզոր, հաջողակ և արիստոկրատ տղամարդկանց ընտրությունը:", image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80", category: "Creed" },
    { _id: "7", name: "Versace Eros", price: 110, description: "Կրքոտ և արևելյան թարմություն՝ ներշնչված հունական դիցաբանությունից:", image: "https://images.unsplash.com/photo-1557170334-a964d5fc315e?auto=format&fit=crop&w=500&q=80", category: "Versace" },
    { _id: "8", name: "Giorgio Armani Si", price: 135, description: "Նրբագեղ, ուժեղ և անկախ կնոջ անդիմադրելի հմայքը:", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80", category: "Armani" },
    { _id: "9", name: "Baccarat Rouge 540", price: 325, description: "Շքեղ հիպնոտիկ բույր՝ ամբողջ աշխարհում ճանաչված իր յուրահատկությամբ:", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80", category: "Maison Francis" }
  ];

  const [products, setProducts] = useState(defaultProducts);
  const [likes, setLikes] = useState({});
  const [cart, setCart] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        if(data && data.length > 0) {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log("Օգտագործվում են 9 ֆրոնտենդային ապրանքները։");
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item._id === product._id);
      if (exists) {
        return prevCart.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item._id !== id));
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const ProductCard = ({ p }) => (
    <div style={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.6)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', backdropFilter: 'blur(5px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ position: 'relative', height: '300px', background: '#f9f9f9' }}>
        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <button 
          onClick={() => setLikes(prev => ({ ...prev, [p._id]: !prev[p._id] }))}
          style={{ position: 'absolute', top: '15px', right: '15px', background: '#fff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        >
          <span style={{ color: likes[p._id] ? '#e63946' : '#ccc', fontSize: '20px' }}>
            {likes[p._id] ? '♥' : '♡'}
          </span>
        </button>
      </div>
      
      <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '10px', color: '#a08a75', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{p.category}</span>
          <h4 style={{ margin: '5px 0 10px 0', fontSize: '16px', fontWeight: '400', color: '#111', letterSpacing: '0.5px' }}>{p.name}</h4>
          <p style={{ fontSize: '12px', color: '#666', height: '36px', overflow: 'hidden', margin: '0 0 15px 0', lineHeight: '1.5' }}>{p.description}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #f2ece7' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#111' }}>${p.price}</span>
          <button 
            onClick={() => addToCart(p)}
            style={{ background: 'none', border: 'none', color: '#a08a75', fontWeight: '600', fontSize: '12px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px' }}
          >
            + Զամբյուղ
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      // Գեղեցիկ, նուրբ և էսթետիկ ֆոն, որը չի խանգարում 9 նկարների ընթեռնելիությանը
      backgroundImage: 'linear-gradient(rgba(255, 252, 249, 0.75), rgba(255, 252, 249, 0.75)), url("https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 75px)',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', maxWidth: '1200px', margin: '0 auto 40px auto' }}>
        <h2 style={{ fontWeight: '300', letterSpacing: '2px', margin: 0, color: '#111' }}>ՕՆԼԱՅՆ ԽԱՆՈՒԹ</h2>
        <button 
          onClick={() => setIsCartOpen(!isCartOpen)}
          style={{ background: '#111', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '50px', cursor: 'pointer', display: 'flex', gap: '8px', fontWeight: '500', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
        >
          🛒 Զամբյուղ ({cartItemsCount})
        </button>
      </div>

      {isCartOpen && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '360px', height: '100vh', background: '#fff', boxShadow: '-5px 0 30px rgba(0,0,0,0.1)', zIndex: 200, padding: '30px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h3 style={{ margin: 0, fontWeight: '400' }}>Քո Զամբյուղը</h3>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {cart.length === 0 ? <p style={{ color: '#888', textAlign: 'center' }}>Զամբյուղը դատարկ է։</p> : cart.map(item => (
              <div key={item._id} style={{ display: 'flex', gap: '15px', padding: '15px 0', borderBottom: '1px solid #f5f1eb', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                <div style={{ flex: 1 }}>
                  <h5 style={{ margin: 0, fontSize: '13px' }}>{item.name}</h5>
                  <span style={{ fontSize: '12px', color: '#777' }}>{item.quantity} x ${item.price}</span>
                </div>
                <button onClick={() => removeFromCart(item._id)} style={{ background: 'none', border: 'none', color: '#e63946', cursor: 'pointer' }}>Ջնջել</button>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div style={{ borderTop: '1px solid #f0e6df', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: '600' }}>
                <span>Ընդհանուր՝</span>
                <span>${cartTotal}</span>
              </div>
              <button style={{ width: '100%', padding: '14px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', textTransform: 'uppercase' }}>Ձևակերպել</button>
            </div>
          )}
        </div>
      )}

      {/* 9 ԱՊՐԱՆՔՆԵՐԻ ՑՈՒՑԱԴՐՈՒՄԸ ԳԵՂԵՑԻԿ ՑԱՆՑՈՎ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {products.map(p => <ProductCard key={p._id} p={p} />)}
      </div>
    </div>
  );
}

export default Shop;