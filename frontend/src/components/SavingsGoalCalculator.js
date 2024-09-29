// SavingsGoalCalculator.js

import React, { useState } from 'react';

const SavingsGoalCalculator = () => {
  const [goalAmount, setGoalAmount] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [result, setResult] = useState('');

  const calculateSavings = (e) => {
    e.preventDefault();
    const goal = parseFloat(goalAmount);
    const current = parseFloat(currentSavings);
    const period = parseInt(timePeriod);

    if (isNaN(goal) || isNaN(current) || isNaN(period)) {
      setResult('Please fill in all fields correctly.');
      return;
    }

    if (goal <= current) {
      setResult('You have already reached your savings goal!');
      return;
    }

    const amountNeeded = goal - current;
    const monthlySavings = amountNeeded / period;
    setResult(`You need to save ₹${monthlySavings.toFixed(2)} per month to reach your goal.`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Savings Goal Calculator
        </h2>
        <p className="text-white text-center mb-8">
  The Savings Goal Calculator helps you plan and achieve your financial goals. Enter your target savings amount, current savings, and the time period to find out how much you need to save each month to reach your goal.
</p>

        <form onSubmit={calculateSavings} className="space-y-4">
          <div>
            <label htmlFor="goalAmount" className="block text-lg font-medium text-gray-200">Savings Goal Amount (INR):</label>
            <input
              type="number"
              id="goalAmount"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="currentSavings" className="block text-lg font-medium text-gray-200">Current Savings (INR):</label>
            <input
              type="number"
              id="currentSavings"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="timePeriod" className="block text-lg font-medium text-gray-200">Time Period (Months):</label>
            <input
              type="number"
              id="timePeriod"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              Calculate
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

export default SavingsGoalCalculator;
