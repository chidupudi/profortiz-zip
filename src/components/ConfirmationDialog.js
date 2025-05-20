// src/components/ConfirmationDialog.js (Updated with external CSS)
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="confirmation-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="confirmation-dialog"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dialog-icon">
              <FaExclamationTriangle />
            </div>
            
            <div className="dialog-content">
              <h3>Terms & Conditions</h3>
              <p>By proceeding, you confirm that you have read and agree to our:</p>
              <ul>
                <li>Program Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Code of Conduct</li>
              </ul>
              <p className="confirmation-note">You understand that this application represents a commitment to follow all program requirements if accepted.</p>
            </div>
            
            <div className="dialog-actions">
              <button className="cancel-button" onClick={onClose}>Cancel</button>
              <button className="confirm-button" onClick={onConfirm}>I Agree & Proceed</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationDialog;