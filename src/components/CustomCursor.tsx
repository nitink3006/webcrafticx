
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
      width: 32 + (mouseSpeed * 0.05),
      height: 32 + (mouseSpeed * 0.05),
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: `2px solid rgba(99, 102, 241, ${0.8 - mouseSpeed * 0.001})`,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.5
      }
    },
    hover: {
      width: 60 + (mouseSpeed * 0.08),
      height: 60 + (mouseSpeed * 0.08),
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      border: "2px solid rgba(99, 102, 241, 0.7)",
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150
      }
    },
    text: {
      width: 120,
      height: 120,
      mixBlendMode: "difference",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150
      }
    }
  };
  
  // Improved dot cursor variants with better shape and animations
  const dotVariants = {
    default: {
      width: 8 + (mouseSpeed * 0.02),
      height: 8 + (mouseSpeed * 0.02),
      backgroundColor: `rgba(99, 102, 241, ${0.9 - mouseSpeed * 0.001})`,
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    },
    hover: {
      width: 12 + (mouseSpeed * 0.03),
      height: 12 + (mouseSpeed * 0.03),
      backgroundColor: "rgba(99, 102, 241, 1)",
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    },
    text: {
      width: 6,
      height: 6,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      borderRadius: "50%",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };
  
  // Enhanced trail elements for smoother motion
  const trailElements = Array.from({ length: 6 }, (_, i) => i);
  
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
            width: 4 - index * 0.5,
            height: 4 - index * 0.5,
            backgroundColor: `rgba(99, 102, 241, ${0.6 - index * 0.1})`,
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            filter: `blur(${index * 0.5}px)`
          }}
          transition={{
            duration: 0.1 + index * 0.06,
            ease: "linear",
            delay: index * 0.04
          }}
        />
      ))}
      
      {/* Enhanced dynamic spotlight effect that follows mouse with improved appearance */}
      <motion.div
        className="fixed pointer-events-none z-40 inset-0 opacity-30 mix-blend-soft-light hidden md:block"
        animate={{
          background: `radial-gradient(circle ${350 + mouseSpeed * 3}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, ${0.35 - mouseSpeed * 0.0008}) 0%, rgba(255, 255, 255, 0) 70%)`
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
