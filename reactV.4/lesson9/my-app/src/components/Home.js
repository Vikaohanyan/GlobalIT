import React, { useState, useRef } from 'react';

const CHANEL_PERFUMES = [
  { id: 'c1', name: "Chanel Chance Eau de Parfum", brand: "CHANEL", price: 145, image: "https://valorya.by/api/public/perfume/chanel-chance-eau-de-parfum.jpg", desc: "Հանրահայտ կանացի բույր՝ թարմ ցիտրուսային և փայտային նոտաներով։" },
  { id: 'c2', name: "Chanel N°5", brand: "CHANEL", price: 160, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600", desc: "Լեգենդար կանացի բույր, որը դարձել է էլեգանտության խորհրդանիշ։" },
  { id: 'c3', name: "Coco Mademoiselle", brand: "CHANEL", price: 135, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600", desc: "Կայծկլտող արևելյան բույր՝ ժամանակակից անհատականության համար։" },
  { id: 'c4', name: "Chance Eau Tendre", brand: "CHANEL", price: 125, image: "https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/chance-eau-tendre-eau-de-parfum-spray-3-4fl-oz--packshot-default-126260-9564866838558.jpg", desc: "Ծաղկամրգային նուրբ պոեզիա, որը լցնում է օրը լավատեսությամբ։" }
];

const DIOR_PERFUMES = [
  { id: 'd1', name: "Sauvage EDP", brand: "DIOR", price: 150, image: "https://lifestyleperfume.am/images/product/793/1646380968-7451318.webp", desc: "Վայրի և ազնվացնող բույր՝ հարուստ ու թարմ նոտաների հզոր միքսով։" },
  { id: 'd2', name: "J'adore Dior", brand: "DIOR", price: 155, image: "https://lifestyleperfume.am/images/product/2052/1623873922-product_505_5.png", desc: "Շքեղ կանացի փունջ՝ իլանգ-իլանգի, դամասկոսյան վարդի և հասմիկի նոտաներով։" },
  { id: 'd3', name: "Miss Dior Blooming", brand: "DIOR", price: 130, image: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwa64dca12/images/beauty/01-FRAGRANCES/2025/PDP-REVAMP/MISSDIOR/Y0996612/Y0996612_C099700100_E02_ZHC.jpg?sw=640", desc: "Ռոմանտիկ և գունեղ ծաղկային բույր, որը հիշեցնում է գարնանային սեր։" },
  { id: 'd4', name: "Dior Homme Intense", brand: "DIOR", price: 140, image: "https://arle.co/cdn/shop/files/6f8ca34e4ef69fb45ab1d4814b5cc627da851560-800x865_052d729f-6fb5-4b4b-a910-95fd4f0ccab9.webp?v=1745871339&width=990", desc: "Ազնվացնող, զգայուն և հագեցած երեկոյան բույր՝ իռիսի ընդգծված նոտայով։" }
];

const TOM_FORD_PERFUMES = [
  { id: 't1', name: "Lost Cherry", brand: "TOM FORD", price: 220, image: "https://lifestyleperfume.am/images/product/2231/1646381226-5175553.webp", desc: "Հագեցած, էկզոտիկ և անդիմադրելի բույր՝ հասուն բալի և նուշի նոտաներով։" },
  { id: 't2', name: "Oud Wood Luxe", brand: "TOM FORD", price: 210, image: "https://sdcdn.io/tf/tf_sku_TAJK01_2000x2000_1.png?height=1400px&width=1400px", desc: "Շքեղ, տաք և հարուստ բույր՝ ագարակի փայտի և արևելյան համեմունքների միքսով։" },
  { id: 't3', name: "Tobacco Vanille", brand: "TOM FORD", price: 215, image: "https://thescentnest.com/wp-content/uploads/2025/10/tobacco-vanilla-tom-ford-1-768x768.jpg", desc: "Անգլիական ջենթլմենների ակումբի ոգին՝ տաք վանիլի և ծխախոտի տերևների հարմոնիայով։" },
  { id: 't4', name: "Noir Extreme", brand: "TOM FORD", price: 195, image: "https://media.bergdorfgoodman.com/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/bg_885502_100000_a", desc: "Արևային, տաք ծաղկային բույր՝ կոկոսի և էկզոտիկ յուղերի թեթևությամբ։" }
];

function Home({ username, onLogout }) {
  const [likes, setLikes] = useState({});
  const [cart, setCart] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const collectionRef = useRef(null);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const ProductCard = ({ p }) => (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      border: '1px solid #f2ece7',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
    }}>
      <div style={{ position: 'relative', height: '320px', background: '#f9f9f9' }}>
        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <button 
          onClick={() => setLikes(prev => ({ ...prev, [p.id]: !prev[p.id] }))}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
        >
          <span style={{ color: likes[p.id] ? '#e63946' : '#ccc', fontSize: '20px', lineHeight: '0' }}>
            {likes[p.id] ? '♥' : '♡'}
          </span>
        </button>
      </div>
      
      <div style={{ padding: '20px' }}>
        <span style={{ fontSize: '10px', color: '#a08a75', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{p.brand}</span>
        <h4 style={{ margin: '5px 0 10px 0', fontSize: '17px', fontWeight: '400', color: '#111' }}>{p.name}</h4>
        <p style={{ fontSize: '12px', color: '#777', height: '36px', overflow: 'hidden', margin: '0 0 15px 0', lineHeight: '1.5' }}>{p.desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #f8f5f2' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#111' }}>${p.price}</span>
          <button 
            onClick={() => addToCart(p)}
            style={{ background: 'none', border: 'none', color: '#a08a75', fontWeight: '600', fontSize: '12px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}
          >
            + Զամբյուղ
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#fcfbfa', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif", margin: 0, padding: 0, position: 'relative' }}>
      
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #f0e6df',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '300', letterSpacing: '4px' }}>AURA</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '14px', color: '#555' }}>Բարի գալուստ, <b style={{ color: '#000' }}>{username}</b></span>
          
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              color: '#111',
              fontWeight: '500'
            }}
          >
            🛒 Զամբյուղ
            {cartItemsCount > 0 && (
              <span style={{
                background: '#a08a75',
                color: '#fff',
                borderRadius: '50%',
                padding: '1px 6px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>
                {cartItemsCount}
              </span>
            )}
          </button>

          <button onClick={onLogout} style={{
            padding: '8px 16px',
            background: 'none',
            border: '1px solid #000',
            cursor: 'pointer',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Ելք</button>
        </div>
      </nav>

      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '360px',
          height: '100vh',
          background: '#fff',
          boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
          zIndex: 200,
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h3 style={{ margin: 0, fontWeight: '400', letterSpacing: '1px' }}>Քո Զամբյուղը</h3>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>
            {cart.length === 0 ? (
              <p style={{ color: '#888', textAlign: 'center', marginTop: '40px' }}>Զամբյուղը դատարկ է։</p>
            ) : (
              cart.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '15px', padding: '15px 0', borderBottom: '1px solid #f5f1eb', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div style={{ flex: 1 }}>
                    <h5 style={{ margin: 0, fontSize: '13px', fontWeight: '500' }}>{item.name}</h5>
                    <span style={{ fontSize: '12px', color: '#777' }}>{item.quantity} x ${item.price}</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#e63946', cursor: 'pointer', fontSize: '11px' }}>Ջնջել</button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div style={{ borderTop: '1px solid #f0e6df', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: '600' }}>
                <span>Ընդհանուր՝</span>
                <span>${cartTotal}</span>
              </div>
              <button style={{
                width: '100%',
                padding: '14px',
                background: '#111',
                color: '#fff',
                border: 'none',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '11px',
                cursor: 'pointer',
                borderRadius: '8px'
              }}>
                Ձևակերպել Պատվերը
              </button>
            </div>
          )}
        </div>
      )}

      <div style={{
        maxWidth: '1200px',
        margin: '40px auto',
        background: '#f5f1eb',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
      }}>
        <div style={{ flex: '1 1 500px', padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px', color: '#a08a75', margin: '0 0 15px 0', fontWeight: '600' }}>Նոր Հավաքածու 2026</p>
          <h2 style={{ fontSize: '42px', fontWeight: '300', margin: '0 0 20px 0', color: '#111', lineHeight: '1.2' }}>Գտիր Քո <br />Անհատական Բույրը</h2>
          <p style={{ maxWidth: '450px', margin: '0 0 35px 0', color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
            Բացահայտեք աշխարհահռչակ պրեմիում բրենդների բացառիկ հավաքածուները մեկ վայրում:
          </p>
          <button onClick={scrollToCollection} style={{ padding: '14px 35px', background: '#111', color: '#fff', border: 'none', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', cursor: 'pointer', boxShadow: '0 5px 15px rgba(0,0,0,0.15)' }}>
            Դիտել Տեսականին
          </button>
        </div>
        <div style={{ flex: '1 1 400px', minHeight: '400px', backgroundImage: "url('https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      <div ref={collectionRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 60px 20px' }}>
        
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '300', fontSize: '20px', marginBottom: '25px', color: '#111', borderLeft: '4px solid #111', paddingLeft: '15px' }}>
            CHANEL Հավաքածու
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {CHANEL_PERFUMES.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '300', fontSize: '20px', marginBottom: '25px', color: '#111', borderLeft: '4px solid #a08a75', paddingLeft: '15px' }}>
            DIOR Հավաքածու
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {DIOR_PERFUMES.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '300', fontSize: '20px', marginBottom: '25px', color: '#111', borderLeft: '4px solid #333', paddingLeft: '15px' }}>
            TOM FORD Հավաքածու
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {TOM_FORD_PERFUMES.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;