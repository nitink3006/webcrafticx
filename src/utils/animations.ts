import { Variants } from "framer-motion";

// Fade up animation
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Staggered fade up for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

// Enhanced mouse tracking animation with smoothing and acceleration
export const smoothMouseTracker = (mouseX: number, mouseY: number, mouseDelta: { x: number, y: number }, mouseSpeed: number, factor = 1) => {
  // Calculate base movement from mouse position
  const baseX = (mouseX - window.innerWidth / 2) / (window.innerWidth / 2) * factor;
  const baseY = (mouseY - window.innerHeight / 2) / (window.innerHeight / 2) * factor;
  
  // Add delta influence for more responsive movement
  const deltaX = mouseDelta.x * 0.05 * factor;
  const deltaY = mouseDelta.y * 0.05 * factor;
  
  // Add speed-based scaling
  const speedFactor = 1 + (mouseSpeed * 0.0005);
  
  return {
    x: (baseX + deltaX) * speedFactor,
    y: (baseY + deltaY) * speedFactor,
    scale: 1 + (mouseSpeed * 0.0002), // Subtle scaling based on mouse speed
    rotate: mouseDelta.x * 0.02 * factor // Slight rotation based on horizontal movement
  };
};

// Dynamic parallax effect based on mouse position and speed
export const dynamicParallax = (mouseX: number, mouseY: number, mouseDelta: { x: number, y: number }, depth = 1) => {
  // Calculate normalized mouse position (0-1)
  const normalizedX = mouseX / window.innerWidth;
  const normalizedY = mouseY / window.innerHeight;
  
  // Map to movement range with depth factor
  const moveX = (normalizedX - 0.5) * depth * -50; // Invert for natural parallax
  const moveY = (normalizedY - 0.5) * depth * -50;
  
  // Add subtle rotation based on delta
  const rotateX = mouseDelta.y * -0.02 * depth;
  const rotateY = mouseDelta.x * 0.02 * depth;
  
  return {
    x: moveX,
    y: moveY,
    rotateX,
    rotateY,
    perspective: 1000
  };
};

// Enhanced floating element animation with mouse reactivity
export const floatingElementAnimation = (mouseX: number, mouseY: number, mouseDelta: { x: number, y: number }, mouseSpeed: number, index = 0) => {
  // Calculate normalized mouse position
  const normalizedX = mouseX / window.innerWidth;
  const normalizedY = mouseY / window.innerHeight;
  
  // Calculate directional influence based on index for varied movement
  const directionX = index % 2 === 0 ? 1 : -1;
  const directionY = index % 3 === 0 ? 1 : -1;
  
  // Base animation properties with varied timings based on index
  const baseProps = {
    y: [0, 10 + (index * 5) * directionY, 0],
    rotate: index % 2 === 0 ? 360 : -360,
    scale: [1, 1.05 + (index * 0.02), 1],
  };
  
  // Mouse reactivity with varied intensity based on index
  // Higher indices = more dramatic movement
  const reactiveProps = {
    x: normalizedX * 50 * directionX + mouseDelta.x * (index + 1) * 0.8,
    filter: `blur(${mouseSpeed * 0.02 * (index + 1)}px)`
  };
  
  return {
    ...baseProps,
    ...reactiveProps
  };
};

// Enhanced cursor spotlight effect that follows mouse
export const enhancedCursorSpotlight = (mouseX: number, mouseY: number, mouseSpeed: number) => {
  const size = 300 + mouseSpeed * 2; // Dynamic size based on speed
  const opacity = 0.15 - mouseSpeed * 0.0005; // Fade with higher speeds
  
  return {
    background: `radial-gradient(circle ${size}px at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, ${opacity}) 0%, rgba(255, 255, 255, 0) 70%)`
  };
};

// Enhanced mouse tracking animation
export const mouseTracker = (mouseX: number, mouseY: number, factor = 1) => ({
  x: (mouseX - window.innerWidth / 2) / (window.innerWidth / 2) * factor,
  y: (mouseY - window.innerHeight / 2) / (window.innerHeight / 2) * factor
});

// Mouse parallax for container
export const mouseParallaxContainer: Variants = {
  hover: {
    perspective: 1000
  }
};

// Mouse parallax for children
export const mouseParallaxChild = (depth: number = 10): Variants => ({
  hover: ({ clientX, clientY, offsetWidth, offsetHeight }: any) => {
    const x = (clientX - offsetWidth / 2) / depth;
    const y = (clientY - offsetHeight / 2) / depth;
    
    return {
      x,
      y
    };
  }
});

