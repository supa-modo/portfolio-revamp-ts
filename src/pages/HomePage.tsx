import { HeroSection } from "@/components/sections/HeroSection";
import { FloatingSkillsCard } from "@/components/sections/FloatingSkillsCard";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildPersonSchema,
  buildWebsiteSchema,
} from "@/components/seo/schemas";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <JsonLd data={buildPersonSchema()} />
      <JsonLd data={buildWebsiteSchema()} />
      <HeroSection />
      <FloatingSkillsCard />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
};
