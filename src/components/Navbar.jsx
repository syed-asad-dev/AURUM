import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Legacy', 'Collection', 'Craftsmanship', 'Gallery'];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#080808]/95 backdrop-blur-[20px] py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="font-serif text-text-gold text-[22px] tracking-[0.3em]">
                    AURUM
                </a>

                {/* Center Links */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="font-sans font-light text-text-muted hover:text-text-gold transition-colors duration-300 text-[12px] uppercase tracking-[0.15em]"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Right CTA */}
                <button className="border border-gold-primary text-text-gold font-sans font-medium text-[12px] uppercase tracking-[0.15em] py-[10px] px-[24px] transition-all duration-300 hover:bg-gold-primary hover:text-bg-primary">
                    Discover
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
