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
      img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600"
    },
    {
      ref: "REF. 002",
      name: "Aureus",
      desc: "Timeless golden heritage",
      price: "CHF 24,000",
      img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600"
    },
    {
      ref: "REF. 003",
      name: "Tempus",
      desc: "Modern precision engineered",
      price: "CHF 16,200",
      img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(headerRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%'
        }
      }
    );

    gsap.fromTo(cardsRef.current,
      { y: 80, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%'
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
            <div className="card-top">
              <span className="watch-ref">{watch.ref}</span>
              <div className="watch-img-container">
                <img src={watch.img} alt={watch.name} />
              </div>
            </div>
            
            <div className="card-divider"></div>
            
            <div className="card-info">
              <h3 className="watch-name">{watch.name}</h3>
              <p className="watch-desc">{watch.desc}</p>
              <p className="watch-price">{watch.price}</p>
            </div>
            
            <button className="discover-btn">DISCOVER</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
