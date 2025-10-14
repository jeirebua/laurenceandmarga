import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StorySection />
      <FAQSection />
    </div>
  );
}
