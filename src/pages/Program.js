// src/pages/Program.js (Updated with Currency Converter)
import React, { useState } from 'react';
import { FaLaptopCode, FaGraduationCap, FaUsers, FaMoneyBillAlt, FaChartLine, FaCheck, FaAngleDown, FaAngleUp, FaSearch, FaStar, FaArrowRight,} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ConfirmationDialog from '../components/ConfirmationDialog';
import CurrencyConverter from '../components/CurrencyConverter';
import '../components/CurrencyConverter.css';

const Program = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };
  
  // Add these handler functions
  const handleApplyClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    window.open('https://docs.google.com/forms/d/1KeNcLbmHviU-yKkuBKtvgFu-lbKdaPcaHKNWpDugZrM/edit', '_blank');
  };

  const timelineData = [
    { 
      month: "Day 1-15",
      title: "Foundation Building", 
      icon: <FaLaptopCode />, 
      content: "Career Preparation and Core Fundamentals",
      details: [
        "Develop professional materials including resume and portfolio",
        "Establish industry presence through optimized professional profiles",
        "Begin communication and interview skills development",
        "Learn essential tools and environments for your field",
        "Master fundamental concepts required for specialization"
      ]
    },
    { 
      month: "Day 1-15", 
      title: "Specialized Skills", 
      icon: <FaGraduationCap />, 
      content: "Advanced Technical Training and Project Implementation",
      details: [
        "Develop expertise in specialized technologies and frameworks",
        "Learn industry best practices for production environments",
        "Master relevant cloud and deployment technologies",
        "Advanced programming and architecture techniques",
        "Begin applying skills to practical projects with guidance",
        "Build intermediate portfolio projects for demonstration"
      ]
    },
    { 
      month: "Day 15-120",
      title: "Job Application Strategies", 
      icon: <FaSearch />, 
      content: "Career Marketing and Application Preparation",
      details: [
        "Develop targeted job search strategy and application materials",
        "Learn techniques for finding hidden job opportunities",
        "Optimize resume and LinkedIn for ATS systems",
        "Create tailored cover letters and application templates",
        "Begin networking with industry professionals",
        "Set up job alerts and organize application tracking system"
      ]
    },
    { 
      month: "Day 15-120", 
      title: "Professional Launch", 
      icon: <FaUsers />, 
      content: "Portfolio Completion and Career Transition",
      details: [
        "Complete comprehensive capstone projects demonstrating technical mastery",
        "Prepare for technical assessments and interviews",
        "Develop salary negotiation and workplace communication skills",
        "Receive mentorship for career transition",
        "Create plan for continuous learning and professional growth",
        "Finalize transition plan to new career path"
      ]
    }
  ];

  // Program features data
  const featuresData = [
    {
      icon: <FaChartLine />,
      title: "Industry-Ready Curriculum",
      description: "Our curriculum is designed with input from industry leaders to ensure you learn the most relevant and in-demand skills.",
      items: [
        "Advanced SQL & Python for real-world applications",
        "Machine Learning Model Development & Deployment",
        "Big Data Technologies (Hadoop, Spark, Kafka)",
        "Cloud Computing & Microservices Architecture",
        "Data Engineering Pipelines & ETL Processes",
        "Software Development Best Practices"
      ]
    },
    {
      icon: <FaMoneyBillAlt />,
      title: "Risk-Free Investment",
      description: "We're so confident in our program that we offer a money-back guarantee if you don't succeed.",
      items: [
        "Pay After Placement Option",
        "100% Money-Back Guarantee",
        "Flexible Payment Plans",
        "No Hidden Fees",
        "Transparent Refund Policy",
        "Success-Based Payment Structure"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Career Support",
      description: "Our comprehensive career support ensures you're not just trained but also placed in the right role.",
      items: [
        "1:1 Career Coaching Sessions",
        "Interview Preparation Workshops",
        "Resume & LinkedIn Profile Optimization",
        "Personal Brand Development",
        "Networking Opportunities with Industry Partners",
        "Post-Placement Support"
      ]
    }
  ];

  // Guarantee data
  const guaranteeData = {
    refundPolicy: [
      { condition: "Get a job through our program", refund: "No refund (full payment due)" },
      { condition: "5+ interviews but no job offer", refund: "30% refund of initial payment" },
      { condition: "4 interviews but no job offer", refund: "35% refund of initial payment" },
      { condition: "3 interviews but no job offer", refund: "40% refund of initial payment" },
      { condition: "0 interviews secured", refund: "50% refund of initial payment" }
    ],
    eligibility: [
      "Complete all program requirements including coursework and projects",
      "Attend all scheduled interviews unless formally excused",
      "Do not reject any reasonable job offers (at or above average entry-level salary)",
      "Valid for 3 months after program completion"
    ]
  };

  // Pricing data with currency converter
  const pricingData = {
    title: "Career Accelerator Plan",
    totalPrice: 6000,
    initialPayment: 3500,
    deferredPayment: 2500,
    features: [
      "Automated Job Applications",
      "Resume & LinkedIn Optimization",
      "Interview & Negotiation Coaching",
      "1:1 Mentorship from Industry Experts",
      "Personalized Career Path Guidance",
      "Industry Network Access"
    ]
  };

  // FAQ data
  const faqData = [
    {
      question: "What are the eligibility requirements for the program?",
      answer: "To be eligible, you must be at least 21 years old, have a basic understanding of programming concepts, and commit to the full 6-month duration of the program including all coursework and job search activities. We primarily serve students currently studying in the USA, recent graduates, and professionals looking to enhance their careers. Our program includes specialized guidance for international students navigating H-1B visa requirements and OPT/CPT opportunities. We provide tailored support for the unique challenges faced by international candidates in the US job market."
    },
    {
      question: "How does the payment structure work?",
      answer: "The total program fee is $6,000, with $3,500 due upon enrollment, $2,500 due after job placement, and an additional 8% of your first year's annual compensation (only applicable if placed through our program)."
    },
    {
      question: "What happens if I don't get a job after completing the program?",
      answer: "We offer a money-back guarantee based on your placement outcomes. If you receive fewer than 5 interviews, you'll receive a refund ranging from 50-70% of your initial payment, depending on the specific circumstances."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "While a basic understanding of programming concepts is recommended, we have designed our curriculum to accommodate various skill levels. We provide additional resources for beginners to ensure everyone can keep pace with the program."
    },
    {
      question: "How much time commitment is required?",
      answer: "The program requires approximately 20-25 hours per week. This includes structured learning sessions, mentorship meetings and self-paced study. The time commitment may increase during the final months as you work on capstone projects."
    }
  ];

  return (
    <div className="program-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Profortiz Program Details</h1>
            <p>Everything you need to know about our career accelerator program</p>
          </motion.div>
        </div>

        {/* Animated Shapes Background */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </section>

      {/* Navigation Tabs */}
      <div className="container">
        <div className="program-tabs">
          <div 
            className={`tab ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            Timeline
          </div>
          <div 
            className={`tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </div>
          <div 
            className={`tab ${activeTab === 'pricing' ? 'active' : ''}`}
            onClick={() => setActiveTab('pricing')}
          >
            Pricing
          </div>
          <div 
            className={`tab ${activeTab === 'guarantee' ? 'active' : ''}`}
            onClick={() => setActiveTab('guarantee')}
          >
            Guarantee
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Timeline Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'timeline' && (
            <motion.section 
              className="timeline-section"
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="container">
                <div className="section-header">
                  <h2>Your Learning Journey</h2>
                  <p>A structured path to transform your career in 6 months</p>
                </div>

                <div className="timeline-container">
                  {/* Timeline Calendar Bar */}
                  <div className="timeline-calendar-bar" style={{ display: 'flex', marginBottom: '2rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, textAlign: 'center', background: '#e0e7ef', padding: '0.5rem', borderRadius: '8px 0 0 8px', borderRight: '2px solid #64748b' }}>
                      <strong>Day 1-15</strong>
                      <div style={{ fontSize: '0.9rem' }}>Foundation</div>
                    </div>
                    <div style={{ flex: 2, textAlign: 'center', background: '#c7d2fe', padding: '0.5rem', borderRight: '2px solid #64748b' }}>
                      <strong>Day 1-15</strong>
                      <div style={{ fontSize: '0.9rem' }}>Specialized Skills</div>
                    </div>
                    <div style={{ flex: 7, textAlign: 'center', background: '#a5b4fc', padding: '0.5rem', borderRight: '2px solid #64748b' }}>
                      <strong>Day 15-120</strong>
                      <div style={{ fontSize: '0.9rem' }}>Job Application Strategies</div>
                    </div>
                    <div style={{ flex: 7, textAlign: 'center', background: '#818cf8', padding: '0.5rem', borderRadius: '0 8px 8px 0' }}>
                      <strong>Day 15-120</strong>
                      <div style={{ fontSize: '0.9rem' }}>Professional Launch</div>
                    </div>
                  </div>

                  {timelineData.map((item, index) => (
                    <motion.div
                      className="timeline-item"
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="timeline-left">
                        <div className="timeline-icon">
                          {item.icon}
                        </div>
                        {index < timelineData.length - 1 && <div className="timeline-line"></div>}
                      </div>
                      
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <span className="timeline-phase">{item.month}</span>
                          <h3>{item.title}</h3>
                        </div>
                        <p className="timeline-description">{item.content}</p>
                        <div className="timeline-details">
                          {item.details.map((detail, i) => (
                            <div className="detail-item" key={i}>
                              <FaCheck className="check-icon" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.section 
              className="features-section"
              key="features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="container">
                <div className="section-header">
                  <h2>Program Features</h2>
                  <p>What makes our program unique and effective</p>
                </div>

                <div className="features-container">
                  {featuresData.map((feature, index) => (
                    <motion.div 
                      className="feature-card"
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="feature-header">
                        <div className="feature-icon">
                          {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                      </div>
                      
                      <p className="feature-description">{feature.description}</p>
                      
                      <div className="feature-list">
                        {feature.items.map((item, i) => (
                          <div className="feature-item" key={i}>
                            <FaCheck className="check-icon" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Pricing Tab with Currency Converter */}
          {activeTab === 'pricing' && (
            <motion.section 
              className="pricing-section"
              key="pricing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="container">
                <div className="section-header">
                  <h2>Program Pricing</h2>
                  <p>An investment in your future career</p>
                </div>

                <div className="pricing-container">
                  <motion.div 
                    className="pricing-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="badge">Most Popular</div>
                    <h3>{pricingData.title}</h3>
                    
                    {/* Total Price with Currency Converter */}
                    <div className="price-display">
                      <CurrencyConverter 
                        usdAmount={pricingData.totalPrice} 
                        showBoth={true}
                        className="pricing-card-price"
                        size="xlarge"
                      />
                    </div>
                    
                    <div className="payment-structure">
                      <div className="payment-term">
                        <CurrencyConverter 
                          usdAmount={pricingData.initialPayment} 
                          inline={true}
                          size="large"
                        />
                        <div className="term-label">Initial Payment</div>
                      </div>
                      <div className="payment-term">
                        <CurrencyConverter 
                          usdAmount={pricingData.deferredPayment} 
                          inline={true}
                          size="large"
                        />
                        <div className="term-label">After Placement</div>
                      </div>
                      <div className="payment-term">
                        <div className="term-amount">8%</div>
                        <div className="term-label">Annual CTC</div>
                      </div>
                    </div>
                    
                    <div className="price-divider"></div>
                    
                    <div className="pricing-features">
                      {pricingData.features.map((feature, index) => (
                        <div className="pricing-feature" key={index}>
                          <FaCheck className="check-icon" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.button 
                      className="apply-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleApplyClick}
                    >
                      Start Application
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Guarantee Tab */}
          {activeTab === 'guarantee' && (
            <motion.section 
              className="guarantee-section"
              key="guarantee"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="container">
                <div className="section-header">
                  <h2>Our Money-Back Guarantee</h2>
                  <p>We believe in our program so much that we offer a risk-free guarantee</p>
                </div>

                <div className="guarantee-container">
                  <div className="guarantee-grid">
                    <motion.div 
                      className="guarantee-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3>Eligibility Criteria</h3>
                      <div className="guarantee-list">
                        {guaranteeData.eligibility.map((item, index) => (
                          <div className="guarantee-item" key={index}>
                            <FaCheck className="check-icon" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="guarantee-card refund-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3>Refund Structure</h3>
                      <div className="refund-table">
                        <div className="refund-header">
                          <div className="header-cell">Condition</div>
                          <div className="header-cell">Refund Amount</div>
                        </div>
                        {guaranteeData.refundPolicy.map((policy, index) => (
                          <div className="refund-row" key={index}>
                            <div className="refund-cell">{policy.condition}</div>
                            <div className="refund-cell">{policy.refund}</div>
                          </div>
                        ))}
                      </div>
                      <div className="refund-note">
                        <strong>Note:</strong> Refunds apply only to the initial payment{' '}
                        <CurrencyConverter 
                          usdAmount={3500} 
                          inline={true}
                          size="small"
                        />. The deferred payment is only due if you secure employment through our program.
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our program</p>
          </div>

          <div className="faq-container">
            {faqData.map((faq, index) => (
              <motion.div 
                className={`faq-item ${expandedFaq === index ? 'active' : ''}`}
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    {expandedFaq === index ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Career?</h2>
            <p>Take the first step towards becoming a top-tier tech professional</p>
            
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplyClick}
            >
              Apply Now <FaArrowRight className="btn-icon" />
            </motion.button>
            
            <Link to="/" className="back-link">
              Return to Home
            </Link>
          </motion.div>
        </div>
      </section>
      
      <ConfirmationDialog 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmation}
      />

      <style jsx>{`
        .program-page {
          overflow-x: hidden;
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
        
        /* Hero Section Styles */
        .program-hero {
          padding: 8rem 2rem 4rem;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #ffffff, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-content p {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
        }
        
        /* Animated Shapes */
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          z-index: 0;
        }
        
        .shape1 {
          width: 300px;
          height: 300px;
          background: #6366f1;
          top: -100px;
          left: -100px;
          animation: float 20s infinite alternate;
        }
        
        .shape2 {
          width: 200px;
          height: 200px;
          background: #10b981;
          bottom: -50px;
          right: -50px;
          animation: float 15s infinite alternate-reverse;
        }
        
        .shape3 {
          width: 150px;
          height: 150px;
          background: #8b5cf6;
          top: 30%;
          right: 20%;
          animation: float 25s infinite;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(50px, 30px) rotate(25deg); }
        }
        
        /* Tabs Styles */
        .program-tabs {
          display: flex;
          justify-content: center;
          background: white;
          border-radius: 50px;
          padding: 0.5rem;
          margin: -2rem auto 3rem;
          max-width: 700px;
          position: relative;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .tab {
          padding: 1rem 2rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 50px;
          text-align: center;
          flex: 1;
        }
        
        .tab:hover {
          color: #1e293b;
        }
        
        .tab.active {
          background: #6366f1;
          color: white;
        }
        
        /* Timeline Section Styles */
        .timeline-section {
          padding: 4rem 0 6rem;
          background: #f8fafc;
        }
        
        .timeline-container {
          padding: 2rem 0;
          position: relative;
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-left {
          position: relative;
        }
        
        .timeline-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1.5rem;
          z-index: 5;
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
          position: relative;
        }
        
        .timeline-line {
          position: absolute;
          top: 64px;
          left: 32px;
          width: 4px;
          height: calc(100% + 4rem);
          background: linear-gradient(to bottom, #6366f1, rgba(99, 102, 241, 0.2));
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .timeline-content {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          margin-left: 2rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          flex: 1;
        }
        
        .timeline-phase {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .timeline-content h3 {
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .timeline-description {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .timeline-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.5rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .detail-item:hover {
          transform: translateX(5px);
        }
        
        .check-icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        
        /* Features Section Styles */
        .features-section {
          padding: 4rem 0 6rem;
          background: white;
        }
        
        .features-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: #f8fafc;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .feature-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .feature-icon {
          width: 50px;
          height: 50px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #6366f1;
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        
        .feature-header h3 {
          font-size: 1.5rem;
          color: #1e293b;
          margin: 0;
        }
        
        .feature-description {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          padding: 0.8rem;
          background: white;
          border-radius: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateX(5px);
        }
        
        /* Pricing Section Styles */
        .pricing-section {
          padding: 4rem 0 6rem;
          background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
        }
        
        .pricing-container {
          display: flex;
          justify-content: center;
        }
        
        .pricing-card {
          max-width: 600px;
          width: 100%;
          background: white;
          border-radius: 1.5rem;
          padding: 3rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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
        
        .pricing-card h3 {
          font-size: 2rem;
          color: #1e293b;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .price-display {
          text-align: center;
          margin: 2rem 0;
        }
        
        .payment-structure {
          display: flex;
          justify-content: space-around;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .payment-term {
          text-align: center;
          flex: 1;
          min-width: 150px;
        }
        
        .term-amount {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .term-label {
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .price-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 2rem 0;
        }
        
        .pricing-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        
        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #4b5563;
        }
        
        .apply-button {
          width: 100%;
          padding: 1.2rem;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 0.8rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .apply-button:hover {
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }
        
        /* Guarantee Section Styles */
        .guarantee-section {
          padding: 4rem 0 6rem;
          background: white;
        }
        
        .guarantee-container {
          margin-bottom: 4rem;
        }
        
        .guarantee-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }
        
        .guarantee-card {
          background: #f8fafc;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }
        
        .guarantee-card h3 {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 1.5rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .guarantee-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .guarantee-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          color: #4b5563;
          line-height: 1.5;
        }
        
        .refund-table {
          width: 100%;
          margin-bottom: 1.5rem;
        }
        
        .refund-header {
          display: flex;
          background: #1e293b;
          color: white;
          border-radius: 0.5rem 0.5rem 0 0;
          overflow: hidden;
        }
        
        .header-cell {
          padding: 1rem;
          flex: 1;
          font-weight: 600;
        }
        
        .refund-row {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .refund-row:last-child {
          border-bottom: none;
          border-radius: 0 0 0.5rem 0.5rem;
          overflow: hidden;
        }
        
        .refund-cell {
          padding: 1rem;
          flex: 1;
          background: white;
          color: #4b5563;
        }
        
        .refund-note {
          padding: 1rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 0.5rem;
          color: #064e3b;
          font-size: 0.9rem;
          margin-top: 1rem;
        }
        
        /* FAQ Section Styles */
        .faq-section {
          padding: 6rem 0;
          background: #f1f5f9;
        }
        
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-item {
          background: white;
          border-radius: 0.8rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .faq-question {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        
        .faq-question h3 {
          font-size: 1.2rem;
          color: #1e293b;
          margin: 0;
        }
        
        .faq-icon {
          color: #6366f1;
          transition: transform 0.3s ease;
        }
        
        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }
        
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: #4b5563;
          line-height: 1.6;
          overflow: hidden;
        }
        
        /* Final CTA Styles */
        .final-cta {
          padding: 6rem 0;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          text-align: center;
        }
        
        .cta-content h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .cta-content p {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }
        
        .cta-button {
          padding: 1.2rem 2.5rem;
          background: white;
          color: #6366f1;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
        }
        
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
        }
        
        .btn-icon {
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover .btn-icon {
          transform: translateX(5px);
        }
        
        .back-link {
          color: white;
          text-decoration: underline;
          font-weight: 500;
          transition: opacity 0.3s ease;
          display: inline-block;
        }
        
        .back-link:hover {
          opacity: 0.8;
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
          .guarantee-grid {
            grid-template-columns: 1fr;
          }
          
          .pricing-card {
            padding: 2rem;
          }
          
          .badge {
            transform: rotate(0);
            position: static;
            display: inline-block;
            padding: 0.5rem 1rem;
            margin-bottom: 1rem;
          }
          
          .payment-structure {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .program-tabs {
            flex-wrap: wrap;
            border-radius: 1rem;
            max-width: 100%;
          }
          
          .tab {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
            flex: 0 0 calc(50% - 0.5rem);
            margin: 0.25rem;
            border-radius: 0.5rem;
          }
          
          .timeline-item {
            flex-direction: column;
          }
          
          .timeline-left {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
          }
          
          .timeline-line {
            top: 32px;
            left: 32px;
            height: 1px;
            width: calc(100% - 64px);
            background: linear-gradient(to right, #6366f1, rgba(99, 102, 241, 0.2));
          }
          
          .timeline-content {
            margin-left: 0;
          }
          
          .timeline-details {
            grid-template-columns: 1fr;
          }
          
          .features-container {
            grid-template-columns: 1fr;
          }
          
          .pricing-features {
            grid-template-columns: 1fr;
          }
          
          .cta-content h2 {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .program-hero {
            padding: 6rem 1.5rem 3rem;
          }
          
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-content p {
            font-size: 1rem;
          }
          
          .section-header h2 {
            font-size: 1.8rem;
          }
          
          .section-header p {
            font-size: 1rem;
          }
          
          .container {
            padding: 0 1.5rem;
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

export default Program;