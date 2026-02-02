import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-a1z-blue/5 skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-a1z-blue font-display font-bold text-lg tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready for Premium Service?</h3>
            <p className="text-gray-400 mb-10">
              Booking with A1Z is simple. Fill out the form or give us a call. We'll verify the details and show up at your preferred time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-a1z-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Phone</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-a1z-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email</h4>
                  <p className="text-gray-400">bookings@a1zautocare.ca</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-a1z-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Service Area</h4>
                  <p className="text-gray-400">Greater Toronto Area & Surrounding Regions</p>
                  <p className="text-gray-500 text-sm">We come to your home or office</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h4 className="text-2xl font-bold text-white mb-6">Request a Quote</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-a1z-blue transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-a1z-blue transition-colors" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Vehicle Make & Model</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-a1z-blue transition-colors" placeholder="e.g. 2022 Honda Civic" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Service Needed</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-a1z-blue transition-colors">
                  <option>General Maintenance</option>
                  <option>Diagnostic Services</option>
                  <option>Brake Service</option>
                  <option>Tire Swap</option>
                  <option>Oil Change</option>
                  <option>Fluid Check</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-a1z-blue transition-colors" placeholder="Any specific concerns?"></textarea>
              </div>

              <button className="w-full bg-a1z-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors text-lg uppercase tracking-wider">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;