const reviews = [
    {
        quote: "Saved me weeks of dealership visits. Got my BMW M3 delivered in 10 days.",
        name: "James R.",
        location: "Dallas, TX",
    },
    {
        quote: "They negotiated $6,000 below asking price. Absolutely worth every penny.",
        name: "Priya S.",
        location: "Miami, FL",
    },
    {
        quote: "From request to driveway in under 2 weeks. Effortless experience.",
        name: "Marcus T.",
        location: "Los Angeles, CA",
    },
];

export default function Reviews() {
    return (
        <section className="py-24 bg-midnight-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/5 blur-[120px] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400 text-lg">Real stories from real drivers.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="glass-panel rounded-2xl p-8 border border-white/10 flex flex-col gap-4">
                            <div className="flex gap-1 text-gold-400 text-lg">
                                {"★★★★★"}
                            </div>
                            <p className="text-gray-300 text-base leading-relaxed flex-1">
                                &ldquo;{review.quote}&rdquo;
                            </p>
                            <div>
                                <p className="text-white font-semibold">{review.name}</p>
                                <p className="text-gray-500 text-sm">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
