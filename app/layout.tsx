import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Video Editor Portfolio',
  description: 'Portfolio of a professional Video Editor & Colorist',
};

import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-neutral-950 text-neutral-50 cursor-none`}>
        <SmoothScroll />
        <CustomCursor />
        {/* Cinematic Overlays */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay">
          <div className="absolute inset-0 bg-grain animate-grain w-[300%] h-[300%] -left-[100%] -top-[100%]" />
        </div>


        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
