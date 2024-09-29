import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setIsLoading(true);
      
      try {
        const response = await axios.post('https://financial-literacy-app.onrender.com/api/chat', { message: input });
        setMessages(messages => [...messages, { text: response.data.reply, sender: 'ai' }]);
      } catch (error) {
        console.error('Error:', error);
        setMessages(messages => [...messages, { text: 'Sorry, I encountered an error. Please try again.', sender: 'ai' }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 p-6 max-w-2xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">AI Financial Assistant</h2>
      <div className="bg-gray-800 p-4 rounded-lg h-[70vh] overflow-y-auto mb-4 shadow-lg">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span className={`inline-block p-3 rounded-lg ${
                message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
              } max-w-[80%]`}>
                {message.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block w-8 h-8 border-t-2 border-blue-500 rounded-full"
            />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-3 bg-gray-700 rounded-l text-white"
          placeholder="Ask a financial question..."
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-r text-white hover:bg-blue-700 transition-colors"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}

export default AIChat;