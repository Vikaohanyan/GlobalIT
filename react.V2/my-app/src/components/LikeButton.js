import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="like-btn" onClick={() => setLiked(!liked)}>
      <span className={`heart-icon ${liked ? 'active' : ''}`}>
        {liked ? '❤️' : '🤍'}
      </span>
      <span style={{ color: liked ? '#e74c3c' : '#555', fontWeight: '500' }}>
      </span>
    </div>
  );
};
export default LikeButton;