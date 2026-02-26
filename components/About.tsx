import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, Award } from 'lucide-react';

const users = [
    {
        name: "Expert Team",
        description: "Our certified technicians bring years of experience and passion to every vehicle.",
        icon: Award
    },
    {
        name: "Premium Service",
        description: "We use only the highest quality parts and equipment for your vehicle.",
        icon: Shield
    },
    {
        name: "Time Saving",
        description: "We come to you. Office, home, or gym - we work around your schedule.",
        icon: Clock
    },
    {
        name: "5-Star Service",
        description: "Consistent perfection is our standard. Satisfaction guaranteed on every job.",
        icon: Star
    }
]

const About: React.FC = () => {
    return (
        <section id="about" className="relative py-20 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-a1z-blue/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        THE A<span className="text-a1z-blue">1</span>Z STANDARD
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-a1z-blue mx-auto mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        We aren't just mechanics; we are automotive care specialists.
                        A1Z Mobile Autocare brings premium quality maintenance directly to your driveway,
                        combining convenience with uncompromising excellence.
                    </motion.p>
                </div>

                {/* Content Utility Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {users.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-a1z-blue/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-a1z-blue group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-a1z-blue transition-colors">
                                {feature.name}
                            </h3>
                            <p className="font-sans text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
