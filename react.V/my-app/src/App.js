import ProductCard from "./component/ProductCard";
import ProfileCard from "./component/ProfileCard";

function App() {
  const products = [
    { id: 1, name: "Phone", price: 500, category: "Tech", inStock: true },
    { id: 2, name: "Laptop", price: 1200, category: "Tech", inStock: false },
    { id: 3, name: "Shoes", price: 80, category: "Fashion", inStock: true },
    { id: 4, name: "Watch", price: 200, category: "Accessories", inStock: true },
    { id: 5, name: "Headphones", price: 150, category: "Tech", inStock: false },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          category={p.category}
          inStock={p.inStock}
        />
      ))}

      <h1>Profiles</h1>

      <ProfileCard
        name="Anna"
        bio="Frontend Developer"
        followers={1500}
      />
    </div>
  );
}

export default App;
