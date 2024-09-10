import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../public/Login.png'; // Adjust the path as necessary

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img src={image} alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Billing-System</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 bg-gray-300 border border-gray-400 rounded-[2.12rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 bg-gray-300 border border-gray-400 rounded-[2.12rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600 hover:text-gray-800">Forgot Password?</div>
              <div className="text-gray-600 hover:text-gray-800">Sign Up</div>
            </div>
            <div className="flex justify-center">
              <Link to="/add-item">
                <button className="overflow-hidden w-48 p-2 h-12 bg-black text-white rounded-[2.12rem] text-xl font-bold cursor-pointer relative z-10 group">
                  LogIn
                  <span className="absolute w-48 h-48 -top-12 -left-4 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
                  <span className="absolute w-48 h-48 -top-12 -left-4 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                  <span className="absolute w-48 h-48 -top-12 -left-4 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="group-hover:opacity-100 duration-1000 opacity-0 absolute top-2 left-10 z-10">
                    Loading...
                  </span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;





