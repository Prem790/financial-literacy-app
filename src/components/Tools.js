// Tools.js

import React from 'react';
import GSTCalculator from './GSTCalculator';
import IncomeTaxCalculator from './IncomeTaxCalculator';
import MutualFundCalculator from './MutualFundCalculator';
import EMICalculator from './EMICalculator';
import InsuranceCalculator from './InsuranceCalculator';
import NPVCalculator from './NPVCalculator';
import ROICalculator from './ROICalculator';
import ProfitMarginCalculator from './ProfitMarginCalculator';
import ExpenditureSavingsCalculator from './ExpenditureSavingsCalculator';
import SavingsGoalCalculator from './SavingsGoalCalculator';

function Tools() {
  return (
    <div className="tools-page container mx-auto p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Financial Tools</h1>
      <div id="gst-calculator-section">
        <GSTCalculator />
      </div>
      <div id="income-tax-calculator-section" className="mt-10">
        <IncomeTaxCalculator />
      </div>
      <div id="mutual-fund-calculator-section" className='mt-10'>
        <MutualFundCalculator/>
      </div>
      <div id="savings-goal-calculator-section" className='mt-10'>
        <EMICalculator/>
      </div>
      <div id="insurance-calculator-section" className='mt-10'>
        <SavingsGoalCalculator/>
      </div>
      <div id="insurance-calculator-section" className='mt-10'>
        <InsuranceCalculator/>
      </div>
      <div id="npv-calculator-section" className='mt-10'>
        <NPVCalculator/>
      </div>
      <div id="roi-calculator-section" className='mt-10'>
        <ROICalculator/>
      </div>
      <div id="profit-margin-calculator-section" className='mt-10'>
        <ProfitMarginCalculator/>
      </div>
      <div id="expenditure-savings-calculator-section" className='mt-10'>
        <ExpenditureSavingsCalculator/>
      </div>
    </div>
  );
}

export default Tools;
