import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ThreeScene />
      
      {/* Enhanced gradient overlay for better contrast while keeping white background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40 z-10 pointer-events-none" />
      
      <motion.div 
        className="container relative z-20 max-w-6xl mx-auto px-6 md:px-10"
        style={{ y, opacity, scale }}
      >
        <div className="text-center">
          <motion.div
            className="mb-6 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100 shadow-sm mb-2">
              Digital Experience Agency
            </span>
          </motion.div>
          
          <motion.h1
            className="text-slate-900 font-bold leading-tight mb-6 max-w-4xl mx-auto drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block">Transform Ideas into</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 inline-block drop-shadow">
              Digital Masterpieces
            </span>
          </motion.h1>
          
          <motion.p
            className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our award-winning team combines creativity, technology, and strategy to deliver exceptional digital solutions for forward-thinking brands.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button 
              className="button-primary w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('project-modal')?.click()}
            >
              Start Your Project
            </motion.button>
            
            <motion.a 
              href="#work"
              className="px-6 py-3 text-slate-700 font-medium transition-all duration-300 border border-slate-300 rounded-md bg-white hover:bg-slate-50 hover:border-slate-400 w-full sm:w-auto text-center shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>
          </motion.div>
        </div>

        {/* Floating elements to enhance visual appeal */}
        <motion.div
          className="absolute -left-10 top-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 z-10"
          animate={{ 
            y: [0, 15, 0],
            rotate: 360,
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
        
        <motion.div
          className="absolute right-10 bottom-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 z-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: -360,
          }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
        />
        
        <motion.div 
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-30"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <motion.a 
            href="#about"
            className="flex flex-col items-center text-indigo-600 hover:text-indigo-700 transition-colors"
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
      
      {/* Enhanced circular elements with gradients */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] border-2 border-indigo-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-indigo-50 to-transparent opacity-70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.7,
          rotate: 360,
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1] },
          opacity: { duration: 1 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border-2 border-purple-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-tr from-purple-50 to-transparent opacity-80"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.8,
          rotate: -360,
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 },
          opacity: { duration: 1, delay: 0.2 },
          rotate: { duration: 90, repeat: Infinity, ease: "linear" }
        }}
      />
    </section>
  );
};

export default Hero;
