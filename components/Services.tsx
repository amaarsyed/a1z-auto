import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Disc, Wrench, Sparkles, Clock } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Regular Maintenance',
    description: 'Scheduled check-ups to keep your vehicle running smoothly and efficiently all year round.',
    price: '',
    icon: Sparkles,
  },
  {
    id: '2',
    title: 'Diagnostic Services',
    description: 'Advanced troubleshooting to identify issues quickly and accurately before they become major problems.',
    price: '',
    icon: Droplets,
  },
  {
    id: '3',
    title: 'Brake Services',
    description: 'Comprehensive brake inspections and pad replacements to ensure your safety on the road.',
    price: '',
    icon: Shield,
  },
  {
    id: '4',
    title: 'Tire Services',
    description: 'Complete tire care including pressure checks, rotations, and tread inspections.',
    price: '',
    icon: Disc,
  },
  {
    id: '5',
    title: 'Fluid Checks',
    description: 'Comprehensive inspection and top-up of all essential vehicle fluids.',
    price: '',
    icon: Wrench,
  },
  {
    id: '6',
    title: '& Checks & Much More!',
    description: 'We offer a wide range of additional autocare services tailored to your specific needs.',
    price: '',
    icon: Clock,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-a1z-blue font-display font-bold text-lg tracking-widest uppercase mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium Care For Your Vehicle</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">We use only the highest quality products and techniques to ensure your vehicle runs its absolute best.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-neutral-800/50 p-8 border border-white/5 hover:border-a1z-blue/50 transition-colors group rounded-xl"
            >
              <div className="w-14 h-14 bg-neutral-700/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-a1z-blue group-hover:text-white transition-colors text-a1z-blue">
                <service.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;