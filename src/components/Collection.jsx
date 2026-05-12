import React from 'react';
import { motion } from 'framer-motion';
import './Collection.css';

const Collection = () => {

  const watches = [
    {
      ref: "REF. 001",
      name: "Le Noir",
      desc: "The pinnacle of dark elegance",
      price: "CHF 18,500",
      img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600"
    },
    {
      ref: "REF. 002",
      name: "Aureus",
      desc: "Timeless golden heritage",
      price: "CHF 24,000",
      img: "https://i.pinimg.com/736x/10/40/89/104089230967841f9191334758ce0c91.jpg"
    },
    {
      ref: "REF. 003",
      name: "Tempus",
      desc: "Modern precision engineered",
      price: "CHF 16,200",
      img: "https://i.pinimg.com/736x/b6/41/3c/b6413c6ac0160c20ed3e819272a87c08.jpg"
    },
    {
      ref: "REF. 004",
      name: "Noir Chronos",
      desc: "Raw power, refined.",
      price: "CHF 21,000",
      img: "https://i.pinimg.com/1200x/43/f5/c3/43f5c338416e8f0f5cf5a34cd9b1b5d8.jpg"
    },
    {
      ref: "REF. 005",
      name: "Celestial",
      desc: "Inspired by the cosmos.",
      price: "CHF 28,500",
      img: "https://i.pinimg.com/1200x/6a/b9/28/6ab928fe41d1c71a1e8db5f0782b1e8c.jpg"
    },
    {
      ref: "REF. 006",
      name: "Heritage",
      desc: "A legacy reborn.",
      price: "CHF 15,800",
      img: "https://i.pinimg.com/736x/db/2b/28/db2b2826a7118021f7c613ba586f9597.jpg"
    }
  ];

  const cardDelays = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3];

  return (
    <section id="collection" className="collection">
      <motion.div 
        className="collection-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">COLLECTION</div>
        <h2 className="collection-title">The Timepieces</h2>
        <p className="collection-subtitle">Discover our masterfully crafted instruments of time</p>
      </motion.div>

      <div className="collection-grid">
        {watches.map((watch, index) => (
          <motion.div 
            className="watch-card" 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ 
              duration: 0.7, 
              delay: cardDelays[index], 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <div className="watch-img-container">
              <img src={watch.img} alt={watch.name} />
            </div>
            
            <div className="card-info">
              <span className="watch-ref">{watch.ref}</span>
              <h3 className="watch-name">{watch.name}</h3>
              <p className="watch-desc">{watch.desc}</p>
              <p className="watch-price">{watch.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
