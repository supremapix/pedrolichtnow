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
                alt="Pedro Profile" 
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
              Expansão da <br /> <span className="not-italic font-sans font-light">Consciência</span>
            </h3>
            <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg">
              <p>
                A união entre a ciência e a espiritualidade é a chave para o verdadeiro desenvolvimento humano. Como Neurocomunicador e estudioso da Física Quântica, busco desvendar os mecanismos da mente e da realidade.
              </p>
              <p>
                Minha missão é guiar pessoas através de uma jornada existencialista, proporcionando ferramentas para que cada indivíduo reconheça seu potencial criador e transforme sua própria realidade.
              </p>
            </div>

            <div className="mt-12 flex space-x-12">
              <div>
                <span className="block text-4xl text-white font-light">10+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest">Anos de Estudo</span>
              </div>
              <div>
                <span className="block text-4xl text-white font-light">∞</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest">Possibilidades</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;