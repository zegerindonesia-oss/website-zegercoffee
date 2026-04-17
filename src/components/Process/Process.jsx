import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Process.css';

const frameCount = 241;

// Helper to get image path
const currentFrame = (index) => (
    `/sequence/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const Process = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images
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

        // Scale image to cover canvas
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    useEffect(() => {
        if (images.length > 0) {
            // Draw first frame immediately
            if (images[0].complete) {
                drawImage(0);
            } else {
                images[0].onload = () => drawImage(0);
            }
        }

        // Subscribe to scroll progress and update frame
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Calculate current frame index (0 to 240)
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(latest * frameCount)
            );
            requestAnimationFrame(() => drawImage(frameIndex));
        });

        return () => unsubscribe();
    }, [scrollYProgress, images]);

    // Set canvas size on resize
    useEffect(() => {
        const resizeCanvas = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // re-draw current frame
                const latest = scrollYProgress.get();
                const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
                drawImage(frameIndex);
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, [images]);

    // Text Animations mapped to scroll progress ranges
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 0]);

    const y1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [50, 0, -50]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [50, 0, -50]);
    const y3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [50, 0, -50]);

    return (
        <div className="process-container" ref={containerRef}>
            <div className="process-sticky">
                <canvas ref={canvasRef} className="process-canvas" />
                <div className="process-overlay"></div>

                {/* Scrollytelling Text Layers */}
                <div className="container process-content">
                    <motion.div
                        className="process-step"
                        style={{ opacity: opacity1, y: y1 }}
                    >
                        <span className="step-number">01</span>
                        <h2>Carefully Selected</h2>
                        <p>Every single bean is hand-picked from the finest sustainable farms across Indonesia, ensuring unparalleled quality from origin.</p>
                    </motion.div>

                    <motion.div
                        className="process-step"
                        style={{ opacity: opacity2, y: y2 }}
                    >
                        <span className="step-number">02</span>
                        <h2>Artisan Roasting</h2>
                        <p>Our master roasters treat each batch with precision, extracting the deep, complex flavors that define the Zeger signature profile.</p>
                    </motion.div>

                    <motion.div
                        className="process-step"
                        style={{ opacity: opacity3, y: y3 }}
                    >
                        <span className="step-number">03</span>
                        <h2>Perfect Pour</h2>
                        <p>Brewed with uncompromising technique. The result is a smooth, vibrant cup that awakens your senses and elevates your day.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Process;
