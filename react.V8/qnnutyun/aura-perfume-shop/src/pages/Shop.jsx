
import React from 'react';
import { ShoppingCart, ShoppingBag } from 'lucide-react';

const mockPerfumes = [
  { id: 1, name: "Tom Ford Lost Cherry", price: 395, category: "Tom Ford", img: "https://lifestyleperfume.am/images/product/2231/1631282715-lifestyle%20perfume%20(45).jpg" },
  { id: 2, name: "Tom Ford Black Orchid", price: 225, category: "Tom Ford", img: "https://lifestyleperfume.am/images/product/312/1602866902-uu.jpg" },
  { id: 3, name: "Tom Ford Tobacco Vanille", price: 395, category: "Tom Ford", img: "https://cdn2.emporium.az/i/p/500/312272-d51991d5f1c4dd62d0ace4fffbcafa7b.jpg" },
  
  { id: 4, name: "Chanel No. 5", price: 175, category: "Chanel", img: "https://perfumedubai.com/cdn/shop/files/8643C_460x@2x.jpg?v=1728923321" },
  { id: 5, name: "Coco Mademoiselle", price: 160, category: "Chanel", img: "https://rougebeauty.co.za/wp-content/uploads/2018/03/20180303_085820.jpg" },
  { id: 6, name: "Chanel Chance", price: 145, category: "Chanel", img: "https://i.makeupstore.uz/l/ly/lyvowffkx7pp.jpg" },
  
  { id: 7, name: "YSL Libre Intense", price: 155, category: "Libre", img: "https://lifestyleperfume.am/images/product/2241/1631478606-lifestyle%20perfume%20-%202021-09-12T222853.296.jpg" },
  { id: 8, name: "YSL Libre Le Parfum", price: 180, category: "Libre", img: "https://cdn2.emporium.az/i/p/500/312272-d51991d5f1c4dd62d0ace4fffbcafa7b.jpg" },
  { id: 9, name: "YSL Libre Eau de Parfum", price: 130, category: "Libre", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Nwioum1Fik47wig1V-RB0pDn0DIRY3hXVA&s" },
  
  { id: 10, name: "Tiziana Terenzi Kirke", price: 250, category: "Kirke", img: "https://lifestyleperfume.am/images/product/479/1737463697-0007%20(2).webp" },
  { id: 11, name: "Kirke Gold Extrait", price: 280, category: "Kirke", img: "https://hrd-live.cdn.scayle.cloud/images/c2ea49088a382344ea320931483c0be1.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff" },
  { id: 12, name: "Kirke V Canto", price: 210, category: "Kirke", img: "https://osswald.ch/cdn/shop/products/Andromeda_1000x1000.jpg?v=1528109678" }
];

const Shop = ({ onAddToCart, onBuyProduct }) => {
  return (
    <main
      className="page-content page-bg-shop"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 10, 8, 0.72), rgba(13, 10, 8, 0.95)), url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="page-inner">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>The Premium Collection</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '40px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {mockPerfumes.map(perfume => (
          <div key={perfume.id} className="glass-card" style={{ padding: '20px' }}>
            
            <div style={{ overflow: 'hidden', borderRadius: '12px', height: '380px', marginBottom: '20px' }}>
              <img 
                src={perfume.img} 
                alt={perfume.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
                className="perfume-img"
              />
            </div>

            <p style={{ color: '#d4af37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{perfume.category}</p>
            <h3 style={{ margin: '5px 0 10px 0', fontSize: '1.2rem', color: '#fff', fontWeight: '500' }}>{perfume.name}</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: '600', color: '#f5f2eb' }}>${perfume.price}</span>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                
                <button 
                  onClick={() => onAddToCart(perfume)} 
                  className="btn-premium" 
                  style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
                >
                  <ShoppingCart size={14} /> Add
                </button>

                <button 
                  onClick={() => onBuyProduct(perfume)} 
                  className="btn-premium" 
                  style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', background: 'rgba(212,175,55,0.15)', borderColor: '#d4af37' }}
                >
                  <ShoppingBag size={14} color="#d4af37" /> Buy
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
};

export default Shop;