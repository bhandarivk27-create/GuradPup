import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  onClose?: () => void;
  delay?: number;
}

export function ChatBubble({ message, onClose, delay = 0 }: ChatBubbleProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
        className="relative bg-white rounded-[20px] px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-2 border-[#1C1C1C]/5 max-w-[320px]"
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#1C1C1C] text-white rounded-full flex items-center justify-center hover:bg-[#2C2C2C] transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        )}
        
        <p className="text-[15px] text-[#1C1C1C] leading-relaxed">
          {message}
        </p>

        {/* Tail */}
        <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b-2 border-r-2 border-[#1C1C1C]/5 rotate-45" />
      </motion.div>
    </AnimatePresence>
  );
}