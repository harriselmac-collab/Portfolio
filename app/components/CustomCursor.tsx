'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16); // Center the 32px cursor
            mouseY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        // Add listeners for clickable elements to trigger hover state
        const handleLinkHoverStart = () => setIsHovering(true);
        const handleLinkHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Attach to all links and buttons dynamically
        const clickables = document.querySelectorAll('a, button');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleLinkHoverStart);
            el.addEventListener('mouseleave', handleLinkHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHoverStart);
                el.removeEventListener('mouseleave', handleLinkHoverEnd);
            });
        };
    }, [mouseX, mouseY, isVisible]);

    // If touch device (roughly), don't show custom cursor
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                opacity: isVisible ? 1 : 0,
            }}
        >
            {/* Main Dot */}
            <motion.div
                className="w-full h-full bg-white rounded-full"
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    );
}
