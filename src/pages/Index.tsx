
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
  const [mouseDelta, setMouseDelta] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll({ 
    container: containerRef
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enhanced mouse tracking for the entire page
  useEffect(() => {
    let prevMousePosition = { x: 0, y: 0 };
    let lastMoveTime = Date.now();
    let mouseSpeedAccumulator = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTime;
      
      // Calculate deltas
      const deltaX = e.clientX - prevMousePosition.x;
      const deltaY = e.clientY - prevMousePosition.y;
      
      // Calculate instantaneous speed
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const speed = timeDelta > 0 ? distance / timeDelta * 100 : 0;
      
      // Smooth speed calculations
      mouseSpeedAccumulator = mouseSpeedAccumulator * 0.8 + speed * 0.2;
      
      // Update state
      setMousePosition({ x: e.clientX, y: e.clientY });
      setMouseDelta({ x: deltaX, y: deltaY });
      setMouseSpeed(mouseSpeedAccumulator);
      
      // Update tracking variables
      prevMousePosition = { x: e.clientX, y: e.clientY };
      lastMoveTime = currentTime;
    };
    
    // Add hover listeners for interactive elements with enhanced cursor effects
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Add the mouse move listener
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  // Enhanced cursor variants with dynamic properties
  const cursorVariants = {
    default: {
      width: 24 + (mouseSpeed * 0.05),
      height: 24 + (mouseSpeed * 0.05),
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: `2px solid rgba(99, 102, 241, ${0.8 - mouseSpeed * 0.001})`,
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.5
      }
    },
    hover: {
      width: 40 + (mouseSpeed * 0.08),
      height: 40 + (mouseSpeed * 0.08),
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      border: "2px solid rgba(99, 102, 241, 0.5)",
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150
      }
    }
  };
  
  // Smaller dot cursor variants with dynamic properties
  const dotVariants = {
    default: {
      width: 6 + (mouseSpeed * 0.02),
      height: 6 + (mouseSpeed * 0.02),
      backgroundColor: `rgba(99, 102, 241, ${0.8 - mouseSpeed * 0.001})`,
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    },
    hover: {
      width: 10 + (mouseSpeed * 0.03),
      height: 10 + (mouseSpeed * 0.03),
      backgroundColor: "rgba(99, 102, 241, 1)",
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };
  
  // Dynamic trailing cursor effect
  const trailElements = Array.from({ length: 5 }, (_, i) => i);
  
  return (
    <div className="relative" ref={containerRef}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Enhanced custom cursor for desktop with trailing effect */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[200] hidden md:block mix-blend-difference"
        animate={cursorVariant}
        variants={cursorVariants}
      />
      
      <motion.div
        className="fixed rounded-full pointer-events-none z-[201] hidden md:block"
        animate={cursorVariant}
        variants={dotVariants}
      />
      
      {/* New trailing cursors for enhanced motion effect */}
      {trailElements.map((index) => (
        <motion.div
          key={`trail-${index}`}
          className="fixed rounded-full pointer-events-none hidden md:block"
          style={{
            width: 3,
            height: 3,
            backgroundColor: `rgba(99, 102, 241, ${0.5 - index * 0.1})`,
            x: mousePosition.x,
            y: mousePosition.y,
            filter: `blur(${index * 0.5}px)`,
            transition: {
              duration: 0.1 + index * 0.05,
              ease: "linear",
              delay: index * 0.03
            }
          }}
        />
      ))}
      
      <Navbar />
      
      <main className="mouse-animation-container">
        <Hero />
        <About />
        <Services />
        <Work />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <ProjectModal />
      
      {/* Enhanced back-to-top button with better mouse hover effect */}
      <motion.a
        href="#home"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          y: scrollYProgress.get() > 0.1 ? 0 : 20,
          rotate: mouseDelta.x * 0.1,  // Subtle rotation based on mouse movement
          scale: 1 + (mouseSpeed * 0.0005) // Subtle scale based on mouse speed
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 8px 30px rgba(79, 70, 229, 0.4)",
          y: -3
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
      
      {/* New subtle parallax overlay for enhanced mouse movement visualization */}
      <div className="fixed inset-0 pointer-events-none z-[5] opacity-5 hidden md:block">
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-indigo-500/10 to-transparent"
          style={{ 
            backgroundPosition: `${50 + (mouseDelta.x * 0.1)}% ${50 + (mouseDelta.y * 0.1)}%`,
            backgroundSize: `${200 + mouseSpeed}%`,
            opacity: 0.05 + (mouseSpeed * 0.0002)
          }}
        />
      </div>
    </div>
  );
};

export default Index;
