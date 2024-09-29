import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { FaUser, FaLock, FaEnvelope, FaBriefcase, FaRupeeSign, FaDollarSign, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import axios from 'axios';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    salaryCurrency: 'INR',
    salary: '',
    monthlyInvestment: '',
    investmentType: 'short-term',
    riskTolerance: 'safe',
    financialKnowledge: 0,
    email: '',
    password: ''
  });
  const [currencySymbol, setCurrencySymbol] = useState('₹'); // INR symbol by default

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'salaryCurrency') {
      setCurrencySymbol(value === 'USD' ? '$' : '₹');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Registration successful!');
        navigate('/login'); // Redirect to login or another route
      } else {
        toast.error(result.message || 'Registration failed.');
      }
    } catch (error) {
      toast.error('An error occurred.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 p-6 bg-gray-800 rounded-lg shadow-lg"
    >
      <Toaster />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        {!isLogin && (
          <>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-gray-700 rounded"
              />
            </div>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-gray-700 rounded"
              />
            </div>
            <div className="relative">
              <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
              <select
                name="occupation"
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 bg-gray-700 rounded"
              >
                <option value="">Select Occupation</option>
                <option value="student">Student</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                {currencySymbol === '₹' ? <FaRupeeSign className="absolute left-3 top-3 text-gray-400" /> : <FaDollarSign className="absolute left-3 top-3 text-gray-400" />}
                <input
                  type="number"
                  name="salary"
                  placeholder="Monthly Salary"
                  required
                  onChange={handleChange}
                  className="w-full p-3 pl-10 bg-gray-700 rounded"
                />
              </div>
              <select
                name="salaryCurrency"
                onChange={handleChange}
                className="w-20 p-3 bg-gray-700 rounded"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div className="relative">
              {currencySymbol === '₹' ? <FaRupeeSign className="absolute left-3 top-3 text-gray-400" /> : <FaDollarSign className="absolute left-3 top-3 text-gray-400" />}
              <input
                type="number"
                name="monthlyInvestment"
                placeholder="Monthly Investment Amount"
                required
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-gray-700 rounded"
              />
            </div>
            <div className="relative">
              <FaChartLine className="absolute left-3 top-3 text-gray-400" />
              <select
                name="investmentType"
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-gray-700 rounded"
              >
                <option value="short-term">Short Term</option>
                <option value="long-term">Long Term</option>
              </select>
            </div>
            <div className="relative">
              <FaShieldAlt className="absolute left-3 top-3 text-gray-400" />
              <select
                name="riskTolerance"
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-gray-700 rounded"
              >
                <option value="safe">Safe</option>
                <option value="risky">Risky</option>
              </select>
            </div>
            <div className="relative">
              <label className="block text-gray-400 mb-2">Knowledge of Finance (0-10)</label>
              <input
                type="range"
                name="financialKnowledge"
                min="0"
                max="10"
                step="1"
                defaultValue="0"
                onChange={handleChange}
                className="w-full"
              />
              <span className="block text-center text-gray-400">{formData.financialKnowledge}</span>
            </div>
          </>
        )}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-3 pl-10 bg-gray-700 rounded"
          />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full p-3 pl-10 bg-gray-700 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 rounded hover:bg-blue-500 transition-colors"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={() => {
          setIsLogin(!isLogin);
          navigate(isLogin ? '/register' : '/login'); // Redirect to the appropriate route
        }} className="text-blue-400 hover:underline">
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </motion.div>
  );
}

export default Login;
