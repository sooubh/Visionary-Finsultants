import AboutPreview from "@/components/sections/AboutPreview";
import FootprintStrip from "@/components/sections/FootprintStrip";
import FoundersTeaser from "@/components/sections/FoundersTeaser";
import Hero from "@/components/sections/Hero";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import StatsStrip from "@/components/sections/StatsStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <SolutionsPreview />
      <AboutPreview />
      <FoundersTeaser />
      <FootprintStrip />
    </main>
  );
}
