import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import PricingFAQ from "@/components/PricingFAQ";

const included = [
    "Full USA market research for your target vehicle",
    "Direct negotiation with dealerships on your behalf",
    "All communication handled — no back-and-forth for you",
    "Best price identified and presented to you",
    "Support until you're ready to sign",
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-midnight-900">
            <Header />

            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
                            Simple, <span className="text-gradient-gold">Transparent</span> Pricing
                        </h1>
                        <p className="text-gray-400 text-lg">
                            One fixed fee. No retainers. No success fees. No surprises.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
                        {/* Pricing Card */}
                        <div className="glass-panel p-10 rounded-3xl border border-gold-500/20 relative">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-[60px] pointer-events-none" />

                            <p className="text-sm font-semibold tracking-widest text-gold-400 uppercase mb-3">Car Negotiation Service</p>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="font-serif text-7xl font-bold text-white">$399</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-8">Fixed fee — paid once to get started</p>

                            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                                We handle the entire negotiation process for you — from researching availability across the USA to securing the lowest price at the dealership.
                            </p>

                            <ul className="space-y-3 mb-10">
                                {included.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col gap-3">
                                <Link
                                    href="/#contact"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full text-midnight-900 font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                                >
                                    Get Started
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all duration-300 text-sm"
                                >
                                    Schedule a Call
                                </Link>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                            <PricingFAQ />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-midnight-950 py-12 border-t border-white/5">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} carDeali. All rights reserved.</p>
                    <p className="mt-2">Premium Car Concierge Service.</p>
                </div>
            </footer>
        </main>
    );
}
