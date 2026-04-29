import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Materials = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    const materialsList = [
        "18K Rose Gold Case",
        "Sapphire Crystal Glass",
        "Italian Leather Strap",
        "Titanium Movement"
    ];

    return (
        <section id="materials" className="w-full h-auto min-h-screen flex flex-col md:flex-row">

            {/* Left Side - Parallax Image */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden relative">
                <motion.div
                    className="absolute inset-0 w-full h-[120%]"
                    style={{ y }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1596700078864-77d46fc47631?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Watch Gears Macro"
                        className="w-full h-full object-cover grayscale-[30%] opacity-90"
                    />
                    <div className="absolute inset-0 bg-gold-primary mix-blend-overlay opacity-20"></div>
                    <div className="absolute inset-0 bg-[#080808]/40"></div>
                </motion.div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 bg-[#080808] flex items-center justify-center p-12 md:p-24 relative overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none z-0"></div>

                <motion.div
                    className="w-full max-w-[400px] mx-auto relative z-10"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="font-sans font-light text-text-gold tracking-[0.3em] text-[12px] mb-6">
                        MATERIALS
                    </div>

                    <h2 className="font-serif text-[40px] md:text-[52px] leading-[1.2] mb-8">
                        Engineered to<br />
                        <span className="text-text-gold italic">Perfection</span>
                    </h2>

                    <div className="w-[60px] h-[1px] bg-gold-primary my-8"></div>

                    <p className="font-sans font-light text-text-muted text-[16px] leading-[1.9] mb-12">
                        Every component is sourced from the world's finest suppliers. From 18-karat gold cases to hand-stitched Italian leather straps — compromise is not in our vocabulary.
                    </p>

                    <ul className="space-y-6">
                        {materialsList.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center gap-4 text-white font-sans text-[15px] tracking-wide"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <div className="w-[6px] h-[6px] rounded-full bg-gold-primary"></div>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

        </section>
    );
};

export default Materials;
