import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ThreeScene from "./ThreeScene";
import { fadeIn, fadeUp, staggerContainer } from "../utils/animations";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Calculate mouse-based transformations
  const calcMouseX =
    mousePosition.x / (typeof window !== "undefined" ? window.innerWidth : 1);
  const calcMouseY =
    mousePosition.y / (typeof window !== "undefined" ? window.innerHeight : 1);

  const moveX = useTransform(() => (calcMouseX - 0.5) * 20);
  const moveY = useTransform(() => (calcMouseY - 0.5) * 20);
  const rotateX = useTransform(() => (calcMouseY - 0.5) * 10);
  const rotateY = useTransform(() => (0.5 - calcMouseX) * 10);

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
        <div className="text-center">
          <motion.div
            className="mb-6 inline-block"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: moveX, y: moveY }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100 shadow-md mb-2">
              Digital Experience Agency
            </span>
          </motion.div>

          <motion.h1
            className="text-slate-900 font-bold leading-tight mb-6 max-w-4xl mx-auto drop-shadow-sm text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ x: moveX.get() * 0.5, y: moveY.get() * 0.5 }}
          >
            <span className="block md:inline-block">Transform Ideas into</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 inline-block drop-shadow">
              Digital Masterpieces
            </span>
          </motion.h1>

          <motion.p
            className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-sm"
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ x: moveX.get() * 0.3, y: moveY.get() * 0.3 }}
          >
            Our award-winning team combines creativity, technology, and strategy
            to deliver exceptional digital solutions for forward-thinking
            brands.
          </motion.p>

          <motion.p
            className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-sm"
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ x: moveX.get() * 0.3, y: moveY.get() * 0.3 }}
          >
            Bring Your Digital Presence With Us...
          </motion.p>

          {/* Buttons with mouse-follow effect */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            variants={fadeUp}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ x: moveX.get() * 0.1, y: moveY.get() * 0.1 }}
          >
            <motion.button
              className="button-primary w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(79, 70, 229, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("project-modal")?.click()}
            >
              Start Your Project
            </motion.button>

            <motion.a
              href="#work"
              className="px-6 py-3 text-slate-700 font-medium transition-all duration-300 border border-slate-300 rounded-md bg-white hover:bg-slate-50 hover:border-slate-400 w-full sm:w-auto text-center shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>
          </motion.div>
        </div>

        <AnimatePresence>
          <motion.div
            className="absolute -left-10 top-1/3 w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 z-10 hidden md:block"
            animate={{
              y: [0, 15, 0],
              rotate: 360,
              scale: [1, 1.1, 1],
              x: moveX.get() * -30,
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute right-10 bottom-1/3 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 z-10 hidden md:block"
            animate={{
              y: [0, -20, 0],
              rotate: -360,
              scale: [1, 1.15, 1],
              x: moveX.get() * 30,
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          />

          <motion.div
            className="absolute left-1/3 top-1/4 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-green-300 to-teal-500 opacity-25 z-10 hidden md:block"
            animate={{
              y: [0, 12, 0],
              x: [0, -12, 0, moveX.get() * 20],
              rotate: 180,
              scale: [1, 1.1, 1],
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
              x: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: {
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              },
            }}
          />
        </AnimatePresence>

        {/* Enhanced scroll indicator */}
        {/* <motion.div 
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1,
            y: 0,
          }}
          transition={{ 
            delay: 1.5,
            duration: 0.8
          }}
        >
          <motion.a 
            href="about"
            className="flex flex-col items-center text-indigo-600 hover:text-indigo-700 transition-colors"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop"
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
        </motion.div> */}
      </motion.div>

      {/* Smaller circular elements with gradients that follow mouse */}
      <motion.div
        className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] border-2 border-indigo-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-indigo-50 to-transparent opacity-70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.7,
          rotate: 360,
          x: moveX.get() * 15,
          y: moveY.get() * 15,
        }}
        transition={{
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1] },
          opacity: { duration: 1 },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
        }}
      />

      <motion.div
        className="absolute w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border-2 border-purple-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-tr from-purple-50 to-transparent opacity-80"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.8,
          rotate: -360,
          x: moveX.get() * -20,
          y: moveY.get() * -20,
        }}
        transition={{
          scale: { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 },
          opacity: { duration: 1, delay: 0.2 },
          rotate: { duration: 90, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Mouse tracker circle cursor effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-indigo-600 opacity-30 pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { duration: 0.1, ease: "linear" },
          y: { duration: 0.1, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
};

export default Hero;
