
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Settings, PanelLeft } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Invite" }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground 
                     hover:bg-accent transition-colors duration-200"
          >
            <PanelLeft size={20} />
          </motion.button>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg font-medium"
        >
          {title}
        </motion.h1>
        
        <motion.button
          whileHover={{ scale: 1.05, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground 
                   hover:bg-accent transition-colors duration-200"
          onClick={() => toast.info("Settings coming soon")}
        >
          <Settings size={20} />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
