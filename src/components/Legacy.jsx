import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Legacy.css';

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(leftRef.current, 
      { x: -80, opacity: 0 },
      { 
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(rightRef.current, 
      { x: 80, opacity: 0 },
      { 
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="legacy" className="legacy" ref={sectionRef}>
      <div className="legacy-container">
        <div className="legacy-left" ref={leftRef}>
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
          <a href="#" className="legacy-link">DISCOVER MORE →</a>
        </div>
        <div className="legacy-right" ref={rightRef}>
          <div className="legacy-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700" 
              alt="Legacy Watch Closeup" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
