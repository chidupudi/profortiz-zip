// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaUsers, FaBriefcase, FaChartLine, FaStar, FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Profortiz</h1>
            <p>Accelerating international students' journey to successful tech careers in the US through our comprehensive Career Accelerator Program</p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container">
        <div className="content-wrapper">
          {/* Mission & Vision */}
          <motion.div 
            className="mission-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mission-grid">
              <div className="mission-content">
                <div className="section-badge">Our Mission</div>
                <h2>Transforming Careers, One Student at a Time</h2>
                <p>
                  At Profortiz, we specialize in helping international students secure jobs in software and data engineering
                        quickly, ethically, and efficiently. Our mission is to accelerate your 
                  journey toward a stable tech career in the U.S. by providing comprehensive, step-by-step 
                  training and guaranteed job placement programs designed exclusively for international students.
                </p>
                <p>
                  We handle 100+ tailored job applications weekly and provide expert-led advanced data analytics 
                  and machine learning training combined with personalized career coaching. Our Career Accelerator Program 
                  is a 4-month comprehensive journey that includes hands-on training on real-time Fortune 500 
                  style projects, industry-recognized certifications, and guaranteed interview opportunities.
                </p>
              </div>
              <div className="mission-visual">
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Weekly Job Applications</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">4</div>
                    <div className="stat-label">Month Program</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">5</div>
                    <div className="stat-label">Guaranteed Interviews</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">Hours Training</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

         
        </div>
      </div>
      
      <style jsx>{`
        .about-page {
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          padding: 8rem 0 6rem;
          color: white;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }

        .hero-shape-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          top: -200px;
          left: -200px;
          animation: float 20s infinite alternate;
        }

        .hero-shape-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #10b981, #059669);
          bottom: -150px;
          right: -150px;
          animation: float 25s infinite alternate-reverse;
        }

        .hero-shape-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #f59e0b, #d97706);
          top: 30%;
          right: 20%;
          animation: float 30s infinite;
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          100% { transform: translate(50px, 30px) rotate(25deg) scale(1.1); }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #ffffff, #cbd5e1, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.3rem;
          line-height: 1.6;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Content Wrapper */
        .content-wrapper {
          padding: 6rem 0;
        }

        /* Section Badges */
        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .section-badge.light {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Mission Section */
        .mission-section {
          margin-bottom: 8rem;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .mission-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .mission-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-card {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #6366f1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Why Choose Section */
        .why-choose-section {
          margin-bottom: 8rem;
        }

        .guarantee-highlight {
          background: linear-gradient(135deg, #f0f9ff, #dbeafe);
          border-radius: 1.5rem;
          padding: 3rem;
          text-align: center;
          border: 1px solid #93c5fd;
        }

        .guarantee-content h3 {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .guarantee-content p {
          font-size: 1.1rem;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .guarantee-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .guarantee-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        /* Values Section */
        .values-section {
          margin-bottom: 8rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .value-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
        }

        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .value-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .value-card h3 {
          font-size: 1.3rem;
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .value-card p {
          color: #64748b;
          line-height: 1.6;
        }

        /* Highlights Section */
        .highlights-section {
          margin-bottom: 8rem;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .highlight-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          border: 1px solid #f1f5f9;
        }

        .highlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }

        .highlight-number {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .highlight-card h3 {
          font-size: 1.3rem;
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 600;
          padding-right: 3rem;
        }

        .highlight-card p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .highlight-features {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.9rem;
          color: #4b5563;
        }

        .feature-item svg {
          color: #10b981;
          flex-shrink: 0;
        }

        /* Success Section */
        .success-section {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          padding: 6rem 0;
          color: white;
        }

        .success-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .success-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .success-description {
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .success-description p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          opacity: 0.95;
        }

        .success-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 800px;
          margin: 0 auto;
          gap: 3rem;
        }

        .payment-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .payment-info p {
          opacity: 0.9;
          margin: 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: white;
          color: #6366f1;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
        }

        .cta-button svg {
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }

          .success-cta {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }

          .hero-section {
            padding: 6rem 0 4rem;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content p {
            font-size: 1.1rem;
          }

          .content-wrapper {
            padding: 4rem 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .mission-content h2 {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .values-grid,
          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .guarantee-highlight {
            padding: 2rem;
          }

          .value-card,
          .highlight-card {
            padding: 2rem;
          }

          .success-section {
            padding: 4rem 0;
          }

          .success-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .mission-content h2 {
            font-size: 1.8rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .guarantee-highlight {
            padding: 1.5rem;
          }

          .value-card,
          .highlight-card {
            padding: 1.5rem;
          }

          .highlight-card h3 {
            padding-right: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;