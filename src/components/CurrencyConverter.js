// src/components/CurrencyConverter.js
import React, { useState } from 'react';
import { FaExchangeAlt, FaSpinner, FaSync } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import useCurrencyExchange from '../hooks/useCurrencyExchange';

const CurrencyConverter = ({ 
  usdAmount, 
  showBoth = true, 
  className = '',
  size = 'medium',
  inline = false 
}) => {
  const { 
    exchangeRate, 
    loading, 
    error, 
    lastUpdated, 
    formatUSDToINR, 
    refreshRate 
  } = useCurrencyExchange();
  
  const [showINR, setShowINR] = useState(false);

  // Extract numeric value from USD string (e.g., "$6000" -> 6000)
  const parseUSDAmount = (amount) => {
    if (typeof amount === 'number') return amount;
    if (typeof amount === 'string') {
      // Remove $ and commas, then parse
      const cleaned = amount.replace(/[$,]/g, '');
      const parsed = parseFloat(cleaned);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  const numericAmount = parseUSDAmount(usdAmount);
  const inrAmount = formatUSDToINR(numericAmount);

  const toggleCurrency = () => {
    setShowINR(!showINR);
  };

  // Size variants
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  if (loading && !exchangeRate) {
    return (
      <div className={`currency-converter loading ${className}`}>
        <FaSpinner className="spinner" />
        <span className={sizeClasses[size]}>Loading rates...</span>
      </div>
    );
  }

  if (error && !exchangeRate) {
    return (
      <div className={`currency-converter error ${className}`}>
        <span className={`text-red-500 ${sizeClasses[size]}`}>
          {typeof usdAmount === 'string' ? usdAmount : `$${numericAmount}`}
        </span>
        <button onClick={refreshRate} className="refresh-btn" title="Retry">
          <FaSync />
        </button>
      </div>
    );
  }

  if (inline) {
    return (
      <span className={`currency-converter inline ${className}`}>
        <AnimatePresence mode="wait">
          {showINR ? (
            <motion.span
              key="inr"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`currency-display ${sizeClasses[size]}`}
              onClick={toggleCurrency}
              title="Click to toggle currency"
            >
              {inrAmount}
            </motion.span>
          ) : (
            <motion.span
              key="usd"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`currency-display ${sizeClasses[size]}`}
              onClick={toggleCurrency}
              title="Click to toggle currency"
            >
              {typeof usdAmount === 'string' ? usdAmount : `$${numericAmount.toLocaleString()}`}
            </motion.span>
          )}
        </AnimatePresence>
        <button 
          onClick={toggleCurrency}
          className="toggle-btn-small"
          title="Toggle currency"
        >
          <FaExchangeAlt />
        </button>
      </span>
    );
  }

  if (showBoth) {
    return (
      <div className={`currency-converter both ${className}`}>
        <div className="currency-display-container">
          <div className={`usd-display ${sizeClasses[size]}`}>
            <span className="currency-label">USD:</span>
            <span className="amount">
              {typeof usdAmount === 'string' ? usdAmount : `$${numericAmount.toLocaleString()}`}
            </span>
          </div>
          
          <div className="currency-divider">
            <FaExchangeAlt />
          </div>
          
          <div className={`inr-display ${sizeClasses[size]}`}>
            <span className="currency-label">INR:</span>
            <span className="amount">{inrAmount}</span>
          </div>
        </div>
        
        {lastUpdated && (
          <div className="rate-info">
            <small>
              Rate: 1 USD = ₹{exchangeRate?.toFixed(2)} 
              (Updated: {lastUpdated.toLocaleTimeString()})
            </small>
            <button onClick={refreshRate} className="refresh-btn" title="Refresh rate">
              <FaSync />
            </button>
          </div>
        )}
      </div>
    );
  }

  // Toggle view (default)
  return (
    <div className={`currency-converter toggle ${className}`}>
      <AnimatePresence mode="wait">
        {showINR ? (
          <motion.div
            key="inr"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`currency-display ${sizeClasses[size]}`}
          >
            <span className="currency-label">INR</span>
            <span className="amount">{inrAmount}</span>
          </motion.div>
        ) : (
          <motion.div
            key="usd"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`currency-display ${sizeClasses[size]}`}
          >
            <span className="currency-label">USD</span>
            <span className="amount">
              {typeof usdAmount === 'string' ? usdAmount : `$${numericAmount.toLocaleString()}`}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={toggleCurrency}
        className="toggle-btn"
        title={`Switch to ${showINR ? 'USD' : 'INR'}`}
      >
        <FaExchangeAlt />
      </button>
    </div>
  );
};

export default CurrencyConverter;