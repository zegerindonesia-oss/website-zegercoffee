import React from 'react';
import { motion } from 'framer-motion';

const Collaboration = () => {
    return (
        <main style={{ paddingTop: '75px', backgroundColor: 'var(--zeger-bg)', minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'var(--zeger-dark)', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--zeger-red)' }}
                >
                    Let's Collaborate
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '1.2rem', marginTop: '10px', maxWidth: '600px', margin: '20px auto' }}
                >
                    Partner with Zeger Coffee to create extraordinary experiences. We are open to B2B, franchising, and creative partnerships.
                </motion.p>
            </div>
            <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', color: 'var(--zeger-gray)' }}>Collaboration form coming soon.</p>
            </div>
        </main>
    );
};

export default Collaboration;
