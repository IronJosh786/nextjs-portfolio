import { SkillCard } from "./SkillCard";
import { Server, LaptopMinimal, Database } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: LaptopMinimal,
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django" },
        { name: "Next.js" },
        { name: "React" },
        { name: "React Native (Expo)" },
        { name: "Express" },
        { name: "Prisma" },
        { name: "Mongoose" },
      ],
    },
    {
      icon: Server,
      title: "Backend & Systems",
      skills: [
        { name: "REST APIs" },
        { name: "Microservices" },
        { name: "Distributed Systems" },
        { name: "Websockets" },
        { name: "Stripe" },
      ],
    },
    {
      icon: Database,
      title: "Databases & Languages",
      className: "md:col-span-2 lg:col-span-1",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "Pinecone" },
        { name: "TypeScript" },
        { name: "Python" },
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
