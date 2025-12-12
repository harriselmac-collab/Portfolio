'use client';

import { Project } from '@/app/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-6xl bg-neutral-900 rounded-lg overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-neutral-800">
                        <div>
                            <h3 className="text-xl font-medium text-white">{project.title}</h3>
                            <p className="text-sm text-neutral-400">{project.category} • {project.role}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Video Container */}
                    <div className="relative aspect-video bg-black">
                        {/* 
                In a real app, you'd parse videoUrl to determine if it's YouTube/Vimeo 
                and render the appropriate iframe. 
                For now, we'll just show a placeholder or basic iframe if URL exists.
             */}
                        {project.videoUrl ? (
                            <iframe
                                src={project.videoUrl.replace('watch?v=', 'embed/')}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                                Video Source Not Available
                            </div>
                        )}
                    </div>

                    <div className="p-6">
                        <p className="text-neutral-300">{project.description}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
