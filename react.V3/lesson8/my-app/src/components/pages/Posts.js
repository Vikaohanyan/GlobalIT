import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Recent Posts</h1>
      <div style={styles.grid}>
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id} style={styles.cardLink}>
            <div style={styles.card}>
              <div style={styles.cardTop}>
                <span style={styles.postBadge}>Post #{post.id}</span>
              </div>
              <h3 style={styles.title}>{post.title}</h3>
              <p style={styles.body}>{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#fafcf8',
    minHeight: 'calc(100vh - 65px)',
  },
  mainTitle: {
    textAlign: 'center',
    color: '#0f172a',
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '35px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, boxShadow 0.2s ease',
  },
  cardTop: {
    marginBottom: '14px',
  },
  postBadge: {
    backgroundColor: 'hsl(47, 85%, 95%)',
    color: 'hsl(47, 85%, 41%)', 
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
  },
  title: {
    fontSize: '18px',
    color: '#1e293b',
    fontWeight: '700',
    lineHeight: '1.4',
    margin: '0 0 12px 0',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  body: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
};

export default Posts;