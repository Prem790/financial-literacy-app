const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  occupation: { type: String, required: true },
  salaryCurrency: { type: String, required: true },
  salary: { type: Number, required: true },
  monthlyInvestment: { type: Number, required: true },
  investmentType: { type: String, required: true },
  riskTolerance: { type: String, required: true },
  financialKnowledge: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
