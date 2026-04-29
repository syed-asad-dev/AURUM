import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            alt: "Watch detail full width",
            className: "md:col-span-2 md:row-span-1 h-[400px]"
        },
        {
            src: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Watch face square",
            className: "md:col-span-1 md:row-span-1 h-[400px]"
        },
        {
            src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Watch on wrist",
            className: "md:col-span-1 md:row-span-1 h-[400px]"
        },
        {
            src: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Watch mechanism vertical",
            className: "md:col-span-1 md:row-span-2 h-[824px]"
        },
        {
            src: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Watch lifestyle 1",
            className: "md:col-span-1 md:row-span-1 h-[400px]"
        },
        {
            src: "https://images.unsplash.com/photo-1548171915-e75a46719dc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Watch lifestyle 2",
            className: "md:col-span-1 md:row-span-1 h-[400px]"
        }
    ];

    return (
        <section id="gallery" className="bg-[#0D0D0D] py-[120px]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="font-sans font-light text-text-gold tracking-[0.3em] text-[12px] mb-4">
                        GALLERY
                    </div>
                    <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.2] mb-6">
                        Timeless Imagery
                    </h2>
                </motion.div>

                {/* Bento/Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative overflow-hidden group cursor-pointer ${img.className}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                            {/* Gold Overlay on Hover */}
                            <div className="absolute inset-0 bg-[rgba(201,168,76,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
