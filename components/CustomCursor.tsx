import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button') || target.closest('a') || target.closest('.clickable');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "transparent",
        borderColor: isHovering ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)"
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    />
  );
};

export default CustomCursor;