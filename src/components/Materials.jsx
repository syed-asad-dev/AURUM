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

  return (
    <section className="materials">
      <motion.div 
        className="mat-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
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
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mat-content">
          <div className="section-label">MATERIALS</div>
          <h2 className="mat-title">Engineered to Perfection</h2>
          <div className="mat-divider"></div>
          <p className="mat-text">
            Every component is carefully selected to ensure 
            unrivaled durability and aesthetic brilliance. 
            We source only the finest materials from across the globe.
          </p>
          
          <div className="mat-list">
            {materialsList.map((item, i) => (
              <div className="mat-item" key={i}>
                <div className="mat-item-line"></div>
                <span className="mat-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Materials;
