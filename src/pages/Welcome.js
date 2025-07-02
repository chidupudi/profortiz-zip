// src/pages/Welcome.js (Updated with Currency Converter)
import React, { useEffect , useState} from 'react';
import { FaRocket, FaChartLine, FaHandshake, FaMoneyBillAlt, FaStar, FaRegClock, FaArrowRight } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ConfirmationDialog from '../components/ConfirmationDialog';
import CurrencyConverter from '../components/CurrencyConverter';
import '../components/CurrencyConverter.css';

const Welcome = () => {
  const controls = useAnimation();
  const [showConfirmation, setShowConfirmation] = useState(false); 
  
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  // Add these handler functions
  const handleApplyClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    window.open('https://docs.google.com/forms/d/1KeNcLbmHviU-yKkuBKtvgFu-lbKdaPcaHKNWpDugZrM/edit', '_blank');
  };

  return (
    <div className="welcome-page">
      {/* 3D animated background */}
      <div className="animated-background">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              opacity: 0
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#6366f1", "#8b5cf6", "#10b981"]
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.3,
                random: true,
              },
              size: {
                value: 3,
                random: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              links: {
                enable: true,
                distance: 150,
                color: "#a5b4fc",
                opacity: 0.2,
                width: 1
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                push: {
                  particles_nb: 3
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
        >
          <motion.div 
            className="logo-container"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <FaRocket className="logo-icon" />
          </motion.div>
          <h1>Profortiz</h1>
          <div className='caption'>
            <h3>- - Career Consulting Excellence</h3>
          </div>
          <h2>Accelerate Your Career in Data Engineering & Software Development</h2>
          <p>Transform into a Top-Tier Data/Software Professional in just 6 months</p>
          
          <div className="cta-buttons">
            <motion.button 
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplyClick}
            >
              Start Application
            </motion.button>
            
            <Link to="/program" className="secondary-button-link">
              <motion.button 
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Program <FaArrowRight className="btn-icon" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Key Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Profortiz?</h2>
            <p>Join a program designed for real results</p>
          </div>
          
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="stat-icon"><FaStar /></div>
              <h3>84% Success Rate</h3>
              <p>Career Placement Within 6 Months</p>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="stat-icon"><FaRegClock /></div>
              <h3>500+ Hours</h3>
              <p>Hands-On Project Experience</p>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="stat-icon"><FaHandshake /></div>
              <h3>1:1 Mentorship</h3>
              <p>Industry Expert Guidance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header light">
            <h2>Program Features</h2>
            <p>Everything you need to succeed in tech</p>
          </div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Industry-Ready Curriculum</h3>
              <ul>
                <li>Advanced SQL & Python</li>
                <li>Machine Learning Productionization</li>
                <li>Big Data Technologies</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon"><FaMoneyBillAlt /></div>
              <h3>Risk-Free Investment</h3>
              <ul>
                <li>Pay After Placement</li>
                <li>100% Money-Back Guarantee</li>
                <li>Flexible Payment Plans</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon"><FaHandshake /></div>
              <h3>Career Support</h3>
              <ul>
                <li>1:1 Career Coaching</li>
                <li>Interview Preparation</li>
                <li>Resume Building</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Quick View with Currency Converter */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-card">
            <div className="pricing-header">
              <div className="badge">Most Popular</div>
              <h3>Career Accelerator Plan</h3>
              
              {/* Main Price with Currency Converter */}
              <div className="price-container">
                <CurrencyConverter 
                  usdAmount={6000} 
                  showBoth={true}
                  className="hero-price"
                  size="large"
                />
              </div>
              
              <div className="payment-terms">
                <div className="term">
                  <CurrencyConverter 
                    usdAmount={3500} 
                    inline={true}
                    size="medium"
                  />
                  <span className="label">Initial Payment</span>
                </div>
                <div className="term-divider">+</div>
                <div className="term">
                  <CurrencyConverter 
                    usdAmount={2500} 
                    inline={true}
                    size="medium"
                  />
                  <span className="label">After Placement</span>
                </div>
                <div className="term-divider">+</div>
                <div className="term">
                  <span className="amount">8%</span>
                  <span className="label">Annual CTC</span>
                </div>
              </div>
            </div>
            
            <Link to="/program" className="learn-more-link">
              <motion.button 
                className="learn-more-button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More <FaArrowRight className="btn-icon" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Carer?</h2>
            <p>Take the first step towards becoming a top-tier tech professional</p>
            <div className="cta-buttons">
              <motion.button 
                className="primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyClick}
              >
                Apply Now
              </motion.button>
              
              <Link to="/program" className="secondary-button-link">
                <motion.button 
                  className="secondary-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Program Details
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Confirmation Dialog */}
      <ConfirmationDialog 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmation}
      />
      
      <style jsx>{`
        .welcome-page {
          overflow-x: hidden;
        }
        
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .section-header p {
          font-size: 1.2rem;
          color: #64748b;
        }
        
        .section-header.light h2 {
          color: #ffffff;
        }
        
        .section-header.light p {
          color: rgba(255, 255, 255, 0.8);
        }
        
        /* Hero Section Styles */
        .hero-section {
          min-height: 8vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding:8rem 2rem 4rem 2rem;
          position: relative;
        }

        .hero-content {
          max-width: 800px;
          z-index: 1;
        }
        
        .logo-container {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
        }
        
        .logo-icon {
          color: white;
          font-size: 4rem;
        }
        
        .hero-content h1 {
          font-size: 5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-content h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #1e293b;
          line-height: 1.3;
        }
        
        .caption{
          margin-right:-450px;
        }
        
        .hero-content p {
          font-size: 1.3rem;
          color: #64748b;
          margin-bottom: 2.5rem;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        
        .primary-button {
          padding: 1.2rem 2.5rem;
          background: linear-gradient(to right, #10b981, #34d399);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 15px rgba(16, 185, 129, 0.3);
          transition: all 0.3s ease;
        }
        
        .primary-button:hover {
          box-shadow: 0 15px 25px rgba(16, 185, 129, 0.4);
        }
        
        .secondary-button-link {
          text-decoration: none;
        }
        
        .secondary-button {
          padding: 1.2rem 2.5rem;
          background: transparent;
          color: #1e293b;
          border: 2px solid #1e293b;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .secondary-button:hover {
          background: rgba(30, 41, 59, 0.05);
        }
        
        .btn-icon {
          transition: transform 0.3s ease;
        }
        
        .secondary-button:hover .btn-icon {
          transform: translateX(5px);
        }
        
        /* Stats Section Styles */
        .stats-section {
          padding:3rem 2rem 6rem 2rem; 
          background: #ffffff;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .stat-card {
          background: #f8fafc;
          padding: 2.5rem;
          border-radius: 1.5rem;
          text-align: center;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .stat-icon {
          font-size: 2.5rem;
          color: #6366f1;
          margin-bottom: 1.5rem;
          height: 60px;
          width: 60px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        
        .stat-card h3 {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .stat-card p {
          color: #64748b;
          font-size: 1.1rem;
        }
        
        /* Features Section Styles */
        .features-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .feature-icon {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 1.5rem;
          height: 60px;
          width: 60px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .feature-card ul {
          list-style: none;
          padding: 0;
        }
        
        .feature-card li {
          padding: 0.8rem 0;
          color: rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .feature-card li:last-child {
          border-bottom: none;
        }
        
        .feature-card li:before {
          content: "→";
          color: #10b981;
        }
        
        /* Pricing Section Styles */
        .pricing-section {
          padding: 6rem 2rem;
          background: #f8fafc;
        }
        
        .pricing-card {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .badge {
          position: absolute;
          top: 30px;
          right: -65px;
          background: #10b981;
          color: white;
          padding: 0.5rem 4rem;
          transform: rotate(45deg);
          font-size: 0.9rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .pricing-header h3 {
          font-size: 2rem;
          color: #1e293b;
          margin-bottom: 2rem;
        }
        
        .price-container {
          margin: 2rem 0;
          display: flex;
          justify-content: center;
        }
        
        .payment-terms {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        
        .term {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }
        
        .amount {
          font-weight: bold;
          font-size: 1.3rem;
          color: #6366f1;
        }
        
        .label {
          font-size: 0.9rem;
          color: #64748b;
        }
        
        .term-divider {
          color: #cbd5e1;
          font-size: 1.5rem;
        }
        
        .learn-more-link {
          text-decoration: none;
        }
        
        .learn-more-button {
          padding: 1rem 2rem;
          background: #6366f1;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
        }
        
        /* Final CTA Styles */
        .final-cta {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          text-align: center;
        }
        
        .cta-content h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .cta-content p {
          font-size: 1.3rem;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .final-cta .primary-button {
          background: white;
          color: #6366f1;
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }
        
        .final-cta .secondary-button {
          border-color: white;
          color: white;
        }
        
        .final-cta .secondary-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
          .hero-content h1 {
            font-size: 4rem;
          }
          
          .hero-content h2 {
            font-size: 1.8rem;
          }
          
          .cta-content h2 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 1.5rem;
          }
          
          .hero-content h1 {
            font-size: 3rem;
          }
          
          .hero-content h2 {
            font-size: 1.5rem;
          }
          
          .logo-container {
            width: 100px;
            height: 100px;
          }
          
          .logo-icon {
            font-size: 3rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .primary-button, .secondary-button {
            width: 100%;
            padding: 1rem 1.5rem;
            font-size: 1rem;
            justify-content: center;
          }
          
          .section-header h2, .cta-content h2 {
            font-size: 2rem;
          }
          
          .pricing-card {
            padding: 2rem 1.5rem;
          }
          
          .payment-terms {
            flex-direction: column;
            gap: 1rem;
          }
          
          .term-divider {
            display: none;
          }
          
          .stat-card, .feature-card {
            padding: 1.5rem;
          }
          
          .stats-section, .features-section, .pricing-section, .final-cta {
            padding: 4rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;