import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main>
            {/* Cinematic Hero Scroll Section */}
            <section id="about">
                <Hero />
            </section>

            {/* The Zeger Story */}
            <section id="our-story" className="py-32 bg-surface">
                <div className="max-w-3xl mx-auto px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 block"
                    >
                        Our Heritage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 text-on-surface"
                    >
                        The <span className="text-primary">Zeger</span> Story
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl leading-relaxed text-on-surface-variant"
                    >
                        Born from a passion for perfection, Zeger Coffee is more than just a beverage—it's a daily ritual. We traveled across the archipelago to source the finest beans, establishing direct relationships with farmers who share our obsession with quality. Our mission is to deliver an uncompromising, premium coffee experience that awakens your senses and fuels your finest moments.
                    </motion.p>
                </div>
            </section>

            {/* Editorial Feature Bento */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Why Zeger</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">The Art of the Craft</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'eco', title: 'Direct Trade', desc: 'We work directly with farmers in Aceh, Flores, and Toraja to ensure ethical sourcing and transparent supply chains.' },
                            { icon: 'local_fire_department', title: 'Expert Roasting', desc: 'Each batch is meticulously roasted by our master roasters to highlight the unique terroir of every origin.' },
                            { icon: 'stars', title: 'Premium Experience', desc: 'Every cup is a sensory journey. From the first aroma to the final lingering finish—excellence in every detail.' },
                        ].map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className="bg-surface p-10 rounded-3xl group hover:shadow-xl transition-all duration-500 border border-outline-variant/10"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-on-surface">{f.title}</h4>
                                <p className="text-on-surface-variant leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section id="locations" className="py-32 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Locations</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">Find Us</h3>
                        <p className="text-on-surface-variant mt-4 text-lg">Experience Zeger at our beautifully designed locations.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { name: 'Sudirman Central', address: 'SCBD District 8, Jakarta', status: 'Open Now', open: true },
                            { name: 'Senopati Reserve', address: 'Jl. Senopati No. 42, Jakarta', status: 'Closing at 10 PM', open: true },
                            { name: 'Menteng Hub', address: 'Jl. Teuku Umar No. 1, Jakarta', status: 'Open Now', open: true },
                        ].map((loc, i) => (
                            <motion.div
                                key={loc.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group p-10 bg-surface-container rounded-3xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 hover:border-primary/20"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>store</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-on-surface">{loc.name}</h3>
                                <p className="text-on-surface-variant mb-6">{loc.address}</p>
                                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full">
                                    {loc.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/store" className="inline-flex items-center gap-2 primary-gradient text-on-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg hover:shadow-primary/30 transition-all">
                            View All Locations <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Editorial CTA Banner */}
            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="primary-gradient rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <span className="text-on-primary/70 text-xs font-bold uppercase tracking-widest block mb-4">Be Part of the Story</span>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-on-primary tracking-tighter mb-8">
                                Order Your<br />Perfect Cup Today.
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/menu" className="bg-on-primary text-primary px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-surface-container-low transition-colors shadow-xl">
                                    Explore our Menu
                                </Link>
                                <Link to="/download-app" className="bg-white/20 border border-white/30 text-on-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/30 transition-colors">
                                    Download the App
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
