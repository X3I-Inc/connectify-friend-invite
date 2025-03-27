
import { motion } from "framer-motion";
import { toast } from "sonner";
import Header from "@/components/Header";
import InviteForm from "@/components/InviteForm";
import ThemeButton from "@/components/ui/ThemeButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <Header />
      <ThemeButton />
      
      <main className="flex-1 container max-w-5xl mx-auto px-4 pt-28 pb-16 flex flex-col">
        <div className="flex flex-col items-center justify-between h-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3 mb-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-full px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-300 inline-block"
            >
              Connect with friends
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
            >
              Send an invitation
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground max-w-md mx-auto"
            >
              Quickly invite your friends to hang out, grab coffee, or just catch up.
            </motion.p>
          </motion.div>
          
          <InviteForm />
        </div>
      </main>
      
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="py-6 border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="container max-w-5xl mx-auto px-4 text-center text-sm text-muted-foreground">
          Invite App — Connect with friends seamlessly
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
