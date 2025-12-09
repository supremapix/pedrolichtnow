import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, User } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-dark relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-500 mb-4 block">Evento Oficial</span>
          <h2 className="text-4xl md:text-5xl text-white font-light">Agenda & Lançamento</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-card backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section - Placeholder for Flyer/Book */}
              <div className="md:w-2/5 relative min-h-[400px] md:min-h-0 bg-neutral-900 overflow-hidden group">
                 <img 
                  src="https://picsum.photos/seed/booklaunch2/800/1000" 
                  alt="Capa da 3ª Coletânea O Pensador - ACCUR" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90 md:bg-gradient-to-r" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-white text-dark text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-lg">
                  Lançamento
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                
                <div className="flex items-center gap-2 mb-4 text-neutral-400 text-xs tracking-widest uppercase">
                  <Star size={14} className="text-white" />
                  <span>Academia de Cultura de Curitiba (ACCUR)</span>
                </div>

                <h1 className="text-3xl md:text-4xl text-white font-serif italic mb-6 leading-tight">
                  Lançamento da 3ª Coletânea <br/> <span className="not-italic text-white/90">"O Pensador"</span>
                </h1>
                
                <div className="text-neutral-300 font-light leading-relaxed mb-8 space-y-4">
                  <p>
                    A convite da presidente <strong>Maria Inês Pierin Borges da Silveira</strong>, da Academia de Cultura de Curitiba (ACCUR), Pedro Lichtnow participa com grande honra, como autor e texto assinado, da 3ª Coletânea da distinta obra "O Pensador".
                  </p>
                  <p>
                    O evento será aberto ao público e contará com a presença de autoridades, lideranças culturais, acadêmicos da ACCUR, amigos, familiares e imprensa.
                  </p>
                </div>

                <div className="space-y-4 mb-8 bg-white/5 p-6 rounded-lg border border-white/5">
                  <div className="flex items-start gap-4">
                    <Calendar className="text-white shrink-0 mt-1" size={20} strokeWidth={1.5} />
                    <div>
                      <p className="text-white font-medium">15 de Dezembro</p>
                      <p className="text-neutral-500 text-sm">Às 17h30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-white shrink-0 mt-1" size={20} strokeWidth={1.5} />
                    <div>
                      <p className="text-white font-medium">Espaço Cultural Solar do Rosário</p>
                      <p className="text-neutral-500 text-sm">Rua Lourenço Pinto, 500 — Praça Eufrásio Correia</p>
                      <p className="text-neutral-500 text-sm">Curitiba — PR</p>
                    </div>
                  </div>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 text-[10px] md:text-xs uppercase tracking-wide text-neutral-500 mb-6">
                  {['#coletâneaopensador', '#academiadeculturadecuritiba', '#obraliterária', '#pedrolichtnow'].map(tag => (
                    <span key={tag} className="hover:text-white transition-colors cursor-default">{tag}</span>
                  ))}
                </div>

                <a href="#contact" className="inline-block text-center w-full md:w-auto bg-white text-dark px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors">
                  Confirmar Presença / Contato
                </a>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default News;