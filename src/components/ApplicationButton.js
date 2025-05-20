// src/components/ApplicationButton.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import ConfirmationDialog from './ConfirmationDialog';

const ApplicationButton = ({ className, text, icon = true }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleApplyClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    window.open('https://docs.google.com/forms/d/1KeNcLbmHviU-yKkuBKtvgFu-lbKdaPcaHKNWpDugZrM/edit', '_blank');
  };

  return (
    <>
      <motion.button 
        className={className || "apply-button"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleApplyClick}
      >
        {text || "Start Application"}
        {icon && <FaArrowRight className="btn-icon" />}
      </motion.button>

      {/* Confirmation Dialog */}
      <ConfirmationDialog 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmation}
      />
    </>
  );
};

export default ApplicationButton;