import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 3.5, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Animated SVG Logo */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <svg
          width="300"
          height="120"
          viewBox="0 0 300 120"
          className="w-full max-w-sm md:max-w-xl h-auto overflow-visible"
        >
          <motion.text
            x="10" y="90"
            fontFamily="Orbitron, sans-serif"
            fontSize="100"
            fontWeight="900"
            fontStyle="italic"
            stroke="#ffffff"
            strokeWidth="2"
            fill="transparent"
            initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
            animate={{ strokeDashoffset: 0, fill: "#ffffff" }}
            transition={{
              strokeDashoffset: { duration: 2, ease: "easeInOut" },
              fill: { duration: 0.5, delay: 1.5 }
            }}
          >
            A
          </motion.text>

          <motion.text
            x="110" y="90"
            fontFamily="Orbitron, sans-serif"
            fontSize="100"
            fontWeight="900"
            fontStyle="italic"
            stroke="#007bff"
            strokeWidth="2"
            fill="transparent"
            initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
            animate={{ strokeDashoffset: 0, fill: "#007bff" }}
            transition={{
              strokeDashoffset: { duration: 2, ease: "easeInOut", delay: 0.3 },
              fill: { duration: 0.5, delay: 1.8 }
            }}
          >
            1
          </motion.text>

          <motion.text
            x="190" y="90"
            fontFamily="Orbitron, sans-serif"
            fontSize="100"
            fontWeight="900"
            fontStyle="italic"
            stroke="#ffffff"
            strokeWidth="2"
            fill="transparent"
            initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
            animate={{ strokeDashoffset: 0, fill: "#ffffff" }}
            transition={{
              strokeDashoffset: { duration: 2, ease: "easeInOut", delay: 0.6 },
              fill: { duration: 0.5, delay: 2.1 }
            }}
          >
            Z
          </motion.text>
        </svg>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          transition={{ duration: 1, delay: 2.5, ease: "circOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-a1z-blue to-transparent mt-4"
        />

        <motion.p
          className="mt-4 text-gray-400 font-sans tracking-[0.5em] uppercase text-sm md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          Mobile Autocare
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;