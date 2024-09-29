// ProfitMarginCalculator.js

import React, { useState } from 'react';

const ProfitMarginCalculator = () => {
  const [cost, setCost] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [result, setResult] = useState('');

  const calculateProfitMargin = (e) => {
    e.preventDefault();
    const costValue = parseFloat(cost);
    const sellingPriceValue = parseFloat(sellingPrice);

    if (isNaN(costValue) || isNaN(sellingPriceValue) || costValue <= 0 || sellingPriceValue <= 0) {
      setResult('Please enter valid positive numbers for cost and selling price.');
      return;
    }

    const profit = sellingPriceValue - costValue;
    const profitMargin = ((profit / sellingPriceValue) * 100).toFixed(2);
    setResult(`Profit Margin: ${profitMargin}%`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Profit Margin Calculator
        </h2>
        <p className="text-white text-center mb-8">
  The Profit Margin Calculator helps you calculate the profitability of a product or service. Enter the cost price and selling price to determine the profit margin percentage.
</p>

        <form onSubmit={calculateProfitMargin} className="space-y-4">
          <div>
            <label htmlFor="cost" className="block text-lg font-medium text-gray-200">Cost Price (INR):</label>
            <input
              type="number"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="selling-price" className="block text-lg font-medium text-gray-200">Selling Price (INR):</label>
            <input
              type="number"
              id="selling-price"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              Calculate Profit Margin
            </button>
          </div>
        </form>
        {result && (
          <div className="mt-6 text-white text-center">
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfitMarginCalculator;
