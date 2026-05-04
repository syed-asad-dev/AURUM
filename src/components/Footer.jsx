import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col-left">
          <h2 className="footer-logo">AURUM</h2>
          <p className="footer-tagline">"Beyond Time. Beyond Ordinary."</p>
        </div>
        
        <div className="footer-col-center">
          <div className="footer-links">
            <a href="#legacy">LEGACY</a>
            <a href="#collection">COLLECTION</a>
            <a href="#craft">CRAFT</a>
            <a href="#gallery">GALLERY</a>
          </div>
        </div>
        
        <div className="footer-col-right">
          <p className="footer-est">Est. 1889 • Swiss Made</p>
        </div>
      </div>

      <div className="footer-newsletter">
        <h3 className="newsletter-title">Stay within the circle of excellence</h3>
        <div className="newsletter-form">
          <input type="email" placeholder="Your Email Address" className="newsletter-input" />
          <button className="newsletter-btn">SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 AURUM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
