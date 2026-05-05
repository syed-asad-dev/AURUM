import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Collection.css';

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

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

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(headerRef.current,
      { y: 80, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo(cardsRef.current,
      { y: 80, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%'
        }
      }
    );
  }, []);

  return (
    <section id="collection" className="collection" ref={sectionRef}>
      <div className="collection-header" ref={headerRef}>
        <div className="section-label">COLLECTION</div>
        <h2 className="collection-title">The Timepieces</h2>
        <p className="collection-subtitle">Discover our masterfully crafted instruments of time</p>
      </div>

      <div className="collection-grid">
        {watches.map((watch, index) => (
          <div 
            className="watch-card" 
            key={index} 
            ref={el => cardsRef.current[index] = el}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
