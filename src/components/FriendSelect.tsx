
import { useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Friend, friends } from "@/utils/friends";
import { cn } from "@/lib/utils";

interface FriendSelectProps {
  onSelect: (friend: Friend | null) => void;
  value: Friend | null;
}

const FriendSelect = ({ onSelect, value }: FriendSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(value);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleSelect = (friend: Friend) => {
    setSelectedFriend(friend);
    onSelect(friend);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between",
          "px-4 py-3 rounded-xl border bg-background",
          "text-left focus:outline-none focus:ring-2 focus:ring-primary",
          "transition-all duration-200",
          isOpen ? "shadow-md border-primary/30" : "hover:border-primary/20"
        )}
      >
        <div className="flex items-center gap-3">
          {selectedFriend ? (
            <>
              <div className="relative h-8 w-8 overflow-hidden rounded-full border">
                <img
                  src={selectedFriend.avatar}
                  alt={selectedFriend.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span>{selectedFriend.name}</span>
            </>
          ) : (
            <span className="text-muted-foreground">Select a friend</span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 mt-1 w-full rounded-xl border",
              "bg-background/80 backdrop-blur-md shadow-xl",
              "max-h-60 overflow-auto"
            )}
          >
            <ul className="py-1">
              {friends.map((friend) => (
                <motion.li
                  key={friend.id}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                  whileTap={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  onClick={() => handleSelect(friend)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 cursor-pointer",
                    selectedFriend?.id === friend.id && "bg-primary/5"
                  )}
                >
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span>{friend.name}</span>
                  {selectedFriend?.id === friend.id && (
                    <Check className="ml-auto h-4 w-4 text-primary" />
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FriendSelect;
