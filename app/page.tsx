import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import PropertySection from '@/components/home/PropertySection'; // Fixed Path matching your exact sidebar configuration
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF5E6]">
      {/* 1. Hero Slider Section */}
      <Hero />
      
      {/* 2. 8 Property Cards Grid Layer (Image 1 Layout) */}
      <PropertySection />
      
      {/* 3. Agency Services */}
      <Services />
      
      {/* 4. Call To Action Banner */}
      <CTA />
      
      {/* 5. Footer */}
      <footer className="py-10 text-center text-gray-500 border-t border-black/5 bg-[#F9F6F0]">
        <p>© 2026 EstateFlow Agency. All rights reserved.</p>
      </footer>
    </main>
  );
}
