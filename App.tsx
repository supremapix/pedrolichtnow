import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  // Mouse spotlight effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Dynamic Background Noise/Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Mouse Spotlight */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />

      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <News /> {/* Moved News (Launch Event) up as it is the priority */}
        <About />
        <Services /> {/* Now "Works" */}
        <InstagramFeed />
        
        <section className="py-32 relative flex items-center justify-center" id="contact">
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif italic mb-8"
              >
                Entre em <br/> <span className="text-white not-italic font-sans font-light tracking-tighter">Contato</span>
              </motion.h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-white text-dark rounded-full font-medium tracking-wide overflow-hidden"
                  >
                    <span className="relative z-10">Enviar Mensagem</span>
                    <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </motion.button>
              </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;