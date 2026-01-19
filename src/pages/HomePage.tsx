import { HeroSection } from "@/components/sections/HeroSection";
import { FloatingSkillsCard } from "@/components/sections/FloatingSkillsCard";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FloatingSkillsCard />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
};
