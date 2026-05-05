import React from 'react';
import { motion } from 'framer-motion';
import './Legacy.css';

const Legacy = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="legacy" className="legacy">
      <div className="legacy-container">
        <motion.div 
          className="legacy-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="legacy-label">HERITAGE</div>
          <h2 className="legacy-title">
            A Century of<br />
            <span className="italic">Precision.</span>
          </h2>
          <div className="legacy-divider"></div>
          <p className="legacy-text">
            Since 1889, AURUM has stood at the intersection 
            of art and engineering. Each timepiece is 
            meticulously crafted requiring over 400 hours 
            of precise assembly by master horologists.
            <br /><br />
            We do not simply make watches. We create 
            heirlooms — instruments of time that transcend 
            generations.
          </p>
          <a href="#craftsmanship" onClick={(e) => { e.preventDefault(); scrollTo('craftsmanship'); }} className="legacy-link">DISCOVER MORE →</a>
        </motion.div>
        <motion.div 
          className="legacy-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="legacy-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700" 
              alt="Legacy Watch Closeup" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;
