import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  const galleryImages = [
    "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800",
    "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600",
    "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
    "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600",
    "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=600"
  ];

  useEffect(() => {
    gsap.fromTo(imagesRef.current,
      { clipPath: "inset(100% 0 0 0)", y: 80, opacity: 0 },
      { 
        clipPath: "inset(0% 0 0 0)",
        y: 0,
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.1, 
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%"
        }
      }
    );
  }, []);

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="gallery-header">
        <div className="section-label">AESTHETICS</div>
        <h2 className="gallery-title">The Gallery</h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((src, i) => (
          <div 
            className={`gal-item item-${i + 1}`} 
            key={i}
            ref={el => imagesRef.current[i] = el}
          >
            <img src={src} alt={`Gallery Image ${i + 1}`} />
            <div className="gal-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
