import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);

  useEffect(() => {
    console.log("Cart Items:", cartItems); // To verify if items are added
  }, [cartItems]);

  //Calculate discount total(10% discount)
  const discountedTotal = (totalPrice * 0.9).toFixed(2)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border-b pb-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-300 px-2 py-1 rounded-l"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-300 px-2 py-1 rounded-r"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-6">
            Total (after 10% discount): ${discountedTotal}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;