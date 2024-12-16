import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
  return (
    // antiliased hamaraa font ko smooth krte hai
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featured />
      {/* <WhyChooseUs /> */}
      <SkillsCard />
    </main>
  );
}
