import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <img src={product.image} alt={product.title} className="h-80 mx-auto mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-purple-400 hover:bg-purple-600 text-white px-6 py-2 mt-4 rounded shadow-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;