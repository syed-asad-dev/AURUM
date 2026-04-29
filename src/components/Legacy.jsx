import React from 'react';
import { motion } from 'framer-motion';

const Legacy = () => {
    return (
        <section id="legacy" className="bg-[#080808] py-[120px] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">

                    {/* Left Side - Text */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { x: -80, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                        }}
                    >
                        <div className="font-sans font-light text-text-gold tracking-[0.3em] text-[12px] mb-6">
                            OUR STORY
                        </div>

                        <h2 className="font-serif text-[40px] md:text-[52px] leading-[1.2] mb-8">
                            A Century of<br />
                            <span className="text-text-gold italic">Precision & Passion</span>
                        </h2>

                        <div className="w-[60px] h-[1px] bg-gold-primary my-8"></div>

                        <p className="font-sans font-light text-text-muted text-[16px] leading-[1.9] mb-10">
                            Since 1889, AURUM has stood at the intersection of art and engineering. Each timepiece is meticulously crafted by master horologists, requiring over 400 hours of precise assembly.
                            <br /><br />
                            We do not simply make watches. We create heirlooms — instruments of time that transcend generations and tell stories beyond words.
                        </p>

                        <a href="#" className="group inline-flex items-center gap-4 text-text-gold font-sans font-medium hover:opacity-80 transition-opacity">
                            <span className="tracking-[0.15em] text-[12px] uppercase">LEARN MORE</span>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </a>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { x: 80, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                        }}
                    >
                        <div className="relative w-full max-w-[500px] mx-auto filter drop-shadow-2xl">
                            <div
                                className="w-full aspect-[4/5] overflow-hidden rounded-sm relative z-10 border-2 border-[rgba(201,168,76,0.3)] bg-[#111]"
                                style={{ transform: 'rotate(-3deg)' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Watch Mechanism"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                />
                            </div>
                            {/* Offset Gold Shadow */}
                            <div
                                className="absolute top-[20px] left-[20px] w-full h-full bg-[rgba(201,168,76,0.1)] -z-10"
                                style={{ transform: 'rotate(-3deg)' }}
                            ></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Legacy;
