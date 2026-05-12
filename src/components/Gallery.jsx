import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {

  const galleryImages = [
    "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800",
    "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600",
    "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
    "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600",
    "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=600"
  ];



  return (
    <section id="gallery" className="gallery">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">AESTHETICS</div>
        <h2 className="gallery-title">The Gallery</h2>
      </motion.div>

      <motion.div 
        className="gallery-grid"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {galleryImages.map((src, i) => (
          <motion.div 
            className={`gal-item item-${i + 1}`} 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" },
              visible: { 
                opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)",
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            <img src={src} alt={`Gallery Image ${i + 1}`} />
            <div className="gal-overlay"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
