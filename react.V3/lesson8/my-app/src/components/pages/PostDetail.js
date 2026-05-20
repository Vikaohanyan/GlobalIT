import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p style={{ textAlign: 'center', padding: '25px' }}>Բեռնվում է...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <div style={styles.topRow}>
          <button style={styles.backButton} onClick={() => navigate('/posts')}>
            &larr; Հետ դեպի Պոստեր
          </button>
          <div style={styles.userBadge}>
            User ID: {post.userId}
          </div>
        </div>

        <h2 style={styles.title}>{post.title}</h2>
        
        <div style={styles.divider}></div>
        
        <p style={styles.body}>{post.body}</p>
        
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 65px)',
    backgroundColor: '#f8fafc',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '35px',
    maxWidth: '650px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    border: '1px solid #f1f5f9',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  backButton: {
    backgroundColor: 'hsl(47, 85%, 41%)', 
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(174, 142, 27, 0.2)',
  },
  userBadge: {
    backgroundColor: 'hsl(47, 85%, 95%)',
    color: 'hsl(47, 85%, 41%)',        
    padding: '6px 14px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '24px',
    color: '#1e293b',
    fontWeight: '800',
    lineHeight: '1.4',
    margin: '0 0 20px 0',
    textTransform: 'capitalize',
  },
  divider: {
    height: '1px',
    backgroundColor: '#f1f5f9',
    margin: '0 0 20px 0',
  },
  body: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: '1.7',
    margin: 0,
  },
};

export default PostDetail;