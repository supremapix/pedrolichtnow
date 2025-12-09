import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Library, Users } from 'lucide-react';

const works = [
  {
    icon: <BookOpen size={32} strokeWidth={1} />,
    title: "O Pensador (3ª Coletânea)",
    description: "Participação autoral na obra organizada pela Academia de Cultura de Curitiba (ACCUR)."
  },
  {
    icon: <PenTool size={32} strokeWidth={1} />,
    title: "Produção Literária",
    description: "Autor de textos, contos e reflexões que exploram a essência humana e o cotidiano."
  },
  {
    icon: <Library size={32} strokeWidth={1} />,
    title: "Pesquisa Cultural",
    description: "Colaboração ativa na preservação e fomento da cultura e literatura paranaense."
  },
  {
    icon: <Users size={32} strokeWidth={1} />,
    title: "Academia & Eventos",
    description: "Presença em encontros literários, lançamentos e reuniões acadêmicas."
  }
];

const Services: React.FC = () => {
  return (
    <section id="works" className="py-32 bg-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-500 mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-5xl text-white font-light">Obras & Atuação</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-card backdrop-blur-sm border border-white/5 hover:border-white/20 transition-colors duration-500 rounded-lg"
            >
              <div className="mb-6 text-neutral-400 group-hover:text-white transition-colors duration-500">
                {work.icon}
              </div>
              <h3 className="text-xl text-white font-medium mb-4">{work.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                {work.description}
              </p>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;