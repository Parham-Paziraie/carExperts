import Link from "next/link";
import { Car } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-midnight-900/50 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Car className="w-8 h-8 text-gold-500 group-hover:text-gold-400 transition-colors" />
                    <span className="font-serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
                        carDealy
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#how-it-works" className="hover:text-gold-400 transition-colors">
                        How it Works
                    </Link>
                    <Link href="#pricing" className="hover:text-gold-400 transition-colors">
                        Pricing
                    </Link>
                    <Link href="#contact" className="px-6 py-2.5 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-300">
                        Start Request
                    </Link>
                </nav>
            </div>
        </header>
    );
}
