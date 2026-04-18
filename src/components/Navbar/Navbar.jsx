import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'Menu', path: '/menu' },
        { name: 'Store', path: '/store' },
        { name: 'Collaboration', path: '/collaboration' },
        { name: 'News', path: '/news' },
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'App', path: '/download-app' }
    ];

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl z-50 transition-all duration-500">
            <nav className="glass-nav editorial-shadow rounded-full flex justify-between items-center px-6 py-2.5 w-full font-['Plus_Jakarta_Sans']">
                <Link to="/" className="flex items-center gap-3 decoration-none group">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <img src="/favicon.png" alt="Zeger Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <span className="text-xl font-extrabold italic text-primary">ZEGER</span>
                </Link>

                <div className="hidden md:flex items-center bg-black/5 rounded-full px-2 py-1 gap-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname.includes(item.path);
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                                    ? "bg-white text-primary shadow-sm"
                                    : "text-on-surface-variant hover:text-primary"
                                    }`}
                                style={{ textDecoration: 'none' }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 text-on-surface-variant transition-colors">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </button>
                    <button className="primary-gradient text-on-primary px-7 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300">
                        Order Now
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
