
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    
    // Apply the initial theme
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-purple-100 dark:border-purple-900"
    >
      {isDark ? 
        <Sun size={20} className="text-yellow-500" /> : 
        <Moon size={20} className="text-purple-600" />
      }
    </motion.button>
  );
};

export default ThemeButton;
