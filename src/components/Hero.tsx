
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { fadeIn, fadeUp, staggerContainer } from '../utils/animations';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseDelta, setMouseDelta] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);
  
  // Enhanced mouse tracking for smoother animations
  useEffect(() => {
    let prevMousePosition = { x: 0, y: 0 };
    let mouseSpeedAccumulator = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse delta (change in position)
      const deltaX = e.clientX - prevMousePosition.x;
      const deltaY = e.clientY - prevMousePosition.y;
      
      // Update mouse position
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Update delta with some smoothing
      setMouseDelta({
        x: deltaX * 0.2, // Reduce the impact for smoother movement
        y: deltaY * 0.2
      });
      
      // Calculate mouse speed for dynamic effects
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      mouseSpeedAccumulator = mouseSpeedAccumulator * 0.8 + speed * 0.2; // Smooth the speed
      setMouseSpeed(mouseSpeedAccumulator);
      
      // Save current position for next calculation
      prevMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
  
  const moveX = useTransform(() => (calcMouseX - 0.5) * (20 + mouseSpeed * 0.5));
  const moveY = useTransform(() => (calcMouseY - 0.5) * (20 + mouseSpeed * 0.5));
  const rotateX = useTransform(() => (calcMouseY - 0.5) * (10 + mouseDelta.y * 0.1));
  const rotateY = useTransform(() => (0.5 - calcMouseX) * (10 + mouseDelta.x * 0.1));

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ThreeScene />
      
      {/* Enhanced gradient overlay for better contrast while keeping white background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50 z-10 pointer-events-none" />
      
      <motion.div 
        className="container relative z-20 max-w-6xl mx-auto px-6 md:px-10"
        style={{ y, opacity, scale }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Main content area with enhanced mouse responsiveness */}
        <div className="text-center">
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
              x: moveX.get() * 0.5, 
              y: moveY.get() * 0.5,
              rotateX: mouseDelta.y * -0.02,
              rotateY: mouseDelta.x * 0.02,
              perspective: 1000
            }}
          >
            <span className="block md:inline-block">Transform Ideas into</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 inline-block drop-shadow">
              Digital Masterpieces
            </span>
          </motion.h1>
          
          <motion.p
            className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-sm"
            variants={fadeUp}
            transition={{ 
              delay: 0.4, 
              duration: 0.8 
            }}
            style={{ 
              x: moveX.get() * 0.3, 
              y: moveY.get() * 0.3,
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
              x: moveX.get() * 0.1, 
              y: moveY.get() * 0.1,
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

        {/* Enhanced interactive floating elements that follow mouse more dynamically */}
        <AnimatePresence>
          <motion.div
            key="circle1"
            className="absolute -left-10 top-1/3 w-8 h-8 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 z-10 hidden md:block"
            animate={{ 
              y: [0, 15, 0],
              rotate: 360,
              scale: [1, 1.1, 1],
              x: calcMouseX * -40 + mouseDelta.x * 2, // More responsive to mouse movement
              filter: `blur(${mouseSpeed * 0.05}px)` // Dynamic blur based on mouse speed
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
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
              x: calcMouseX * 40 + mouseDelta.x * -2.5, // More responsive to mouse movement
              filter: `blur(${mouseSpeed * 0.03}px)` // Dynamic blur based on mouse speed
            }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
              filter: { duration: 0.2 }
            }}
          />
          
          <motion.div
            key="circle3"
            className="absolute left-1/3 top-1/4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-green-300 to-teal-500 opacity-25 z-10 hidden md:block"
            animate={{ 
              y: [0, 12, 0],
              x: [0, -12, 0, calcMouseX * 30 + mouseDelta.x * 3], // More responsive to mouse movement
              rotate: 180,
              scale: [1, 1.1, 1],
              filter: `blur(${mouseSpeed * 0.04}px)` // Dynamic blur based on mouse speed
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
              x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 },
              filter: { duration: 0.2 }
            }}
          />
        </AnimatePresence>
        
        {/* Enhanced scroll indicator with better mouse interaction */}
        <motion.div 
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1,
            y: 0,
            x: mouseDelta.x * 0.5 // Subtle movement based on mouse delta
          }}
          transition={{ 
            delay: 1.5,
            duration: 0.8
          }}
        >
          <motion.a 
            href="#about"
            className="flex flex-col items-center text-indigo-600 hover:text-indigo-700 transition-colors"
            animate={{ 
              y: [0, 10, 0],
              scale: 1 + (mouseSpeed * 0.0008) // Subtle scale effect based on mouse speed
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, repeatType: "loop" },
              scale: { duration: 0.2 }
            }}
          >
            <span className="text-sm mb-2 font-medium">Scroll to discover</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-indigo-500 shadow-md shadow-indigo-200">
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
            </div>
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
          x: calcMouseX * 20 - 10 + mouseDelta.x * 0.8,
          y: calcMouseY * 20 - 10 + mouseDelta.y * 0.8,
          filter: `blur(${mouseSpeed * 0.02}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1] },
          opacity: { duration: 1 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
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
          x: calcMouseX * -25 + 12.5 + mouseDelta.x * -1.2,
          y: calcMouseY * -25 + 12.5 + mouseDelta.y * -1.2,
          filter: `blur(${mouseSpeed * 0.015}px)` // Dynamic blur based on mouse speed
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 },
          opacity: { duration: 1, delay: 0.2 },
          rotate: { duration: 90, repeat: Infinity, ease: "linear" },
          filter: { duration: 0.3 }
        }}
      />
      
      {/* Enhanced mouse tracker with dynamic size based on mouse speed */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-indigo-600 opacity-30 pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: [1, 1.2, 1],
          width: 24 + mouseSpeed * 0.15, // Dynamic size based on mouse speed
          height: 24 + mouseSpeed * 0.15,
          opacity: 0.3 - (mouseSpeed * 0.001) // Fade slightly with faster movement
        }}
        transition={{
          x: { duration: 0.1, ease: "linear" },
          y: { duration: 0.1, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
      />
    </section>
  );
};

export default Hero;
