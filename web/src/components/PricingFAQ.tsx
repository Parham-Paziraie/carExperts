'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What's included in the $399 fee?",
        answer: "The $399 covers everything: market research, identifying available inventory, negotiating with dealerships on your behalf, and coordinating the purchase process until you're ready to sign."
    },
    {
        question: "How does the negotiation work?",
        answer: "We contact dealerships directly, leveraging market data and negotiation expertise to push the price below what you'd get walking in yourself. We handle all back-and-forth communication so you don't have to."
    },
    {
        question: "Do you search nationwide?",
        answer: "Yes. We search across the entire USA market to find the best available deal matching your criteria — not just local dealerships."
    },
    {
        question: "How much can I save?",
        answer: "Savings vary by vehicle and market conditions, but our clients typically save well beyond the $399 fee. On a $50,000 car, even a 2% reduction saves $1,000."
    },
    {
        question: "What if I don't like the deal?",
        answer: "We present the best deal we can negotiate and you make the final call. We'll always be transparent about what we found and why it's the best available option."
    },
    {
        question: "How long does the process take?",
        answer: "Most negotiations are completed within 3–7 business days, depending on vehicle availability and dealership response times."
    }
];

export default function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-3">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="glass-panel rounded-xl border border-white/10 overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left group"
                    >
                        <span className="font-semibold text-white group-hover:text-gold-300 transition-colors pr-4">
                            {faq.question}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48" : "max-h-0"}`}
                    >
                        <p className="px-6 pb-5 text-gray-400 leading-relaxed text-sm">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
