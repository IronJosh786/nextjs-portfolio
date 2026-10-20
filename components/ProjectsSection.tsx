import { ProjectCard } from "./ProjectCard";
import QuizMaster from "@/public/quizmaster.webp";
import WingsInProgress from "@/public/wingsinprogress.webp";

export function ProjectsSection() {
  const projects = [
    {
      title: "Quiz Master",
      description: (
        <p>
          A dynamic,{" "}
          <span className="text-foreground font-medium">real-time multiplayer</span>{" "}
          web application that allows users to join or host engaging quiz rooms.
          Participants can compete by answering{" "}
          <span className="text-foreground font-medium">AI-generated questions</span>{" "}
          on a variety of topics, providing an interactive and competitive experience.
        </p>
      ),
      image: QuizMaster,
      repo: "https://github.com/IronJosh786/multiplayer-quiz-game",
      preview: "https://quiz.faizanejaz.com/",
      techStack: [
        "Google Gemini API",
        "Cloudflare Workers",
        "React",
        "Express",
        "PostgreSQL",
        "Prisma",
        "WebSockets",
      ],
    },
    {
      title: "Wings In Progress",
      description: (
        <p>
          A comprehensive application that provides{" "}
          <span className="text-foreground font-medium">aspiring pilots</span> a platform to{" "}
          <span className="text-foreground font-medium">
            track their flight training progress
          </span>
          . It simplifies essential tasks like{" "}
          <span className="text-foreground font-medium">
            logging flights, tracking progress, and analyzing performance metrics
          </span>{" "}
          through an intuitive user interface.
        </p>
      ),
      image: WingsInProgress,
      repo: "https://github.com/IronJosh786/WingsInProgress",
      preview: "https://wings-in-progress.vercel.app/",
      techStack: [
        "Next.js",
        "MongoDB",
        "Mongoose",
        "React",
        "React Query",
        "TypeScript",
        "NextAuth.js",
        "Zod",
      ],
    },
  ];

  return (
    <section id="projects">
      <div>
        <h2 className="mb-8">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
