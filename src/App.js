import React from 'react';
import { FaRocket, FaChartLine, FaHandshake, FaMoneyBillAlt, FaStar, FaRegClock, FaGraduationCap, FaLaptopCode, FaUsers, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion, useScroll } from 'framer-motion';
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import  Logo  from './logo.jpg'; 

const ProfortizPlan = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    return scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <div className="main-container">
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
           <img src={Logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
            Profortiz
          </motion.div>
          <nav className="nav-links">
            {[
              { title: "Features", href: "#features" },
              { title: "Pricing", href: "#pricing" },
              { title: "Timeline", href: "#timeline" },
             
              { title: "Guarantee", href: "#guarantee" },
              { title: "About Us", href: "#about" },
              { title: "Contact", href: "#contact" }  // Add this line
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.title}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      <style jsx>{`
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .nav-header.scrolled {
          background: rgba(30, 41, 59, 0.95);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #10b981;
        }

        @media (max-width: 768px) {
          .nav-content {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-links {
            gap: 1rem;
          }
        }
      `}</style>
      
      {/* Hero Section with Particles */}
      <section className="hero">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              opacity: 0
            },
            particles: {
              color: {
                value: "#ffffff"
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1
              },
              move: {
                enable: true,
                speed: 2
              },
              number: {
                value: 50
              },
              opacity: {
                value: 0.3
              },
              size: {
                value: { min: 1, max: 3 }
              }
            }
          }}
        />
        <motion.div
          className="content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 className="title" variants={fadeIn}>
            <FaRocket className="icon" /> Profortiz
          </motion.h1>
          <motion.h2 className="subtitle" variants={fadeIn}>
            Accelerate Your Career in Data Engineering & Software Development
          </motion.h2>
          <motion.p className="description" variants={fadeIn}>
            Transform into a Top-Tier Data Professional in 6 Months
          </motion.p>
          <motion.button
  className="cta-button"
  variants={fadeIn}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open('https://docs.google.com/forms/d/1KeNcLbmHviU-yKkuBKtvgFu-lbKdaPcaHKNWpDugZrM/edit', '_blank')}
>
  Start Application
