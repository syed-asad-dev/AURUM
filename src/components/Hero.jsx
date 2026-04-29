import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const watchRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!watchRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * -20;
            watchRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden bg-bg-primary flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-100 pointer-events-none"></div>
            <div className="absolute top-1/2 left-[70%] -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_60%)] pointer-events-none rounded-full blur-[50px]"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center relative z-10">

                {/* Left Side */}
                <motion.div
                    className="w-full md:w-1/2 pt-20 md:pt-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="font-sans font-light text-text-gold tracking-[0.3em] text-[12px] mb-6">
                        SWISS MADE • EST. 1889
                    </div>

                    <h1 className="font-serif text-[50px] md:text-[80px] leading-[1.1] mb-8">
                        <div className="text-text-primary">BEYOND</div>
                        <div className="text-text-gold italic">TIME.</div>
                        <div className="text-text-primary">BEYOND</div>
                        <div className="text-stroke-white uppercase font-serif tracking-wider">ORDINARY.</div>
                    </h1>

                    <p className="font-sans font-light text-text-muted text-[15px] leading-[1.8] max-w-[400px] mb-10">
                        Precision engineered Swiss timepieces for those who demand perfection in every moment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-gold-primary text-bg-primary font-sans font-medium tracking-[0.15em] text-[12px] py-[14px] px-[36px] transition-all duration-300 hover:bg-gold-light">
                            EXPLORE COLLECTION
                        </button>
                        <button className="bg-transparent border border-gold-primary text-text-gold font-sans font-medium tracking-[0.15em] text-[12px] py-[14px] px-[36px] transition-all duration-300 hover:bg-[rgba(201,168,76,0.1)]">
                            OUR LEGACY
                        </button>
                    </div>
                </motion.div>

                {/* Right Side - 3D Watch Element */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0 relative h-[500px]">
                    {/* Floating Ring */}
                    <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-border-gold animate-[ringRotate_20s_linear_infinite] pointer-events-none"></div>

                    {/* Floating Dots */}
                    <div className="absolute w-2 h-2 rounded-full bg-gold-primary top-[15%] left-[20%] animate-[floatDot_4s_ease-in-out_infinite]"></div>
                    <div className="absolute w-3 h-3 rounded-full bg-gold-light bottom-[25%] left-[10%] animate-[floatDot_5s_ease-in-out_infinite_1s]"></div>
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-gold-dark top-[30%] right-[15%] animate-[floatDot_3s_ease-in-out_infinite_2s]"></div>

                    {/* Watch Container */}
                    <motion.div
                        className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full flex justify-center items-center relative z-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div
                            ref={watchRef}
                            className="w-full h-full rounded-full flex justify-center items-center transition-transform duration-100 ease-out preserve-3d relative"
                            style={{
                                boxShadow: '0 0 80px rgba(201,168,76,0.15), 0 0 160px rgba(201,168,76,0.08)'
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Luxury Watch"
                                className="w-[85%] h-[85%] object-cover rounded-full pointer-events-none"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="font-sans text-text-gold tracking-[0.3em] text-[10px]">SCROLL</span>
                <div className="w-[1px] h-[40px] bg-gold-primary relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full bg-white animate-[scrollLine_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
