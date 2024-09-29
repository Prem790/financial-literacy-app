import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Tools from './components/Tools';
import AIChat from './components/AIChat';
import MarketNews from './components/MarketNews';
import About from './components/About';
import Dashboard from './components/Dashboard';
import LearningCenter from './components/LearningCenter';
import Community from './components/Community';
import GovernmentSchemes from './components/GovernmentSchemes'; // Import the new component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/market-news" element={<MarketNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learning" element={<LearningCenter />} />
          <Route path="/community" element={<Community />} />
          <Route path="/government-schemes" element={<GovernmentSchemes />} /> {/* Add new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
