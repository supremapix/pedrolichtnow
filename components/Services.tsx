import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { BookOpen, PenTool, Library, Users } from 'lucide-react';

const works = [
  {
    icon: <BookOpen size={32} strokeWidth={1} />,
    title: "O Pensador",
    subtitle: "3ª Coletânea",
    description: "Participação autoral na obra organizada pela Academia de Cultura de Curitiba (ACCUR)."
  },
  {
    icon: <PenTool size={32} strokeWidth={1} />,
    title: "Produção Literária",
    subtitle: "Contos e Crônicas",
    description: "Autor de textos que exploram a essência humana, o existencialismo e o cotidiano."
  },
  {
    icon: <Library size={32} strokeWidth={1} />,
    title: "Pesquisa Cultural",
    subtitle: "Fomento e Preservação",
    description: "Colaboração ativa na preservação da cultura e literatura paranaense."
  },
  {
    icon: <Users size={32} strokeWidth={1} />,
    title: "Academia",
    subtitle: "Eventos e Encontros",
    description: "Presença em encontros literários, lançamentos e reuniões acadêmicas."
  }
];

// 3D Tilt Card Component
const TiltCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 0.5) * -20; // Rotation X
    const rY = (mouseX / width - 0.5) * 20;   // Rotation Y

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group h-full"
    >
      <div className="relative h-full p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between">
        
        {/* Neon Glow on Hover */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="mb-8 text-neutral-400 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 origin-left">
            {item.icon}
          </div>
          
          <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{item.subtitle}</h4>
          <h3 className="text-2xl text-white font-serif italic mb-4">{item.title}</h3>
          
          <div className="w-10 h-[1px] bg-white/20 mb-4 group-hover:w-full transition-all duration-500 ease-out" />
          
          <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-200 transition-colors">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="works" className="py-32 bg-dark relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-500 mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-5xl text-white font-light">Obras & Atuação</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <TiltCard key={index} item={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;