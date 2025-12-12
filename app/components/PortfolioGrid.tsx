'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';
import { Project } from '../data/projects';

interface PortfolioGridProps {
    initialProjects: Project[];
}

export default function PortfolioGrid({ initialProjects }: PortfolioGridProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(initialProjects.map(p => p.category)))];
    const filteredProjects = filter === "All"
        ? initialProjects
        : initialProjects.filter(p => p.category === filter);

    return (
        <section className="py-24 px-6 md:px-12 bg-neutral-950" id="work">
            <div className="container mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Selected Work</h2>
                        <div className="h-1 w-20 bg-white" />
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`text-sm uppercase tracking-wider transition-colors px-4 py-2 rounded-full border ${filter === category
                                    ? "bg-white text-neutral-950 border-white"
                                    : "text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            priority={index < 2}
                            onClick={setSelectedProject}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <VideoModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
