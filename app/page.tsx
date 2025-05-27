"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div data-vaul-drawer-wrapper="">
      <div className="relative min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* About Section */}
          <SectionWrapper className="" delay={0}>
            <AboutSection />
          </SectionWrapper>

          {/* Experience Section */}
          <SectionWrapper className="" delay={0.3}>
            <ExperienceSection />
          </SectionWrapper>

          {/* Projects Section */}
          <SectionWrapper className="" delay={0.1}>
            <ProjectsSection />
          </SectionWrapper>

          {/* Skills Section */}
          <SectionWrapper className="" delay={0.2}>
            <SkillsSection />
          </SectionWrapper>

          {/* Contact Section */}
          <SectionWrapper className="" delay={0.4}>
            <ContactSection />
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
