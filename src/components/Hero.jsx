import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const getAnim = (delayTime) => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: delayTime, ease: [0.22, 1, 0.36, 1] }
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
        <div className="hero-text-wrapper-left">
          <motion.div className="hero-label-left" {...getAnim(0.2)}>
            SWISS MADE • EST. 1889
          </motion.div>
          
          <h1 className="hero-title-left">
            <motion.span style={{ display: 'block' }} {...getAnim(0.5)}>BEYOND<br/>TIME.</motion.span>
          </h1>

          <motion.div className="hero-divider-left" {...getAnim(0.8)}></motion.div>

          <motion.p className="hero-subtext-left" {...getAnim(1.0)}>
            Precision engineered for those who demand perfection.
          </motion.p>

          <motion.div className="hero-buttons-left" {...getAnim(1.2)}>
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
