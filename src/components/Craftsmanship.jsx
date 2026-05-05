import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Craftsmanship.css';

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


  const features = [
    { num: "01", title: "Sapphire Crystal", text: "Scratch resistant surface protecting the meticulous dial arrangement underneath." },
    { num: "02", title: "Swiss Movement", text: "In-house caliber delivering unparalleled precision and reliability." },
    { num: "03", title: "Water Resistant", text: "Engineered to withstand depths up to 300m for aquatic exploration." },
    { num: "04", title: "72hr Reserve", text: "Extended power reserve ensuring your timepiece runs seamlessly over the weekend." }
  ];

  return (
    <section id="craft" className="craft">
      <motion.div 
        className="craft-header"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">ARTISTRY</div>
        <h2 className="craft-title">Mastering the Craft</h2>
      </motion.div>

      <motion.div 
        className="features-grid"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {features.map((feat, i) => (
          <motion.div 
            className="feature-block" 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { 
                opacity: 1, y: 0,
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            <div className="feat-num">{feat.num}</div>
            <div className="feat-line"></div>
            <h3 className="feat-title">{feat.title}</h3>
            <p className="feat-text">{feat.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="counters-row">
        {[
          { end: 134, label: "YEARS" },
          { end: 400, label: "HOURS PER WATCH" },
          { end: 47, label: "CRAFTSMEN" },
          { end: 12000, label: "CLIENTS" }
        ].map((item, index) => (
          <motion.div 
            className="counter-item" 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <div className="counter-num"><Counter end={item.end} /></div>
            <div className="counter-label">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Craftsmanship;
