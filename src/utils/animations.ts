
import { Variants } from "framer-motion";

// Fade up animation
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
      duration: 0.6,
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Slide in from right
export const slideRight: Variants = {
  hidden: { 
    x: 40, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { 
    x: -40, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
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
      duration: 0.6,
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
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
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
    y: -2,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
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
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Modal animation
export const modalAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
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
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};
