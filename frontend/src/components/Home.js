import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import axios from 'axios';
import financeImage from '../images/finance-image.jpg'; // Replace with actual image path
import communityIcon from '../images/community-icon.png'; // Replace with actual icon path
import aiChatbotIcon from '../images/ai-chatbot-icon.png'; // Replace with actual icon path
import marketNewsIcon from '../images/market-news-icon.png'; // Replace with actual icon path
import userAvatar1 from '../images/user-avatar1.png'; // Replace with actual image path
import userAvatar2 from '../images/user-avatar2.png'; // Replace with actual image path
import { useTranslation } from 'react-i18next';


function Home() {
    const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be managed by your auth system
  const [isBankLinked, setIsBankLinked] = useState(false); // Replace with actual logic to check if bank is linked
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie animation JSON from the URL
    axios.get('https://lottie.host/embed/54676377-245e-4d85-8bf4-e9890dfa8b97/0LKd1ja4jQ.json')
      .then(response => {
        setAnimationData(response.data);
      })
      .catch(error => {
        console.error('Error loading Lottie animation:', error);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto pt-20 pb-10 px-6 text-center"
      >
        <div className="mb-6 flex justify-center">
          {animationData && <Lottie animationData={animationData} className="w-64 h-64" />}
        </div>
        <h1 className="text-5xl font-bold mb-4">Welcome to Arthaveil</h1>
        <p className="text-xl mb-8">
          Your gateway to financial literacy and smart investing.
        </p>
        <div>
          {!isLoggedIn ? (
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get Started
              </motion.button>
            </Link>
          ) : !isBankLinked ? (
            <Link to="/link-bank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Link Your Bank Account
              </motion.button>
            </Link>
          ) : (
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Go to Dashboard
              </motion.button>
            </Link>
          )}
        </div>
      </motion.div>

      {/* Finance Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto my-10 px-6 text-center"
      >
        <img
          src={financeImage}
          alt="Finance Illustration"
          className="mx-auto w-2/3 md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="text-lg mt-4">
          At Arthaveil, we empower you to make informed financial decisions.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto my-10 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="flex flex-wrap justify-around">
          <FeatureCard
            title="Community"
            description="Join a vibrant community of like-minded individuals."
            icon={communityIcon}
          />
          <FeatureCard
            title="AI Chatbot"
            description="Get instant assistance with our AI-powered chatbot."
            icon={aiChatbotIcon}
          />
          <FeatureCard
            title="Market News"
            description="Stay updated with the latest market trends and news."
            icon={marketNewsIcon}
          />
        </div>
      </motion.div>

      {/* Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto my-10 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-around">
          <ReviewCard
            name="John Doe"
            review="Arthaveil has completely changed the way I approach investing. The community is fantastic!"
            avatar={userAvatar1}
          />
          <ReviewCard
            name="Jane Smith"
            review="The AI chatbot is incredibly helpful and makes understanding finance so easy!"
            avatar={userAvatar2}
          />
        </div>
      </motion.div>

      {/* Feedback Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto my-10 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Give Us Your Feedback</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                placeholder="Your feedback"
                rows="4"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
              type="submit"
            >
              Submit Feedback
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

// FeatureCard Component
function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 m-4 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4"
    >
      <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </motion.div>
  );
}

// ReviewCard Component
function ReviewCard({ name, review, avatar }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 m-4 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4"
    >
      <img src={avatar} alt={name} className="w-12 h-12 mx-auto mb-4 rounded-full" />
      <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
      <p className="text-center italic">"{review}"</p>
    </motion.div>
  );
}

export default Home;
