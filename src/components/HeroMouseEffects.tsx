
import React from 'react';
import { motion } from 'framer-motion';

interface HeroMouseEffectsProps {
  mousePosition: { x: number; y: number };
  mouseDelta: { x: number; y: number };
  mouseSpeed: number;
}

const HeroMouseEffects: React.FC<HeroMouseEffectsProps> = ({ mousePosition, mouseDelta, mouseSpeed }) => {
  // Calculate normalized mouse position
  const calcMouseX = mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1);
  const calcMouseY = mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1);
  
  return (
    <>
      {/* Enhanced gradient overlay with improved mouse reactivity */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50 z-10 pointer-events-none"
        style={{
          backgroundPosition: `${50 + mouseDelta.x * 0.08}% ${50 + mouseDelta.y * 0.08}%`
        }}
      />
      
      {/* Enhanced circular elements with improved gradients and mouse following */}
      <motion.div
        className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] border border-indigo-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-indigo-50/80 to-transparent opacity-70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.7,
          rotate: 360,
          x: calcMouseX * 25 - 12.5 + mouseDelta.x * 1.2,
          y: calcMouseY * 25 - 12.5 + mouseDelta.y * 1.2,
          filter: `blur(${mouseSpeed * 0.015}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1] },
          opacity: { duration: 1 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 30, damping: 25 },
          y: { type: "spring", stiffness: 30, damping: 25 },
          filter: { duration: 0.3 }
        }}
      />
      
      <motion.div
        className="absolute w-[75px] h-[75px] sm:w-[150px] sm:h-[150px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px] border border-purple-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-tr from-purple-50/80 to-transparent opacity-80"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.8,
          rotate: -360,
          x: calcMouseX * -30 + 15 + mouseDelta.x * -1.5,
          y: calcMouseY * -30 + 15 + mouseDelta.y * -1.5,
          filter: `blur(${mouseSpeed * 0.01}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 },
          opacity: { duration: 1, delay: 0.2 },
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 25, damping: 30 },
          y: { type: "spring", stiffness: 25, damping: 30 },
          filter: { duration: 0.3 }
        }}
      />
      
      {/* Enhanced floating elements with better mouse interaction */}
      <motion.div
        key="circle1"
        className="absolute -left-10 top-1/3 w-6 h-6 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-400/60 to-indigo-500/60 opacity-30 z-10 hidden md:block"
        animate={{ 
          y: [0, 12, 0],
          rotate: 360,
          scale: [1, 1.05, 1],
          x: calcMouseX * -60 + mouseDelta.x * 3, // More responsive to mouse movement
          filter: `blur(${mouseSpeed * 0.04}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 45, damping: 25 },
          filter: { duration: 0.2 }
        }}
      />
      
      <motion.div
        key="circle2"
        className="absolute right-10 bottom-1/3 w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-400/60 to-pink-500/60 opacity-20 z-10 hidden md:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: -360,
          scale: [1, 1.1, 1],
          x: calcMouseX * 60 + mouseDelta.x * -3.5, // More responsive to mouse movement
          filter: `blur(${mouseSpeed * 0.03}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          x: { type: "spring", stiffness: 35, damping: 20 },
          filter: { duration: 0.2 }
        }}
      />
      
      <motion.div
        key="circle3"
        className="absolute left-1/3 top-1/4 w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-green-300/60 to-teal-500/60 opacity-25 z-10 hidden md:block"
        animate={{ 
          y: [0, 10, 0],
          rotate: 180,
          scale: [1, 1.08, 1],
          x: calcMouseX * 45 + mouseDelta.x * 4, // More responsive to mouse movement
          filter: `blur(${mouseSpeed * 0.04}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 },
          x: { type: "spring", stiffness: 40, damping: 22 },
          filter: { duration: 0.2 }
        }}
      />
      
      {/* Additional new floating element */}
      <motion.div
        key="circle4"
        className="absolute right-1/4 top-1/3 w-8 h-8 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-amber-300/60 to-orange-400/60 opacity-20 z-10 hidden md:block"
        animate={{ 
          y: [0, -8, 0],
          rotate: 240,
          scale: [1, 1.06, 1],
          x: calcMouseX * 50 + mouseDelta.x * -2.5,
          filter: `blur(${mouseSpeed * 0.035}px)`
        }}
        transition={{ 
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          scale: { duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          x: { type: "spring", stiffness: 38, damping: 24 },
          filter: { duration: 0.2 }
        }}
      />
    </>
  );
};

export default HeroMouseEffects;