// Enhanced magic cursor animation with hover and active states
export const magicCursor = {
  default: {
    scale: 1,
    borderColor: "rgba(99, 102, 241, 0.6)",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  hover: {
    scale: 1.5,
    borderColor: "rgba(99, 102, 241, 0)",
    backgroundColor: "rgba(99, 102, 241, 0.2)"
  },
  active: {
    scale: 0.8,
    borderColor: "rgba(99, 102, 241, 0.8)",
    backgroundColor: "rgba(99, 102, 241, 0.3)"
  }
};

// Mouse position based 3D rotation
export const mouse3DRotation = (mouseX: number, mouseY: number, sensitivity = 10) => {
  // Normalize mouse position to -1 to 1 range
  const normalizedX = (mouseX / window.innerWidth) * 2 - 1;
  const normalizedY = (mouseY / window.innerHeight) * 2 - 1;
  
  return {
    rotateX: -normalizedY * sensitivity,
    rotateY: normalizedX * sensitivity,
    perspective: 1000
  };
};

// Mouse follow animation for floating elements
export const mouseFollow = (mouseX: number, mouseY: number, delay = 0, intensity = 20) => {
  const normalizedX = (mouseX / window.innerWidth) * 2 - 1;
  const normalizedY = (mouseY / window.innerHeight) * 2 - 1;
  
  return {
    x: normalizedX * intensity,
    y: normalizedY * intensity
  };
};

// Cursor spotlight effect (radial gradient following mouse)
export const cursorSpotlight = (mouseX: number, mouseY: number) => ({
  background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)`
});

// Slide in from right
export const slideRight: Variants = {
  hidden: { 
    x: 60, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { 
    x: -60, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Pulse animation
export const pulse: Variants = {
  hidden: { 
    scale: 1 
  },
  visible: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Button hover animation
export const buttonHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
  },
  hover: {
    y: -3,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    y: 0,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  }
};

// Page transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.15
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Modal animation
export const modalAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: {
      duration: 0.3,
      ease: [0.36, 0, 0.66, -0.56]
    }
  }
};

// Overlay animation
export const overlayAnimation: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

// Hover card animation
export const hoverCardAnimation: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// List item animation for staggering entries
export const listItemAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Reveal text animation for headings
export const revealText: Variants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Animate individual letters
export const letterAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: 90
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: custom * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Fancy button animations
export const fancyButtonAnimation: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 20px rgba(79, 70, 229, 0.15)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(79, 70, 229, 0.25)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 0 0 rgba(79, 70, 229, 0)",
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  }
};

// Rotate animation
export const rotateAnimation: Variants = {
  hidden: {
    rotate: -5,
    opacity: 0
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Enhanced 3D tilt card animation with mouse position
export const tiltCardAnimation = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: {
    rotateX: (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distFromCenter = (e.clientY - centerY) / (rect.height / 2);
      return -distFromCenter * 10; // 10 degrees max rotation
    },
    rotateY: (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distFromCenter = (e.clientX - centerX) / (rect.width / 2);
      return distFromCenter * 10; // 10 degrees max rotation
    },
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// New mouse attraction animation
export const mouseAttraction = (mouseX: number, mouseY: number, elementX: number, elementY: number, attraction = 0.2, maxDistance = 300) => {
  // Calculate distance between mouse and element
  const dx = mouseX - elementX;
  const dy = mouseY - elementY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // If distance is less than maxDistance, apply attraction
  if (distance < maxDistance) {
    const factor = (1 - distance / maxDistance) * attraction;
    return {
      x: dx * factor,
      y: dy * factor,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200
      }
    };
  }
  
  // Otherwise, return to original position
  return {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200
    }
  };
};

// Cursor variants for interactive elements
export const cursorVariants = {
  default: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "2px solid rgba(99, 102, 241, 0.8)",
    mixBlendMode: "difference",
    zIndex: 1000,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 150,
      mass: 0.5
    }
  },
  hover: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    border: "2px solid rgba(99, 102, 241, 0.5)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150
    }
  },
  text: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(99, 102, 241, 0.05)",
    border: "2px solid rgba(99, 102, 241, 0.3)",
    mixBlendMode: "normal",
    zIndex: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(99, 102, 241, 0.15)",
    border: "2px solid rgba(99, 102, 241, 0.5)",
    mixBlendMode: "difference",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150
    }
  }
};
