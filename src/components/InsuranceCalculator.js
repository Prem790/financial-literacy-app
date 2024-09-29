// InsuranceCalculator.js

import React, { useState } from 'react';

const InsuranceCalculator = () => {
  const [sumAssured, setSumAssured] = useState('');
  const [policyTerm, setPolicyTerm] = useState('');
  const [annualPremium, setAnnualPremium] = useState('');
  const [reversionaryBonus, setReversionaryBonus] = useState('');
  const [terminalBonus, setTerminalBonus] = useState('');
  const [surrendered, setSurrendered] = useState(false);
  const [death, setDeath] = useState(false);
  const [result, setResult] = useState({});

  const calculateInsurance = (e) => {
    e.preventDefault();
    const sumAssuredAmount = parseFloat(sumAssured);
    const policyTermValue = parseFloat(policyTerm);
    const annualPremiumValue = parseFloat(annualPremium);
    const reversionaryBonusValue = parseFloat(reversionaryBonus);
    const terminalBonusValue = parseFloat(terminalBonus);

    if (isNaN(sumAssuredAmount) || isNaN(policyTermValue) || isNaN(annualPremiumValue) || isNaN(reversionaryBonusValue) || isNaN(terminalBonusValue)) {
      alert('Please enter valid numbers.');
      return;
    }

    let reversionaryBonusAmt = (reversionaryBonusValue / 100) * sumAssuredAmount * policyTermValue;
    let terminalBonusAmt = (terminalBonusValue / 100) * sumAssuredAmount;
    let totalBonus;
    let maturityAmt;
    let totalPremium = annualPremiumValue * policyTermValue;
    let netGain;

    if (surrendered) {
      totalBonus = reversionaryBonusAmt;
      terminalBonusAmt = 0;
      maturityAmt = sumAssuredAmount + totalBonus;
      netGain = maturityAmt - totalPremium;
    } else {
      totalBonus = reversionaryBonusAmt + terminalBonusAmt;
      maturityAmt = sumAssuredAmount + totalBonus;
      netGain = maturityAmt - totalPremium;
    }

    setResult({
      reversionaryBonusAmt: reversionaryBonusAmt.toFixed(2),
      terminalBonusAmt: terminalBonusAmt.toFixed(2),
      totalBonus: totalBonus.toFixed(2),
      totalPremium: totalPremium.toFixed(2),
      netGain: netGain.toFixed(2),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Insurance Calculator
        </h2>
        <p className="text-white text-center mb-8">
  The Insurance Calculator assists you in estimating the maturity value of your insurance policy, including bonuses and death benefits. Provide details like the annual premium, policy term, and sum assured to calculate the total benefits.
</p>

        <form onSubmit={calculateInsurance} className="space-y-4">
          <div>
            <label htmlFor="sumAssured" className="block text-lg font-medium text-gray-200">Sum Assured (INR):</label>
            <input
              type="number"
              id="sumAssured"
              value={sumAssured}
              onChange={(e) => setSumAssured(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="policyTerm" className="block text-lg font-medium text-gray-200">Policy Term (Years):</label>
            <input
              type="number"
              id="policyTerm"
              value={policyTerm}
              onChange={(e) => setPolicyTerm(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="annualPremium" className="block text-lg font-medium text-gray-200">Annual Premium (INR):</label>
            <input
              type="number"
              id="annualPremium"
              value={annualPremium}
              onChange={(e) => setAnnualPremium(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="reversionaryBonus" className="block text-lg font-medium text-gray-200">Reversionary Bonus (%):</label>
            <input
              type="number"
              id="reversionaryBonus"
              value={reversionaryBonus}
              onChange={(e) => setReversionaryBonus(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <label htmlFor="terminalBonus" className="block text-lg font-medium text-gray-200">Terminal Bonus (%):</label>
            <input
              type="number"
              id="terminalBonus"
              value={terminalBonus}
              onChange={(e) => setTerminalBonus(e.target.value)}
              className="block w-full mt-1 bg-gray-700 border-gray-600 text-white rounded-md shadow-sm max-w-xs mx-auto"
              required
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="surrendered"
              checked={surrendered}
              onChange={(e) => setSurrendered(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="surrendered" className="text-gray-200">Surrendered</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="death"
              checked={death}
              onChange={(e) => setDeath(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="death" className="text-gray-200">Death Benefit</label>
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
            <p>Reversionary Bonus: ₹{result.reversionaryBonusAmt}</p>
            <p>Terminal Bonus: ₹{result.terminalBonusAmt}</p>
            <p>Total Bonus: ₹{result.totalBonus}</p>
            <p>Total Premium: ₹{result.totalPremium}</p>
            <p>Net Gain: ₹{result.netGain}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsuranceCalculator;
