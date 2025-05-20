// src/components/Footer.js (Updated with Application Button)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaWhatsapp, FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ConfirmationDialog from './ConfirmationDialog';

const Footer = () => {
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
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Profortiz</h3>
              <p>Accelerate Your Career in Data Engineering & Software Development</p>
              
              <motion.button 
                className="footer-apply-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyClick}
              >
                Start Application <FaAngleRight className="btn-icon" />
              </motion.button>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/program">Program</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact</h3>
              <p>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:hr@profortiz.net">hr@profortiz.net</a>
              </p>
              <p>
                <FaWhatsapp className="footer-icon whatsapp" />
                <a 
                  href="https://wa.me/+919000292266"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  +91 90002 92266
                </a>
              </p>
              <p>
                <FaPhone className="footer-icon" />
                <a href="tel:+919000292266">+91 90002 92266</a>
              </p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Profortiz. All rights reserved.</p>
            <div className="policy-links">
              <Link to="/terms">Terms & Conditions</Link>
              <span className="divider">|</span>
              <Link to="/terms">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Confirmation Dialog */}
      <ConfirmationDialog 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmation}
      />
      
      <style jsx>{`
        .footer {
          background: #1e293b;
          color: white;
          padding: 4rem 2rem 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-section h3 {
          color: #10b981;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
          position: relative;
          display: inline-block;
        }
        
        .footer-section h3:after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background: #10b981;
          border-radius: 2px;
        }
        
        .footer-section p {
          margin-bottom: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section li {
          margin-bottom: 0.8rem;
          transition: transform 0.3s ease;
        }
        
        .footer-section li:hover {
          transform: translateX(5px);
        }
        
        .footer-section a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
        
        .footer-section a:hover {
          color: #10b981;
        }
        
        .footer-icon {
          margin-right: 0.8rem;
          color: #6366f1;
        }
        
        .whatsapp {
          color: #25D366;
        }
        
        .footer-apply-button {
          margin-top: 1.5rem;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(to right, #10b981, #34d399);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
        }
        
        .footer-apply-button:hover {
          box-shadow: 0 8px 15px rgba(16, 185, 129, 0.3);
        }
        
        .btn-icon {
          transition: transform 0.3s ease;
        }
        
        .footer-apply-button:hover .btn-icon {
          transform: translateX(3px);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #94a3b8;
          font-size: 0.9rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .policy-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .policy-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .policy-links a:hover {
          color: #10b981;
        }
        
        .divider {
          color: #475569;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;