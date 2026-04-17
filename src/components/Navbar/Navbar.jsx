import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
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

    const menuItems = ['About', 'Menu', 'Store', 'Investors', 'GCG', 'Collaboration', 'News', 'Career', 'Contact Us'];

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
                    <div className="nav-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="bean-icon"
                        >
                            <path d="M17.067 5.748c-3.153-2.074-7.53-.448-9.4 3.73-1.603 3.585-1.4 8.784 2.87 10.99 3.016 1.56 7.42-.041 9.4-3.73 1.986-3.69 1.405-8.15-2.87-10.99zm-4.72 10.85c-1.353.473-2.483-1.12-1.745-2.146 1.4-1.927 3.255-3.627 3.513-5.27.098-.621.848-1.077 1.433-.674.521.36.49 1.056.241 1.637-.624 1.455-2.003 3.476-2.613 5.344-.192.585-.592.937-.829 1.109z" />
                        </svg>
                        <span className="logo-text">Zeger<span className="light"></span></span>
                    </div>

                    {/* Desktop Menu - Exact Fore layout */}
                    <ul className="nav-desktop-menu">
                        {menuItems.map((item) => (
                            <li key={item}><a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a></li>
                        ))}
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
                            <div className="nav-logo dark-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="bean-icon"><path d="M17.067 5.748c-3.153-2.074-7.53-.448-9.4 3.73-1.603 3.585-1.4 8.784 2.87 10.99 3.016 1.56 7.42-.041 9.4-3.73 1.986-3.69 1.405-8.15-2.87-10.99zm-4.72 10.85c-1.353.473-2.483-1.12-1.745-2.146 1.4-1.927 3.255-3.627 3.513-5.27.098-.621.848-1.077 1.433-.674.521.36.49 1.056.241 1.637-.624 1.455-2.003 3.476-2.613 5.344-.192.585-.592.937-.829 1.109z" /></svg>
                                <span className="logo-text">Zeger<span className="light"></span></span>
                            </div>
                            <button className="close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
                                <X size={28} />
                            </button>
                        </div>

                        <div className="mobile-menu-body">
                            <ul className="mobile-menu-links">
                                {menuItems.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + i * 0.05 }}
                                    >
                                        <a href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)}>
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
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
