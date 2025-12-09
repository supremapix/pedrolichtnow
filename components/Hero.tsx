import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. SMOKE VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay para contraste */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          {/* Link direto para vídeo de fumaça/ink dark em alta qualidade */}
          <source src="https://videos.pexels.com/video-files/3209211/3209211-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>
        {/* Gradiente na base para fundir com a próxima seção */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40 z-20" />
      </div>

      {/* 2. CONTENT WITH PARALLAX */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="container mx-auto px-6 relative z-30 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-xs md:text-sm uppercase text-neutral-400 mb-6 font-medium tracking-[0.2em]"
        >
          Autor Participante | 3ª Coletânea O Pensador
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-8 mix-blend-overlay"
        >
          PEDRO <br className="md:hidden" />
          <span className="font-serif italic font-normal text-white/90">LICHTNOW</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-[1px] w-24 bg-white/30 mb-8"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mx-auto text-neutral-300 text-lg md:text-xl font-light leading-relaxed"
        >
          Literatura <span className="text-white/20 mx-3">•</span> Cultura <span className="text-white/20 mx-3">•</span> Academia
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1.4 }}
           className="mt-12"
        >
          <a 
            href="#news" 
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full transition-all duration-300 bg-transparent border border-white/20 hover:border-white/50"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-sm uppercase tracking-widest text-white group-hover:text-white transition-colors">
              Ver Lançamento
            </span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
          </a>
        </motion.div>
      </motion.div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-white/30 mix-blend-difference"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;