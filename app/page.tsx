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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* About Section */}
        <SectionWrapper className="py-12">
          <AboutSection />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper className="lg:col-span-2 section-shadow">
          <ExperienceSection />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper>
          <ProjectsSection />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper className="section-shadow">
          <SkillsSection />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
