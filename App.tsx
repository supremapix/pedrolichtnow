import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Gallery from './components/Gallery';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden text-neutral-200 selection:bg-white/20 selection:text-white">
      
      {/* 1. CINEMATIC NOISE TEXTURE (Film Grain) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. MOUSE SPOTLIGHT (Flashlight effect) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />

      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <News />
        <Gallery />
        <InstagramFeed />
      </main>

      <Footer />
    </div>
  );
};

export default App;