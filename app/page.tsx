"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlurFade } from "@/components/blur-fade";
import { motion, AnimatePresence } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { staggerContainer } from "@/lib/utils";

export default function Home() {
  const [showInitalAnimation, setShowInitalAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowInitalAnimation(false);
    }, 1250);
  }, []);

  return (
    <AnimatePresence>
      {showInitalAnimation ? (
        <motion.div
          key="initial"
          className="min-h-screen w-full grid place-items-center"
        >
          <BlurFade delay={0.4} blur="6px">
            <h1>Faizan Ejaz</h1>
          </BlurFade>
        </motion.div>
      ) : (
        <div className="min-h-screen flex flex-col bg-background">
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
        </div>
      )}
    </AnimatePresence>
  );
}
