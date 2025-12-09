import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mic, Atom, BookOpen } from 'lucide-react';

const services = [
  {
    icon: <Mic size={32} strokeWidth={1} />,
    title: "Palestras",
    description: "Apresentações impactantes sobre Existencialismo, Consciência e o poder da mente humana."
  },
  {
    icon: <Brain size={32} strokeWidth={1} />,
    title: "Neurocomunicação",
    description: "Técnicas avançadas para aprimorar a comunicação interpessoal baseadas na neurociência."
  },
  {
    icon: <Atom size={32} strokeWidth={1} />,
    title: "Física Quântica",
    description: "Workshops e conteúdos que exploram a relação entre a física moderna e a espiritualidade."
  },
  {
    icon: <BookOpen size={32} strokeWidth={1} />,
    title: "Desenvolvimento",
    description: "Mentorias focadas no crescimento pessoal e na expansão da consciência individual."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-500 mb-4 block">Áreas de Atuação</span>
          <h2 className="text-4xl md:text-5xl text-white font-light">Conhecimento & Transformação</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-card backdrop-blur-sm border border-white/5 hover:border-white/20 transition-colors duration-500 rounded-lg clickable"
            >
              <div className="mb-6 text-neutral-400 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl text-white font-medium mb-4">{service.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                {service.description}
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