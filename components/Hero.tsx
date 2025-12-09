import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. SMOKE/CLOUD VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Fundo base preto para garantir contraste */}
        <div className="absolute inset-0 bg-black z-0" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-screen pointer-events-none"
          style={{ filter: 'contrast(1.2) brightness(1.1)' }}
        >
          {/* Vídeo de fumaça branca/nuvens sobre fundo preto - Ideal para blend mode 'screen' */}
          <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>
        
        {/* Gradientes para suavizar bordas e focar no texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />
      </div>

      {/* 2. CONTENT WITH PARALLAX & ANIMATIONS */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="container mx-auto px-6 relative z-30 text-center flex flex-col items-center max-w-4xl"
      >
        {/* Nome Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-6"
        >
          PEDRO <br className="md:hidden" />
          <span className="font-serif italic font-normal text-white/90">LICHTNOW</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-[1px] w-24 bg-white/30 mb-8"
        />

        {/* Subtítulo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm md:text-base uppercase tracking-[0.2em] text-neutral-300 font-medium mb-6 leading-relaxed"
        >
          Autor, Palestrante e Especialista em Comunicação Humana,<br className="hidden md:block" /> Consciência e Desenvolvimento Existencial
        </motion.h2>

        {/* Descrição */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl mx-auto text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-10"
        >
          Atuo ajudando pessoas e organizações a evoluir por meio de neurocomunicação, inteligência existencial e estratégias de impacto humano.
        </motion.p>

        {/* Botão CTA */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1.4 }}
        >
          <a 
            href="#about" 
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full transition-all duration-300 bg-transparent border border-white/20 hover:border-white/50 hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white/10"></span>
            <span className="relative text-sm uppercase tracking-widest text-white group-hover:text-white transition-colors font-medium">
              Quero saber mais
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          </a>
        </motion.div>
      </motion.div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-white/30 mix-blend-screen pointer-events-none"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;