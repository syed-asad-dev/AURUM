import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Craftsmanship.css';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={counterRef}>{count}{end === 400 || end === 12000 ? '+' : ''}</span>;
};

const Craftsmanship = () => {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  const features = [
    { num: "01", title: "Sapphire Crystal", text: "Scratch resistant surface protecting the meticulous dial arrangement underneath." },
    { num: "02", title: "Swiss Movement", text: "In-house caliber delivering unparalleled precision and reliability." },
    { num: "03", title: "Water Resistant", text: "Engineered to withstand depths up to 300m for aquatic exploration." },
    { num: "04", title: "72hr Reserve", text: "Extended power reserve ensuring your timepiece runs seamlessly over the weekend." }
  ];

  useEffect(() => {
    gsap.fromTo(blocksRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%'
        }
      }
    );
  }, []);

  return (
    <section id="craft" className="craft" ref={sectionRef}>
      <div className="craft-header">
        <div className="section-label">ARTISTRY</div>
        <h2 className="craft-title">Mastering the Craft</h2>
      </div>

      <div className="features-grid">
        {features.map((feat, i) => (
          <div className="feature-block" key={i} ref={el => blocksRef.current[i] = el}>
            <div className="feat-num">{feat.num}</div>
            <div className="feat-line"></div>
            <h3 className="feat-title">{feat.title}</h3>
            <p className="feat-text">{feat.text}</p>
          </div>
        ))}
      </div>

      <div className="counters-row">
        <div className="counter-item">
          <div className="counter-num"><Counter end={134} /></div>
          <div className="counter-label">YEARS</div>
        </div>
        <div className="counter-item">
          <div className="counter-num"><Counter end={400} /></div>
          <div className="counter-label">HOURS PER WATCH</div>
        </div>
        <div className="counter-item">
          <div className="counter-num"><Counter end={47} /></div>
          <div className="counter-label">CRAFTSMEN</div>
        </div>
        <div className="counter-item">
          <div className="counter-num"><Counter end={12000} /></div>
          <div className="counter-label">CLIENTS</div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
