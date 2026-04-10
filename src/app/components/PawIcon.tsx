import { motion } from "motion/react";

interface PawIconProps {
  className?: string;
  size?: number;
  delay?: number;
}

export function PawIcon({ className = "", size = 24, delay = 0 }: PawIconProps) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <ellipse cx="12" cy="16.8" rx="3.6" ry="4.2" />
      <ellipse cx="7.2" cy="10.8" rx="2.4" ry="3" />
      <ellipse cx="12" cy="8.4" rx="2.4" ry="3" />
      <ellipse cx="16.8" cy="10.8" rx="2.4" ry="3" />
      <ellipse cx="19.8" cy="14.4" rx="2.1" ry="2.4" />
    </motion.svg>
  );
}
