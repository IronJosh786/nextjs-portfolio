import { useRef } from "react";
import { SkillCard } from "./SkillCard";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Server, LaptopMinimal, Wrench } from "lucide-react";

export function SkillsSection() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      icon: Server,
      title: "Backend",
      skills: [
        "Express.js",
        "Postgres",
        "Prisma",
        "MongoDB",
        "Mongoose",
        "Redis",
      ],
      delay: 0.1,
    },
    {
      icon: LaptopMinimal,
      title: "Frontend",
      skills: [
        "HTML, CSS",
        "JavaScript, TypeScript",
        "React, Next.js",
        "Tanstack Query",
        "Expo",
      ],
      delay: 0.15,
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["WebSocket", "LangChain", "Docker"],
      delay: 0.2,
      className: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <motion.section
      id="skills"
      className="px-4 md:px-8 py-8 border-l border-r border-dashed container section-shadow"
      ref={skillsRef}
      initial="hidden"
      animate={skillsInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h2 className="mb-8" variants={fadeIn}>
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className={`flex ${category.className || ""}`}>
            <SkillCard {...category} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
