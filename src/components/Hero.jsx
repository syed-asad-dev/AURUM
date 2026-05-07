import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
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
          onCanPlay={() => setVideoLoaded(true)}
          style={{ 
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
          aria-label="AURUM luxury watch hero video"
        >
          {/* Ensure your video is placed in the public directory as "hero-video.mp4" */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-bottom-left">
        <div className="hero-text-wrapper-left">
          <motion.div className="hero-label-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            SWISS MADE • EST. 1889
          </motion.div>
          
          <h1 className="hero-title-left">
            <motion.span style={{ display: 'block' }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >BEYOND<br/>TIME.</motion.span>
          </h1>

          <motion.div className="hero-divider-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>

          <motion.p className="hero-subtext-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Precision engineered for those who demand perfection.
          </motion.p>

          <motion.div className="hero-buttons-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="btn-explore" onClick={() => scrollTo('collection')}>EXPLORE COLLECTION</button>
          </motion.div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line-center"></div>
      </div>
    </section>
  );
};

export default Hero;
