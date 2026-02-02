import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center">
          <span className="font-display font-bold text-2xl italic text-white">
            A<span className="text-a1z-blue">1</span>Z
          </span>
          <span className="ml-3 text-gray-500 text-sm border-l border-gray-700 pl-3">
            Mobile Autocare
          </span>
        </div>

        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} A1Z Mobile Autocare. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-a1z-blue transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-a1z-blue transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-a1z-blue transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;