import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import image from '../../public/finance.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col"> {/* Light Gray background */}
      <Navbar />
    <div className='bg-black min-h-screen'>
  <div className=''>
    <div className='pt-[150px]'>
      <div className='flex items-center justify-center text-6xl font-serif mr-24 text-white'>
        <p className='mx-4 text-gray-600'>Think</p> 
        <span className='text-[#a388e9]'>per</span>
        <p className='text-[#45225a99]'>sonal</p>
        <p className='text-[#af4de8] mx-4'>Billing</p>
        <p className='text-gray-600'>System </p>
      </div>
      <div className="text-center text-xl font-serif text-gray-400 mt-10">
        Remember everything you talked about with the people you met and<br />
        grow your network in a good way
      </div>
    </div>

    {/* Email input and Book Show button */}
    <div className='text-center mt-12'>
      <input
        className='py-3 px-10 font-serif border border-black rounded-xl  mr-7 pr-14 text-center text-black bg-white'
        type='email'
        placeholder='Email Address'
      />
      
      <Link to="/add-item"
        className='absolute px-6 py-3 bg-[#af4de8] text-white border border-white rounded-xl'>
        login
      </Link>
    </div>
  </div>

 

  {/* Reviews Section */}
  <div className='flex justify-center items-center mb-9 text-white mt-[150px]'>
    <p className=' w-full text-center py-3 text-3xl font-serif  '>
      Reviews
    </p>
  </div>

  <div className='flex justify-between space-x-4'>
    <div className='h-45 w-1/4 text-center text-gray-300 font-serif border rounded-xl border-gray-600'>
      <p className='mt-4'>"I've been using this billing platform for months now, and I couldn't be happier.
      The interface is clean, and it's super easy to find and book billing for events."</p>
      <br />
      <p className='text-gray-400'>From: Henry (U.S.A)</p>
    </div>

    {/* Repeat for other reviews */}
    <div className='h-45 w-1/4 text-center text-gray-300 font-serif border rounded-xl border-gray-600'>
      <p className='mt-4'>"I've been using this billing  platform for months now, and I couldn't be happier. The interface is clean, and it's super easy to find and book billing  and events."</p>
      <br />
      <p className='text-gray-400'>From: Cavin (U.S.A)</p>
    </div>

    <div className='h-45 w-1/4 text-center text-gray-300 font-serif border rounded-xl border-gray-600'>
      <p className='mt-4'>"I've been using this billing  platform for months now, and I couldn't be happier. The interface is clean, and it's super easy to find and book billing for  events."</p>
      <br />
      <p className='text-gray-400'>From: Alexa (U.S.A)</p>
    </div>

    <div className='h-45 w-1/4 text-center text-gray-300 font-serif border rounded-xl border-gray-600'>
      <p className='mt-4'>"I've been using this billing  platform for months now, and I couldn't be happier. The interface is clean, and it's super easy to find and book billing  and events."</p>
      <br />
      <p className='text-gray-400'>From: Sam (U.S.A)</p>
    </div>
  </div>

  {/* Footer */}
  <footer className="flex flex-col items-center justify-center mt-20">
    <div className="h-full w-full bg-gradient-to-b from-[#af4de8] to-[#d5c8f5] text-white border border-gray-600 rounded-xl flex flex-col items-center justify-center font-serif p-6">
      <div className="text-4xl font-bold mt-10">Be the first to get access</div>
      <div className="text-xl mt-4 text-center font-serif text-gray-200">
        You can't wait any longer, just like us?<br />
        Then sign up to our waitlist to be one of the billing users.
      </div>

      <div className='text-center mt-12'>
        <input
          className='py-3 px-10 font-serif mr-3 rounded-xl pr-14 text-center text-white bg-[#191919]'
          type='Email'
          placeholder='Email Address'
        />
        <Link to="Concert/:id"
          className='px-6 py-4 bg-[#131314] text-white rounded-xl'>
          Join Waitlist
        </Link>
      </div>

      <hr className="w-full border-gray-900 mt-6" />
      <div className="w-full text-white font-serif flex mt-6">
        <p className='w-full text-left text-[#131314] text-3xl'>
          Smart Billing
          <br />
          <span className='text-xl'>@ 2024</span>
        </p>
        <p className='w-full text-right text-[#131314]'>
          <Link to="contact">Contact us: info@billing.com</Link>
          <br />Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  </footer>
      </div>
    </div>
  );
};

export default HomePage;



