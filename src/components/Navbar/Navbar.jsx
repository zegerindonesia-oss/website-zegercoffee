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
        <header className="bg-surface/85 glass-nav docked full-width top-0 sticky z-50 transition-colors duration-300">
            <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full font-['Plus_Jakarta_Sans'] tracking-tight">
                <Link to="/" className="text-2xl font-black italic text-primary" style={{ textDecoration: 'none' }}>
                    Zeger Coffee
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => {
                        const isActive = location.pathname.includes(item.path);
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={isActive
                                    ? "text-primary font-bold border-b-2 border-primary hover:text-primary transition-colors duration-300"
                                    : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"}
                                style={{ textDecoration: 'none' }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full">
                        <span className="material-symbols-outlined text-sm text-on-surface-variant mr-2">search</span>
                        <input className="bg-transparent border-none focus:ring-0 outline-none text-sm w-32 placeholder:text-outline" placeholder="Find your blend..." type="text" />
                    </div>
                    <button className="primary-gradient text-on-primary px-6 py-2.5 rounded-full font-bold text-sm scale-95 duration-200 active:opacity-80">
                        Order Now
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
