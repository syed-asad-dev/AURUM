import React from 'react';
import { motion } from 'framer-motion';
import './Legacy.css';

const Legacy = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const textStagger = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2 
      } 
    }
  };

  const textChild = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="legacy" className="legacy">
      <div className="legacy-container">
        <motion.div 
          className="legacy-left"
          variants={textStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="legacy-label" variants={textChild}>HERITAGE</motion.div>
          <motion.h2 className="legacy-title" variants={textChild}>
            A Century of<br />
            <span className="italic">Precision.</span>
          </motion.h2>
          <motion.div className="legacy-divider" variants={textChild}></motion.div>
          <motion.p className="legacy-text" variants={textChild}>
            Since 1889, AURUM has stood at the intersection 
            of art and engineering. Each timepiece is 
            meticulously crafted requiring over 400 hours 
            of precise assembly by master horologists.
            <br /><br />
            We do not simply make watches. We create 
            heirlooms — instruments of time that transcend 
            generations.
          </motion.p>
          <motion.a href="#craftsmanship" onClick={(e) => { e.preventDefault(); scrollTo('craftsmanship'); }} className="legacy-link" variants={textChild}>DISCOVER MORE →</motion.a>
        </motion.div>
        <motion.div 
          className="legacy-right"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
