import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramFeedProps {
  handle?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ handle = "pedrolichtnow" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 bg-dark relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 mb-4">
            <Instagram size={24} className="text-white" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-2">
            Acompanhe no <span className="not-italic font-sans font-light">Instagram</span>
          </h2>
          <p className="text-neutral-400 text-sm tracking-widest uppercase">@{handle}</p>
        </motion.div>

        {/* Embed Container */}
        <motion.div 
          className="w-full relative rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* 
            NOTE: Standard Instagram profile embeds (e.g. instagram.com/{handle}/embed) are deprecated/restricted.
            For a production site, this should be replaced with a specific Post Embed URL 
            (e.g. https://www.instagram.com/p/CODE/embed) or a 3rd party widget.
            
            We are simulating the "Feed" look with a placeholder grid if the iframe fails or for aesthetic purposes,
            linking directly to the profile.
          */}
          <div className="aspect-[4/3] md:aspect-[16/9] w-full relative">
             <iframe 
              src={`https://www.instagram.com/${handle}/embed`}
              className="w-full h-full absolute inset-0 border-0"
              title={`Instagram Feed of ${handle}`}
              allowTransparency={true}
              scrolling="no"
              onError={(e) => {
                 // Fallback if iframe fails (likely due to cross-origin/deprecation)
                 (e.target as HTMLIFrameElement).style.display = 'none';
              }}
            />
            
            {/* Fallback Visual Grid (Since generic profile embeds often block) */}
            <div className="absolute inset-0 bg-dark flex flex-col items-center justify-center pointer-events-none z-[-1]">
                <div className="grid grid-cols-3 gap-1 w-full h-full opacity-30">
                     {[1,2,3,4,5,6].map(i => (
                         <img key={i} src={`https://picsum.photos/400/400?random=${i+20}`} className="w-full h-full object-cover grayscale" alt="Feed placeholder" />
                     ))}
                </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent pointer-events-none" />
          </div>

        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href={`https://www.instagram.com/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-white text-dark px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Instagram size={20} />
            <span>Seguir Perfil</span>
            <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramFeed;