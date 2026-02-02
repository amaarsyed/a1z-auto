import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Car Maintenance"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-a1z-blue/30 bg-a1z-blue/10 text-a1z-blue text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              Premium Mobile Autocare
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 italic tracking-tighter">
            EXPERT CAR CARE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-a1z-blue to-white">AT YOUR DOOR</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 font-light">
            We bring the auto shop to your driveway. Professional maintenance, oil changes, and tire swaps without you leaving home.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-a1z-blue hover:bg-blue-600 text-white font-bold text-lg rounded-none skew-x-[-12deg] transition-all hover:scale-105"
            >
              <span className="block skew-x-[12deg] flex items-center gap-2">
                BOOK NOW <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#services"
              className="group relative px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold text-lg rounded-none skew-x-[-12deg] transition-all"
            >
              <span className="block skew-x-[12deg]">
                VIEW SERVICES
              </span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-yellow-500">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <span className="text-white ml-2 font-medium">5.0 Star Rating (100+ Reviews)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;