import { Trophy, TrendingDown, ShieldCheck, MapPin } from "lucide-react";

const reasons = [
    {
        icon: Trophy,
        title: "Industry Expertise",
        description: "Years of experience in the US car market means we know every trick dealerships use — and how to counter them."
    },
    {
        icon: TrendingDown,
        title: "Unmatched Negotiation",
        description: "We bring the price down more than you'd expect. Our negotiators know exactly what leverage to use."
    },
    {
        icon: ShieldCheck,
        title: "Transparent Process",
        description: "$399 fixed fee, no hidden costs. You know exactly what you pay before we start."
    },
    {
        icon: MapPin,
        title: "Nationwide Reach",
        description: "We search across the entire USA market to find the best available deal for your dream car."
    }
];

export default function WhyCarDeali() {
    return (
        <section id="why-cardeali" className="py-24 bg-midnight-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Why <span className="text-gradient-gold">carDeali</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We bring dealership-level expertise to your side of the table.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div key={index} className="glass-panel p-8 rounded-2xl hover:border-gold-500/30 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-full bg-midnight-800 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                                <reason.icon className="w-7 h-7 text-gold-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
