// EMI Calculator.js

import React, { useState } from 'react';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [months, setMonths] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    if (principal && interestRate && months) {
      const principalAmount = parseFloat(principal);
      const annualInterestRate = parseFloat(interestRate) / 100;
      const numberOfMonths = parseFloat(months);

      const monthlyInterestRate = annualInterestRate / 12;
      const emiAmount = (principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

      setEmi(emiAmount.toFixed(2));
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          EMI Calculator
        </h2>
        <p className="text-white text-center mb-8">
          Use this EMI Calculator to estimate your monthly payments for a loan. Enter the principal amount, annual interest rate, and loan tenure to calculate your EMI.
        </p>
        <form onSubmit={calculateEMI} className="space-y-4">
          <div>
            <label htmlFor="principal" className="block text-lg font-medium text-gray-200">Principal Amount (INR):</label>
            <input
              type="number"
              id="principal"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="interest-rate" className="block text-lg font-medium text-gray-200">Annual Interest Rate (%):</label>
            <input
              type="number"
              step="0.01"
              id="interest-rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="months" className="block text-lg font-medium text-gray-200">Number of Months:</label>
            <input
              type="number"
              id="months"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              Calculate EMI
            </button>
          </div>
        </form>
        {emi && (
          <div className="mt-6 text-white text-center">
            <h3 className="text-2xl font-bold">Monthly EMI:</h3>
            <p>₹ {emi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
