import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function MarketNews() {
  const [news, setNews] = useState([]);
  const [nseIndex, setNseIndex] = useState({});
  const [stocks, setStocks] = useState([]);
  const [etfs, setEtfs] = useState([]);
  const [funds, setFunds] = useState([]);
  const [bonds, setBonds] = useState([]);

  useEffect(() => {
    // Fetch market news
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/latest?country=in&category=business&apikey=pub_497938a925cfccc6a3d4cb468bd03cef29dfd');
        setNews(response.data.results);
      } catch (error) {
        console.error('Error fetching market news:', error);
      }
    };

    fetchNews();

    // Fetch NSE index data
    const fetchNseIndex = async () => {
      try {
        const response = await axios.get('https://api.twelvedata.com/time_series?symbol=INFY:NSE&interval=1min&apikey=efb9f64dc55e47b3980124f311562bb4');
        setNseIndex(response.data);
      } catch (error) {
        console.error('Error fetching NSE index data:', error);
      }
    };

    fetchNseIndex();

    // Fetch stock data
    const fetchStocks = async () => {
      try {
        const response = await axios.get('https://api.twelvedata.com/stocks?country=India&apikey=efb9f64dc55e47b3980124f311562bb4');
        setStocks(response.data.data.slice(0, 20)); // Limit to top 20 stocks
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStocks();

    // Fetch ETF data
    const fetchEtfs = async () => {
      try {
        const response = await axios.get('https://api.twelvedata.com/etfs?country=India&apikey=efb9f64dc55e47b3980124f311562bb4');
        setEtfs(response.data.data.slice(0, 20)); // Limit to top 20 ETFs
      } catch (error) {
        console.error('Error fetching ETF data:', error);
      }
    };

    fetchEtfs();

    // Fetch fund data
    const fetchFunds = async () => {
      try {
        const response = await axios.get('https://api.twelvedata.com/funds?country=India&type=Mutual-Fund&apikey=efb9f64dc55e47b3980124f311562bb4');
        setFunds(response.data.data.slice(0, 20)); // Limit to top 20 funds
      } catch (error) {
        console.error('Error fetching fund data:', error);
      }
    };

    fetchFunds();

    // Fetch bond data
    const fetchBonds = async () => {
      try {
        const response = await axios.get('https://api.twelvedata.com/bonds?country=India&apikey=efb9f64dc55e47b3980124f311562bb4');
        setBonds(response.data.data.slice(0, 20)); // Limit to top 20 bonds
      } catch (error) {
        console.error('Error fetching bond data:', error);
      }
    };

    fetchBonds();
  }, []);

  // Extract the most recent index data
  const latestNseIndex = nseIndex.values ? nseIndex.values[0] : {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Market News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {news.map((item) => (
          <div key={item.article_id} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm mb-2">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Read more</a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">NSE Index</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white mb-12">
        <h3 className="text-lg font-semibold mb-4">NSE Index Details</h3>
        <p><strong>Symbol:</strong> {nseIndex.meta ? nseIndex.meta.symbol : 'Loading...'}</p>
        <p><strong>Currency:</strong> {nseIndex.meta ? nseIndex.meta.currency : 'Loading...'}</p>
        <p><strong>Open:</strong> {latestNseIndex.open || 'Loading...'}</p>
        <p><strong>High:</strong> {latestNseIndex.high || 'Loading...'}</p>
        <p><strong>Low:</strong> {latestNseIndex.low || 'Loading...'}</p>
        <p><strong>Close:</strong> {latestNseIndex.close || 'Loading...'}</p>
        <p><strong>Volume:</strong> {latestNseIndex.volume || 'Loading...'}</p>
        <p><strong>Datetime:</strong> {latestNseIndex.datetime || 'Loading...'}</p>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Stock Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold mb-2">{stock.name}</h3>
            <p><strong>Symbol:</strong> {stock.symbol}</p>
            <p><strong>Exchange:</strong> {stock.exchange}</p>
            <p><strong>Currency:</strong> {stock.currency}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Top ETFs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {etfs.map((etf) => (
          <div key={etf.symbol} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold mb-2">{etf.name}</h3>
            <p><strong>Symbol:</strong> {etf.symbol}</p>
            <p><strong>Currency:</strong> {etf.currency}</p>
            <p><strong>Exchange:</strong> {etf.exchange}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Top Funds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {funds.map((fund) => (
          <div key={fund.symbol} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold mb-2">{fund.name}</h3>
            <p><strong>Symbol:</strong> {fund.symbol}</p>
            <p><strong>Currency:</strong> {fund.currency}</p>
            <p><strong>Exchange:</strong> {fund.exchange}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Top Bonds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonds.map((bond) => (
          <div key={bond.symbol} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold mb-2">{bond.name}</h3>
            <p><strong>Symbol:</strong> {bond.symbol}</p>
            <p><strong>Currency:</strong> {bond.currency}</p>
            <p><strong>Exchange:</strong> {bond.exchange}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default MarketNews;
