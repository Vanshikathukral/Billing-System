import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../public/Login.png'; // Adjust the path as necessary


const SignupPage = () => {
  return (
    <div className="flex justify-center items-center h-screen  bg-black"> {/* Same background as Login */}
      {/* <div className="flex max-w-4xl w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">
        
        <div className="w-1/2">
          <img src={image} alt="Signup" className="w-full h-full object-cover" />
        </div> */}

        {/* Right Side - Signup Form */}
        <div className="w-1/3 p-8 border rounded-xl mb-14 bg-gray-200">
          <h2 className="text-4xl font-bold text-black font-serif mb-6 text-center">System-Billing</h2> {/* Matching title with Login */}
          <form>
            <div className="mb-4">
              <label htmlFor="first-name" className="block font-serif text-black">Name:</label> {/* Matching label style */}
              <input
                type="text"
                id="first-name"
                placeholder='Enter name here!'
                className="w-full px-4 py-2 mt-2 bg-gray-200 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-serif text-black">Email:</label> {/* Matching label style */}
              <input
                type="email"
                id="email"
                placeholder='Enter email here!'
                className="w-full px-4 py-2 mt-2 bg-gray-200 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-serif text-black">Password:</label> {/* Matching label style */}
              <input
                type="password"
                id="password"
                placeholder='Enter password here!'
                className="w-full px-4 py-2 mt-2 bg-gray-200 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="pet-name" className="block font-serif text-black">Security Key:</label> {/* Matching label style */}
              <input
                type="text"
                id="pet-name"
                placeholder='Enter key here!'
                className="w-full px-4 py-2 mt-2 bg-gray-200 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-300"  
                required
              />
            </div>
            <div className="flex justify-end text-bold "> 
              <Link to="/login">
              <div className="text-black text-xl border border-gray-800 bg-gray-400 rounded-lg p-1 hover:text-gray-500 font-serif cursor-pointer">login</div> {/* Updated text color */}
            </Link></div>
            <div className="flex justify-center">
              <Link to="/home">
                <button className="overflow-hidden w-40 p-2 h-12 border border-black bg-gray-400 font-serif text-black hover:text-gray-600 rounded-lg text-xl font-bold cursor-pointer relative z-10 group">
                  SignUp
                </button>
              </Link>
            </div>
          </form>
        </div>
      {/* </div> */}
    </div>
  );
};

export default SignupPage;