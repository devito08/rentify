import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-900 text-lg font-black mx-14">
          Rentify
        </div>
        <div className="space-x-14 mx-40">
          <Link to="/" className="text-blue-900 font-bold">Home</Link>
          <Link to="/login" className="text-white font-bold hover:text-blue-900">Login</Link>
          <Link to="/register" className="text-white font-bold hover:text-blue-900">Register</Link>
          {/* <Link to="/post-property" className="text-white hover:text-gray-300">Post Property</Link>
          <Link to="/properties" className="text-white hover:text-gray-300">Properties</Link>
          <Link to="/my-properties" className="text-white hover:text-gray-300">My Properties</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
