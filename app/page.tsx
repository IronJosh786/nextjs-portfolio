"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { staggerContainer } from "@/lib/utils";
import { BlurFade } from "@/components/blur-fade";
import { motion, AnimatePresence } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowInitialAnimation(false);
    }, 1250);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnimatePresence mode="wait">
        {showInitialAnimation ? (
          <motion.div
            key="loader"
            className="min-h-screen w-full flex items-center justify-center"
          >
            <BlurFade delay={0.6} blur="4px">
              <h1>Faizan Ejaz</h1>
            </BlurFade>
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
