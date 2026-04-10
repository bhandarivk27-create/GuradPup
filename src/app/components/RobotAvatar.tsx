import { motion } from "motion/react";
import { Eye } from "lucide-react";
import { useState, useEffect } from "react";

export function RobotAvatar() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Track mouse for eye following
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B89068]/30 via-[#F6EFE5]/40 to-transparent rounded-full blur-2xl scale-150" />
      
      {/* Robot body */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [-1, 1, -1]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-64 h-64"
      >
        {/* Main body */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F6EFE5] rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-4 border-[#1C1C1C]/5">
          
          {/* Antenna */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-[#B89068] rounded-full"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4CAF50] rounded-full shadow-[0_0_20px_rgba(76,175,80,0.6)]"
            />
          </motion.div>

          {/* Eyes */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-8">
            <EyeComponent mousePosition={mousePosition} isBlinking={isBlinking} />
            <EyeComponent mousePosition={mousePosition} isBlinking={isBlinking} />
          </div>

          {/* Nose/Camera lens */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-32 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#B89068] to-[#8a6850] rounded-full shadow-inner"
          >
            <div className="absolute inset-2 bg-[#1C1C1C] rounded-full">
              <div className="absolute inset-1 bg-gradient-to-br from-blue-400/40 to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Smile */}
          <motion.div
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-44 left-1/2 -translate-x-1/2"
          >
            <svg width="80" height="40" viewBox="0 0 80 40">
              <path
                d="M 10 10 Q 40 30 70 10"
                stroke="#1C1C1C"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </motion.div>

          {/* Paw prints decoration */}
          <div className="absolute top-4 right-4 opacity-20">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <ellipse cx="10" cy="14" rx="3" ry="3.5" fill="#B89068" />
              <ellipse cx="6" cy="9" rx="2" ry="2.5" fill="#B89068" />
              <ellipse cx="10" cy="7" rx="2" ry="2.5" fill="#B89068" />
              <ellipse cx="14" cy="9" rx="2" ry="2.5" fill="#B89068" />
            </svg>
          </div>
        </div>

        {/* Base/shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-[#1C1C1C]/10 rounded-full blur-md" />
      </motion.div>
    </motion.div>
  );
}

interface EyeComponentProps {
  mousePosition: { x: number; y: number };
  isBlinking: boolean;
}

function EyeComponent({ mousePosition, isBlinking }: EyeComponentProps) {
  // Calculate pupil position based on mouse
  const eyeX = mousePosition.x / window.innerWidth * 6 - 3;
  const eyeY = mousePosition.y / window.innerHeight * 6 - 3;

  return (
    <motion.div
      className="relative w-12 h-12 bg-white rounded-full shadow-inner border-2 border-[#1C1C1C]/10"
      animate={{
        scaleY: isBlinking ? 0.1 : 1,
      }}
      transition={{ duration: 0.1 }}
    >
      {!isBlinking && (
        <motion.div
          animate={{
            x: eyeX,
            y: eyeY,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#1C1C1C] rounded-full"
        >
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
        </motion.div>
      )}
    </motion.div>
  );
}
