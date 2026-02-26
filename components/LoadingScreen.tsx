import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const particles = [
  { left: '8%', delay: 0, duration: 3.5, size: 2, startY: 60 },
  { left: '15%', delay: 0.4, duration: 4, size: 3, startY: 70 },
  { left: '25%', delay: 0.1, duration: 3, size: 2, startY: 80 },
  { left: '35%', delay: 0.7, duration: 4.5, size: 4, startY: 65 },
  { left: '45%', delay: 0.3, duration: 3.2, size: 2, startY: 75 },
  { left: '55%', delay: 0.6, duration: 3.8, size: 3, startY: 55 },
  { left: '65%', delay: 0.2, duration: 4.2, size: 2, startY: 85 },
  { left: '75%', delay: 0.5, duration: 3.5, size: 3, startY: 60 },
  { left: '85%', delay: 0.8, duration: 4, size: 2, startY: 70 },
  { left: '92%', delay: 0.15, duration: 3.6, size: 3, startY: 78 },
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Pulsing radial blue glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background:
            'radial-gradient(circle, rgba(0,123,255,0.15) 0%, rgba(0,123,255,0.05) 40%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: [0, 0.8, 0.5, 0.8], scale: [0.3, 1, 0.85, 1] }}
        transition={{ delay: 0.3, duration: 3.5, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: '#007bff',
          }}
          initial={{ y: `${p.startY}vh`, opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.5, 0] }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      ))}

      {/* Logo + underline with scale-bounce entrance & scale-up exit */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.03, 1, 1, 1.15],
          opacity: [0, 1, 1, 1, 1],
        }}
        transition={{
          duration: 4.3,
          times: [0, 0.12, 0.16, 0.81, 1],
          ease: 'easeInOut',
        }}
      >
        <div className="relative">
          {/* Glow aura behind the "1" */}
          <motion.div
            className="absolute z-0 pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-15%, -55%)',
              width: 100,
              height: 100,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(0,123,255,0.5) 0%, transparent 70%)',
              filter: 'blur(18px)',
            }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: [0, 0.9, 0.45, 0.9],
              scale: [0.3, 1.2, 0.9, 1.2],
            }}
            transition={{ delay: 1.8, duration: 2.5, repeat: Infinity }}
          />

          <svg
            width="300"
            height="120"
            viewBox="0 0 300 120"
            className="relative z-10 w-full max-w-sm md:max-w-xl h-auto overflow-visible"
          >
            <motion.text
              x="10"
              y="90"
              fontFamily="Orbitron, sans-serif"
              fontSize="100"
              fontWeight="900"
              fontStyle="italic"
              stroke="#ffffff"
              strokeWidth="2"
              fill="transparent"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: 0, fill: '#ffffff' }}
              transition={{
                strokeDashoffset: { duration: 2, ease: 'easeInOut' },
                fill: { duration: 0.5, delay: 1.5 },
              }}
            >
              A
            </motion.text>

            <motion.text
              x="110"
              y="90"
              fontFamily="Orbitron, sans-serif"
              fontSize="100"
              fontWeight="900"
              fontStyle="italic"
              stroke="#007bff"
              strokeWidth="2"
              fill="transparent"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: 0, fill: '#007bff' }}
              transition={{
                strokeDashoffset: {
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 0.3,
                },
                fill: { duration: 0.5, delay: 1.8 },
              }}
            >
              1
            </motion.text>

            <motion.text
              x="190"
              y="90"
              fontFamily="Orbitron, sans-serif"
              fontSize="100"
              fontWeight="900"
              fontStyle="italic"
              stroke="#ffffff"
              strokeWidth="2"
              fill="transparent"
              initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: 0, fill: '#ffffff' }}
              transition={{
                strokeDashoffset: {
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 0.6,
                },
                fill: { duration: 0.5, delay: 2.1 },
              }}
            >
              Z
            </motion.text>
          </svg>

          {/* Sweep flare across the logo */}
          <motion.div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 bottom-0 w-24"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
              }}
              initial={{ x: -96, opacity: 0 }}
              animate={{ x: 350, opacity: [0, 1, 1, 0] }}
              transition={{ delay: 2.1, duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
