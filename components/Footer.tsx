import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full py-16 bg-dark border-t border-white/5 relative z-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-white/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-10 relative z-10">
        
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-4">
            {['Início', 'Sobre', 'Obras', 'Lançamento', 'Contato'].map((item) => (
                <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace('í','i').replace('ç','c').replace('ã','a')}`} 
                    className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] clickable"
                >
                    {item}
                </a>
            ))}
        </div>

        {/* Brand Name & Social */}
        <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-2xl font-serif italic text-white/90">Pedro Lichtnow</h2>
            
            <a 
              href="https://www.instagram.com/pedrolichtnow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors clickable p-2"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>

            <p className="text-[10px] text-neutral-600 uppercase tracking-widest mt-2">
                 © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
        </div>

        {/* DIVIDER */}
        <div className="w-12 h-[1px] bg-white/10" />

        {/* SUPREMA MÍDIA BRANDING (EXACT STYLE REQUESTED) */}
        <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">
                Desenvolvido por
            </span>
            
            <motion.a 
                href="https://www.supremasite.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center gap-2 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 clickable overflow-hidden"
            >
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-white group-hover:text-white transition-colors relative z-10">
                    [ SUPREMA MÍDIA ❤️ ]
                </span>
            </motion.a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;