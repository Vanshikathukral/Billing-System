import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (itemName && price && quantity) {
      try {
        const response = await axios.post('http://localhost:3000/api/items', {
          itemName,
          price: parseFloat(price),
          quantity: parseInt(quantity),
        });
        console.log('Item added:', response.data);
        setItemName('');
        setPrice('');
        setQuantity('');
      } catch (err) {
        console.error('Error adding item:', err);
      }
    }
  };

  return (
    <div className=''>
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <Link to="/item-list">
        Add Item
        </Link>
      </button>
    </form>
    </div>
  );
};

export default AddItem;



