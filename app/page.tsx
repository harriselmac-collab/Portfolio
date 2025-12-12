import fs from 'fs';
import path from 'path';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioGrid from './components/PortfolioGrid';
import { projects as staticProjects, Project } from './data/projects';

// Helper to get projects from local files
function getLocalProjects(): Project[] {
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio');

  if (!fs.existsSync(portfolioDir)) {
    return [];
  }

  const projects: Project[] = [];

  // Helper to scan a directory
  const scanDirectory = (dirPath: string, category: string | null) => {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively scan subdirectories, using dir name as category
        scanDirectory(fullPath, file);
      } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
        // Image file found
        // Generate a readable title
        const title = file
          .replace(/\.[^/.]+$/, "")
          .replace(/-/g, " ")
          .replace(/_/g, " ");

        // Determine relative path for src
        const relativePath = path.relative(path.join(process.cwd(), 'public'), fullPath);

        projects.push({
          id: `local-${projects.length}`,
          title: title,
          category: category || "Portfolio", // Use folder name or default
          role: "Creator",
          thumbnail: `/${relativePath}`, // Ensure starts with /
          description: "Portfolio Item"
        });
      }
    });
  };

  scanDirectory(portfolioDir, null);
  return projects;
}

export default function Home() {
  const localProjects = getLocalProjects();
  const allProjects = [...staticProjects, ...localProjects];

  return (
    <main>
      <Hero />
      <PortfolioGrid initialProjects={allProjects} />
      <About />
    </main>
  );
}
