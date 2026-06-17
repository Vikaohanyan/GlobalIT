const Contact = () => {
  return (
    <main
      className="page-content page-bg-contact"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 10, 8, 0.75), rgba(13, 10, 8, 0.95)), url("https://images.unsplash.com/photo-1508385082359-f3b59f11f3f2?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="page-inner">
      <section className="section-block contact-block">
        <div>
          <span className="eyebrow">Contact Us</span>
          <h2>Let's Find Your Next Signature Scent</h2>
          <p>
            Whether you need advice, want a custom recommendation, or have a question about an order,
            our fragrance concierge is here to help.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>
            <p>support@auraperfume.com</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-card">
            <h3>Visit</h3>
            <p>123 Luxury Avenue, Los Angeles, CA</p>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Contact;
