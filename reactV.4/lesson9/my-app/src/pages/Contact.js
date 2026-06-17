import React from 'react';

function Contact() {
  return (
    <div style={{ maxWidth: '500px', margin: '60px auto', padding: '30px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
      <h2 style={{ fontWeight: '300', textAlign: 'center', marginBottom: '20px' }}>ԿԱՊ ՄԵԶ ՀԵՏ</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Ձեր Անունը" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
        <input type="email" placeholder="Էլ. Փոստ" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
        <textarea placeholder="Հաղորդագրություն" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', height: '100px' }}></textarea>
        <button style={{ padding: '12px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Ուղարկել</button>
      </form>
    </div>
  );
}

export default Contact;