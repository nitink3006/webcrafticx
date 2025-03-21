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
      duration: 0.5,  // Reduced from 0.7s
      ease: [0.25, 1, 0.35, 1] 
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
      duration: 0.5,  // Reduced from 0.7s
      ease: [0.25, 1, 0.35, 1]
    }
  }
};

// Staggered fade up for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,  // Faster stagger effect
      delayChildren: 0.2
    }
  }
};

// Mouse tracking animation
export const mouseTracker = (mouseX: number, mouseY: number, factor = 1) => ({
  x: (mouseX - 0.5) * factor,
  y: (mouseY - 0.5) * factor,
  transition: {
    type: "spring",
    damping: 8,  // Reduced from 15 to 8 for snappier response
    stiffness: 200, // Increased from 150 to 200 for quicker reaction
    mass: 0.05
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
        stiffness: 100, // Increased stiffness
        damping: 10, // Lower damping for smooth feel
        mass: 0.1
      }
    };
  }
});

// Magic cursor animation
export const magicCursor = {
  default: {
    scale: 1,
    borderColor: "rgba(99, 102, 241, 0.6)", // indigo-500 with opacity
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
  }
};

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

// 3D tilt card animation
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
