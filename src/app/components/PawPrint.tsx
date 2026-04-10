import { motion } from "motion/react";

interface PawPrintProps {
  top: string;
  left: string;
  delay?: number;
  rotation?: number;
  size?: number;
}

export function PawPrint({ top, left, delay = 0, rotation = 0, size = 40 }: PawPrintProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotation }}
      animate={{ 
        opacity: [0, 0.06, 0.06],
        y: [0, -5, 0],
      }}
      transition={{
        opacity: { duration: 1.2, delay, ease: "easeInOut" },
        y: { duration: 5, delay: delay + 1, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute pointer-events-none"
      style={{ top, left }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="20" cy="28" rx="6" ry="7" fill="#4FE3D6" />
        <ellipse cx="12" cy="18" rx="4" ry="5" fill="#4FE3D6" />
        <ellipse cx="20" cy="14" rx="4" ry="5" fill="#4FE3D6" />
        <ellipse cx="28" cy="18" rx="4" ry="5" fill="#4FE3D6" />
        <ellipse cx="33" cy="24" rx="3.5" ry="4" fill="#4FE3D6" />
      </svg>
    </motion.div>
  );
}
