// src/components/ItemListPage.jsx
import React from 'react';
import ItemList from '../components/ItemList';
import Navbar from '../components/navbar';

const ItemListPage = ({ items, onDeleteItem }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-8">
        {/* <h1 className="text-3xl font-bold mb-4">Item List</h1> */}
        <ItemList items={items} onDeleteItem={onDeleteItem} />
      </div>
    </div>
  );
};

export default ItemListPage;
