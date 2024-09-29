import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 p-6"
    >
      <h2 className="text-2xl font-bold mb-6">About FinLit Pro</h2>
      <p className="mb-4">
        FinLit Pro is dedicated to improving financial literacy and empowering individuals to make informed investment decisions. Our platform provides educational resources, tools, and real-time market information to help you navigate the complex world of finance.
      </p>
      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
      <p className="mb-4">
        Our mission is to democratize financial knowledge and make it accessible to everyone. We believe that with the right information and tools, anyone can take control of their financial future.
      </p>
      <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Comprehensive financial education resources</li>
        <li>Interactive tools for investment planning and risk assessment</li>
        <li>AI-powered chatbot for personalized financial advice</li>
        <li>Real-time market news and analysis</li>
        <li>Community forums for discussion and peer support</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Our Team</h3>
      <p>
        FinLit Pro is backed by a team of financial experts, educators, and technology professionals committed to making finance accessible and understandable for everyone.
      </p>
    </motion.div>
  );
}

export default About;
