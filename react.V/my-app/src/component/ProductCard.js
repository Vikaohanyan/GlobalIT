function ProductCard({ name, price, category, inStock }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>

      {inStock ? (
        <button>Buy Now</button>
      ) : (
        <p style={{ color: "red" }}>Out of Stock</p>
      )}
    </div>
  );
}

export default ProductCard;