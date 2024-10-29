import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
