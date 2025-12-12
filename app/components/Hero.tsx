'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ColorWheel from './ColorWheel';

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
            {/* 
         Video Background 
         In a real implementation, you would use:
         <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
            <source src="/your-video.mp4" type="video/mp4" />
         </video>
      */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950 to-neutral-950 z-0" />
            {/* Simulated Video Slideshow (Placeholder) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2921&auto=format&fit=crop"
                    alt="Cinematic Background"
                    className="w-full h-full object-cover filter saturate-0 contrast-125"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-16"
                >
                    <h1 className="group text-4xl md:text-6xl lg:text-7xl font-sans font-black italic tracking-tighter text-white mb-6 cursor-default">
                        <span className="transition-colors duration-500 group-hover:text-neutral-500">Hi, my name is HAMZA</span> <br />
                        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-white transition-all duration-500 group-hover:text-transparent">
                            and I'm a colorist
                        </span>
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto tracking-wide">
                        Bringing cinematic life to every frame.
                    </p>
                </motion.div>

                {/* Color Wheels Control Panel */}
                <div className="flex gap-2 md:gap-16 items-center justify-center mt-8">
                    <ColorWheel label="Lift" color="bg-red-500/20" />
                    <ColorWheel label="Gamma" color="bg-green-500/20" />
                    <ColorWheel label="Gain" color="bg-blue-500/20" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
            >
                <ArrowDown className="text-neutral-500 animate-bounce" />
            </motion.div>
        </section>
    );
}
