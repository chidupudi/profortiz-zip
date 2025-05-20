// src/pages/Terms.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Terms = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  const termsSections = [
    {
      title: "1. Program Overview",
      content: "The Profortiz Career Accelerator Program is an intensive training and career development program designed to prepare participants for careers in data engineering and software development. The program includes training, mentorship, and career placement services."
    },
    {
      title: "2. Eligibility Requirements",
      content: "To be eligible for the program, participants must:",
      list: [
    "Be at least 21 years old",
    "Have a basic understanding of programming concepts",
    "Commit to the full duration of the program (6 months)",
    "Complete all required coursework and projects",
    "Actively participate in job search activities",
    "Currently studying in the USA, recent graduate, or professional looking to enhance career",
    "For international students: Navigate H-1B visa requirements and OPT/CPT opportunities"
]
    },
    {
      title: "3. Payment Terms",
      content: "The total program fee is $6,000, payable as follows:",
      list: [
        "Initial Payment: $3,500 due upon enrollment",
        "Deferred Payment: $2,500 due after placement",
        "Success Fee: 8% of first year's annual CTC (only if placed through our program)"
      ],
      additional: "Payment plans are available for the initial payment upon request and approval."
    },
    {
      title: "4. Money Back Guarantee",
      content: "Our Money Back Guarantee is subject to the following conditions:",
      list: [
        "Complete all program requirements including coursework and projects",
        "Attend all scheduled interviews unless formally excused",
        "Do not reject any reasonable job offers (at or above average entry-level salary)",
        "Valid for 3 months after program completion"
      ],
      table: true
    },
    {
      title: "5. Placement Terms",
      content: "To qualify as 'placed' through our program:",
      list: [
        "Position must be in a relevant field (data engineering, software development, or related)",
        "Position must be full-time (minimum 30 hours/week)",
        "Position must be maintained for at least 90 days",
        "Salary must meet or exceed the average entry-level salary for the position in the offered location"
      ]
    },
    {
      title: "6. Student Responsibilities",
      content: "Participants agree to:",
      list: [
        "Complete all assigned coursework and projects on time",
        "Attend all scheduled mentorship sessions",
        "Actively participate in the job search process",
        "Provide accurate information about employment status",
        "Notify Profortiz immediately upon accepting any job offer"
      ]
    },
    {
      title: "7. Intellectual Property",
      content: "All course materials, including but not limited to videos, documents, and code samples, are the intellectual property of Profortiz and may not be distributed without express written permission."
    },
    {
      title: "8. Limitation of Liability",
      content: "Profortiz is not responsible for any employment decisions made by hiring companies. While we provide training and placement assistance, we cannot guarantee specific salary amounts or employment terms with any particular company."
    },
    {
      title: "9. Program Changes",
      content: "Profortiz reserves the right to modify program content, schedule, or pricing with notice to current participants. Significant changes to the program structure will not affect students already enrolled."
    },
    {
      title: "10. Governing Law",
      content: "These terms shall be governed by and construed in accordance with the law. Any disputes shall be resolved in the courts of law."
    }
  ];

  return (
    <section className="terms-page">
      <div className="page-header">
        <h1>Terms and Conditions</h1>
        <p>Please read these terms carefully before enrolling</p>
      </div>
      
      <div className="terms-container">
        <div className="terms-summary">
          <div className="summary-card">
            <h3>Quick Summary</h3>
            <ul>
              <li>6-month intensive training program</li>
              <li>$6,000 total fee with deferred payment options</li>
              <li>Money-back guarantee based on placement outcomes</li>
              <li>Career placement services included</li>
              <li>Personal mentorship and project-based learning</li>
            </ul>
          </div>

          <div className="refund-summary">
            <h3>Refund Structure</h3>
            <div className="refund-table">
              <div className="refund-row header">
                <div className="refund-cell">Condition</div>
                <div className="refund-cell">Refund</div>
              </div>
              <div className="refund-row">
                <div className="refund-cell">Get a job</div>
                <div className="refund-cell">No refund</div>
              </div>
              <div className="refund-row">
                <div className="refund-cell">5+ interviews</div>
                <div className="refund-cell">50% refund</div>
              </div>
              <div className="refund-row">
                <div className="refund-cell">3-4 interviews</div>
                <div className="refund-cell">55-60% refund</div>
              </div>
              <div className="refund-row">
                <div className="refund-cell">0 interviews</div>
                <div className="refund-cell">70% refund</div>
              </div>
            </div>
          </div>
        </div>

        <div className="terms-accordion">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              className={`accordion-item ${expandedSection === index ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="accordion-header" onClick={() => toggleSection(index)}>
                <h3>{section.title}</h3>
                <span className="accordion-icon">
                  {expandedSection === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              
              <div className="accordion-content">
                <p>{section.content}</p>
                
                {section.list && (
                  <ul>
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {section.additional && (
                  <p className="additional-info">{section.additional}</p>
                )}
                
                {section.table && index === 3 && (
                  <div className="refund-disclaimer">
                    <p><strong>Note:</strong> Refunds apply only to the initial payment ($3,500). The deferred payment ($2,500 + 8% of CTC) is only due if you secure employment through our program.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="terms-grid">
          <motion.div
            className="terms-grid-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Payment Schedule</h3>
            <div className="payment-timeline">
              <div className="timeline-point">
                <div className="point"></div>
                <div className="point-content">
                  <h4>Enrollment</h4>
                  <p>$3,500 initial payment</p>
                </div>
              </div>
              <div className="timeline-point">
                <div className="point"></div>
                <div className="point-content">
                  <h4>Program Duration</h4>
                  <p>6 months of training</p>
                </div>
              </div>
              <div className="timeline-point">
                <div className="point"></div>
                <div className="point-content">
                  <h4>After Placement</h4>
                  <p>$2,500 deferred payment</p>
                </div>
              </div>
              <div className="timeline-point">
                <div className="point"></div>
                <div className="point-content">
                  <h4>First Year Employment</h4>
                  <p>8% of annual CTC</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="terms-grid-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Program Structure</h3>
            <div className="program-phases">
              <div className="program-phase">
                <span className="phase-number">1</span>
                <h4>Profile Building</h4>
                <p>Resume, LinkedIn, Interview Prep</p>
              </div>
              <div className="program-phase">
                <span className="phase-number">2</span>
                <h4>Technical Skills</h4>
                <p>Python, SQL, Data Structures</p>
              </div>
              <div className="program-phase">
                <span className="phase-number">3</span>
                <h4>Advanced Training</h4>
                <p>ML, Cloud, Industry Projects</p>
              </div>
              <div className="program-phase">
                <span className="phase-number">4</span>
                <h4>Career Launch</h4>
                <p>Interviews, Placement, Support</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="acknowledgement">
          <p>
            By enrolling in the Profortiz Career Accelerator Program, you acknowledge that you 
            have read, understood, and agree to these Terms and Conditions.
          </p>
        </div>
      </div>

      <style jsx>{`
        .terms-page {
          padding: 8rem 2rem 6rem;
          background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .page-header:after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          border-radius: 2px;
        }
        
        .page-header h1 {
          font-size: 3rem;
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 800;
        }
        
        .page-header p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .terms-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .terms-summary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .summary-card, .refund-summary {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .summary-card h3, .refund-summary h3 {
          color: #1e293b;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .summary-card ul {
          list-style: none;
          padding: 0;
        }
        
        .summary-card li {
          padding: 0.5rem 0;
          color: #4b5563;
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
        }
        
        .summary-card li:before {
          content: "•";
          color: #6366f1;
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        
        .refund-table {
          font-size: 0.9rem;
          width: 100%;
          border-collapse: collapse;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .refund-row {
          display: flex;
        }
        
        .refund-row.header {
          background: #f1f5f9;
          font-weight: 600;
        }
        
        .refund-cell {
          flex: 1;
          padding: 0.7rem;
          color: #4b5563;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .refund-row:last-child .refund-cell {
          border-bottom: none;
        }
        
        .terms-accordion {
          margin-bottom: 3rem;
        }
        
        .accordion-item {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          margin-bottom: 1rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .accordion-item:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }
        
        .accordion-header {
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: #f8fafc;
          transition: background 0.3s ease;
        }
        
        .accordion-header:hover {
          background: #f1f5f9;
        }
        
        .accordion-header h3 {
          font-size: 1.1rem;
          margin: 0;
          color: #1e293b;
          font-weight: 600;
        }
        
        .accordion-icon {
          color: #6366f1;
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }
        
        .accordion-item.expanded .accordion-icon {
          transform: rotate(180deg);
        }
        
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 1.5rem;
        }
        
        .accordion-item.expanded .accordion-content {
          max-height: 500px;
          padding: 1rem 1.5rem 1.5rem;
        }
        
        .accordion-content p {
          color: #4b5563;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .accordion-content ul {
          list-style: none;
          padding: 0;
        }
        
        .accordion-content li {
          padding: 0.4rem 0;
          color: #4b5563;
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.9rem;
        }
        
        .accordion-content li:before {
          content: "→";
          color: #6366f1;
          position: absolute;
          left: 0;
        }
        
        .refund-disclaimer {
          margin-top: 1rem;
          padding: 0.8rem;
          background: #f1f5f9;
          border-radius: 0.5rem;
          font-size: 0.85rem;
          color: #64748b;
          border-left: 3px solid #6366f1;
        }
        
        .terms-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .terms-grid-item {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .terms-grid-item h3 {
          color: #1e293b;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .payment-timeline {
          position: relative;
        }
        
        .payment-timeline:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 15px;
          width: 2px;
          background: #e2e8f0;
        }
        
        .timeline-point {
          position: relative;
          padding-left: 2.5rem;
          margin-bottom: 1.2rem;
        }
        
        .timeline-point:last-child {
          margin-bottom: 0;
        }
        
        .point {
          position: absolute;
          left: 0;
          top: 0.2rem;
          width: 32px;
          height: 32px;
          background: #f8fafc;
          border: 2px solid #6366f1;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .point:before {
          content: '';
          width: 8px;
          height: 8px;
          background: #6366f1;
          border-radius: 50%;
        }
        
        .point-content h4 {
          font-size: 1rem;
          color: #1e293b;
          margin: 0 0 0.3rem;
        }
        
        .point-content p {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
        }
        
        .program-phases {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .program-phase {
          padding: 1rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          position: relative;
        }
        
        .phase-number {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 28px;
          height: 28px;
          background: #6366f1;
          color: white;
          font-weight: bold;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
        }
        
        .program-phase h4 {
          font-size: 0.95rem;
          color: #1e293b;
          margin: 0 0 0.5rem;
          padding-top: 0.2rem;
        }
        
        .program-phase p {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
        }

        .acknowledgement {
          margin-top: 3rem;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          text-align: center;
          font-weight: 500;
          color: #4b5563;
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .terms-summary,
          .terms-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .point-content h4 {
            font-size: 0.95rem;
          }
          
          .point-content p {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .terms-page {
            padding: 6rem 1rem 4rem;
          }
          
          .page-header h1 {
            font-size: 2.2rem;
          }
          
          .page-header p {
            font-size: 1rem;
          }
          
          .accordion-header h3 {
            font-size: 1rem;
          }
          
          .refund-cell {
            font-size: 0.8rem;
            padding: 0.6rem;
          }
          
          .program-phases {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Terms;