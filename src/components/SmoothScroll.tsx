
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(scrollY, physics);
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${latest}px)`;
      }
    });
  }, [scrollY]);
  
  return (
    <div className="fixed top-0 left-0 right-0 w-full overflow-hidden">
      <div ref={scrollRef}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
