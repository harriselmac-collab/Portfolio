'use client';

import { Project } from '@/app/data/projects';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
    priority?: boolean;
    onClick: (project: Project) => void;
    index: number;
}

export default function ProjectCard({ project, priority = false, onClick, index }: ProjectCardProps) {
    const isPoster = project.category === "Film Poster";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative cursor-pointer"
            onClick={() => !isPoster && onClick(project)}
        >
            <div className={`${isPoster ? 'aspect-[2/3]' : 'aspect-video'} relative overflow-hidden rounded-lg bg-neutral-900 shadow-2xl`}>
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    priority={priority}
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay - Only for videos */}
                {!isPoster && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                            <Play className="text-white fill-white ml-1" size={24} />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-4 flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-neutral-200 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">{project.description}</p>
                </div>
                <div className="text-right">
                    <span className="block text-xs uppercase tracking-wider text-neutral-400 border border-neutral-800 px-2 py-1 rounded">
                        {project.category}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
