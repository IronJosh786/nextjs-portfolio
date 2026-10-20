import { SkillCard } from "./SkillCard";
import { Server, Bot, Database, Layers } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend & Distributed Systems",
      skills: [
        { name: "Node.js" },
        { name: "Microservices" },
        { name: "RabbitMQ" },
        { name: "Distributed Locking" },
        { name: "REST APIs" },
        { name: "WebSockets" },
        { name: "OAuth 2.0" },
        { name: "Stripe" },
      ],
    },
    {
      icon: Bot,
      title: "AI & Agent Infrastructure",
      skills: [
        { name: "Model Context Protocol (MCP)" },
        { name: "RAG" },
        { name: "LangChain" },
        { name: "Pinecone" },
        { name: "Vapi" },
        { name: "Twilio" },
        { name: "Google Gemini API" },
      ],
    },
    {
      icon: Database,
      title: "Databases & Languages",
      skills: [
        { name: "TypeScript" },
        { name: "Python" },
        { name: "C++" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Redis" },
      ],
    },
    {
      icon: Layers,
      title: "Frameworks & DevOps",
      skills: [
        { name: "Express" },
        { name: "Next.js" },
        { name: "Django" },
        { name: "Prisma" },
        { name: "Mongoose" },
        { name: "React" },
        { name: "Docker" },
        { name: "Git" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div>
        <h2 className="mb-8">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex">
            <SkillCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
}
