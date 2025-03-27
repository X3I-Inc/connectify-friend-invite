
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Friend } from "@/utils/friends";
import FriendSelect from "./FriendSelect";
import { cn } from "@/lib/utils";
import { buttonHoverAnimation } from "@/utils/animations";
import { useIsMobile } from "@/hooks/use-mobile";

interface FormData {
  friend: Friend | null;
  time: string;
  place: string;
  comment: string;
}

const InviteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    friend: null,
    time: "",
    place: "",
    comment: "",
  });
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.friend) {
      toast.error("Please select a friend to invite");
      return;
    }
    
    if (!formData.time) {
      toast.error("Please specify a time for the meetup");
      return;
    }
    
    if (!formData.place) {
      toast.error("Please specify a place for the meetup");
      return;
    }
    
    // Form is valid, show success toast
    toast.success(`Invitation sent to ${formData.friend.name}!`);
    
    // Reset form
    setFormData({
      friend: null,
      time: "",
      place: "",
      comment: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-full flex flex-col items-center justify-between h-full"
    >
      <motion.div 
        className="flex flex-col items-center justify-center"
      >
        <motion.button
          type="button"
          onClick={() => {
            if (!formData.friend) {
              toast.error("Please select a friend to invite");
              return;
            }
            
            if (!formData.time) {
              toast.error("Please specify a time for the meetup");
              return;
            }
            
            if (!formData.place) {
              toast.error("Please specify a place for the meetup");
              return;
            }
            
            // Form is valid, show success toast
            toast.success(`Invitation sent to ${formData.friend.name}!`);
            
            // Reset form
            setFormData({
              friend: null,
              time: "",
              place: "",
              comment: "",
            });
          }}
          className={cn(
            "w-32 h-32 rounded-full flex items-center justify-center text-xl font-bold text-white",
            "bg-gradient-to-r from-pink-500 to-orange-500 shadow-lg shadow-pink-500/25",
            "hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
          )}
          {...buttonHoverAnimation}
        >
          Invite
        </motion.button>
      </motion.div>
      
      <form id="invite-form" onSubmit={handleSubmit} className="w-full max-w-lg mt-6 space-y-3">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="text-sm font-medium mb-1 text-muted-foreground">Who do you want to meet?</p>
            <FriendSelect 
              value={formData.friend} 
              onSelect={(friend) => setFormData((prev) => ({ ...prev, friend }))} 
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={cn(
                  "w-full pl-9 pr-2 py-2 rounded-xl border bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary",
                  "transition-all duration-200 text-sm"
                )}
                placeholder="Select time"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className={cn(
                  "w-full pl-9 pr-2 py-2 rounded-xl border bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary",
                  "transition-all duration-200 text-sm"
                )}
                placeholder="Where?"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute left-3 top-3">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </div>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={2}
              className={cn(
                "w-full pl-9 pr-2 py-2 rounded-xl border bg-background",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "transition-all duration-200 text-sm"
              )}
              placeholder="Any additional comments?"
            />
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default InviteForm;
