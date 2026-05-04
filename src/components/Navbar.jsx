import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="navbar-container">
        <div className="nav-left">
          <a href="#" className="logo">AURUM</a>
        </div>
        
        <div className="nav-center">
          <a href="#legacy" className="nav-link">LEGACY</a>
          <a href="#collection" className="nav-link">COLLECTION</a>
          <a href="#craft" className="nav-link">CRAFT</a>
          <a href="#gallery" className="nav-link">GALLERY</a>
        </div>

        <div className="nav-right">
          <button className="explore-btn">EXPLORE</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
