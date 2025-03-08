
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { fadeIn, fadeUp, staggerContainer } from '../utils/animations';
import HeroMouseEffects from './HeroMouseEffects';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseDelta, setMouseDelta] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);
  
  // Enhanced mouse tracking for smoother animations
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let prevMousePosition = { x: 0, y: 0 };
    let lastMoveTime = Date.now();
    let mouseSpeedAccumulator = 0;
    let rafId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTime;
      
      // Calculate deltas with enhanced smoothing
      const deltaX = (e.clientX - prevMousePosition.x) * 0.5; // Apply improved smoothing factor
      const deltaY = (e.clientY - prevMousePosition.y) * 0.5;
      
      // Update mouse position immediately for responsive feel
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Calculate mouse speed with improved smoothing
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const speed = timeDelta > 0 ? distance / timeDelta * 100 : 0;
      
      // Use RAF for smoother updates to delta and speed
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // Smooth out speed calculations with enhanced exponential smoothing
        mouseSpeedAccumulator = mouseSpeedAccumulator * 0.9 + speed * 0.1;
        
        setMouseDelta({
          x: deltaX,
          y: deltaY
        });
        
        setMouseSpeed(mouseSpeedAccumulator);
      });
      
      // Save current position for next calculation
      prevMousePosition = { x: e.clientX, y: e.clientY };
      lastMoveTime = currentTime;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  // Enhanced mouse-based transformations with improved dynamics
  const calcMouseX = mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1);
  const calcMouseY = mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1);
  
  const moveX = (calcMouseX - 0.5) * (25 + mouseSpeed * 0.6); // Improved intensity
  const moveY = (calcMouseY - 0.5) * (25 + mouseSpeed * 0.6); 
  const rotateX = (calcMouseY - 0.5) * (12 + mouseDelta.y * 0.15); // Enhanced rotation
  const rotateY = (0.5 - calcMouseX) * (12 + mouseDelta.x * 0.15);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ThreeScene />
      
      {/* Use the HeroMouseEffects component */}
      <HeroMouseEffects 
        mousePosition={mousePosition}
        mouseDelta={mouseDelta}
        mouseSpeed={mouseSpeed}
      />
      
      <motion.div 
        className="container relative z-20 max-w-6xl mx-auto px-6 md:px-10"
        style={{ y, opacity, scale }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Main content area with enhanced mouse responsiveness */}
        <div className="text-center relative">
          <motion.div
            className="mb-6 inline-block"
            variants={fadeUp}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            style={{ 
              x: moveX * 1.2, // Enhanced movement
              y: moveY * 1.2,
              rotate: mouseDelta.x * 0.07 // Enhanced rotation based on mouse movement
            }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100 shadow-md mb-2">
              Digital Experience Agency
            </span>
          </motion.div>
          
          <motion.h1
            className="text-slate-900 font-bold leading-tight mb-6 max-w-4xl mx-auto drop-shadow-sm text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            variants={fadeUp}
            transition={{ 
              delay: 0.2, 
              duration: 0.8 
            }}
            style={{ 
              x: moveX * 0.6, // Enhanced movement
              y: moveY * 0.6,
              rotateX: rotateX * 0.5, // Enhanced 3D effect
              rotateY: rotateY * 0.5,
              perspective: 1000
            }}
          >
            <span className="block md:inline-block">Transform Ideas into</span>{" "}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 inline-block drop-shadow"
              animate={{
                backgroundPosition: `${100 + mousePosition.x * 0.03}% ${mousePosition.y * 0.03}%`, // Enhanced background movement
                backgroundSize: `${200 + mouseSpeed * 0.7}%` // Enhanced speed effect
              }}
              transition={{
                duration: 0.5
              }}
            >
              Digital Masterpieces
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-sm"
            variants={fadeUp}
            transition={{ 
              delay: 0.4, 
              duration: 0.8 
            }}
            style={{ 
              x: moveX * 0.4, // Enhanced movement
              y: moveY * 0.4,
              scale: 1 + mouseSpeed * 0.0007 // Enhanced scale effect
            }}
          >
            Our award-winning team combines creativity, technology, and strategy to deliver exceptional digital solutions for forward-thinking brands.
          </motion.p>
          
          {/* Buttons with enhanced mouse-follow effect */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            variants={fadeUp}
            transition={{ 
              delay: 0.6, 
              duration: 0.8 
            }}
            style={{ 
              x: moveX * 0.2, // Enhanced movement
              y: moveY * 0.2,
              rotate: mouseDelta.x * 0.02 // Enhanced rotation
            }}
          >
            <motion.button 
              className="button-primary w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 25px rgba(79, 70, 229, 0.3)",
                y: -5 + mouseDelta.y * 0.15 // Enhanced hover effect
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('project-modal')?.click()}
            >
              Start Your Project
            </motion.button>
            
            <motion.a 
              href="#work"
              className="px-6 py-3 text-slate-700 font-medium transition-all duration-300 border border-slate-300 rounded-md bg-white hover:bg-slate-50 hover:border-slate-400 w-full sm:w-auto text-center shadow-md"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                y: -5 + mouseDelta.y * 0.15 // Enhanced hover effect
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator with improved mouse interaction */}
        <motion.div 
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1,
            y: 0,
            x: mouseDelta.x * 1.5, // Enhanced movement based on mouse delta
            filter: `blur(${Math.abs(mouseDelta.x) * 0.015}px)` // Enhanced blur effect
          }}
          transition={{ 
            delay: 1.5,
            duration: 0.8,
            x: { type: "spring", stiffness: 50, damping: 10 },
            filter: { duration: 0.1 }
          }}
        >
          <motion.a 
            href="#about"
            className="flex flex-col items-center text-indigo-600 hover:text-indigo-700 transition-colors"
            animate={{ 
              y: [0, 10, 0],
              scale: 1 + (mouseSpeed * 0.0015) // Enhanced scale effect
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, repeatType: "loop" },
              scale: { duration: 0.2 }
            }}
            whileHover={{
              y: -5,
              scale: 1.1,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 10 
              }
            }}
          >
            <span className="text-sm mb-2 font-medium">Scroll to discover</span>
            <motion.div 
              className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-indigo-500 shadow-md shadow-indigo-200"
              animate={{
                boxShadow: [
                  "0 4px 12px rgba(99, 102, 241, 0.2)",
                  "0 8px 20px rgba(99, 102, 241, 0.4)",
                  "0 4px 12px rgba(99, 102, 241, 0.2)"
                ],
                rotate: mouseDelta.x * 0.15 // Enhanced rotation
              }}
              transition={{
                boxShadow: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                },
                rotate: { 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10 
                }
              }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-indigo-600"
              >
                <path 
                  d="M12 5V19M12 19L18 13M12 19L6 13" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
