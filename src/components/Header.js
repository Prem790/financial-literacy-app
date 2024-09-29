import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, FaToolbox, FaChartLine, FaComments, FaInfoCircle, 
  FaUserCircle, FaRobot, FaEdit, FaLock, FaCreditCard, FaSignOutAlt,
  FaHandHoldingUsd // Importing new icon for Government Schemes
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation(); // Add this line

    const handleLanguageChange = (lang) => {
      i18n.changeLanguage(lang);
    };
  
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be managed by your auth system
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileMenuOpen(false);
    // Perform additional logout operations such as clearing session data
    navigate('/');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-gray-900 py-4 fixed top-0 w-full z-10 shadow-lg border-b border-gray-800"
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/" className="text-3xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
          FinLit Pro
        </Link>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav className={`flex-col md:flex-row md:flex items-center ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-lg">
            <li className="flex items-center my-1 md:my-0">
              <Link to="/" className="flex items-center hover:text-blue-400 transition-colors">
                <FaHome className="mr-2" />
                Home
              </Link>
            </li>
            <li className="flex items-center my-1 md:my-0">
              <Link to="/learning" className="flex items-center hover:text-blue-400 transition-colors">
                <FaComments className="mr-2" />
                Learn
              </Link>
            </li>
            <li className="flex items-center my-1 md:my-0">
              <Link to="/tools" className="flex items-center hover:text-blue-400 transition-colors">
                <FaToolbox className="mr-2" />
                Tools
              </Link>
            </li>
            <li className="flex items-center my-1 md:my-0">
              <Link to="/market-news" className="flex items-center hover:text-blue-400 transition-colors">
                <FaChartLine className="mr-2" />
                Market News
              </Link>
            </li>
            <li className="flex items-center my-1 md:my-0">
              <Link to="/community" className="flex items-center hover:text-blue-400 transition-colors">
                <FaComments className="mr-2" />
                Community
              </Link>
            </li>
            <li className="flex items-center my-1 md:my-0">
              <Link to="/ai-chat" className="flex items-center hover:text-blue-400 transition-colors">

                <FaRobot className="mr-2" />
                AI Assistant
              </Link>
            </li>
            <li className="flex items-center my-1 md:my-0">
              <Link to="/about" className="flex items-center hover:text-blue-400 transition-colors">
                <FaInfoCircle className="mr-2" />
                About
              </Link>
            </li>
            {/* New Government Schemes Menu Item */}
            <li className="flex items-center my-1 md:my-0">
              <Link to="/government-schemes" className="flex items-center hover:text-blue-400 transition-colors">
                <FaHandHoldingUsd className="mr-2" />
                Government Schemes
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className="ml-6 relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors"
              >
                <FaUserCircle className="mr-2" />
                My Account
              </button>
              {profileMenuOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
                  <li>
                    <Link to="/edit-profile" className=" px-4 py-2 text-sm hover:bg-gray-700 flex items-center">
                      <FaEdit className="mr-2" /> Change Name
                    </Link>
                  </li>
                  <li>
                    <Link to="/change-password" className="flex px-4 py-2 text-sm hover:bg-gray-700 flex items-center">
                      <FaLock className="mr-2" /> Change Password
                    </Link>
                  </li>
                  <li>
                    <Link to="/edit-details" className="flex px-4 py-2 text-sm hover:bg-gray-700 flex items-center">
                      <FaEdit className="mr-2" /> Edit Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/link-bank" className="flex px-4 py-2 text-sm hover:bg-gray-700 flex items-center">
                      <FaCreditCard className="mr-2" /> Link Your Bank Account
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                    >
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/login" className="ml-6 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors">
              Login / Register
            </Link>
          )}
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
