import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Hero: React.FC = () => {
  const rotatingMessages = [
    'Proudly serving Toronto & the GTA.',
    'We bring the auto shop to your driveway.',
    'Professional maintenance, oil changes, and tire swaps without you leaving home.',
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % rotatingMessages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [rotatingMessages.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/GIF with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/z0jcjpmnqhrmw0cwj3vt0r7vn8_result_ (1).gif"
          alt="Mechanic working under the hood"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 italic tracking-tighter leading-[1.1]">
            EXPERT CAR CARE<br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-a1z-blue to-white pb-1 pr-2">AT YOUR DOOR</span>
          </h1>

          <div className="mt-4 min-h-[3.5rem] md:min-h-[3rem] max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.p
                key={rotatingMessages[messageIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="text-lg md:text-xl text-gray-300 font-light"
              >
                {rotatingMessages[messageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center items-center">
            <a
              href="#services"
              className="group relative px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black text-white font-heading font-bold text-lg rounded-none skew-x-[-12deg] transition-all"
            >
              <span className="block skew-x-[12deg]">
                VIEW SERVICES
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;