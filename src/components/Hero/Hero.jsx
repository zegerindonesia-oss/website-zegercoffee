import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const frameCount = 241;

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

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.fillStyle = '#fbf9f6';
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

    const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    const section2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const section2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [50, 0, -50]);

    return (
        <div ref={containerRef} style={{ position: 'relative', height: '400vh', width: '100%', backgroundColor: '#fbf9f6' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: '#fbf9f6' }}>
                <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />

                <div style={{ position: 'relative', height: '100%', zIndex: 10, display: 'flex', alignItems: 'center', pointerEvents: 'none' }} className="max-w-7xl mx-auto px-8">
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            maxWidth: '600px',
                            opacity: titleOpacity,
                            y: titleY,
                        }}
                    >
                        <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-on-surface mb-5">
                            Perfection in <br /><span className="text-primary">Every Drop.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant font-medium">Scroll to experience the craft of Zeger Coffee.</p>
                    </motion.div>

                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '2rem',
                            transform: 'translateY(-50%)',
                            maxWidth: '400px',
                            textAlign: 'right',
                            opacity: section2Opacity,
                            y: section2Y,
                        }}
                    >
                        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-primary mb-4">
                            Freshly Roasted
                        </h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed">From the farm entirely to your premium cup. We preserve the authentic flavors.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
