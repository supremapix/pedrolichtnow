import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6 md:py-8 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="text-xl font-bold tracking-tighter clickable uppercase">
        Pedro<span className="font-serif italic font-normal ml-1">Lichtnow</span>
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase opacity-80">
        <a href="#about" className="hover:opacity-100 transition-opacity clickable">Sobre</a>
        <a href="#services" className="hover:opacity-100 transition-opacity clickable">Serviços</a>
        <a href="#contact" className="hover:opacity-100 transition-opacity clickable">Contato</a>
      </div>

      <button className="md:hidden clickable">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
        </svg>
      </button>
    </motion.nav>
  );
};

export default Navbar;