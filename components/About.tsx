import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-dark relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img 
                src="https://picsum.photos/800/1200?random=2" 
                alt="Pedro Lichtnow Perfil" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-105"
              />
            </motion.div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-full h-full border border-white/10 z-0 hidden md:block" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <h3 className="text-white text-3xl md:text-5xl font-serif italic mb-6">
              Sobre o <br /> <span className="not-italic font-sans font-light">Autor</span>
            </h3>
            <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg">
              <p>
                <strong>Pedro Lichtnow</strong> é autor e atua ativamente na cena cultural local. Sua escrita busca explorar reflexões profundas sobre a condição humana e o cotidiano.
              </p>
              <p>
                Recentemente, foi convidado a integrar a <strong>3ª Coletânea "O Pensador"</strong>, organizada pela Academia de Cultura de Curitiba (ACCUR). Sua participação na obra, com texto assinado, consolida seu compromisso com a literatura e o fomento cultural na região.
              </p>
              <p>
                Pedro participa de eventos literários, lançamentos e encontros acadêmicos, mantendo um diálogo constante com leitores e outros autores contemporâneos.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="block text-white font-medium mb-2">Afiliações e Participações</span>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>• Autor Participante — 3ª Coletânea O Pensador (ACCUR)</li>
                <li>• Pesquisador e Colaborador Cultural</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;