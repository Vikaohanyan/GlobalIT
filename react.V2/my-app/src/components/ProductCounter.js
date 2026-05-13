import React, { useState } from 'react';

const ProductCounter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="counter-wrapper">
      <button className="count-btn" onClick={() => count > 1 && setCount(count - 1)}>−</button>
      <span className="count-number">{count}</span>
      <button className="count-btn" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
export default ProductCounter;