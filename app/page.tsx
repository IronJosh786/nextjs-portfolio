import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          {/* About Section */}
          <SectionWrapper className="py-12" id="about">
            <AboutSection />
          </SectionWrapper>

          {/* Experience Section */}
          <SectionWrapper className="lg:col-span-2" id="experience">
            <ExperienceSection />
          </SectionWrapper>

          {/* Projects Section */}
          <SectionWrapper id="projects">
            <ProjectsSection />
          </SectionWrapper>

          {/* Skills Section */}
          <SectionWrapper id="skills">
            <SkillsSection />
          </SectionWrapper>

          {/* Contact Section */}
          <SectionWrapper id="contact">
            <ContactSection />
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}
