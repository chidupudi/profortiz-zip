// src/pages/Home.js
import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link } from 'react-router-dom';

const Home = () => {
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
    <>
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
            Transform into a Top-Tier Data/Software Professional 
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
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            overflow: hidden;
            padding-top: 80px;
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

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <FaRocket className="stat-icon" />
            <h3>84% Success Rate</h3>
            <p>Career Placement Within 6 Months</p>
          </div>
          <div className="stat-item">
            <FaRocket className="stat-icon" />
            <h3>500+ Hours</h3>
            <p>Hands-On Project Experience</p>
          </div>
          <div className="stat-item">
            <FaRocket className="stat-icon" />
            <h3>1:1 Mentorship</h3>
            <p>Industry Expert Guidance</p>
          </div>
        </div>

        <div className="explore-more">
          <h2>Ready to Transform Your Career?</h2>
          <Link to="/features">
            <motion.button 
              className="explore-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Program
            </motion.button>
          </Link>
        </div>

        <style jsx>{`
          .stats {
            padding: 6rem 2rem;
            background: #ffffff;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto 4rem;
          }

          .stat-item {
            text-align: center;
            padding: 2rem;
            background: #f8fafc;
            border-radius: 1rem;
            transition: transform 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .stat-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }

          .stat-icon {
            font-size: 2.5rem;
            color: #6366f1;
            margin-bottom: 1rem;
          }
          
          .explore-more {
            text-align: center;
            margin-top: 3rem;
          }
          
          .explore-more h2 {
            color: #1e293b;
            margin-bottom: 1.5rem;
          }
          
          .explore-button {
            padding: 1rem 2rem;
            font-size: 1.1rem;
            background: #6366f1;
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .explore-button:hover {
            background: #4f46e5;
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
    </>
  );
};

export default Home;