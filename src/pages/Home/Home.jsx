import React from 'react';
import Hero from '../../components/Hero/Hero';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main>
            <section id="about">
                <Hero />
            </section>

            <section id="our-story" style={{ padding: '120px 0', backgroundColor: 'var(--zeger-bg)' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '30px', letterSpacing: '-1px' }}
                    >
                        The <span style={{ color: 'var(--zeger-red)' }}>Zeger!</span> Story
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--zeger-gray)' }}
                    >
                        Born from a passion for perfection, Zeger Coffee is more than just a beverage—it's a daily ritual. We traveled across the archipelago to source the finest beans, establishing direct relationships with farmers who share our obsession with quality. Our mission is to deliver an uncompromising, premium coffee experience that awakens your senses and fuels your finest moments.
                    </motion.p>
                </div>
            </section>

            <section id="locations" style={{ padding: '120px 0', backgroundColor: 'var(--zeger-light)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-1px' }}>Find Us</h2>
                        <p style={{ color: 'var(--zeger-gray)', marginTop: '16px', fontSize: '1.1rem' }}>Experience Zeger at our beautifully designed locations.</p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {[
                            { name: 'Sudirman Central', address: 'SCBD District 8, Jakarta', status: 'Open Now' },
                            { name: 'Senopati Reserve', address: 'Jl. Senopati No. 42, Jakarta', status: 'Closing at 10 PM' },
                            { name: 'Menteng Hub', address: 'Jl. Teuku Umar No. 1, Jakarta', status: 'Open Now' }
                        ].map((loc, i) => (
                            <motion.div
                                key={loc.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                style={{
                                    padding: '40px',
                                    backgroundColor: 'white',
                                    borderRadius: '24px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>{loc.name}</h3>
                                <p style={{ color: 'var(--zeger-gray)', marginBottom: '24px' }}>{loc.address}</p>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '8px 16px',
                                    backgroundColor: 'rgba(230, 0, 18, 0.1)',
                                    color: 'var(--zeger-red)',
                                    borderRadius: '999px',
                                    fontSize: '0.9rem',
                                    fontWeight: 500
                                }}>
                                    {loc.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
