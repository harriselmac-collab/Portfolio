'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function AboutPage() {
    const experiences = [
        {
            year: "2021 - Present",
            role: "Senior Editor",
            company: "Frame Perfect Studios",
            description: "Leading post-production for high-end commercials and brand narratives."
        },
        {
            year: "2018 - 2021",
            role: "Freelance Colorist",
            company: "Self-Employed",
            description: "Collaborated with directors to establish visual tone for indie films and music videos."
        },
        {
            year: "2016 - 2018",
            role: "Junior Editor",
            company: "Creative Cut Agency",
            description: "Assisted on broadcast spots; handled offline editing and media management."
        }
    ];

    const services = [
        {
            title: "Offline Editing",
            description: "Crafting the story structure, pacing, and emotional arc."
        },
        {
            title: "Color Grading",
            description: "Enhancing mood and atmosphere through precise color manipulation."
        },
        {
            title: "Sound Design",
            description: "Layering audio to build immersion and impact."
        },
        {
            title: "Motion Graphics",
            description: "Adding dynamic visual elements to elevate the production value."
        }
    ];

    return (
        <main className="min-h-screen bg-neutral-950 pt-32 pb-24">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
                        Visualizing <br />
                        <span className="text-neutral-500">The Narrative</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-2xl">
                        I am a visual storyteller obsessed with the rhythm of the cut and the psychology of color.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-12 gap-16 mb-32">

                    {/* Bio Section */}
                    <div className="md:col-span-12 lg:col-span-7 space-y-8 text-lg text-neutral-400 leading-relaxed">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6">The Approach</h2>
                            <p>
                                Filmmaking is an act of translation—translating ideas into images, and images into feelings. As an editor, I stand at the final checkpoint of this translation process. My job isn't just to assemble footage; it's to find the heartbeat of the story.
                            </p>
                            <p className="mt-6">
                                Whether it's a fast-paced commercial requiring kinetic energy or a slow-burn documentary needing room to breathe, I adapt my rhythm to serve the narrative. I believe that technical proficiency is the baseline, but tailored creativity is what makes a project memorable.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="pt-8"
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Services</h2>
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                                {services.map((service) => (
                                    <div key={service.title}>
                                        <h3 className="text-white font-serif text-xl mb-2">{service.title}</h3>
                                        <p className="text-sm text-neutral-500">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Meta/Stats Section */}
                    <div className="md:col-span-12 lg:col-start-9 lg:col-span-4 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6 border-b border-neutral-800 pb-4">Experience</h2>
                            <ul className="space-y-8">
                                {experiences.map((exp) => (
                                    <li key={exp.company}>
                                        <span className="block text-xs text-neutral-500 mb-1">{exp.year}</span>
                                        <h3 className="text-white font-medium text-lg">{exp.role}</h3>
                                        <span className="text-sm text-neutral-400 block mb-2">{exp.company}</span>
                                        <p className="text-sm text-neutral-600">{exp.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6 border-b border-neutral-800 pb-4">Software</h2>
                            <div className="flex flex-wrap gap-2">
                                {["DaVinci Resolve", "Adobe Premiere", "After Effects", "Cinema 4D", "Pro Tools"].map(tool => (
                                    <span key={tool} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-neutral-800 pt-24 text-center"
                >
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="inline-block border border-white text-white px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Let's Talk
                        </Link>

                        <a
                            href="/cv.pdf"
                            download
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase tracking-widest text-sm"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
