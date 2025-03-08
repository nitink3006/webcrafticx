
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';
import { mouseTracker } from '../utils/animations';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll({ 
    container: containerRef
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track mouse position for all sections
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  // Cursor variants
  const cursorVariants = {
    default: {
      width: '24px',
      height: '24px',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      border: '2px solid rgba(99, 102, 241, 0.8)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 150,
        mass: 0.5
      }
    },
    hover: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      border: '2px solid rgba(99, 102, 241, 0.5)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 150
      }
    }
  };
  
  // Smaller dot cursor variants
  const dotVariants = {
    default: {
      width: '6px',
      height: '6px',
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 200
      }
    },
    hover: {
      width: '10px',
      height: '10px',
      backgroundColor: 'rgba(99, 102, 241, 1)',
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 200
      }
    }
  };
  
  // Lazy load ThreeJS
  useEffect(() => {
    const loadThreeJS = async () => {
      try {
        // This will only load Three.js when the component mounts
        await import('three');
        console.log('Three.js loaded successfully');
      } catch (error) {
        console.error('Failed to load Three.js:', error);
      }
    };
    
    loadThreeJS();
  }, []);
  
  return (
    <div className="relative" ref={containerRef}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Enhanced custom cursor for desktop */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[200] hidden md:block mix-blend-difference"
        animate={cursorVariant}
        variants={cursorVariants}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12
        }}
      />
      
      <motion.div
        className="fixed rounded-full pointer-events-none z-[201] hidden md:block"
        animate={cursorVariant}
        variants={dotVariants}
        style={{
          left: mousePosition.x - 3,
          top: mousePosition.y - 3
        }}
      />
      
      <Navbar />
      
      <main className="mouse-animation-container">
        <Hero parentMousePosition={mousePosition} />
        <About parentMousePosition={mousePosition} />
        <Services parentMousePosition={mousePosition} />
        <Work parentMousePosition={mousePosition} />
        <Team parentMousePosition={mousePosition} />
        <Testimonials parentMousePosition={mousePosition} />
        <Contact parentMousePosition={mousePosition} />
      </main>
      
      <Footer />
      <ProjectModal />
      
      {/* Add back-to-top button with mouse hover effect */}
      <motion.a
        href="#home"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          y: scrollYProgress.get() > 0.1 ? 0 : 20
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 8px 30px rgba(79, 70, 229, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19V5M12 5L5 12M12 5L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default Index;
