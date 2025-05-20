// src/components/Footer.js
import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Profortiz</h3>
            <p>Accelerate Your Career in Data Engineering & Software Development</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about">About Us</a></li>
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
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Profortiz. All rights reserved.</p>
        </div>
      </div>
      
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
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          color: #10b981;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }
        
        .footer-section p {
          margin-bottom: 1rem;
          color: #cbd5e1;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section li {
          margin-bottom: 0.8rem;
        }
        
        .footer-section a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: #10b981;
        }
        
        .footer-icon {
          margin-right: 0.5rem;
          color: #10b981;
        }
        
        .whatsapp {
          color: #25D366;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;