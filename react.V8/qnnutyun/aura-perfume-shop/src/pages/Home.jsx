import { Link } from 'react-router-dom';

const heroCards = [
  {
    title: 'Tom Ford Lost Cherry',
    description: 'A seductive blend of black cherry, almond, and jasmine petals.',
    price: '$395',
    image: 'https://lifestyleperfume.am/images/product/2231/1631282715-lifestyle%20perfume%20(45).jpg'
  },
  {
    title: 'Chanel No. 5',
    description: 'An elegant floral aldehyde with timeless sophistication.',
    price: '$175',
    image: 'https://perfumedubai.com/cdn/shop/files/8643C_460x@2x.jpg?v=1728923321'
  },
  {
    title: 'YSL Libre Intense',
    description: 'A bold and luminous composition with orange blossom and lavender.',
    price: '$155',
    image: 'https://lifestyleperfume.am/images/product/2241/1631478606-lifestyle%20perfume%20-%202021-09-12T222853.296.jpg'
  }
];

const Home = () => {
  return (
    <main
      className="page-content page-bg-home"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 10, 8, 0.7), rgba(13, 10, 8, 0.9)), url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="page-inner">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Luxurious scent curation</span>
          <h1>AURA PERFUME</h1>
          <p>Discover premium fragrances that inspire confidence, elegance, and unforgettable moments.</p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-premium">Shop the Collection</Link>
            <Link to="/about" className="btn-secondary">Our Story</Link>
          </div>
        </div>

        <div className="hero-gallery">
          {heroCards.map((card, index) => (
            <article key={index} className="hero-card">
              <img src={card.image} alt={card.title} />
              <div className="hero-card-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span>{card.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Why Choose Aura</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Exclusive Selection</h3>
            <p>Handpicked perfumes from world-renowned luxury houses and artisanal brands.</p>
          </div>
          <div className="feature-item">
            <h3>Premium Presentation</h3>
            <p>Glass bottles, velvet boxes, and gilded accents crafted for a high-end experience.</p>
          </div>
          <div className="feature-item">
            <h3>Delivered With Care</h3>
            <p>Fast shipping with elegant packaging designed to delight from the moment it arrives.</p>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Home;
