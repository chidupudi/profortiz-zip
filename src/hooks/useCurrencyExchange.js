// src/hooks/useCurrencyExchange.js
import { useState, useEffect } from 'react';

const useCurrencyExchange = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchExchangeRate = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Using exchangerate-api.com (free, no API key required)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate');
      }
      
      const data = await response.json();
      const rate = data.rates.INR;
      
      if (rate) {
        setExchangeRate(rate);
        setLastUpdated(new Date());
        
        // Store in localStorage for offline fallback
        localStorage.setItem('usd_to_inr_rate', JSON.stringify({
          rate,
          timestamp: Date.now()
        }));
      } else {
        throw new Error('INR rate not found');
      }
    } catch (err) {
      console.error('Error fetching exchange rate:', err);
      setError(err.message);
      
      // Try to use cached rate as fallback
      const cached = localStorage.getItem('usd_to_inr_rate');
      if (cached) {
        try {
          const { rate, timestamp } = JSON.parse(cached);
          // Use cached rate if it's less than 24 hours old
          if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
            setExchangeRate(rate);
            setLastUpdated(new Date(timestamp));
          }
        } catch (parseError) {
          console.error('Error parsing cached rate:', parseError);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
    
    // Refresh rate every 30 minutes
    const interval = setInterval(fetchExchangeRate, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const convertUSDToINR = (usdAmount) => {
    if (!exchangeRate || isNaN(usdAmount)) return null;
    return (usdAmount * exchangeRate);
  };

  const formatINR = (amount) => {
    if (!amount) return null;
    
    // Indian number formatting with commas
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatUSDToINR = (usdAmount) => {
    const inrAmount = convertUSDToINR(usdAmount);
    return formatINR(inrAmount);
  };

  return {
    exchangeRate,
    loading,
    error,
    lastUpdated,
    convertUSDToINR,
    formatINR,
    formatUSDToINR,
    refreshRate: fetchExchangeRate
  };
};

export default useCurrencyExchange;