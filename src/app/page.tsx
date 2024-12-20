import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";
import SkillsCard from "@/components/SkillsCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // antiliased hamaraa font ko smooth krte hai
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featured />
      <SkillsCard />
      <UpcomingWebinars />
      <Contact />
      <Footer />
    </main>
  );
}
