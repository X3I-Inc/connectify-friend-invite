
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { Friend } from "@/utils/friends";
import FriendSelect from "./FriendSelect";
import { cn } from "@/lib/utils";
import { buttonHoverAnimation } from "@/utils/animations";

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
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="text-sm font-medium mb-2 text-muted-foreground">Who do you want to meet?</p>
            <FriendSelect 
              value={formData.friend} 
              onSelect={(friend) => setFormData((prev) => ({ ...prev, friend }))} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Clock className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="datetime-local"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={cn(
                "w-full pl-12 pr-4 py-3 rounded-xl border bg-background",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "transition-all duration-200"
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
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              className={cn(
                "w-full pl-12 pr-4 py-3 rounded-xl border bg-background",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "transition-all duration-200"
              )}
              placeholder="Where to meet?"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute left-4 top-4">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
            </div>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={3}
              className={cn(
                "w-full pl-12 pr-4 py-3 rounded-xl border bg-background",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "transition-all duration-200"
              )}
              placeholder="Any additional comments?"
            />
          </motion.div>
        </div>

        <motion.button
          type="submit"
          className={cn(
            "w-full py-4 rounded-xl font-medium text-white",
            "bg-primary shadow-lg shadow-primary/25",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            "transition-all duration-200"
          )}
          {...buttonHoverAnimation}
        >
          Invite
        </motion.button>
      </form>
    </motion.div>
  );
};

export default InviteForm;
