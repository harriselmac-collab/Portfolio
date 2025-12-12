'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Artwork {
    id: string;
    src: string;
    title: string;
    artist: string;
    aspect: string; // Tailwind aspect class or arbitrary style
}

export default function InspirationPage() {
    const artworks: Artwork[] = [
        {
            id: '1',
            src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop",
            title: "Abstract Texture",
            artist: "Unsplash",
            aspect: "aspect-[3/4]"
        },
        {
            id: '2',
            src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2137&auto=format&fit=crop",
            title: "Color Study",
            artist: "Unsplash",
            aspect: "aspect-square"
        },
        {
            id: '3',
            src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
            title: "Light & Shadow",
            artist: "Unsplash",
            aspect: "aspect-[4/5]"
        },
        {
            id: '4',
            src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2188&auto=format&fit=crop",
            title: "Architectural Lines",
            artist: "Unsplash",
            aspect: "aspect-[3/2]"
        },
        {
            id: '5',
            src: "https://images.unsplash.com/photo-1579783902614-a3fb39279c23?q=80&w=2072&auto=format&fit=crop",
            title: "Vibrant Gradient",
            artist: "Unsplash",
            aspect: "aspect-[9/16]"
        },
        {
            id: '6',
            src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
            title: "Fluid Motion",
            artist: "Unsplash",
            aspect: "aspect-[2/3]"
        },
        {
            id: '7',
            src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2128&auto=format&fit=crop",
            title: "Liquid Metal",
            artist: "Unsplash",
            aspect: "aspect-square"
        },
        {
            id: '8',
            src: "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=2070&auto=format&fit=crop",
            title: "Neon Cyberpunk",
            artist: "Unsplash",
            aspect: "aspect-[16/9]"
        },
        {
            id: '9',
            src: "https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&w=2070&auto=format&fit=crop",
            title: "Gradient Mesh",
            artist: "Unsplash",
            aspect: "aspect-[3/4]"
        }
    ];

    return (
        <main className="min-h-screen bg-neutral-950 pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl font-serif font-bold text-white mb-4 tracking-tight">
                        Visual <span className="text-neutral-500">Feed</span>
                    </h1>
                    <p className="text-neutral-400">Curated references and color studies.</p>
                </motion.div>

                {/* Masonry Grid via CSS Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {artworks.map((art, index) => (
                        <motion.div
                            key={art.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="break-inside-avoid relative group rounded-lg overflow-hidden bg-neutral-900"
                        >
                            <div className={`relative w-full ${art.aspect}`}>
                                <Image
                                    src={art.src}
                                    alt={art.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-medium text-lg">{art.title}</h3>
                                    <p className="text-neutral-400 text-sm">Source: {art.artist}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
