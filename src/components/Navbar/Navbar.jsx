import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Since Hero is now white, navbar is always light. 
            // We just add shadow when scrolled.
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'About', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Store', path: '/store' },
        { name: 'Collaboration', path: '/collaboration' },
        { name: 'News', path: '/news' },
        { name: 'Contact Us', path: '/contact-us' }
    ];

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : 'top'}`}>
                <div className="container nav-content">
                    {/* Logo */}
                    <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                        <img src="/logo.png" alt="Zeger Logo" style={{ height: '40px', objectFit: 'contain' }} />
                    </Link>

                    {/* Desktop Menu - Exact Fore layout */}
                    <ul className="nav-desktop-menu">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/download-app" style={{ color: 'var(--zeger-dark)', fontWeight: 700 }}>App</Link>
                        </li>
                    </ul>

                    {/* Desktop Right Actions */}
                    <div className="nav-actions">
                        <div className="country-selector">
                            <span className="flag">🇮🇩</span>
                            <span className="country-code">ID</span>
                            <ChevronDown size={14} className="chevron" />
                        </div>

                        <button className="cta-btn outline">Order Now</button>

                        <div className="lang-toggle">
                            <span className="lang active">EN</span>
                            <span className="separator">|</span>
                            <span className="lang">ID</span>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="mobile-menu-header">
                            <Link to="/" className="nav-logo dark-logo" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
                                <img src="/logo.png" alt="Zeger Logo" style={{ height: '35px', objectFit: 'contain' }} />
                            </Link>
                            <button className="close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
                                <X size={28} />
                            </button>
                        </div>

                        <div className="mobile-menu-body">
                            <ul className="mobile-menu-links">
                                {menuItems.map((item, i) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + i * 0.05 }}
                                    >
                                        <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + menuItems.length * 0.05 }}
                                >
                                    <Link to="/download-app" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--zeger-red)' }}>
                                        Download App
                                    </Link>
                                </motion.li>
                            </ul>

                            <motion.div
                                className="mobile-menu-bottom"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="lang-toggle-mobile">
                                    <span className="lang active">EN</span>
                                    <span className="separator">|</span>
                                    <span className="lang">ID</span>
                                </div>
                                <button className="cta-btn outline full">Order Now</button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
