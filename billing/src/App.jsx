import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItemPage from './components/AddItemPage';
import ItemListPage from './components/ItemListPage';
import HomePage from './components/HomePage'; // Make sure to import HomePage
import Login from './components/LoginPage';
import Sign from './components/SignupCard';

const App = () => {
  const [items, setItems] = useState([]);

  // Define handleAddItem function
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  // Define handleDeleteItem function
  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/add-item" element={<AddItemPage onAddItem={handleAddItem} />} />
        <Route path="/item-list" element={<ItemListPage items={items} onDeleteItem={handleDeleteItem} />} />
      </Routes>
    </Router>
  );
};

export default App;


