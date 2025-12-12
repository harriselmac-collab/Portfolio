export interface Project {
    id: string;
    title: string;
    category: string;
    role: string;
    thumbnail: string; // URL or local path
    videoUrl?: string; // Vimeo/YouTube ID or direct link
    description?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Neon Nights",
        category: "Music Video",
        role: "Editor & Colorist",
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=3100&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
        description: "A cyberpunk-inspired music video focusing on neon grading and fast-paced cuts."
    },
    {
        id: "2",
        title: "Nature's Breath",
        category: "Documentary",
        role: "Colorist",
        thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop",
        videoUrl: "",
        description: "Short nature documentary. Graded to emphasize natural tones and dynamic range."
    },
    {
        id: "3",
        title: "Urban Flow",
        category: "Commercial",
        role: "Editor",
        thumbnail: "https://images.unsplash.com/photo-1518063319702-e74ec302898c?q=80&w=2070&auto=format&fit=crop",
        videoUrl: "",
        description: "Fashion commercial with high-energy editing."
    },
    {
        id: "4",
        title: "The Silent Echo",
        category: "Film Poster",
        role: "Designer",
        thumbnail: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
        description: "Minimalist horror movie poster design."
    },
    {
        id: "5",
        title: "Retrograde",
        category: "Film Poster",
        role: "Designer",
        thumbnail: "https://images.unsplash.com/photo-1572445216668-3d84de31f1f0?q=80&w=2070&auto=format&fit=crop",
        description: "Sci-fi theatrical release poster."
    }
];
