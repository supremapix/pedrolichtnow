import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-dark/40 z-10" /> {/* Overlay */}
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Background Aesthetic" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark z-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.2em] text-neutral-400 mb-6">
            Autor | Palestrante Existencialista
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-8 mix-blend-overlay">
            PEDRO <br className="md:hidden" />
            <span className="font-serif italic font-normal">LICHTNOW</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-3xl mx-auto text-neutral-300 text-lg md:text-xl font-light leading-relaxed"
          >
            <span className="block md:inline">Neurocomunicador</span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="block md:inline">Física Quântica</span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="block md:inline">Especialista em Consciência e Desenvolvimento Humano</span>
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-white/50"
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;