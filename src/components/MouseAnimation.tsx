
import React, { useEffect, useState } from 'react';
import { motion, useTransform } from 'framer-motion';

interface MouseAnimationProps {
  mousePosition: { x: number; y: number };
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

const MouseAnimation = ({ mousePosition, children, intensity = 30, className = '' }: MouseAnimationProps) => {
  const [elementDimensions, setElementDimensions] = useState({ width: 0, height: 0 });
  const elementRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (elementRef.current) {
      const { width, height } = elementRef.current.getBoundingClientRect();
      setElementDimensions({ width, height });
    }
  }, []);
  
  // Calculate mouse position relative to the element center
  const calcMouseX = (mousePosition.x - (window.innerWidth / 2)) / (window.innerWidth / 2);
  const calcMouseY = (mousePosition.y - (window.innerHeight / 2)) / (window.innerHeight / 2);
  
  const xTransform = useTransform(() => calcMouseX * intensity);
  const yTransform = useTransform(() => calcMouseY * intensity);
  
  return (
    <motion.div
      ref={elementRef}
      className={`relative mouse-animation-element ${className}`}
      style={{
        x: xTransform,
        y: yTransform,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 1
      }}
    >
      {children}
    </motion.div>
  );
};

export default MouseAnimation;
