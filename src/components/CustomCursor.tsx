
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseDelta, setMouseDelta] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");

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

  // Improved cursor variants with better shapes and animations
  const cursorVariants = {
    default: {
      width: 30 + (mouseSpeed * 0.03),
      height: 30 + (mouseSpeed * 0.03),
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: `1.5px solid rgba(99, 102, 241, ${0.8 - mouseSpeed * 0.001})`,
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.5
      }
    },
    hover: {
      width: 50 + (mouseSpeed * 0.05),
      height: 50 + (mouseSpeed * 0.05),
      backgroundColor: "rgba(99, 102, 241, 0.08)",
      border: "1.5px solid rgba(99, 102, 241, 0.7)",
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150
      }
    }
  };
  
  // Improved dot cursor variants with better shape and animations
  const dotVariants = {
    default: {
      width: 6 + (mouseSpeed * 0.01),
      height: 6 + (mouseSpeed * 0.01),
      backgroundColor: `rgba(99, 102, 241, ${0.9 - mouseSpeed * 0.001})`,
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    },
    hover: {
      width: 10 + (mouseSpeed * 0.02),
      height: 10 + (mouseSpeed * 0.02),
      backgroundColor: "rgba(99, 102, 241, 1)",
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };
  
  // Enhanced trail elements for smoother motion
  const trailElements = Array.from({ length: 4 }, (_, i) => i);
  
  return (
    <>
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
      
      {/* Improved trailing cursors with better shape and motion */}
      {trailElements.map((index) => (
        <motion.div
          key={`trail-${index}`}
          className="fixed rounded-full pointer-events-none hidden md:block"
          style={{
            width: 3 - index * 0.4,
            height: 3 - index * 0.4,
            backgroundColor: `rgba(99, 102, 241, ${0.5 - index * 0.1})`,
            x: mousePosition.x - 1.5,
            y: mousePosition.y - 1.5,
            filter: `blur(${index * 0.3}px)`
          }}
          transition={{
            duration: 0.1 + index * 0.05,
            ease: "linear",
            delay: index * 0.03
          }}
        />
      ))}
      
      {/* Enhanced dynamic spotlight effect that follows mouse with improved appearance */}
      <motion.div
        className="fixed pointer-events-none z-40 inset-0 opacity-20 mix-blend-soft-light hidden md:block"
        animate={{
          background: `radial-gradient(circle ${300 + mouseSpeed * 2}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, ${0.3 - mouseSpeed * 0.0005}) 0%, rgba(255, 255, 255, 0) 70%)`
        }}
        transition={{
          type: "tween",
          duration: 0.2
        }}
      />
    </>
  );
};

export default CustomCursor;
