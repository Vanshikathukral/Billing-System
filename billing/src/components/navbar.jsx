import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        <Link to="/home">
        Smart Billing
        </Link>
      </div>
      <div className="space-x-4 flex">
        <Link to="/" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition duration-300">
          Home
        </Link>
        <Link to="/add-item" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition duration-300">
          Add Item
        </Link>
        <Link to="/item-list" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition duration-300">
          Item List
        </Link>
        <Link to="/login" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition duration-300">
          Login
        </Link>
        <Link to="/sign" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition duration-300">
          SignUp
        </Link>
        {/* <Link to="/settings" className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition duration-300">
          Settings
        </Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
