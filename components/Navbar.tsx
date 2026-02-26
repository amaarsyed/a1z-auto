import React, { useState } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        backgroundColor: "rgba(20, 20, 20, 0.95)",
        borderBottomColor: "rgba(0, 123, 255, 0.5)",
        boxShadow: "0 10px 30px -10px rgba(0, 123, 255, 0.3)"
      }}
      className="fixed w-full z-40 top-0 glass border-b border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => scrollToSection('hero')}>
            <span className="font-display font-bold text-3xl italic tracking-tighter text-white leading-none">
              A<span className="text-a1z-blue">1</span>Z
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
              alt="Canadian Flag"
              className="h-[1.25rem] w-auto rounded-sm shadow-sm object-contain self-center"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ scale: 1.1, color: "#007bff" }}
                  whileTap={{ scale: 0.95 }}
                  className="font-heading text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </motion.button>
              ))}
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-heading bg-a1z-blue hover:bg-blue-600 text-white px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 text-sm"
              >
                <Phone size={16} />
                (555) 123-4567
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-heading text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/5"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;