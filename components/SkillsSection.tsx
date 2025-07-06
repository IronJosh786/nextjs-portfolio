import { SkillCard } from "./SkillCard";
import { Server, LaptopMinimal, Wrench } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: LaptopMinimal,
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", category: "Core" },
        { name: "TypeScript", category: "Language" },
        { name: "Next.js", category: "Framework" },
        { name: "React", category: "Library" },
        { name: "React Native", category: "Mobile" },
        { name: "Expo", category: "Framework" },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Express.js", category: "Framework" },
        { name: "PostgreSQL, MongoDB", category: "Database" },
        { name: "Pinecone", category: "Vector Database" },
        { name: "Prisma, Mongoose", category: "ORM/ODM" },
        { name: "Redis", category: "Cache" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      className: "md:col-span-2 lg:col-span-1",
      skills: [
        { name: "WebSocket", category: "Realtime" },
        { name: "LangChain", category: "AI" },
        { name: "Docker", category: "DevOps" },
        { name: "Zod", category: "Validation" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div>
        <h2 className="mb-8">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className={`flex ${category.className || ""}`}>
            <SkillCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
}
