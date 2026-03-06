import { Search, ClipboardCheck, CreditCard, Handshake, CarFront } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Tell Us What You Want",
        description: "Send us your preferred car details — make, model, year, color, and budget."
    },
    {
        icon: ClipboardCheck,
        title: "We Research & Verify",
        description: "We check availability and feasibility across the USA market on your behalf."
    },
    {
        icon: CreditCard,
        title: "Agree & Get Started",
        description: "Pay the fixed $399 fee to kick off your dedicated negotiation service."
    },
    {
        icon: Handshake,
        title: "We Negotiate Hard",
        description: "We contact dealerships and bring the price down on your behalf."
    },
    {
        icon: CarFront,
        title: "Sign & Drive",
        description: "Visit the dealership, sign the paperwork, and drive away in your new car."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-midnight-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        Effortless Car Buying Process
                    </h2>
                    <p className="text-gray-400 text-lg">
                        We simplify the complex car buying experience into five easy steps.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="glass-panel p-6 rounded-2xl hover:border-gold-500/30 transition-all duration-300 relative z-10 bg-midnight-900/50">
                                <div className="w-16 h-16 rounded-full bg-midnight-800 border border-gold-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:border-gold-500/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 relative">
                                    <step.icon className="w-7 h-7 text-gold-400" />
                                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-500 text-midnight-900 text-xs font-bold flex items-center justify-center">{index + 1}</span>
                                </div>
                                <h3 className="text-sm font-bold text-center mb-2 text-white">{step.title}</h3>
                                <p className="text-gray-400 text-center leading-relaxed text-xs">
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
