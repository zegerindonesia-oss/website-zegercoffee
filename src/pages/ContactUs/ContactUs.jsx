import React from 'react';

const ContactUs = () => {
    return (
        <main style={{ paddingTop: '75px', backgroundColor: 'var(--zeger-light)', minHeight: '100vh' }}>
            <div className="container" style={{ padding: '100px 0', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px', color: 'var(--zeger-dark)' }}>Contact <span style={{ color: 'var(--zeger-red)' }}>Us</span></h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--zeger-gray)', marginBottom: '50px' }}>We'd love to hear from you. Please fill out the form below or reach out to our team directly.</p>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Name</label>
                        <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email</label>
                        <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Message</label>
                        <textarea placeholder="How can we help you?" rows="5" style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }}></textarea>
                    </div>
                    <button type="button" style={{ backgroundColor: 'var(--zeger-red)', color: 'white', padding: '15px', borderRadius: '10px', fontWeight: 700, fontSize: '1.1rem', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Send Message</button>
                </form>
            </div>
        </main>
    );
};

export default ContactUs;
