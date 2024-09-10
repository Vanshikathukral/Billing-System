// src/pages/AddItemPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddItem from '../components/AddItem';
import Navbar from '../components/navbar';
import BillReport from '../components/BillReport';

const AddItemPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddItem = (item) => {
    setItems([...items, item]);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg max-w-lg">
        <div className="bg-gray-800 text-white p-4 rounded-t-lg">
          <h1 className="text-3xl font-semibold text-center">Add New Item</h1>
        </div>
        <div className="p-6 bg-gray-50 rounded-b-lg">
          <AddItem onAddItem={handleAddItem} />
          {showSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <p className="text-green-600 font-semibold text-lg">Item added successfully!</p>
              </div>
            </div>
          )}
          {items.length > 0 && <BillReport items={items} />}
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;

