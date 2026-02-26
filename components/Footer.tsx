import React from 'react';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = ['Services', 'About', 'Contact'] as const;

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative bg-neutral-950 overflow-hidden"
    >
      {/* Decorative blue glow blob */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-a1z-blue/10 blur-3xl" />

      {/* Blue gradient divider */}
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-a1z-blue to-transparent"
        style={{ boxShadow: '0 0 15px rgba(0,123,255,0.3)' }}
      />

      {/* Upper section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 -- Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display font-bold text-3xl italic tracking-tighter text-white leading-none">
                A<span className="text-a1z-blue">1</span>Z
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
                alt="Canadian Flag"
                className="h-[1.25rem] w-auto rounded-sm shadow-sm object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional mobile auto service across the GTA. We bring certified care directly to your driveway.
            </p>
          </div>

          {/* Column 2 -- Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-1">Quick Links</h4>
            <div className="h-0.5 w-8 bg-a1z-blue rounded-full mb-5" />
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-a1z-blue transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 -- Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-1">Get In Touch</h4>
            <div className="h-0.5 w-8 bg-a1z-blue rounded-full mb-5" />
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-a1z-blue transition-colors text-sm group"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-a1z-blue group-hover:bg-a1z-blue/15 transition-colors">
                    <Phone size={15} />
                  </span>
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:bookings@a1zautocare.ca"
                  className="flex items-center gap-3 text-gray-400 hover:text-a1z-blue transition-colors text-sm group"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-a1z-blue group-hover:bg-a1z-blue/15 transition-colors">
                    <Mail size={15} />
                  </span>
                  bookings@a1zautocare.ca
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-a1z-blue">
                  <MapPin size={15} />
                </span>
                Greater Toronto Area
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} A1Z Mobile Autocare. All rights reserved.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-a1z-blue transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
