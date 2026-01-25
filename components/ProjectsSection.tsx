import { ProjectCard } from "./ProjectCard";
import QuizMaster from "@/public/quizmaster.webp";
import SocialSphere from "@/public/socialsphere.webp";
import WingsInProgress from "@/public/wingsinprogress.webp";

export function ProjectsSection() {
  const projects = [
    {
      title: "Quiz Master",
      description: <p>
        A dynamic, <span className="text-foreground font-medium">real-time multiplayer</span> web application that allows users to join or host engaging quiz rooms. Participants can compete by answering <span className="text-foreground font-medium">AI-generated questions</span> on a variety of topics, providing an interactive and competitive experience.
      </p>,
      image: QuizMaster,
      repo: "https://github.com/IronJosh786/multiplayer-quiz-game",
      preview: "https://quiz.faizanejaz.com/",
      className: "col-span-1 md:col-span-2 lg:col-span-1",
      techStack: [
        "Google Gemini API",
        "Cloudflare Workers",
        "React",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Websockets",
      ],
    },
    {
      title: "Wings In Progress",
      description: <p>
        A comprehensive application that provides <span className="text-foreground font-medium">aspiring pilots</span> a platform to <span className="text-foreground font-medium">track their flight training progress</span>. It simplifies essential tasks like <span className="text-foreground font-medium">logging flights, tracking progress and analyzing performance metrics</span> through an intuitive user interface.
      </p>,
      image: WingsInProgress,
      repo: "https://github.com/IronJosh786/WingsInProgress",
      preview: "https://wings-in-progress.vercel.app/",
      className: "col-span-1",
      techStack: [
        "Next.js",
        "MongoDB",
        "Mongoose",
        "React",
        "React Query",
        "Typescript",
      ],
    },
    {
      title: "Social Sphere",
      description: <p>
        A feature-rich <span className="text-foreground font-medium">social media platform</span> enabling users to connect and share. Users can post content, interact through likes and comments, follow other users to stay updated on their activities, and engage in a variety of other social networking functions.
      </p>,
      image: SocialSphere,
      repo: "https://github.com/IronJosh786/Social-Media-App",
      preview: "https://social-sphere-two.vercel.app/",
      className: "col-span-1",
      techStack: [
        "MongoDB",
        "Mongoose",
        "Express",
        "React",
        "Cloudinary",
        "JavaScript",
      ],
    },
  ];
  return (
    <section id="projects">
      <div>
        <h2 className="mb-8">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className={project.className}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
