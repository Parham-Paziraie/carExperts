'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function RequestForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        console.log("Form submitted");
    };

    if (submitted) {
        return (
            <div className="text-center py-16 px-6 glass-panel rounded-2xl animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-gray-400">We will contact you shortly to start the search.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-gold-400 hover:text-gold-300 underline underline-offset-4"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <section id="contact" className="py-24 bg-midnight-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to drive?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Fill out the form with your preferences. We require a $200 retainer to start the dedicated search process, and a $500 success fee upon finalization.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold-400 border border-white/10">
                                1
                            </div>
                            <div>
                                <strong className="text-white block">Submit Preferences</strong>
                                <span className="text-sm">Tell us what you are looking for.</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold-400 border border-white/10">
                                2
                            </div>
                            <div>
                                <strong className="text-white block">Consultation</strong>
                                <span className="text-sm">We'll contact you to confirm details.</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold-400 border border-white/10">
                                3
                            </div>
                            <div>
                                <strong className="text-white block">We Search</strong>
                                <span className="text-sm">Sit back while we find the perfect deal.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl space-y-6 border border-white/10 relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Make</label>
                            <input type="text" placeholder="e.g. Porsche" required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all placeholder:text-gray-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Model</label>
                            <input type="text" placeholder="e.g. 911 GT3" required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all placeholder:text-gray-600" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Year</label>
                            <input type="text" placeholder="e.g. 2022+"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all placeholder:text-gray-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Budget</label>
                            <input type="text" placeholder="$100k - $150k"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all placeholder:text-gray-600" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Delivery Location</label>
                        <input type="text" placeholder="City, State" required
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all placeholder:text-gray-600" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Phone</label>
                            <input type="tel" placeholder="(555) 000-0000" required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all placeholder:text-gray-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</label>
                            <input type="email" placeholder="you@example.com" required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all placeholder:text-gray-600" />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-midnight-900 font-bold text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Start Request"
                        )}
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        By submitting, you agree to our contact terms. We respect your privacy.
                    </p>
                </form>
            </div>
        </section>
    );
}
