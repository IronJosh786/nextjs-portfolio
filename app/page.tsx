"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { staggerContainer } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [showInitialAnimation, setShowInitialAnimation] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
    setShowInitialAnimation(true);
  }, []);

  if (!hasHydrated)
    return <div className="min-h-screen bg-background transition-none" />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnimatePresence mode="wait">
        {showInitialAnimation ? (
          <motion.div
            key="loader"
            className="min-h-screen w-full flex items-center justify-center"
          >
            <h1
              className="initial-loader"
              onAnimationEnd={() => setShowInitialAnimation(false)}
            >
              Faizan Ejaz
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            className="flex flex-col min-h-screen"
          >
            <Header />

            <motion.main
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex-1"
            >
              {/* About Section */}
              <SectionWrapper className="py-12" id="about">
                <AboutSection />
              </SectionWrapper>

              {/* Experience Section */}
              <SectionWrapper
                className="lg:col-span-2 section-shadow"
                id="experience"
              >
                <ExperienceSection />
              </SectionWrapper>

              {/* Projects Section */}
              <SectionWrapper id="projects">
                <ProjectsSection />
              </SectionWrapper>

              {/* Skills Section */}
              <SectionWrapper className="section-shadow" id="skills">
                <SkillsSection />
              </SectionWrapper>

              {/* Contact Section */}
              <SectionWrapper id="contact">
                <ContactSection />
              </SectionWrapper>
            </motion.main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
