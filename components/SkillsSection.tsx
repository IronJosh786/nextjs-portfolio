import { BlurFade } from "./blur-fade";
import { SkillCard } from "./SkillCard";
import { Server, LaptopMinimal, Wrench } from "lucide-react";

export function SkillsSection() {
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
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["WebSocket", "LangChain", "Docker"],
      className: "md:col-span-2 lg:col-span-1",
    },
  ];
  return (
    <section id="skills">
      <BlurFade delay={0.075} inView>
        <h2 className="mb-8">Skills</h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <BlurFade
            key={index}
            delay={0.075 * (index + 2)}
            inView
            className={`flex ${category.className || ""}`}
          >
            <SkillCard {...category} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
