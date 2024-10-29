import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-400 p-8 text-white t ">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-4xl font-bold ">Cartify</Link>
        <div>
          <Link to="/cart" className=" container mr-4  text-2xl  font-bold">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

