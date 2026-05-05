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

  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="hero">
      <a href="#collection" className="skip-link">Skip to content</a>
      
      <div className="hero-video-container">
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920"
          aria-label="AURUM luxury watch hero video"
        >
          {/* Ensure your video is placed in the public directory as "hero-video.mp4" */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-bottom-left">
        <motion.div 
          className="hero-text-wrapper-left"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-label-left" variants={itemAnim}>
            SWISS MADE • EST. 1889
          </motion.div>
          
          <motion.h1 className="hero-title-left" variants={itemAnim}>
            BEYOND<br/>TIME.
          </motion.h1>

          <motion.div className="hero-divider-left" variants={itemAnim}></motion.div>

          <motion.p className="hero-subtext-left" variants={itemAnim}>
            Precision engineered for those who demand perfection.
          </motion.p>

          <motion.div className="hero-buttons-left" variants={itemAnim}>
            <button className="btn-explore">EXPLORE COLLECTION</button>
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
