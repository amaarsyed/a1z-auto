import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);


  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-black ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <div className="relative">
                {/* Decorative separator */}
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-a1z-blue/50 to-transparent" />
                <Services />
              </div>
              <Contact />
            </main>
            <Footer />

          </motion.div>
        )}
      </div>
    </>
  );
};

export default App;