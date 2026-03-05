import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-car.png"
                    alt="Luxury Car"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/90 via-midnight-900/40 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                        <span className="text-xs font-medium tracking-wider text-gold-400 uppercase">
                            Premium Concierge Service
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-white">
                        Your Personal <br />
                        <span className="text-gradient-gold">Car Concierge</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                        Stop searching. Start driving. We negotiate the best deals,
                        handle inspections, and deliver your dream car directly to you.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/5 border border-gold-500/40 text-gold-300">💰 Save Money</span>
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/5 border border-gold-500/40 text-gold-300">⚡ Save Time</span>
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/5 border border-gold-500/40 text-gold-300">🌿 Save Energy</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/60 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                        <span className="text-sm font-semibold text-gold-300">
                            🔥 Only $99 negotiation fee — first 5 people
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full text-midnight-900 font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all duration-300"
                        >
                            How it Works
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
