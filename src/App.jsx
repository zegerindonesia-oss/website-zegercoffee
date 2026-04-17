import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        {/* Interactive Sequence Hero replaces the top section */}
        <section id="about">
          <Hero />
        </section>

        {/* Clean white minimal semantic sections following Fore Coffee / Apple style */}
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

        {/* Rest of the Awwwards-style locations section */}
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

      <footer style={{ backgroundColor: 'var(--zeger-dark)', color: 'white', padding: '80px 0 40px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="var(--zeger-red)">
              <path d="M17.067 5.748c-3.153-2.074-7.53-.448-9.4 3.73-1.603 3.585-1.4 8.784 2.87 10.99 3.016 1.56 7.42-.041 9.4-3.73 1.986-3.69 1.405-8.15-2.87-10.99zm-4.72 10.85c-1.353.473-2.483-1.12-1.745-2.146 1.4-1.927 3.255-3.627 3.513-5.27.098-.621.848-1.077 1.433-.674.521.36.49 1.056.241 1.637-.624 1.455-2.003 3.476-2.613 5.344-.192.585-.592.937-.829 1.109z" />
            </svg>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Zeger <span style={{ fontWeight: 400 }}></span></span>
          </div>

          <ul style={{ display: 'flex', gap: '32px', marginBottom: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['About', 'Menu', 'Store', 'Investors', 'GCG', 'Collaboration', 'News', 'Career', 'Contact Us'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s', fontWeight: 500 }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '40px' }}></div>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Zeger Coffee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
