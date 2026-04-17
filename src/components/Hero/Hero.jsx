import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div className="hero-container" ref={ref}>
            <motion.div
                className="hero-background"
                style={{ y: yBg }}
            >
                <div className="hero-overlay"></div>
            </motion.div>

            <div className="container hero-content-wrapper">
                <motion.div
                    className="hero-content"
                    style={{ y: yText, opacity: opacityText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.span
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        Premium Experience
                    </motion.span>
                    <h1 className="hero-title">
                        Awaken Your Senses with <span className="text-red">Zeger!</span>
                    </h1>
                    <p className="hero-subtitle">
                        Experience the finest selection of artisan coffee, crafted for those who demand excellence in every cup. Wait no more.
                    </p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <button className="cta-btn hero-btn">Explore Menu</button>
                        <button className="outline-btn">Our Story</button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
