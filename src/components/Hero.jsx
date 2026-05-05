import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const getAnim = (delayTime) => ({
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, delay: delayTime, ease: "easeOut" } }
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
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
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-label-left" variants={getAnim(0.2)}>
            SWISS MADE • EST. 1889
          </motion.div>
          
          <h1 className="hero-title-left">
            <motion.span style={{ display: 'block' }} variants={getAnim(0.5)}>BEYOND</motion.span>
            <motion.span style={{ display: 'block' }} variants={getAnim(0.7)}>TIME.</motion.span>
          </h1>

          <motion.div className="hero-divider-left" variants={getAnim(0.9)}></motion.div>

          <motion.p className="hero-subtext-left" variants={getAnim(1.1)}>
            Precision engineered for those who demand perfection.
          </motion.p>

          <motion.div className="hero-buttons-left" variants={getAnim(1.3)}>
            <button className="btn-explore" onClick={() => scrollTo('collection')}>EXPLORE COLLECTION</button>
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
