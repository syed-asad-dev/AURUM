import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(y * -15);
    setRotateY(x * 15);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-left"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-label" variants={itemAnim} transition={{ delay: 0.3 }}>
            SWISS MADE • EST. 1889
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemAnim} transition={{ delay: 0.5 }}>
            BEYOND<br/>
            <span className="italic">TIME.</span><br/>
            BEYOND<br/>
            ORDINARY.
          </motion.h1>

          <motion.div className="hero-divider" variants={itemAnim} transition={{ delay: 0.7 }}></motion.div>

          <motion.p className="hero-subtext" variants={itemAnim} transition={{ delay: 0.8 }}>
            Precision engineered timepieces for those who demand perfection in every second.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemAnim} transition={{ delay: 1 }}>
            <button className="btn-primary">EXPLORE COLLECTION</button>
            <button className="btn-secondary">OUR LEGACY</button>
          </motion.div>
        </motion.div>

        <div className="hero-right">
          <div className="hero-image-wrapper" onMouseMove={handleMouseMove}>
            <div className="floating-number">01 / 03</div>
            <motion.div 
              className="hero-image-container"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800" 
                alt="Luxury Watch" 
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-bar">
        <div className="features">
          <span>SWISS MOVEMENT</span>
          <div className="v-line"></div>
          <span>SAPPHIRE CRYSTAL</span>
          <div className="v-line"></div>
          <span>300M WATER RESISTANT</span>
        </div>
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
