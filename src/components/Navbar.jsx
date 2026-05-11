import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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

        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-links">
              <a href="#legacy" onClick={(e) => { e.preventDefault(); scrollTo('legacy'); }} className="mobile-nav-link">LEGACY</a>
              <a href="#collection" onClick={(e) => { e.preventDefault(); scrollTo('collection'); }} className="mobile-nav-link">COLLECTION</a>
              <a href="#craftsmanship" onClick={(e) => { e.preventDefault(); scrollTo('craftsmanship'); }} className="mobile-nav-link">CRAFT</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }} className="mobile-nav-link">GALLERY</a>
            </div>
            <button className="explore-btn mobile-explore" onClick={() => scrollTo('collection')}>EXPLORE COLLECTION</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
