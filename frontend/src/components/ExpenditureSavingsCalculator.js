// ExpenditureSavingsCalculator.js

import React, { useState } from 'react';

const ExpenditureSavingsCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenditure, setExpenditure] = useState('');
  const [savings, setSavings] = useState(null);

  const calculateSavings = (e) => {
    e.preventDefault();
    const incomeValue = parseFloat(income);
    const expenditureValue = parseFloat(expenditure);

    if (isNaN(incomeValue) || isNaN(expenditureValue)) {
      alert('Please enter valid numbers for income and expenditure.');
      return;
    }

    setSavings((incomeValue - expenditureValue).toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Expenditure and Savings Calculator
        </h2>
        <p className="text-white text-center mb-8">
  The Expenditure and Savings Calculator helps you track your monthly savings by comparing your income and expenditure. Input your monthly income and expenditure to find out your savings amount.
</p>

        <form onSubmit={calculateSavings} className="space-y-4">
          <div>
            <label htmlFor="income" className="block text-lg font-medium text-gray-200">Monthly Income (INR):</label>
            <input
              type="number"
              id="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="expenditure" className="block text-lg font-medium text-gray-200">Monthly Expenditure (INR):</label>
            <input
              type="number"
              id="expenditure"
              value={expenditure}
              onChange={(e) => setExpenditure(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              Calculate Savings
            </button>
          </div>
        </form>
        {savings !== null && (
          <div className="mt-6 text-white text-center">
            <h3 className="text-2xl font-bold">Savings Amount:</h3>
            <p>₹{savings}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenditureSavingsCalculator;
