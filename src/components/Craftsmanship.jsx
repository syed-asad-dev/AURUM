import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Droplets, Clock } from 'lucide-react';

const CountUp = ({ to, label, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const startTimestamp = performance.now();

            const step = (timestamp) => {
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // Easing out cubic
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(easeProgress * to));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    setCount(to);
                }
            };

            window.requestAnimationFrame(step);
        }
    }, [isInView, to]);

    // Format with commas if over 1000
    const displayCount = count >= 1000 ? count.toLocaleString() : count;

    return (
        <div ref={ref} className="text-center">
            <div className="font-serif text-[48px] md:text-[64px] font-bold text-gold-primary mb-2">
                {prefix}{displayCount}{suffix}
            </div>
            <div className="font-sans text-[12px] font-light tracking-[0.2em] text-text-muted uppercase">
                {label}
            </div>
        </div>
    );
};

const Craftsmanship = () => {
    const features = [
        {
            icon: <Shield size={24} />,
            title: "Sapphire Crystal",
            desc: "Scratch-resistant sapphire crystal glass with anti-reflective coating."
        },
        {
            icon: <Zap size={24} />,
            title: "Swiss Movement",
            desc: "In-house caliber movement with chronometer certification."
        },
        {
            icon: <Droplets size={24} />,
            title: "Water Resistant",
            desc: "Engineered to withstand depths of up to 300 meters."
        },
        {
            icon: <Clock size={24} />,
            title: "72hr Power Reserve",
            desc: "Extended power reserve ensuring precision across three full days."
        }
    ];

    return (
        <section id="craftsmanship" className="bg-[#080808] py-[120px]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-32">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col md:flex-row gap-6 items-start"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="w-[60px] h-[60px] shrink-0 border border-gold-primary flex justify-center items-center text-gold-primary rounded-sm">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-serif text-[24px] font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="font-sans font-light text-[14px] leading-[1.8] text-text-muted">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[rgba(201,168,76,0.1)] pt-20">
                    <CountUp to={134} label="Years of Excellence" />
                    <CountUp to={400} suffix="+" label="Hours per Timepiece" />
                    <CountUp to={47} label="Master Craftsmen" />
                    <CountUp to={12000} suffix="+" label="Satisfied Clients" />
                </div>

            </div>
        </section>
    );
};

export default Craftsmanship;
