import React from 'react';
import { motion } from 'framer-motion';

const Store = () => {
    return (
        <main style={{ paddingTop: '75px', backgroundColor: 'var(--zeger-bg)', minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'var(--zeger-red)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>Our Stores</h1>
                <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Find Zeger Coffee near you</p>
            </div>
            
            <div className="container" style={{ padding: '60px 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {[
                        { name: 'Sudirman Central', address: 'SCBD District 8, Jakarta', status: 'Open Now' },
                        { name: 'Senopati Reserve', address: 'Jl. Senopati No. 42, Jakarta', status: 'Closing at 10 PM' },
                        { name: 'Menteng Hub', address: 'Jl. Teuku Umar No. 1, Jakarta', status: 'Open Now' },
                        { name: 'Kemang Outlet', address: 'Jl. Kemang Raya No. 10, Jakarta', status: 'Open Now' }
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
        </main>
    );
};

export default Store;
