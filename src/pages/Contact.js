// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../components/Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import ConfirmationDialog from '../components/ConfirmationDialog';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'career-accelerator'
  });
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // Snackbar state
const [showSnackbar, setShowSnackbar] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState('');
  // Confirmation dialog state
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Reset success message after 5 seconds
  useEffect(() => {
    let timer;
    if (submitSuccess) {
      timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitSuccess]);

  // Form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submit handler - integrated with Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Add timestamp to form data
      const formDataWithTimestamp = {
        ...formData,
        createdAt: serverTimestamp()
      };
      
      // Save to Firestore
      const docRef = await addDoc(collection(db, "contactRequests"), formDataWithTimestamp);
      console.log("Document written with ID: ", docRef.id);
      
     setSnackbarMessage('Thanks for contacting us! We will get back to you soon.');
setShowSnackbar(true);
setTimeout(() => {
  setShowSnackbar(false);
}, 5000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'career-accelerator'
      });
      
      
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitError("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Confirmation dialog handlers
  const handleApplyClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    window.open('https://docs.google.com/forms/d/1KeNcLbmHviU-yKkuBKtvgFu-lbKdaPcaHKNWpDugZrM/edit', '_blank');
  };

  return (
    <section className="contact-page">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>We're here to answer your questions and help you get started</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Contact Information</h2>
            <p className="contact-desc">
              Ready to transform your career? Reach out to us through any of the following channels:
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p><a href="mailto:hrm@profortiz.net">hr@profortiz.net</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <FaWhatsapp className="info-icon whatsapp" />
                <div className="info-content">
                  <h3>WhatsApp</h3>
                  <p>
                    <a 
                      href="https://wa.me/+919000292266"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      +91 90002 92266
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div className="info-content">
                  <h3>Our Location</h3>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
            
            <div className="business-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM EST/EDT</p>
              <p>Saturday: 10:00 AM - 2:00 PM EST/EDT</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Send us a Message</h2>
            
            {submitSuccess && (
              <div className="success-message">
                Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number (optional)"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="interest">I'm interested in</label>
                <select 
                  id="interest" 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="career-accelerator">Career Accelerator Program</option>
                  <option value="payment-options">Payment Options</option>
                  <option value="curriculum">Curriculum Details</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  rows="5" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitError && (
                <div className="error-message">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      
      <div className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Career?</h2>
          <p>Apply now and take the first step towards a successful career in tech.</p>
          <button 
            className="cta-button"
            onClick={handleApplyClick}
          >
            Start Application
          </button>
        </motion.div>
      </div>
      
      {/* Confirmation Dialog */}
      <ConfirmationDialog 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmation}
      />
      {/* Success Snackbar */}
<AnimatePresence>
  {showSnackbar && (
    <motion.div 
      className="snackbar"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="snackbar-content">
        <div className="snackbar-icon">✅</div>
        <div className="snackbar-message">{snackbarMessage}</div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


      <style jsx>{`
      .snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  min-width: 300px;
  max-width: 80%;
  background: #10b981;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.snackbar-content {
  display: flex;
  align-items: center;
  padding: 16px 20px;
}

.snackbar-icon {
  margin-right: 12px;
  font-size: 1.2rem;
}

.snackbar-message {
  font-weight: 500;
}

@media (max-width: 768px) {
  .snackbar {
    min-width: 250px;
    bottom: 15px;
  }
}
        .contact-page {
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

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }

        .contact-info {
          background: #f8fafc;
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .contact-info h2 {
          color: #1e293b;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }

        .contact-desc {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          font-size: 1.5rem;
          color: #6366f1;
          margin-top: 0.2rem;
        }

        .whatsapp {
          color: #25D366;
        }

        .info-content h3 {
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .info-content p {
          color: #4b5563;
        }

        .info-content a {
          color: #6366f1;
          text-decoration: none;
          transition: color 0.3s;
        }

        .info-content a:hover {
          color: #4f46e5;
        }

        .business-hours {
          border-top: 1px solid #e5e7eb;
          padding-top: 1.5rem;
        }

        .business-hours h3 {
          color: #1e293b;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .business-hours p {
          color: #4b5563;
          margin-bottom: 0.5rem;
        }

        .contact-form-container {
          background: white;
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .contact-form-container h2 {
          color: #1e293b;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #4b5563;
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          color: #1e293b;
          background: #f8fafc;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .submit-button {
          background: #6366f1;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
        }

        .submit-button:hover {
          background: #4f46e5;
          transform: translateY(-2px);
        }
        
        .cta-section {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          margin: 5rem -2rem 0;
          padding: 4rem 2rem;
          color: white;
          text-align: center;
        }
        
        .cta-content {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-button {
          background: #10b981;
          color: white;
          padding: 1rem 3rem;
          border: none;
          border-radius: 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .cta-button:hover {
          background: #059669;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .contact-info,
          .contact-form-container {
            padding: 2rem;
          }
          
          .page-header h1 {
            font-size: 2.5rem;
          }
          
          .cta-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;