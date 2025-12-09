import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "A estética que o Pedro trouxe para nossa marca elevou nosso ticket médio em 40%. Impecável.",
    author: "Ana Silva",
    role: "CEO, LuxArch"
  },
  {
    quote: "Minimalismo com alma. Foi exatamente isso que recebemos. O processo foi fluido e o resultado, surpreendente.",
    author: "Carlos Mendes",
    role: "Fotógrafo"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#0d0d0d] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col justify-between"
            >
              <p className="text-2xl md:text-3xl font-serif italic text-neutral-300 mb-8 leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${index + 10}`} alt={item.author} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wide">{item.author}</h4>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;