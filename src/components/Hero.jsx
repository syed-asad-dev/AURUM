import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="hero">
      <a href="#collection" className="skip-link">Skip to content</a>
      
      <div className="hero-video-container">
        <video 
          className="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920"
          aria-label="AURUM luxury watch hero video"
        >
          {/* Note: I couldn't access the attached video file, so I'm leaving the src pointing to a local file. Place your attached video as "hero-video.mp4" in the public directory. */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-centered">
        <motion.div 
          className="hero-text-wrapper"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-label-top" variants={itemAnim}>
            SWISS MADE • EST. 1889
          </motion.div>
          
          <motion.h1 className="hero-title-main" variants={itemAnim}>
            BEYOND<br/>TIME.
          </motion.h1>

          <motion.div className="hero-divider-center" variants={itemAnim}></motion.div>

          <motion.p className="hero-subtext-center" variants={itemAnim}>
            Precision engineered for those who demand perfection.
          </motion.p>

          <motion.div className="hero-buttons-center" variants={itemAnim}>
            <button className="btn-explore">EXPLORE</button>
            <button className="btn-legacy">OUR LEGACY</button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line-center"></div>
      </div>
    </section>
  );
};

export default Hero;
