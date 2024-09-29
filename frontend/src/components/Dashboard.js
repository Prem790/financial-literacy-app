import React from 'react';
import { motion } from 'framer-motion';

function Dashboard() {
  // Assuming we have some user data
  const userData = {
    name: 'John Doe',
    balance: 10000,
    investmentValue: 15000,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Welcome, {userData.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Account Balance</h3>
          <p className="text-2xl text-green-500">${userData.balance.toFixed(2)}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Investment Value</h3>
          <p className="text-2xl text-blue-500">${userData.investmentValue.toFixed(2)}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Invest</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Withdraw</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;