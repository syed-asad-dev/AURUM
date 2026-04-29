import React from 'react';
import { motion } from 'framer-motion';

const Collection = () => {
    const fadeInUp = {
        hidden: { y: 60, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
    };

    const watches = [
        {
            ref: 'REF. 001',
            name: 'Le Noir',
            desc: 'Obsidian dial with 18k white gold indices.',
            price: 'CHF 18,500',
            img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            ref: 'REF. 002',
            name: 'Aureus',
            desc: 'Rose gold case with sunburst golden dial.',
            price: 'CHF 24,000',
            img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            ref: 'REF. 003',
            name: 'Tempus',
            desc: 'Skeletonized titanium tourbillon.',
            price: 'CHF 42,000',
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ];

    return (
        <section id="collection" className="bg-[#0D0D0D] py-[120px]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <div className="font-sans font-light text-text-gold tracking-[0.3em] text-[12px] mb-4">
                        TIMEPIECES
                    </div>
                    <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.2] mb-6">
                        The Collection
                    </h2>
                    <p className="font-sans font-light text-text-muted max-w-2xl mx-auto">
                        A curated selection of our most distinguished masterpieces, tailored for the extraordinary.
                    </p>
                </motion.div>

                {/* Watch Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {watches.map((watch, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-bg-card border border-[rgba(201,168,76,0.1)] rounded-[2px] p-10 flex flex-col group transition-all duration-400 hover:border-[rgba(201,168,76,0.4)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,168,76,0.1)] relative overflow-hidden"
                        >
                            <div className="text-text-gold font-sans text-[10px] tracking-widest mb-8 uppercase absolute top-8 left-8">
                                {watch.ref}
                            </div>

                            <div className="w-full flex justify-center mt-6 mb-10 overflow-hidden">
                                <img
                                    src={watch.img}
                                    alt={watch.name}
                                    className="w-[240px] h-[240px] object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-110 drop-shadow-2xl rounded-full"
                                />
                            </div>

                            <div className="mt-auto text-center">
                                <h3 className="font-serif text-[28px] text-white mb-2">{watch.name}</h3>
                                <p className="font-sans font-light text-[14px] text-text-muted mb-6 px-4">
                                    {watch.desc}
                                </p>
                                <div className="font-serif text-[20px] text-text-gold mb-8">
                                    {watch.price}
                                </div>

                                <button className="w-full border border-gold-primary text-text-gold py-[12px] font-sans text-[12px] uppercase tracking-[0.15em] transition-all duration-300 group-hover:bg-gold-primary group-hover:text-bg-primary">
                                    Discover
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Collection;
