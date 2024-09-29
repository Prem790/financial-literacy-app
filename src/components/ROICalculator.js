// ROICalculator.js

import React, { useState } from 'react';

const ROICalculator = () => {
  const [invested, setInvested] = useState('');
  const [returned, setReturned] = useState('');
  const [result, setResult] = useState('');

  const calculateROI = (e) => {
    e.preventDefault();
    const investedAmount = parseFloat(invested);
    const returnedAmount = parseFloat(returned);

    if (isNaN(investedAmount) || isNaN(returnedAmount)) {
      setResult('Please enter valid numbers.');
      return;
    }

    const gain = returnedAmount - investedAmount;
    const roi = ((gain / investedAmount) * 100).toFixed(2);
    setResult(`Gain: ₹${gain.toFixed(2)} | ROI: ${roi}%`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Return on Investment (ROI) Calculator
        </h2>
        <p className="text-white text-center mb-8">
  The Return on Investment (ROI) Calculator helps you measure the profitability of an investment. Enter the invested amount and the returned amount to calculate the gain and ROI percentage.
</p>

        <form onSubmit={calculateROI} className="space-y-4">
          <div>
            <label htmlFor="invested" className="block text-lg font-medium text-gray-200">Amount Invested (INR):</label>
            <input
              type="number"
              id="invested"
              value={invested}
              onChange={(e) => setInvested(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="returned" className="block text-lg font-medium text-gray-200">Amount Returned (INR):</label>
            <input
              type="number"
              id="returned"
              value={returned}
              onChange={(e) => setReturned(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              Calculate ROI
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

export default ROICalculator;
