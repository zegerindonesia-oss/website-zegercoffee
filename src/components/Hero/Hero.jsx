import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const frameCount = 241;

// Helper to get image path (now served from /sequence directly)
const currentFrame = (index) => (
    `/sequence/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const Hero = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images for silky smooth Apple-style effect
    useEffect(() => {
        const loadedImages = [];
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const drawImage = (index) => {
        if (!canvasRef.current || images.length < index || !images[index]) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const img = images[index];

        // Scale image (contain or cover depending on aspect ratio, Apple mostly covers)
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        // Clean White Background clear
        context.fillStyle = '#FFFFFF';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    useEffect(() => {
        if (images.length > 0) {
            if (images[0].complete) {
                drawImage(0);
            } else {
                images[0].onload = () => drawImage(0);
            }
        }

        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(latest * frameCount)
            );
            requestAnimationFrame(() => drawImage(frameIndex));
        });

        return () => unsubscribe();
    }, [scrollYProgress, images]);

    useEffect(() => {
        const resizeCanvas = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                const latest = scrollYProgress.get() || 0;
                const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
                drawImage(frameIndex);
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, [images]);

    // Initial text fade out
    const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    // Second text string reveal
    const section2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const section2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [50, 0, -50]);

    return (
        <div className="hero-scroll-container" ref={containerRef}>
            <div className="hero-sticky">
                {/* Draw the sequence on pure white background */}
                <canvas ref={canvasRef} className="hero-canvas" />

                {/* Texts floating above canvas */}
                <div className="container hero-content-wrapper">
                    <motion.div
                        className="hero-main-title"
                        style={{ opacity: titleOpacity, y: titleY }}
                    >
                        <h1>Perfection in <br /><span className="text-red">Every Drop.</span></h1>
                        <p>Scroll to experience the craft of Zeger Coffee.</p>
                    </motion.div>

                    <motion.div
                        className="hero-secondary-title"
                        style={{ opacity: section2Opacity, y: section2Y }}
                    >
                        <h2>Freshly Roasted</h2>
                        <p>From the farm entirely to your premium cup. We preserve the authentic flavors.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
