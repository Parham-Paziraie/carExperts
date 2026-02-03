import { Search, Handshake, CarFront } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Request",
        description: "Tell us your preferred Make, Model, Year, and Budget. We handle the market research."
    },
    {
        icon: Handshake,
        title: "Negotiate",
        description: "We inspect vehicles and negotiate firmly on your behalf to secure the lowest possible price."
    },
    {
        icon: CarFront,
        title: "Drive",
        description: "Once finalized, we arrange delivery. You just sign the papers and drive away."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-midnight-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Effortless Buying Process
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We simplify the complex car buying experience into three easy steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="glass-panel p-8 rounded-2xl hover:border-gold-500/30 transition-all duration-300 relative z-10 bg-midnight-900/50">
                                <div className="w-16 h-16 rounded-full bg-midnight-800 border border-gold-500/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                                    <step.icon className="w-8 h-8 text-gold-400" />
                                </div>
                                <h3 className="text-xl font-bold text-center mb-3 text-white">{step.title}</h3>
                                <p className="text-gray-400 text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
