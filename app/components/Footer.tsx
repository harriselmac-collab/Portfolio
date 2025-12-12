import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-900 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-neutral-500 text-sm">
                    © 2025 Volta Studio. All rights reserved.
                </div>

                <div className="flex items-center space-x-6">
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:harriselmac@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
