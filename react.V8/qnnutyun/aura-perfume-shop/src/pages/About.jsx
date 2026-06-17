const About = () => {
  return (
    <main
      className="page-content page-bg-about"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 10, 8, 0.75), rgba(13, 10, 8, 0.95)), url("https://images.unsplash.com/photo-15283366602-b53c39ea0f91?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="page-inner">
      <section className="section-block about-block">
        <div>
          <span className="eyebrow">About Aura</span>
          <h2>Our Signature Fragrance House</h2>
          <p>
            Aura Perfume blends iconic heritage brands with contemporary luxury to bring
            you the finest scent selections. Each fragrance is chosen for its depth,
            character, and ability to make every moment feel extraordinary.
          </p>
        </div>

        <div className="about-features">
          <div>
            <h3>Crafted for Elegance</h3>
            <p>Rich accords, sophisticated ingredients, and memorable sillage.</p>
          </div>
          <div>
            <h3>Curated Collection</h3>
            <p>From classic signatures to limited editions, your perfect scent awaits.</p>
          </div>
          <div>
            <h3>Artful Service</h3>
            <p>Dedicated customer care with personalized fragrance recommendations.</p>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default About;
