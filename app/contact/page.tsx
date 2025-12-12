'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Twitter, ArrowRight, Check } from 'lucide-react';

export default function ContactPage() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('submitting');

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setFormState('success');
        // Reset form after 3 seconds
        setTimeout(() => setFormState('idle'), 3000);
    }

    const socialLinks = [
        { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
        { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    ];

    return (
        <main className="min-h-screen bg-neutral-950 flex flex-col justify-center py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
                            Let's shape <br />
                            <span className="text-neutral-500">the vision.</span>
                        </h1>
                        <p className="text-xl text-neutral-400 leading-relaxed mb-12 max-w-md">
                            Open for collaborations on commercials, music videos, and narrative films.
                            Tell me about your story.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</h3>
                                <a href="mailto:harriselmac@gmail.com" className="text-2xl text-white hover:text-neutral-300 transition-colors font-serif">
                                    harriselmac@gmail.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Socials</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-white hover:bg-neutral-900 transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-neutral-900/30 p-8 md:p-12 rounded-2xl border border-neutral-800/50 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-neutral-500">Name</label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-neutral-500">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                                >
                                    <option className="bg-neutral-900">Project Inquiry</option>
                                    <option className="bg-neutral-900">Collaboration</option>
                                    <option className="bg-neutral-900">General Question</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-500">Message</label>
                                <textarea
                                    required
                                    id="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState !== 'idle'}
                                className="w-full bg-white text-neutral-950 py-4 px-8 rounded-full font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                {formState === 'submitting' ? (
                                    <span>Sending...</span>
                                ) : formState === 'success' ? (
                                    <>
                                        <span>Sent Successfully</span>
                                        <Check size={18} />
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
