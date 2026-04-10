import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PawPrint {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);
  const [pawCounter, setPawCounter] = useState(0);

  useEffect(() => {
    let lastPawTime = 0;
    const pawInterval = 150; // Add paw print every 150ms

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastPawTime > pawInterval) {
        lastPawTime = now;
        const newPaw = {
          id: pawCounter,
          x: e.clientX,
          y: e.clientY,
        };
        
        setPawPrints((prev) => [...prev, newPaw]);
        setPawCounter((c) => c + 1);

        // Remove paw print after 1 second
        setTimeout(() => {
          setPawPrints((prev) => prev.filter((p) => p.id !== newPaw.id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pawCounter]);

  return (
    <>
      {/* Bone Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bone shape */}
          <g filter="url(#glow)">
            {/* Left circle */}
            <circle cx="8" cy="16" r="4" fill="#4FE3D6" />
            {/* Right circle */}
            <circle cx="24" cy="16" r="4" fill="#4FE3D6" />
            {/* Middle bar */}
            <rect x="8" y="14" width="16" height="4" fill="#4FE3D6" />
            {/* Top notches */}
            <rect x="10" y="12" width="12" height="2" rx="1" fill="#4FE3D6" />
            {/* Bottom notches */}
            <rect x="10" y="18" width="12" height="2" rx="1" fill="#4FE3D6" />
          </g>
          <defs>
            <filter id="glow" x="0" y="8" width="32" height="16">
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </motion.div>

      {/* Paw Print Trail */}
      <AnimatePresence>
        {pawPrints.map((paw, index) => (
          <motion.div
            key={paw.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: 0.4, 
              scale: 1,
              rotate: index % 2 === 0 ? -15 : 15
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              left: paw.x - 20,
              top: paw.y - 20,
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                {/* Main pad */}
                <ellipse cx="20" cy="28" rx="6" ry="7" fill="#4FE3D6" />
                {/* Toe pads */}
                <ellipse cx="12" cy="18" rx="4" ry="5" fill="#4FE3D6" />
                <ellipse cx="20" cy="14" rx="4" ry="5" fill="#4FE3D6" />
                <ellipse cx="28" cy="18" rx="4" ry="5" fill="#4FE3D6" />
                <ellipse cx="33" cy="24" rx="3.5" ry="4" fill="#4FE3D6" />
              </g>
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
