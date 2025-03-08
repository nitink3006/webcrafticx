
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { fadeIn, fadeUp, staggerContainer, dynamicParallax, floatingElementAnimation } from '../utils/animations';

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
      
      // Calculate deltas with smoothing
      const deltaX = (e.clientX - prevMousePosition.x) * 0.5; // Apply smoothing factor
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
  
  const moveX = (calcMouseX - 0.5) * (20 + mouseSpeed * 0.5);
  const moveY = (calcMouseY - 0.5) * (20 + mouseSpeed * 0.5);
  const rotateX = (calcMouseY - 0.5) * (10 + mouseDelta.y * 0.1);
  const rotateY = (0.5 - calcMouseX) * (10 + mouseDelta.x * 0.1);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ThreeScene />
      
      {/* Enhanced gradient overlay with mouse reactivity */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50 z-10 pointer-events-none"
        style={{
          backgroundPosition: `${50 + mouseDelta.x * 0.05}% ${50 + mouseDelta.y * 0.05}%`
        }}
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
              x: moveX, 
              y: moveY,
              rotate: mouseDelta.x * 0.05 // Subtle rotation based on mouse movement
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
              x: moveX * 0.5, 
              y: moveY * 0.5,
              rotateX: mouseDelta.y * -0.02,
              rotateY: mouseDelta.x * 0.02,
              perspective: 1000
            }}
          >
            <span className="block md:inline-block">Transform Ideas into</span>{" "}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 inline-block drop-shadow"
              animate={{
                backgroundPosition: `${100 + mousePosition.x * 0.02}% ${mousePosition.y * 0.02}%`,
                backgroundSize: `${200 + mouseSpeed * 0.5}%`
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
              x: moveX * 0.3, 
              y: moveY * 0.3,
              scale: 1 + mouseSpeed * 0.0005 // Subtle scale effect based on mouse speed
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
              x: moveX * 0.1, 
              y: moveY * 0.1,
              rotate: mouseDelta.x * 0.01 // Very subtle rotation
            }}
          >
            <motion.button 
              className="button-primary w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 25px rgba(79, 70, 229, 0.3)",
                y: -5 + mouseDelta.y * 0.1 // Dynamic hover effect
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
                y: -5 + mouseDelta.y * 0.1 // Dynamic hover effect
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>
          </motion.div>
        </div>

        {/* Enhanced interactive floating elements with more dynamic mouse following */}
        <AnimatePresence>
          <motion.div
            key="circle1"
            className="absolute -left-10 top-1/3 w-8 h-8 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 z-10 hidden md:block"
            animate={{ 
              y: [0, 15, 0],
              rotate: 360,
              scale: [1, 1.1, 1],
              x: calcMouseX * -60 + mouseDelta.x * 3.5, // More responsive to mouse movement
              filter: `blur(${mouseSpeed * 0.05}px)` // Dynamic blur based on mouse speed
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              x: { type: "spring", stiffness: 40, damping: 20 },
              filter: { duration: 0.2 }
            }}
          />
          
          <motion.div
            key="circle2"
            className="absolute right-10 bottom-1/3 w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 z-10 hidden md:block"
            animate={{ 
              y: [0, -20, 0],
              rotate: -360,
              scale: [1, 1.15, 1],
              x: calcMouseX * 60 + mouseDelta.x * -4, // More responsive to mouse movement
              filter: `blur(${mouseSpeed * 0.03}px)` // Dynamic blur based on mouse speed
            }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
              x: { type: "spring", stiffness: 30, damping: 15 },
              filter: { duration: 0.2 }
            }}
          />
          
          <motion.div
            key="circle3"
            className="absolute left-1/3 top-1/4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-green-300 to-teal-500 opacity-25 z-10 hidden md:block"
            animate={{ 
              y: [0, 12, 0],
              rotate: 180,
              scale: [1, 1.1, 1],
              x: calcMouseX * 45 + mouseDelta.x * 4.5, // More responsive to mouse movement
              filter: `blur(${mouseSpeed * 0.04}px)` // Dynamic blur based on mouse speed
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 },
              x: { type: "spring", stiffness: 35, damping: 18 },
              filter: { duration: 0.2 }
            }}
          />
        </AnimatePresence>
        
        {/* Enhanced scroll indicator with improved mouse interaction */}
        <motion.div 
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1,
            y: 0,
            x: mouseDelta.x * 1.2, // More noticeable movement based on mouse delta
            filter: `blur(${Math.abs(mouseDelta.x) * 0.01}px)` // Subtle blur effect on fast movement
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
              scale: 1 + (mouseSpeed * 0.001) // Subtle scale effect based on mouse speed
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
                rotate: mouseDelta.x * 0.1
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
      
      {/* Enhanced circular elements with gradients that follow mouse more fluidly */}
      <motion.div
        className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] border-2 border-indigo-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-indigo-50 to-transparent opacity-70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.7,
          rotate: 360,
          x: calcMouseX * 30 - 15 + mouseDelta.x * 1.2,
          y: calcMouseY * 30 - 15 + mouseDelta.y * 1.2,
          filter: `blur(${mouseSpeed * 0.02}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1] },
          opacity: { duration: 1 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 25, damping: 20 },
          y: { type: "spring", stiffness: 25, damping: 20 },
          filter: { duration: 0.3 }
        }}
      />
      
      <motion.div
        className="absolute w-[75px] h-[75px] sm:w-[150px] sm:h-[150px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px] border-2 border-purple-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-tr from-purple-50 to-transparent opacity-80"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.8,
          rotate: -360,
          x: calcMouseX * -35 + 17.5 + mouseDelta.x * -1.8,
          y: calcMouseY * -35 + 17.5 + mouseDelta.y * -1.8,
          filter: `blur(${mouseSpeed * 0.015}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 },
          opacity: { duration: 1, delay: 0.2 },
          rotate: { duration: 90, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 20, damping: 25 },
          y: { type: "spring", stiffness: 20, damping: 25 },
          filter: { duration: 0.3 }
        }}
      />
      
      {/* Enhanced dynamic spotlight effect that follows mouse with speed-based intensity */}
      <motion.div
        className="fixed pointer-events-none z-40 inset-0 opacity-30 mix-blend-soft-light hidden md:block"
        animate={{
          background: `radial-gradient(circle ${300 + mouseSpeed * 3}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, ${0.3 - mouseSpeed * 0.0008}) 0%, rgba(255, 255, 255, 0) 70%)`
        }}
        transition={{
          type: "tween",
          duration: 0.2
        }}
      />
    </section>
  );
};

export default Hero;
