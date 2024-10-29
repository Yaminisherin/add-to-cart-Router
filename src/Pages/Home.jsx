import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 mx-auto mb-2" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-purple-500 mt-2 block">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
