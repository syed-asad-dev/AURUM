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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="navbar-container">
        <div className="nav-left">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="logo">AURUM</a>
        </div>
        
        <div className="nav-center">
          <a href="#legacy" onClick={(e) => { e.preventDefault(); scrollTo('legacy'); }} className="nav-link">LEGACY</a>
          <a href="#collection" onClick={(e) => { e.preventDefault(); scrollTo('collection'); }} className="nav-link">COLLECTION</a>
          <a href="#craftsmanship" onClick={(e) => { e.preventDefault(); scrollTo('craftsmanship'); }} className="nav-link">CRAFT</a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }} className="nav-link">GALLERY</a>
        </div>

        <div className="nav-right">
          <button className="explore-btn" onClick={() => scrollTo('collection')}>EXPLORE</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
