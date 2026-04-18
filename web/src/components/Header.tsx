'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const handleScroll = (e: React.MouseEvent, id: string, close?: () => void) => {
    const el = document.getElementById(id);
    if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${id}`);
    }
    close?.();
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const close = () => setMenuOpen(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-midnight-900/50 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 group" onClick={close}>
                    <Image src="/logo-car.png" alt="CarDeali logo" width={120} height={80} priority className="h-20 md:h-28 w-auto" />
                    <Image src="/brand-name.png" alt="CARDEALI" width={380} height={95} priority className="h-20 md:h-32 w-auto" />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="/#how-it-works" onClick={(e) => handleScroll(e, 'how-it-works')} className="hover:text-gold-400 transition-colors">
                        How it Works
                    </Link>
                    <Link href="/pricing" className="hover:text-gold-400 transition-colors">
                        Pricing
                    </Link>
                    <Link href="/#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-6 py-2.5 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-300">
                        Start Request
                    </Link>
                </nav>

                {/* Hamburger button — mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="md:hidden bg-midnight-900/95 backdrop-blur-md border-t border-white/5 px-6 py-5 flex flex-col gap-4 text-sm font-medium text-gray-300">
                    <Link
                        href="/#how-it-works"
                        onClick={(e) => handleScroll(e, 'how-it-works', close)}
                        className="hover:text-gold-400 transition-colors py-1"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="/pricing"
                        onClick={close}
                        className="hover:text-gold-400 transition-colors py-1"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/#contact"
                        onClick={(e) => handleScroll(e, 'contact', close)}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-300"
                    >
                        Start Request
                    </Link>
                </div>
            )}
        </header>
    );
}
