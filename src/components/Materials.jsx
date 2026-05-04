import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Materials.css';

gsap.registerPlugin(ScrollTrigger);

const Materials = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const materialsList = [
    "Grade 5 Titanium",
    "18k Rose Gold",
    "Carbon Fiber",
    "Sapphire Crystal"
  ];

  return (
    <section className="materials" ref={sectionRef}>
      <div className="mat-left">
        <div className="mat-image-container">
          <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800" 
            alt="Watch mechanism" 
          />
          <div className="mat-overlay"></div>
        </div>
      </div>
      
      <div className="mat-right">
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
      </div>
    </section>
  );
};

export default Materials;
