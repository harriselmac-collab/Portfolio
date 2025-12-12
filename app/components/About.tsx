'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
    const skills = [
        { category: "Software", items: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Final Cut Pro"] },
        { category: "Services", items: ["Offline Editing", "Color Grading", "Sound Design", "Motion Graphics"] }
    ];

    return (
        <section className="py-24 bg-neutral-900/50">
            <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start"
            >
                <div>
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Behind the Edit</h2>
                    <div className="space-y-4 text-neutral-400 leading-relaxed mb-8">
                        <p>
                            I use color and rhythm to evoke emotion. Every frame matters, and every cut is a decision that shapes the narrative.
                            My approach blends technical precision with artistic intuition.
                        </p>
                        <p>
                            With over 5 years of experience in commercial, documentary, and music video editing,
                            I bring a technical eye and a creative soul to every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {skills.map((skillSet) => (
                            <div key={skillSet.category}>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-neutral-800 pb-2">
                                    {skillSet.category}
                                </h3>
                                <ul className="space-y-2">
                                    {skillSet.items.map((item) => (
                                        <li key={item} className="text-neutral-400 text-sm hover:text-white transition-colors cursor-default">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/about"
                            className="inline-block text-sm uppercase tracking-widest text-white hover:text-neutral-400 transition-colors border-b border-white pb-1 hover:border-neutral-400"
                        >
                            Read Full Bio
                        </Link>
                    </div>
                </div>

                <div className="relative aspect-square md:aspect-[4/5] bg-neutral-800 rounded-lg overflow-hidden group">
                    {/* 
                In a real app, replace the src below with your actual profile picture.
                Use external URL or local file in public/ folder.
             */}
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-600 bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
                        <div className="text-center p-6">
                            <span className="block text-4xl mb-2">👋</span>
                            <span className="text-sm uppercase tracking-widest">[Your Photo Here]</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
