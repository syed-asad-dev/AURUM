import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-[rgba(201,168,76,0.15)] pt-20 pb-8 text-text-muted font-sans font-light">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div>
                        <div className="font-serif text-text-gold tracking-[0.3em] text-[32px] md:text-[40px] mb-2 leading-none">
                            AURUM
                        </div>
                        <div className="text-[14px]">Beyond Time. Beyond Ordinary.</div>
                    </div>

                    <div className="w-full md:w-auto max-w-[400px]">
                        <div className="text-white mb-4 text-[15px]">Stay in the circle of excellence</div>
                        <div className="flex w-full">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-[#111] border border-transparent focus:border-gold-primary outline-none px-4 py-3 text-white text-[14px] w-full transition-colors rounded-none"
                            />
                            <button className="bg-gold-primary text-bg-primary font-medium tracking-[0.1em] text-[12px] uppercase px-6 hover:bg-gold-light transition-colors shrink-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-t border-[#1a1a1a] pt-16">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white tracking-[0.15em] text-[12px] uppercase font-medium mb-2">Collection</h4>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Le Noir Series</a>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Aureus Timeline</a>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Tempus Skeleton</a>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Limited Editions</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-white tracking-[0.15em] text-[12px] uppercase font-medium mb-2">Company</h4>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Our Story</a>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Craftsmanship</a>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Boutiques</a>
                        <a href="#" className="hover:text-gold-primary transition-colors text-[14px]">Careers</a>
                    </div>

                    <div className="flex flex-col gap-4 md:col-span-2">
                        <h4 className="text-white tracking-[0.15em] text-[12px] uppercase font-medium mb-2">Contact</h4>
                        <div className="text-[14px] leading-relaxed">
                            Geneva Headquarters<br />
                            Rue du Rhône 00,<br />
                            1204 Geneva, Switzerland<br /><br />
                            <a href="mailto:concierge@aurum.com" className="text-gold-primary hover:text-gold-light transition-colors">
                                concierge@aurum.com
                            </a><br />
                            +41 22 000 00 00
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col items-center gap-2 pt-8 border-t border-[#1a1a1a] text-[12px]">
                    <div>© 2025 AURUM. All rights reserved.</div>
                    <div className="tracking-[0.2em] text-gold-dark">SWISS MADE • SINCE 1889</div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
