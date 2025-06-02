// src/components/Navbar.js (Fixed - Remove unwanted underlines)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../logo.jpg';
import ConfirmationDialog from './ConfirmationDialog';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    return scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleApplyClick = () => {
    setShowConfirmation(true);
    closeMobileMenu();
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    window.open('https://docs.google.com/forms/d/1KeNcLbmHviU-yKkuBKtvgFu-lbKdaPcaHKNWpDugZrM/edit', '_blank');
  };

  // Updated navigation links to match our new structure
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Program", href: "/program" },
    { title: "About Us", href: "/about" },
    { title: "Terms", href: "/terms" },
    { title: "Contact", href: "/contact" }
  ];

  return (
    <>
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-content">
         <Link to="/" onClick={closeMobileMenu} className="logo-link">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer' }}
          >
            <img src={Logo} alt="Profortiz Logo" />
            <span>Profortiz</span>
          </motion.div>
          </Link>
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          
          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <motion.div 
                key={index} 
                className="nav-link-container"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link 
                  to={link.href} 
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.title}
                  <span className="nav-link-underline"></span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              className="apply-btn-desktop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="apply-button"
                onClick={handleApplyClick}
              >
                Start Application
              </button>
            </motion.div>
          </nav>
        </div>
        
        <div className="apply-btn-mobile">
          <motion.button 
            className="apply-button-mobile"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApplyClick}
          >
            Start Application
          </motion.button>
        </div>
      </header>

      {/* Confirmation Dialog */}
      <ConfirmationDialog 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmation}
      />
      
      <style jsx>{`
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav-header.scrolled {
          background: rgba(15, 23, 42, 0.98);
          padding: 0.8rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        /* Fixed: Remove underline from logo link */
        .logo-link {
          text-decoration: none;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          z-index: 1001;
          text-decoration: none;
        }
        
        .logo img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
        }
        
        .logo span {
          background: linear-gradient(to right, #ffffff, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .mobile-menu-toggle {
          display: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1001;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link-container {
          position: relative;
        }

        .nav-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          position: relative;
          display: inline-block;
        }

        .nav-link:hover {
          color: #10b981;
        }
        
        .nav-link-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #10b981, #34d399);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover .nav-link-underline {
          width: 100%;
        }
        
        .apply-button {
          padding: 0.8rem 1.5rem;
          background: linear-gradient(to right, #10b981, #34d399);
          color: white;
          border-radius: 50px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 1rem;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
        }
        
        .apply-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(16, 185, 129, 0.4);
        }
        
        .apply-btn-mobile {
          display: none;
        }
        
        .apply-button-mobile {
          width: calc(100% - 2rem);
          margin: 0.5rem 1rem;
          padding: 0.8rem;
          background: linear-gradient(to right, #10b981, #34d399);
          color: white;
          border-radius: 50px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
        }

        @media (max-width: 920px) {
          .mobile-menu-toggle {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 400px;
            height: 100vh;
            background: #1e293b;
            flex-direction: column;
            justify-content: flex-start;
            padding: 5rem 2rem 2rem;
            transition: right 0.3s ease;
            gap: 1.5rem;
            box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            overflow-y: auto;
          }

          .nav-links.active {
            right: 0;
          }
          
          .nav-link-container {
            width: 100%;
          }
          
          .nav-link {
            display: block;
            width: 100%;
            padding: 1rem 0;
            font-size: 1.1rem;
            border-bottom: 1px solid rgba(226, 232, 240, 0.1);
          }
          
          .apply-btn-desktop {
            display: none;
          }
          
          .apply-btn-mobile {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .nav-content {
            padding: 0 1.5rem;
          }
          
          .logo img {
            width: 40px;
            height: 40px;
          }
          
          .logo span {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;