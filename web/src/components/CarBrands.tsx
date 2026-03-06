import Image from "next/image";

const brands = [
    { name: "BMW", file: "/logos/BMW_Roundel.svg", filterClass: "opacity-60 group-hover:opacity-100" },
    { name: "Mazda", file: "/logos/mazda-svgrepo-com.svg", filterClass: "brightness-0 invert opacity-60 group-hover:opacity-100" },
    { name: "Honda", file: "/logos/honda-svgrepo-com.svg", filterClass: "brightness-0 invert opacity-60 group-hover:opacity-100" },
    { name: "Lexus", file: "/logos/lexus-svgrepo-com.svg", filterClass: "brightness-0 invert opacity-60 group-hover:opacity-100" },
    { name: "KIA", file: "/logos/KIA_logo3.svg", filterClass: "brightness-0 invert opacity-60 group-hover:opacity-100" },
    { name: "Mercedes-Benz", file: "/logos/mercedes-benz-alt-svgrepo-com.svg", filterClass: "brightness-0 invert opacity-60 group-hover:opacity-100" },
    { name: "Nissan", file: "/logos/nissan-svgrepo-com.svg", filterClass: "brightness-0 invert opacity-60 group-hover:opacity-100" },
    { name: "RAM", file: "/logos/ram-alt-svgrepo-com.svg", filterClass: "brightness-0 invert opacity-60 group-hover:opacity-100" },
];

export default function CarBrands() {
    return (
        <section className="py-20 bg-midnight-900 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-4">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                        Any Brand, Any Model
                    </h2>
                </div>
                <p className="text-center text-gray-400 mb-12">
                    We source vehicles from all makes and models across the US market.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-gold-500/30 hover:bg-white/8 transition-all duration-300 group"
                        >
                            <Image
                                src={brand.file}
                                alt={brand.name}
                                width={72}
                                height={48}
                                className={`${brand.filterClass} transition-opacity duration-300 object-contain`}
                            />
                            <span className="text-gray-500 text-xs tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 mt-8 text-sm">
                    & many more — if it&apos;s on the US market, we can get it for you.
</p>
            </div>
        </section>
    );
}
