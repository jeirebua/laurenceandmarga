import FAQSection from "@/components/FAQSection";
import GiftRegistrySection from "@/components/GiftRegistrySection";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StorySection />
      <ScheduleSection />
      <FAQSection />
      <GiftRegistrySection />
    </div>
  );
}
