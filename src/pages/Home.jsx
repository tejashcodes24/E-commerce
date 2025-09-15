import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999, image: "https://via.placeholder.com/300" },
    { id: 2, name: "Smart Watch", price: 3499, image: "https://via.placeholder.com/300" },
    { id: 3, name: "Gaming Mouse", price: 1299, image: "https://via.placeholder.com/300" },
    { id: 4, name: "Bluetooth Speaker", price: 2499, image: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">Featured Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
