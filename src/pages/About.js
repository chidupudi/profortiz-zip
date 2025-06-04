// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-page">
      <div className="page-header">
        <h1>About Profortiz</h1>
        <p>Revolutionizing tech education for the next generation</p>
      </div>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Our Mission</h3>
          <p>
            At Profortiz, we're revolutionizing tech education by bridging the gap between 
            academic learning and industry requirements. Our mission is to empower aspiring 
            professionals with the skills, confidence, and opportunities to thrive in the 
            competitive world of data engineering and software development.
          </p>
          
          <h3>Our Approach</h3>
          <p>
            We combine hands-on project experience with personalized mentorship to create 
            industry-ready professionals. Unlike traditional bootcamps, we focus on real-world 
            applications and provide guaranteed career outcomes through our innovative 
            pay-after-placement model.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-values"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Our Core Values</h3>
          <ul>
            <li>
              <strong>Excellence:</strong> We maintain the highest standards in curriculum 
              design and mentorship quality.
            </li>
            <li>
              <strong>Transparency:</strong> Clear expectations, no hidden fees, and honest 
              career guidance.
            </li>
            <li>
              <strong>Student Success:</strong> Your achievement is our success metric - we're 
              invested in your growth.
            </li>
            <li>
              <strong>Innovation:</strong> Continuously evolving our programs to match 
              industry trends and employer needs.
            </li>
            <li>
              <strong>Community:</strong> Building a supportive network of learners, mentors, 
              and industry professionals.
            </li>
          </ul>
        </motion.div>
      </div>
      
      <style jsx>{`
        .about-page {
          padding: 8rem 2rem 6rem;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .page-header h1 {
          font-size: 3rem;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .page-header p {
          font-size: 1.2rem;
          color: #64748b;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto 4rem;
        }
        
        .about-text h3, .about-values h3 {
          color: #6366f1;
          margin: 2rem 0 1rem;
          font-size: 1.5rem;
        }
        
        .about-text p {
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 1.5rem;
        }
        
        .about-values ul {
          list-style: none;
          padding: 0;
        }
        
        .about-values li {
          padding: 1rem 0;
          border-bottom: 1px solid #e5e7eb;
          line-height: 1.6;
          color: #4b5563;
        }
        
        .about-values li:last-child {
          border-bottom: none;
        }
        
        .team-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 0;
        }
        
        .team-section h2 {
          text-align: center;
          color: #1e293b;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .team-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        
        .member-photo {
          width: 120px;
          height: 120px;
          background: #e5e7eb;
          border-radius: 50%;
          margin: 0 auto 1rem;
        }
        
        .team-card h3 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        
        .role {
          color: #6366f1;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        
        .bio {
          color: #4b5563;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .expertise {
          color: #64748b;
          font-size: 0.9rem;
          font-style: italic;
        }
        
        .story-section {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          margin: 4rem -2rem 0;
          padding: 4rem 2rem;
          color: white;
        }
        
        .story-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .story-content h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        
        .story-content p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .about-content,
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;