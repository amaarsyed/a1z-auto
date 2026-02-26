import React, { useEffect, useRef, useState } from 'react';
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  AlertTriangle,
  Battery,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cog,
  Disc,
  Droplets,
  Gauge,
  HelpCircle,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Truck,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';

const BADGE_STYLES: Record<string, string> = {
  'Most Popular': 'bg-a1z-blue/15 text-a1z-blue',
  'Same-Day': 'bg-emerald-500/15 text-emerald-400',
  'ASAP': 'bg-red-500/15 text-red-400',
  'Quick Job': 'bg-white/10 text-gray-300',
  'Most Requested': 'bg-a1z-blue/15 text-a1z-blue',
};

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

  const intentTabs = [
    {
      id: 'routine',
      label: 'Routine Care',
      services: [
        { icon: Droplets, title: 'Oil & Filter Change', description: 'Full synthetic or conventional oil swap with premium filters.', badge: 'Most Popular' },
        { icon: Disc, title: 'Tire Rotation / Seasonal Swap', description: 'Even out tire wear or switch to winter/summer rubber.', badge: 'Same-Day' },
        { icon: Shield, title: 'Brake Pad Inspection & Service', description: 'Check pad life, rotors, and calipers — replace what is needed.' },
        { icon: Wind, title: 'Air & Cabin Filter Replacement', description: 'Fresh filters for cleaner air and better engine breathing.', badge: 'Quick Job' },
        { icon: Gauge, title: 'Routine Maintenance Check', description: 'Multi-point inspection covering fluids, belts, and wear items.' },
        { icon: Battery, title: 'Battery Health Check & Replacement', description: 'Test your battery on the spot and swap it if it is failing.' },
      ],
    },
    {
      id: 'diagnostic',
      label: 'Something Feels Off',
      services: [
        { icon: Sparkles, title: 'Engine Diagnostics', description: 'Pinpoint check-engine lights and performance issues with pro-grade scanners.', badge: 'Most Requested' },
        { icon: Cog, title: 'Steering & Suspension Issues', description: 'Diagnose pulling, clunking, or rough rides from ball joints to shocks.' },
        { icon: Zap, title: 'Electrical System Troubleshooting', description: 'Track down shorts, dead accessories, and wiring gremlins.' },
        { icon: Cog, title: 'Transmission Problems', description: 'Slipping, hard shifts, or fluid leaks investigated and repaired.' },
        { icon: Wind, title: 'Exhaust & Emissions Repair', description: 'Fix loud exhaust, catalytic converter codes, and emissions failures.' },
        { icon: Clock, title: 'Timing Belt Replacement', description: 'Preventive replacement before a snap causes engine damage.' },
        { icon: Wrench, title: 'General Repair & Troubleshooting', description: 'Anything else that does not feel right — we will find it.' },
      ],
    },
    {
      id: 'emergency',
      label: 'I Need Help Now',
      services: [
        { icon: AlertTriangle, title: 'Roadside Breakdown Assistance', description: 'Stranded? We dispatch a tech to your exact location.', badge: 'ASAP' },
        { icon: AlertTriangle, title: 'Emergency Vehicle Service', description: 'Critical failures handled with urgency so you are not stuck.', badge: 'ASAP' },
        { icon: Truck, title: 'Mobile Mechanic', description: 'A fully equipped technician comes to wherever your vehicle is.', badge: 'Same-Day' },
        { icon: MapPin, title: 'At-Home / At-Work Service Call', description: 'We meet you at home or the office — no tow needed.', badge: 'Same-Day' },
      ],
    },
    {
      id: 'unsure',
      label: 'Not Sure?',
      services: [],
    },
  ];

  const notSureScenarios = [
    { icon: Car, title: "My car won't start or drive", description: 'Engine won\'t turn over, dead battery, or completely stuck.', targetTab: 'emergency' },
    { icon: HelpCircle, title: 'Something seems off while driving', description: 'Strange noises, warning lights, vibrations, or pulling.', targetTab: 'diagnostic' },
    { icon: Shield, title: 'I just want to keep my car healthy', description: 'Routine oil change, tire swap, or general check-up.', targetTab: 'routine' },
  ];

  const alsoAvailable = [
    'Pre-Purchase Inspection',
    'Safety Inspection',
    'Vehicle Inspection',
    'Paint Correction',
    'Tint & Wrap Removal',
    'Flash Tuning',
  ];

  const [activeTab, setActiveTab] = useState('routine');
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [maxDrag, setMaxDrag] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 30%'],
  });
  const beamScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

  useEffect(() => {
    const updateCarouselBounds = () => {
      const element = carouselRef.current;
      if (!element) return;
      const nextMaxDrag = Math.max(0, element.scrollWidth - element.clientWidth);
      setMaxDrag(nextMaxDrag);
    };

    updateCarouselBounds();
    window.addEventListener('resize', updateCarouselBounds);
    return () => window.removeEventListener('resize', updateCarouselBounds);
  }, []);

  useMotionValueEvent(x, 'change', (latest) => {
    if (maxDrag <= 0) {
      setActiveSlide(0);
      return;
    }
    const ratio = Math.min(1, Math.max(0, Math.abs(latest) / maxDrag));
    setActiveSlide(Math.round(ratio * (topServices.length - 1)));
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.35) {
      setActiveStep(0);
    } else if (latest < 0.7) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  });

  const goToSlide = (index: number) => {
    if (topServices.length <= 1 || maxDrag <= 0) {
      setActiveSlide(0);
      return;
    }

    const safeIndex = Math.max(0, Math.min(index, topServices.length - 1));
    const target = -(maxDrag * (safeIndex / (topServices.length - 1)));
    animate(x, target, { type: 'spring', stiffness: 280, damping: 36 });
    setActiveSlide(safeIndex);
  };

  const currentTab = intentTabs.find((t) => t.id === activeTab) ?? intentTabs[0];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
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
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
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

        {/* Top services carousel */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-400">Swipe through our most requested services</p>
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                className="h-9 w-9 rounded-full border border-white/10 bg-neutral-900/70 text-gray-200 hover:text-white hover:border-a1z-blue/50 transition-colors flex items-center justify-center"
                aria-label="Previous service"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                className="h-9 w-9 rounded-full border border-white/10 bg-neutral-900/70 text-gray-200 hover:text-white hover:border-a1z-blue/50 transition-colors flex items-center justify-center"
                aria-label="Next service"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div ref={carouselRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.08}
              style={{ x }}
              className="flex gap-4 cursor-grab active:cursor-grabbing pb-2"
            >
              {topServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="min-w-[88%] sm:min-w-[72%] lg:min-w-[32%] rounded-2xl border border-white/10 bg-neutral-900/75 p-6"
                >
                  <div className="w-14 h-14 rounded-full bg-a1z-blue/15 text-a1z-blue flex items-center justify-center mb-5">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {topServices.map((service, index) => (
              <button
                type="button"
                key={service.title}
                onClick={() => goToSlide(index)}
                aria-label={`Go to service ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-7 bg-a1z-blue' : 'w-2.5 bg-white/25 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        {/* ── Intent-based service breakdown ── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2"
            >
              What do you need help with?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-sm text-gray-400 max-w-2xl mx-auto"
            >
              Choose what fits and we'll handle the rest — right at your door.
            </motion.p>
          </div>

          {/* Pill tab bar */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide snap-x snap-mandatory md:justify-center md:flex-wrap">
            {intentTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-heading font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-a1z-blue text-white shadow-[0_0_16px_rgba(0,123,255,0.3)]'
                    : 'border border-white/15 text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              {activeTab === 'unsure' ? (
                /* "Not Sure?" guided scenarios */
                <div className="grid gap-4 md:grid-cols-3">
                  {notSureScenarios.map((scenario) => (
                    <button
                      key={scenario.targetTab}
                      type="button"
                      onClick={() => setActiveTab(scenario.targetTab)}
                      className="group flex flex-col items-start rounded-2xl border border-white/10 bg-neutral-900/70 p-6 text-left transition-all hover:border-a1z-blue/40 hover:shadow-[0_0_24px_rgba(0,123,255,0.12)]"
                    >
                      <div className="w-12 h-12 rounded-full bg-a1z-blue/15 text-a1z-blue flex items-center justify-center mb-4 group-hover:bg-a1z-blue group-hover:text-white transition-colors">
                        <scenario.icon size={22} />
                      </div>
                      <h4 className="text-base font-heading font-semibold text-white mb-1">{scenario.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">{scenario.description}</p>
                      <span className="mt-auto text-xs font-medium text-a1z-blue group-hover:underline">
                        Show me options &rarr;
                      </span>
                    </button>
                  ))}

                  <div className="md:col-span-3 mt-2 flex justify-center">
                    <a
                      href="tel:+15551234567"
                      className="inline-flex items-center gap-2 rounded-full border border-a1z-blue/30 bg-a1z-blue/10 px-6 py-3 text-sm font-medium text-a1z-blue hover:bg-a1z-blue/20 transition-colors"
                    >
                      <Phone size={16} />
                      Call us and we'll figure it out together
                    </a>
                  </div>
                </div>
              ) : (
                /* Service card grid */
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {currentTab.services.map((service) => (
                    <motion.div
                      key={service.title}
                      whileHover={{ y: -4 }}
                      className="group flex flex-col rounded-2xl border border-white/10 bg-neutral-900/70 p-5 transition-colors hover:border-a1z-blue/30"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-11 h-11 shrink-0 rounded-full bg-a1z-blue/15 text-a1z-blue flex items-center justify-center">
                          <service.icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-[0.95rem] font-heading font-semibold text-white leading-tight">{service.title}</h4>
                            {service.badge && (
                              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide uppercase ${BADGE_STYLES[service.badge] ?? 'bg-white/10 text-gray-300'}`}>
                                {service.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.description}</p>
                      <a
                        href="tel:+15551234567"
                        className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-a1z-blue transition-colors"
                      >
                        <Phone size={12} />
                        Call for details
                      </a>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* "Also Available" specialty strip */}
          <div className="mt-10 rounded-2xl border border-white/5 bg-neutral-900/50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Also Available</p>
            <div className="flex flex-wrap gap-2">
              {alsoAvailable.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA banner */}
          <div className="mt-8 rounded-2xl border border-a1z-blue/20 bg-gradient-to-r from-a1z-blue/10 via-transparent to-a1z-blue/10 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300 text-center sm:text-left">
              Don't see your issue listed? <span className="text-white font-medium">Call us — we probably cover it.</span>
            </p>
            <a
              href="tel:+15551234567"
              className={`shrink-0 inline-flex items-center gap-2 rounded-full bg-a1z-blue hover:bg-blue-600 px-5 py-2.5 text-sm font-heading font-bold text-white transition-colors ${
                activeTab === 'emergency' ? 'shadow-[0_0_20px_rgba(0,123,255,0.5)] animate-pulse' : ''
              }`}
            >
              <Phone size={16} />
              Call for a Quote
            </a>
          </div>
        </div>

        {/* How it works timeline */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl border border-white/5 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80 overflow-hidden p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -top-20 -right-16 h-40 w-40 rounded-full bg-a1z-blue/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-40 w-40 rounded-full bg-purple-900/20 blur-3xl" />

          <div className="relative z-10">
            <div className="max-w-2xl mb-10">
              <p className="inline-flex items-center rounded-full bg-a1z-blue/10 px-4 py-1 text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-a1z-blue mb-3">
                Mobile, on your schedule
              </p>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-3">
                How our mobile service works
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Skip the shop. We bring certified care directly to you with simple booking, clear communication,
                and no surprise downtime.
              </p>
            </div>

            <div className="flex gap-5 md:gap-8">
              <div className="relative mt-1 w-6 shrink-0">
                <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/15" />
                <motion.div
                  style={{ scaleY: beamScale, transformOrigin: 'top' }}
                  className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-a1z-blue via-cyan-300 to-a1z-blue shadow-[0_0_14px_rgba(0,123,255,0.85)]"
                />
              </div>

              <div className="grid gap-4 md:gap-5 w-full">
                {steps.map((step, index) => {
                  const isActive = activeStep >= index;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`relative flex flex-col rounded-2xl border px-4 py-4 md:px-6 md:py-5 transition-all duration-300 ${
                        isActive
                          ? 'bg-neutral-900/90 border-a1z-blue/40 shadow-[0_0_20px_rgba(0,123,255,0.2)]'
                          : 'bg-neutral-900/70 border-white/10'
                      }`}
                    >
                      <span
                        className={`absolute -left-[1.95rem] top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? 'bg-a1z-blue border-a1z-blue shadow-[0_0_12px_rgba(0,123,255,0.95)]'
                            : 'bg-neutral-900 border-white/30'
                        }`}
                      />
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.7rem] font-mono font-semibold ${
                            isActive ? 'bg-a1z-blue/20 text-a1z-blue' : 'bg-white/10 text-gray-300'
                          }`}
                        >
                          {step.label}
                        </div>
                        <p className="text-sm md:text-base font-heading font-semibold text-white">{step.title}</p>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{step.body}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
