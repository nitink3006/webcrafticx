
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
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10 pointer-events-none" />
      
      <motion.div 
        className="container relative z-20 max-w-6xl mx-auto px-6 md:px-10"
        style={{ y, opacity, scale }}
      >
        <div className="text-center">
          <motion.p
            className="text-white text-lg md:text-xl mb-4 font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We craft digital experiences that
          </motion.p>
          
          <motion.h1
            className="text-white font-bold leading-tight mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="inline-block">Transform Ideas into</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Digital Masterpieces
            </span>
          </motion.h1>
          
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Our award-winning team combines creativity, technology, and strategy to deliver exceptional digital solutions for forward-thinking brands.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button 
              className="button-primary w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('project-modal')?.click()}
            >
              Start Your Project
            </motion.button>
            
            <motion.a 
              href="#work"
              className="px-6 py-3 text-white font-medium transition-all duration-300 border border-white/30 rounded-md hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto text-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>
          </motion.div>
        </div>
        
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
            href="#services"
            className="flex flex-col items-center text-white hover:text-white transition-colors drop-shadow-lg"
          >
            <span className="text-sm mb-2 font-medium">Scroll to discover</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              <path 
                d="M12 5V19M12 19L18 13M12 19L6 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Circular element with darker border */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] border-2 border-white/20 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotate: 360,
        }}
        transition={{ 
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1] },
          opacity: { duration: 1 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border-2 border-white/30 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
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
