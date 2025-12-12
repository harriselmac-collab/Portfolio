'use client';

import { motion } from 'framer-motion';

interface ColorWheelProps {
    label: string;
    color: string; // Tailwind color class or hex
    delay?: number;
}

export default function ColorWheel({ label, color, delay = 0 }: ColorWheelProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center gap-4 cursor-pointer group"
        >
            {/* Wheel Graphic */}
            <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm shadow-2xl overflow-hidden group-hover:border-neutral-500 transition-colors duration-300">
                {/* Gradient Mesh to simulate color wheel */}
                <div className={`absolute inset-0 opacity-50 bg-[conic-gradient(from_0deg,red,yellow,lime,cyan,blue,magenta,red)]`} />
                <div className="absolute inset-2 rounded-full bg-neutral-900 z-10" />

                {/* Center Point/Cursor */}
                <div className="absolute inset-0 m-auto w-3 h-3 bg-white rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                {/* Color tint based on prop */}
                <div className={`absolute inset-0 mix-blend-overlay ${color}`} />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors duration-300">
                {label}
            </span>
        </motion.div>
    );
}
