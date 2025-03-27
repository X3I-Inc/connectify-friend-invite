
import { HTMLMotionProps } from "framer-motion";

// Animation variants for page elements
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Common animation props
export const defaultTransition = {
  type: "spring",
  stiffness: 350,
  damping: 25,
};

export const buttonHoverAnimation: HTMLMotionProps<"button"> = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: {
    scale: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
};
