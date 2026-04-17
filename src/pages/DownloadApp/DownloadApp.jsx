import React from 'react';
import { motion } from 'framer-motion';

const DownloadApp = () => {
    return (
        <main style={{ paddingTop: '75px', backgroundColor: 'var(--zeger-red)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', padding: '80px 0' }}>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: 1, minWidth: '300px', color: 'white' }}
                >
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>Get The Zeger App</h1>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: 0.9 }}>Order ahead, skip the line, and earn exclusive rewards with every purchase.</p>
                    
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <button style={{ backgroundColor: 'var(--zeger-dark)', color: 'white', padding: '15px 30px', borderRadius: '999px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>App Store</button>
                        <button style={{ backgroundColor: 'white', color: 'var(--zeger-dark)', padding: '15px 30px', borderRadius: '999px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>Google Play</button>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
                >
                    {/* Phone mockup placeholder */}
                    <div style={{ width: '300px', height: '600px', backgroundColor: 'white', borderRadius: '40px', border: '10px solid var(--zeger-dark)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: 'var(--zeger-red)', padding: '40px 20px', color: 'white' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Welcome to Zeger!</h2>
                        </div>
                        <div style={{ flex: 1, backgroundColor: 'var(--zeger-light)', padding: '20px' }}>
                            <div style={{ width: '100%', height: '100px', backgroundColor: 'white', borderRadius: '15px', marginBottom: '15px' }}></div>
                            <div style={{ width: '100%', height: '100px', backgroundColor: 'white', borderRadius: '15px', marginBottom: '15px' }}></div>
                            <div style={{ width: '100%', height: '100px', backgroundColor: 'white', borderRadius: '15px' }}></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default DownloadApp;
