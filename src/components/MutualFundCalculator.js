import React, { useState } from 'react';

function MutualFundCalculator() {
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [returnRate, setReturnRate] = useState('');
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    let amountValue = parseFloat(amount.replace(/,/g, ''));
    if (isNaN(amountValue) || amountValue <= 0) {
      alert('Please enter a valid positive investment amount.');
      return;
    }

    let yearsValue = parseFloat(years);
    if (isNaN(yearsValue) || yearsValue <= 0) {
      alert('Please enter a valid positive number of years.');
      return;
    }

    let returnRateValue = parseFloat(returnRate);
    if (isNaN(returnRateValue) || returnRateValue <= 0) {
      alert('Please enter a valid positive return rate.');
      return;
    }

    let wealthGained = 0;
    let total = 0;
    let maturityValue = 0;

    if (checked) {
      wealthGained = Math.round(
        ((Math.pow(1 + (Math.pow(1 + returnRateValue / 100, 1 / 12) - 1), yearsValue * 12) - 1) /
          (Math.pow(1 + returnRateValue / 100, 1 / 12) - 1)) *
          amountValue
      );
      total = amountValue * 12 * yearsValue;
    } else {
      total = amountValue;
      wealthGained = Math.round(Math.pow(1 + returnRateValue / 100, yearsValue) * amountValue);
    }

    maturityValue = wealthGained - total;
    setResult({
      total: total.toLocaleString(),
      wealthGained: wealthGained.toLocaleString(),
      maturityValue: maturityValue.toLocaleString()
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="mutual-fund-calculator bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Mutual Fund Investment Calculator</h2>
        <p className="text-white text-center mb-8">
          Calculate your potential wealth gained from a mutual fund investment. Enter the investment amount, duration, and expected annual return rate.
        </p>
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-lg font-medium text-gray-200">Investment Amount:</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="years" className="block text-lg font-medium text-gray-200">Number of Years:</label>
            <input
              type="number"
              id="years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="return-rate" className="block text-lg font-medium text-gray-200">Expected Return Rate (%):</label>
            <input
              type="number"
              id="return-rate"
              value={returnRate}
              onChange={(e) => setReturnRate(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="savings" className="text-gray-200 mr-2">Savings</label>
            <input
              type="radio"
              id="savings"
              name="investment-type"
              value="savings"
              checked={!checked}
              onChange={() => setChecked(false)}
              className="form-radio"
            />
            <label htmlFor="sip" className="text-gray-200 ml-4 mr-2">SIP</label>
            <input
              type="radio"
              id="sip"
              name="investment-type"
              value="sip"
              checked={checked}
              onChange={() => setChecked(true)}
              className="form-radio"
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
            <p>Total Investment: ₹ {result.total}</p>
            <p>Wealth Gained: ₹ {result.wealthGained}</p>
            <p>Maturity Value: ₹ {result.maturityValue}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MutualFundCalculator;
