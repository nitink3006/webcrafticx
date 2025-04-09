import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 20,
    stiffness: 100,
    mass: 0.3,
  });

  const y = useTransform(smoothY, (val) => -val);

  useEffect(() => {
    if (!scrollRef.current || !wrapperRef.current) return;

    const setBodyHeight = () => {
      const height = scrollRef.current?.getBoundingClientRect().height || 0;
      wrapperRef.current!.style.height = `${height}px`;
    };

    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);
    return () => window.removeEventListener('resize', setBodyHeight);
  }, []);

  return (
    <>
      <div ref={wrapperRef} className="relative w-full" />
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
