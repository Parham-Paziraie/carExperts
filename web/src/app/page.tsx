import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarBrands from "@/components/CarBrands";
import WhyCarDeali from "@/components/WhyCarDeali";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import RequestForm from "@/components/RequestForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-900">
      <Header />
      <Hero />
      <CarBrands />
      <WhyCarDeali />
      <HowItWorks />
      <Reviews />
      <RequestForm />

      <footer className="bg-midnight-950 py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} carDeali. All rights reserved.</p>
          <p className="mt-2">Premium Car Concierge Service.</p>
        </div>
      </footer>
    </main>
  );
}
