import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import Collection from './components/Collection';
import Craftsmanship from './components/Craftsmanship';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  // Ensure smooth scroll is perfectly initialized for anchor tags
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Legacy />
        <Collection />
        <Craftsmanship />
        <Materials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
