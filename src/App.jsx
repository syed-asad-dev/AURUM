import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import Collection from './components/Collection';
import Craftsmanship from './components/Craftsmanship';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Legacy />
      <Collection />
      <Craftsmanship />
      <Materials />
      <Gallery />
      <Footer />
    </>
  )
}

export default App;
