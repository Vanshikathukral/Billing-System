import React from 'react';
import BarChart from './BarChart';
 // Import the Navbar component

const ItemList = ({ items = [], onDeleteItem }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="bg-white p-4 shadow-md rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center bg-gray-800 text-white p-2 rounded-t-lg">Items List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Product</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
              <th className="py-2 px-4 border-b text-left">Quantity</th>
              <th className="py-2 px-4 border-b text-left">Total</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-2 px-4 text-center">No items found</td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.itemName}</td>
                  <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{item.quantity}</td>
                  <td className="py-2 px-4 border-b">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => onDeleteItem(index)}
                      className="bg-red-500 text-white p-1 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="container mx-auto mt-8 p-4">
        <BarChart data={items} /> {/* Pass items data to BarChart */}
      </div>
    </div>
  );
};

export default ItemList;