</motion.button>
        </motion.div>

        <style jsx>{`
          .hero {
            position: relative;
            min-height: 100vh;
            padding-top: 80px; /* Add this line */
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            overflow: hidden;
          }

          #tsparticles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .content {
            text-align: center;
            z-index: 1;
            padding: 2rem;
          }

          .title {
            font-size: 4.5rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }

          .subtitle {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            font-weight: 300;
          }

          .description {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            opacity: 0.9;
          }

          .cta-button {
            padding: 1.5rem 3rem;
            font-size: 1.25rem;
            background: #10b981;
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .icon {
            font-size: 2.5rem;
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* Rest of your components remain the same */}
      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <h3>94% Success Rate</h3>
            <p>Career Placement Within 6 Months</p>
          </div>
          <div className="stat-item">
            <FaRegClock className="stat-icon" />
            <h3>500+ Hours</h3>
            <p>Hands-On Project Experience</p>
          </div>
          <div className="stat-item">
            <FaHandshake className="stat-icon" />
            <h3>1:1 Mentorship</h3>
            <p>Industry Expert Guidance</p>
          </div>
        </div>

        <style jsx>{`
          .stats {
            padding: 4rem 2rem;
            background: #ffffff;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .stat-item {
            text-align: center;
            padding: 2rem;
            background: #f8fafc;
            border-radius: 1rem;
            transition: transform 0.3s ease;
          }

          .stat-item:hover {
            transform: translateY(-5px);
          }

          .stat-icon {
            font-size: 2.5rem;
            color: #6366f1;
            margin-bottom: 1rem;
          }
        `}</style>
      </section>
      <section className="about" id="about">
        <h2 className="section-title">About Profortiz</h2>
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
          .about {
            padding: 6rem 2rem;
            background: #ffffff;
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
          }
          
          .about-values li:last-child {
            border-bottom: none;
          }
          
          .team-section {
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 3rem;
          }
          
          .team-section h3 {
            text-align: center;
            color: #6366f1;
            font-size: 1.8rem;
            margin-bottom: 3rem;
          }
          
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
          
          .team-card h4 {
            color: #1e293b;
            margin-bottom: 0.5rem;
          }
          
          .role {
            color: #6366f1;
            font-weight: 500;
            margin-bottom: 1rem;
          }
          
          .bio {
            color: #4b5563;
            margin-bottom: 1rem;
            font-size: 0.9rem;
          }
          
          .expertise {
            color: #64748b;
            font-size: 0.9rem;
          }
        `}</style>
      </section>
      {/* Program Highlights */}
      <section className="highlights" id="features">
        <h2 className="section-title">Program Features</h2>
        <p className="section-description">
          Comprehensive training designed to transform beginners into industry-ready professionals
        </p>
        <div className="highlight-cards">
          {[
            {
              icon: <FaChartLine />,
              title: "Industry-Ready Curriculum",
              items: ["Advanced SQL & Python", "Machine Learning Productionization", "Big Data Technologies"]
            },
            {
              icon: <FaMoneyBillAlt />,
              title: "Risk-Free Investment",
              items: ["Pay After Placement", "100% Money-Back Guarantee", "Flexible Payment Plans"]
            },
            {
              icon: <FaHandshake />,
              title: "Career Support",
              items: ["1:1 Career Coaching", "Interview Preparation", "Resume Building"]
            },
            {
              icon: <FaUsers />,
              title: "Community Learning",
              items: ["Peer Learning Groups", "Industry Expert Sessions", "Networking Events"]
            }
          ].map((feature, index) => (
            <motion.div 
              className="card" 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
            >
              <div className="card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <ul>
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <style jsx>{`
          .section-description {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 3rem;
            color: #4b5563;
            font-size: 1.2rem;
            line-height: 1.6;
          }

          .highlight-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .card {
            background: white;
            padding: 2.5rem;
            border-radius: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
          }

          .card h3 {
            color: #1e293b;
            margin: 1rem 0;
            font-size: 1.5rem;
          }

          .card ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .card li {
            padding: 0.5rem 0;
            color: #4b5563;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .card li:before {
            content: "→";
            color: #10b981;
            font-weight: bold;
          }
        `}</style>
      </section>

     {/* Enhanced Pricing Section */}
<section className="pricing" id="pricing">
  <div className="pricing-card">
    <div className="pricing-header">
      <div className="badge">Most Popular</div>
      <h3>Career Accelerator Plan</h3>
      <div className="price">$6000</div>
      <div className="payment-terms">
        <div className="term">
          <span className="amount">$3,500</span>
          <span className="label">Initial Payment</span>
        </div>
        <div className="term-divider">+</div>
        <div className="term">
          <span className="amount">$2,500</span>
          <span className="label">After Placement</span>
        </div>
        <div className="term-divider">+</div>
        <div className="term">
          <span className="amount">8%</span>
          <span className="label">Annual CTC</span>
        </div>
      </div>
    </div>
    
    <div className="features">
      <div className="feature-item">
        <div className="feature-icon">🚀</div>
        <div className="feature-text">Automated Job Applications</div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">📊</div>
        <div className="feature-text">Resume & LinkedIn Optimization</div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">🎯</div>
        <div className="feature-text">Interview & Negotiation Coaching</div>
      </div>
    </div>
    
    <button className="cta-button">
      Start Your Journey
      <span className="button-arrow">→</span>
    </button>
  </div>

  <style jsx>{`
    .pricing {
      padding: 4rem 2rem;
      background: linear-gradient(45deg, #1e293b, #0f172a);
      color: white;
      text-align: center;
    }

    .pricing-card {
      max-width: 600px;
      margin: 0 auto;
      background: rgba(255,255,255,0.1);
      padding: 3rem;
      border-radius: 2rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
      position: relative;
      overflow: hidden;
    }

    .badge {
      position: absolute;
      top: 1rem;
      right: -2rem;
      background: #10b981;
      color: white;
      padding: 0.5rem 3rem;
      transform: rotate(45deg);
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .price {
      font-size: 3.5rem;
      font-weight: bold;
      margin: 1.5rem 0;
      background: linear-gradient(135deg, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .payment-terms {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin: 2rem 0;
    }

    .term {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .amount {
      font-size: 1.2rem;
      font-weight: bold;
      color: #10b981;
    }

    .label {
      font-size: 0.8rem;
      opacity: 0.8;
    }

    .term-divider {
      color: #10b981;
      font-size: 1.5rem;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin: 2rem 0;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.8rem;
      background: rgba(255,255,255,0.05);
      border-radius: 1rem;
      transition: transform 0.3s ease;
    }

    .feature-item:hover {
      transform: translateX(10px);
      background: rgba(255,255,255,0.1);
    }

    .feature-icon {
      font-size: 1.5rem;
    }

    .feature-text {
      font-size: 1rem;
      text-align: left;
    }

    .cta-button {
      width: 100%;
      padding: 1.2rem;
      background: linear-gradient(135deg, #10b981, #34d399);
      border: none;
      border-radius: 1rem;
      color: white;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
    }

    .button-arrow {
      transition: transform 0.3s ease;
    }

    .cta-button:hover .button-arrow {
      transform: translateX(5px);
    }
  `}</style>
</section>

      {/* Timeline Section */}
      <motion.section className="timeline" id="timeline">
        <h2 className="section-title">Your Learning Journey</h2>
        <div className="timeline-container">
          {[
            { month: "Month 1-2", title: "Profile Building", icon: <FaLaptopCode />, 
             content: "Profile Building that includes resume, Linkedin , Mock Interviews" },
            { month: "Month 3-4", title: "Advanced Skills", icon: <FaGraduationCap />, 
              content: "Deep Learning, ML Ops, and Cloud Technologies, Master Python, SQL, and Data Structures" },
            { month: "Month 5-6", title: "Career Launch", icon: <FaUsers />, 
              content: "Industry Projects and Interview Preparation" }
          ].map((item, index) => (
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
            >
              <div className="timeline-icon">{item.icon}</div>
              <h3>{item.month}</h3>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </div>

        <style jsx>{`
          .timeline {
            padding: 6rem 2rem;
            background: #f8fafc;
          }

          .timeline-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .timeline-item {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .timeline-icon {
            font-size: 2.5rem;
            color: #6366f1;
            margin-bottom: 1rem;
          }
        `}</style>
      </motion.section>
      {/* Benefits Section */}
      <section className="benefits">
        <h2 className="section-title">Why Choose Profortiz?</h2>
        <div className="benefits-grid">
          {[
            {
              title: "Learn by Doing",
              content: "Work on real-world projects from leading companies",
              icon: "🚀"
            },
            {
              title: "Expert Mentorship",
              content: "Get guidance from industry veterans with 10+ years of experience",
              icon: "👨‍🏫"
            },
            {
              title: "Job Guarantee",
              content: "Get placed or get your money back - it's that simple",
              icon: "💼"
            },
            {
              title: "Flexible Learning",
              content: "Study at your own pace with live and recorded sessions",
              icon: "⏰"
            },
            {
              title: "Industry Network",
              content: "Connect with professionals from top tech companies",
              icon: "🤝"
            },
            {
              title: "Lifetime Access",
              content: "Get unlimited access to our community",
              icon: "🔄"
            }
          ].map((benefit, index) => (
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.content}</p>
            </motion.div>
          ))}
        </div>

        <style jsx>{`
          .benefits {
            padding: 6rem 2rem;
            background: #f8fafc;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .benefit-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
          }

          .benefit-card:hover {
            transform: translateY(-5px);
          }

          .benefit-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .benefit-card h3 {
            color: #1e293b;
            margin-bottom: 0.5rem;
          }

          .benefit-card p {
            color: #4b5563;
            line-height: 1.6;
          }
        `}</style>
      </section>

      {/* Money Back Guarantee Section */}
      <section className="guarantee" id="guarantee">
        <h2 className="section-title">Your Success, Guaranteed</h2>
        <p className="section-description">
          Try our Money Back Guarantee Plan—risk-free!
        </p>

        <div className="guarantee-container">
          <motion.div 
            className="guarantee-card main-plan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Money Back Guarantee Plan</h3>
            <div className="price-details">
              <div className="price-item">
                <h4>Upfront Payment</h4>
                <span className="price">$6,000</span>
                <p className="price-description">($3,500 + $2,500)</p>
              </div>
              <div className="price-item">
                <h4>Balance Payment</h4>
                <span className="price">8%</span>
                <p className="price-description">(payable in total Annual CTC)</p>
              </div>
            </div>
          </motion.div>

          <div className="guarantee-grid">
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Payment Policies</h3>
              <ul>
                <li>Customizable payment plans based on financial needs</li>
                <li>No hidden charges; transparent policies</li>
                <li>Flexible payment options: credit cards, bank transfers, online payment systems</li>
                <li>Deferred payment plans available for eligible students</li>
              </ul>
            </motion.div>

            
          
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3>Fair Refund Policy</h3>
              <ul>
                <li> If you receive fewer than 5 interviews, you get a refund based on the number of interviews 
                secured. </li>
                <li> If you land a job, your MBG will no longer apply, and you’ll continue with the payment plan as 
                agreed. </li>
            
              </ul>
            </motion.div>
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3>Eligibility Criteria</h3>
              <ul>
                <li>Complete all required job search activities</li>
                <li>Attend all scheduled interviews</li>
                <li>Not reject reasonable job offers</li>
              </ul>
            </motion.div>
          </div>
        </div>
       

        <style jsx>{`
          .guarantee {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: white;
          }

          .guarantee-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .guarantee-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 3rem;
            border-radius: 2rem;
            margin-bottom: 3rem;
            text-align: center;
          }

          .price-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .price-item {
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
          }

          .price {
            font-size: 3rem;
            font-weight: bold;
            color: #10b981;
            margin: 1rem 0;
          }

          .price-note {
            font-size: 2rem;
            font-weight: bold;
            color: #10b981;
          }

          .price-description {
            font-size: 0.9rem;
            opacity: 0.8;
          }

          .guarantee-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .info-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: 1rem;
            backdrop-filter: blur(10px);
          }

          .info-card h3 {
            color: #10b981;
            margin-bottom: 1.5rem;
          }

          .info-card h4 {
            color: #10b981;
            margin: 1.5rem 0 1rem;
          }

          .info-card ul {
            list-style: none;
            padding: 0;
          }

          .info-card li {
            margin: 0.8rem 0;
            padding-left: 1.5rem;
            position: relative;
          }

          .info-card li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #10b981;
          }

          @media (max-width: 768px) {
            .price-details {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Are You Ready to Grow Your Career?</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Apply Now</h3>
                <motion.button 
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://docs.google.com/forms/d/1KeNcLbmHviU-yKkuBKtvgFu-lbKdaPcaHKNWpDugZrM/edit', '_blank')}
                >
                  Start Application
                </motion.button>
              </div>
              
              <div className="contact-card">
                <h3>Get More Information</h3>
                <div className="contact-info">
                  
                  <p>
                    <FaEnvelope className="contact-icon" />
                    <a href="mailto:hr@profortiz.net">hr@profortiz.net</a>
                  </p>
                  <p>
                    <FaWhatsapp className="contact-icon whatsapp" />
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
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          .contact {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            color: white;
          }

          .contact-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .contact-content {
            text-align: center;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-top: 3rem;
          }

          .contact-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-info p {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
          }

          .contact-info p:hover {
            transform: translateX(5px);
          }

          .contact-info a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .contact-info a:hover {
            color: #10b981;
          }

          .contact-icon {
            color: #10b981;
            font-size: 1.5rem;
          }

          .whatsapp {
            color: #25D366;
          }

          .whatsapp-link:hover {
            color: #25D366;
          }

          .cta-button {
            padding: 1rem 2rem;
            font-size: 1.2rem;
            background: #10b981;
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Floating Animation Elements */}
      <div className="floating-elements">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 * i}%`,
              backgroundColor: `hsla(${i * 60}, 70%, 50%, 0.2)`,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .floating-element {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          opacity: 0.3;
        }

        /* Add smooth scrolling to the whole page */
        html {
          scroll-behavior: smooth;
        }

        /* Add subtle hover effects to all interactive elements */
        button, .card, .stat-item {
          transition: all 0.3s ease;
        }

        button:hover, .card:hover, .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ProfortizPlan;