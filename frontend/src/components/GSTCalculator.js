import React, { useState } from 'react';

function GSTCalculator() {
  const [mode, setMode] = useState('exclusive');
  const [amount, setAmount] = useState('');
  const [taxSlab, setTaxSlab] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);
    const taxRate = parseFloat(taxSlab) / 100;
    let totalGst = 0;
    let postGstAmount = 0;

    if (mode === 'exclusive') {
      totalGst = amountValue * taxRate;
      postGstAmount = amountValue + totalGst;
    } else {
      postGstAmount = amountValue;
      totalGst = postGstAmount * taxRate;
      postGstAmount = postGstAmount - totalGst;
    }

    setResult({ totalGst, postGstAmount });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="gst-calculator bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Goods and Service Tax (GST) Calculator
        </h2>
        <p className="text-white text-center mb-8">
          The GST Calculator helps you determine the Goods and Services Tax (GST) payable on your purchases or sales.
          Select the calculation mode, enter the amount, and the tax slab percentage to get the total GST and the amount
          inclusive or exclusive of GST.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="mode" className="block text-lg font-medium text-gray-200">Mode:</label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
            >
              <option value="exclusive">Exclusive of GST</option>
              <option value="inclusive">Inclusive of GST</option>
            </select>
          </div>
          <div>
            <label htmlFor="amount" className="block text-lg font-medium text-gray-200">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="tax-slab" className="block text-lg font-medium text-gray-200">Tax Slab (%):</label>
            <input
              type="number"
              id="tax-slab"
              value={taxSlab}
              onChange={(e) => setTaxSlab(e.target.value)}
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
            <p>Total GST: ₹ {result.totalGst.toFixed(2)}</p>
            <p>Post GST Amount: ₹ {result.postGstAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GSTCalculator;
