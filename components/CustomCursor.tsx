import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if element is clickable or has 'clickable' class
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.clickable');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Following Ring / Glow */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/20 rounded-full pointer-events-none z-[99] hidden md:block"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
          backgroundColor: isHovering ? "rgba(255,255,255,0.05)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;