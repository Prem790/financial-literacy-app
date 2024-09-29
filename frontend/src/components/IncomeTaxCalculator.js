import React, { useState } from 'react';

function IncomeTaxCalculator() {
  const [income, setIncome] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const incomeValue = parseFloat(income);
    const taxRateValue = parseFloat(taxRate) / 100;

    if (isNaN(incomeValue) || isNaN(taxRateValue)) {
      alert('Please enter valid numbers');
      return;
    }

    const incomeTax = incomeValue * taxRateValue;
    const realIncome = incomeValue - incomeTax;

    setResult({ incomeTax, realIncome });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="income-tax-calculator bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Income Tax Calculator
        </h2>
        <p className="text-white text-center mb-8">
          The Income Tax Calculator helps you estimate the tax you need to pay based on your annual income and the tax rate. Enter your income and the applicable tax rate to find out the income tax and your real income after tax.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="income" className="block text-lg font-medium text-gray-200">Income:</label>
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
            <label htmlFor="tax-rate" className="block text-lg font-medium text-gray-200">Tax Rate (%):</label>
            <input
              type="number"
              id="tax-rate"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
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
            <h3 className="text-2xl font-bold">Result:</h3>
            <p>Income Tax: ₹ {result.incomeTax?.toFixed(2)}</p>
            <p>Real Income: ₹ {result.realIncome?.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default IncomeTaxCalculator;
