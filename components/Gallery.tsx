import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/culture1/800/600",
  "https://picsum.photos/seed/culture2/600/800",
  "https://picsum.photos/seed/culture3/800/800",
  "https://picsum.photos/seed/culture4/600/600",
  "https://picsum.photos/seed/culture5/800/1000",
  "https://picsum.photos/seed/culture6/800/500",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-500 mb-2 block">Galeria</span>
            <h2 className="text-3xl md:text-4xl text-white font-serif italic">Momentos & <br/><span className="not-italic font-sans font-light">Registros</span></h2>
          </div>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group overflow-hidden rounded-lg break-inside-avoid"
            >
              <img 
                src={`${src}?grayscale`} 
                alt="Galeria Pedro Lichtnow" 
                className="w-full h-auto object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                    <div className="w-2 h-2 bg-white rounded-full" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;