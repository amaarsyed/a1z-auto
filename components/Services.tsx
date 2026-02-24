import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Disc, Droplets, Sparkles, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const topServices = [
    {
      icon: Disc,
      title: 'Tire change / tire rotations',
      description: 'On-site tire changes and rotations to keep traction, safety, and tire life at their best.',
    },
    {
      icon: Droplets,
      title: 'Oil change',
      description: 'Quality oil and filter changes to protect your engine and keep it running smoothly.',
    },
    {
      icon: Sparkles,
      title: 'Engine diagnostics',
      description: 'Professional diagnostics to quickly pinpoint check-engine lights and performance issues.',
    },
    {
      icon: Wrench,
      title: 'Body, trim & minor damage repair',
      description: 'Mobile repair for small dents, trim issues, and minor cosmetic damage.',
    },
  ];

  const otherServices = [
    'Brake service & repair (brakes, rotors, pads)',
    'Battery replacement',
    'Alternator replacement',
    'Starter replacement',
    'Electrical repair',
    'Steering & suspension repair',
    'Transmission service & repair',
    'Exhaust repair',
    'Timing belt replacement',
    'Air & cabin filter replacement',
    'Engine air filter replacement',
    'Paint correction',
    'Tint & wrap removal',
    'Flash tuning',
    'Pre-purchase inspections',
    'Safety inspections',
    'Routine maintenance',
    'Vehicle inspections',
    'Emergency roadside repairs',
    'Emergency breakdown service',
    'Urgent vehicle service',
    'Mobile mechanic service',
    'Mobile car servicing',
    'At-home vehicle service',
    'At-work vehicle service',
    'General auto repair',
  ];

  const [showAll, setShowAll] = useState(false);

  const steps = [
    {
      label: '01',
      title: 'Tell us what you need',
      body: 'Share your vehicle details, location, and what you are noticing. We match you with the right service.',
    },
    {
      label: '02',
      title: 'We come to you',
      body: 'Home, office, or gym — our mobile technicians arrive with the tools and parts needed for the job.',
    },
    {
      label: '03',
      title: 'You drive away confident',
      body: 'Clear communication, upfront expectations, and your vehicle ready for the road again.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-72 h-72 bg-a1z-blue/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Our Top Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
          >
            Many years of mobile auto repair experience have made us leaders in the industry.
            Our timely, high-quality services include but are not limited to:
          </motion.p>
        </div>

        {/* Top 4 services */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12 text-center">
          {topServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative p-4 md:p-6 group"
            >
              <div className="relative z-10">
                <div className="mx-auto w-14 h-14 rounded-full bg-a1z-blue/15 text-a1z-blue flex items-center justify-center mb-5 group-hover:bg-a1z-blue group-hover:text-white transition-colors">
                  <service.icon size={26} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dropdown with full service list */}
        <div className="mb-20 flex flex-col items-center">
          <button
            type="button"
            onClick={() => setShowAll((open) => !open)}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-a1z-blue bg-transparent text-sm font-medium text-a1z-blue hover:bg-a1z-blue/10 transition-colors"
          >
            <span>{showAll ? 'Hide full service list' : 'View all available services'}</span>
            <span
              className={`transition-transform text-base ${showAll ? 'rotate-180' : ''}`}
            >
              ˅
            </span>
          </button>

          {showAll && (
            <div className="mt-6 bg-neutral-800/70 border border-white/5 rounded-2xl p-6">
              <p className="text-sm text-gray-400 mb-4">
                In addition to our top four services, we offer a complete range of mobile autocare options:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-300">
                {otherServices.map((service) => (
                  <div key={service} className="flex gap-2 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-a1z-blue" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl border border-white/5 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-20 -right-16 h-40 w-40 rounded-full bg-a1z-blue/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-40 w-40 rounded-full bg-purple-900/20 blur-3xl" />

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="inline-flex items-center rounded-full bg-a1z-blue/10 px-4 py-1 text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-a1z-blue mb-3">
                Mobile, on your schedule
              </p>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
                How our mobile service works
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Skip the shop. We bring certified care directly to you with simple booking, clear communication,
                and no surprise downtime.
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 md:grid-cols-3 w-full md:w-auto">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col rounded-2xl bg-neutral-900/80 border border-white/5 px-4 py-4 md:px-5 md:py-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-a1z-blue/15 text-[0.7rem] font-mono font-semibold text-a1z-blue">
                      {step.label}
                    </div>
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;