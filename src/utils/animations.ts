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

// Enhanced mouse tracking animation
export const mouseTracker = (mouseX: number, mouseY: number, factor = 1) => ({
  x: (mouseX - window.innerWidth / 2) / (window.innerWidth / 2) * factor,
  y: (mouseY - window.innerHeight / 2) / (window.innerHeight / 2) * factor,
  transition: {
    type: "spring",
    damping: 15,
    stiffness: 150,
    mass: 0.1
  }
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
      y,
      transition: {
        type: "spring",
        stiffness: 75,
        mass: 0.5
      }
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
    backgroundColor: "rgba(99, 102, 241, 0.2)",
    transition: {
      scale: { duration: 0.3 },
      borderColor: { duration: 0.3 },
      backgroundColor: { duration: 0.3 }
    }
  },
  active: {
    scale: 0.8,
    borderColor: "rgba(99, 102, 241, 0.8)",
    backgroundColor: "rgba(99, 102, 241, 0.3)",
    transition: {
      duration: 0.1
    }
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
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  };
};

// Mouse follow animation for floating elements
export const mouseFollow = (mouseX: number, mouseY: number, delay = 0, intensity = 20) => {
  const normalizedX = (mouseX / window.innerWidth) * 2 - 1;
  const normalizedY = (mouseY / window.innerHeight) * 2 - 1;
  
  return {
    x: normalizedX * intensity,
    y: normalizedY * intensity,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay
    }
  };
};

// Cursor spotlight effect (radial gradient following mouse)
export const cursorSpotlight = (mouseX: number, mouseY: number) => ({
  background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)`,
  transition: {
    type: "tween",
    duration: 0.2
  }
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
