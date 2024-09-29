// NPVCalculator.js

import React, { useState } from 'react';

const NPVCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [cashFlows, setCashFlows] = useState([]);
  const [npv, setNpv] = useState(null);

  const addCashFlow = () => {
    setCashFlows([...cashFlows, '']);
  };

  const removeCashFlow = (index) => {
    setCashFlows(cashFlows.filter((_, i) => i !== index));
  };

  const calculateNPV = (e) => {
    e.preventDefault();
    const investment = parseFloat(initialInvestment);
    const rate = parseFloat(discountRate) / 100;

    if (isNaN(investment) || isNaN(rate)) {
      alert('Please enter valid inputs.');
      return;
    }

    let npv = -investment;
    cashFlows.forEach((cashFlow, index) => {
      const flow = parseFloat(cashFlow);
      if (!isNaN(flow)) {
        npv += flow / Math.pow(1 + rate, index + 1);
      }
    });

    setNpv(npv.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Net Present Value (NPV) Calculator
        </h2>
        <p className="text-white text-center mb-8">
  The Net Present Value (NPV) Calculator helps you determine the present value of an investment by discounting future cash flows. Enter the initial investment, discount rate, and expected cash flows to calculate the NPV.
</p>

        <form onSubmit={calculateNPV} className="space-y-4">
          <div>
            <label htmlFor="initialInvestment" className="block text-lg font-medium text-gray-200">Initial Investment (INR):</label>
            <input
              type="number"
              id="initialInvestment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="discountRate" className="block text-lg font-medium text-gray-200">Discount Rate (%):</label>
            <input
              type="number"
              id="discountRate"
              value={discountRate}
              onChange={(e) => setDiscountRate(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <button
              type="button"
              onClick={addCashFlow}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Add Cash Flow
            </button>
          </div>
          <div id="cashFlows" className="space-y-2">
            {cashFlows.map((cashFlow, index) => (
              <div key={index} className="flex items-center space-x-2">
                <label htmlFor={`cashFlow${index}`} className="text-lg font-medium text-gray-200">Year {index + 1}:</label>
                <input
                  type="number"
                  id={`cashFlow${index}`}
                  value={cashFlow}
                  onChange={(e) => {
                    const newCashFlows = [...cashFlows];
                    newCashFlows[index] = e.target.value;
                    setCashFlows(newCashFlows);
                  }}
                  className="bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs"
                />
                <button
                  type="button"
                  onClick={() => removeCashFlow(index)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-md"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
              Calculate NPV
            </button>
          </div>
        </form>
        {npv !== null && (
          <div className="mt-6 text-white text-center">
            <h3 className="text-2xl font-bold">NPV Result:</h3>
            <p>NPV: ₹{npv}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NPVCalculator;
