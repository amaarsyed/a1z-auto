import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-a1z-blue/5 skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-a1z-blue font-heading font-bold text-lg tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Ready for Premium Service?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Give us a call to request a quote. We will verify the details and get you scheduled quickly.
            </p>

            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-3 rounded-full bg-a1z-blue hover:bg-blue-600 px-8 py-4 text-white font-heading font-bold text-lg transition-colors shadow-[0_0_20px_rgba(0,123,255,0.35)]"
            >
              <Phone size={20} />
              Call to Request a Quote
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5">
              <div className="w-11 h-11 bg-neutral-800 rounded-lg flex items-center justify-center text-a1z-blue mb-4">
                <Phone size={22} />
              </div>
              <h4 className="text-white font-heading font-semibold text-lg mb-1">Phone</h4>
              <p className="text-gray-400">(555) 123-4567</p>
              <p className="text-gray-500 text-sm">Mon-Fri 8am - 6pm</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5">
              <div className="w-11 h-11 bg-neutral-800 rounded-lg flex items-center justify-center text-a1z-blue mb-4">
                <Mail size={22} />
              </div>
              <h4 className="text-white font-heading font-semibold text-lg mb-1">Email</h4>
              <p className="text-gray-400">bookings@a1zautocare.ca</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5">
              <div className="w-11 h-11 bg-neutral-800 rounded-lg flex items-center justify-center text-a1z-blue mb-4">
                <MapPin size={22} />
              </div>
              <h4 className="text-white font-heading font-semibold text-lg mb-1">Service Area</h4>
              <p className="text-gray-400">Greater Toronto Area & Surrounding Regions</p>
              <p className="text-gray-500 text-sm">We come to your home or office</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;