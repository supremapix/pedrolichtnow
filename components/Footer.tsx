import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 bg-dark border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-6">
        
        {/* Social Links Minimal */}
        <div className="flex space-x-8 mb-8">
            {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                <a 
                    key={social} 
                    href="#" 
                    className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest clickable"
                >
                    {social}
                </a>
            ))}
        </div>

        {/* COPYRIGHT */}
        <p className="text-neutral-600 text-xs tracking-wide">
          © {new Date().getFullYear()} Pedro Lichtnow. Todos os direitos reservados.
        </p>

        {/* SUPREMA MÍDIA FOOTER COMPONENT */}
        <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Desenvolvido por
            </span>
            
            <motion.a 
                href="https://www.supremasite.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] clickable"
            >
                <span className="text-xs font-bold tracking-wider text-white group-hover:text-white transition-colors">
                    [ SUPREMA MÍDIA ❤️ ]
                </span>
            </motion.a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;