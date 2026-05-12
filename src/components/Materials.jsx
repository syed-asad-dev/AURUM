import React from 'react';
import { motion } from 'framer-motion';
import './Materials.css';

const Materials = () => {

  const materialsList = [
    "Grade 5 Titanium",
    "18k Rose Gold",
    "Carbon Fiber",
    "Sapphire Crystal"
  ];

  const textStagger = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1 
      } 
    }
  };

  const textChild = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="materials">
      <motion.div 
        className="mat-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mat-image-container">
          <img 
            src="https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800" 
            alt="Watch mechanism" 
          />
          <div className="mat-overlay"></div>
        </div>
      </motion.div>
      
      <motion.div 
        className="mat-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="mat-content"
          variants={textStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="section-label" variants={textChild}>MATERIALS</motion.div>
          <motion.h2 className="mat-title" variants={textChild}>Engineered to Perfection</motion.h2>
          <motion.div className="mat-divider" variants={textChild}></motion.div>
          <motion.p className="mat-text" variants={textChild}>
            Every component is carefully selected to ensure 
            unrivaled durability and aesthetic brilliance. 
            We source only the finest materials from across the globe.
          </motion.p>
          
          <motion.div className="mat-list" variants={textChild}>
            {materialsList.map((item, i) => (
              <div className="mat-item" key={i}>
                <div className="mat-item-line"></div>
                <span className="mat-item-text">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Materials;
