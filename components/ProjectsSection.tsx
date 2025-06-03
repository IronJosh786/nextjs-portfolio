import { BlurFade } from "./blur-fade";
import { ProjectCard } from "./ProjectCard";
import QuizMaster from "@/public/quizmaster.webp";
import SocialSphere from "@/public/socialsphere.webp";
import WingsInProgress from "@/public/wingsinprogress.webp";

export function ProjectsSection() {
  const projects = [
    {
      title: "Quiz Master",
      description:
        "A dynamic, real-time multiplayer web application that allows users to join or host engaging quiz rooms. Participants can compete by answering AI-generated questions on a variety of topics, providing an interactive and competitive experience.",
      image: QuizMaster,
      repo: "https://github.com/IronJosh786/multiplayer-quiz-game",
      preview: "https://quiz.faizanejaz.com/",
      className: "col-span-1 md:col-span-2 lg:col-span-1",
      techStack: [
        "WebSockets",
        "Express.js",
        "Postgres",
        "Prisma",
        "React.js",
        "Cloudflare Workers",
        "Typescript",
      ],
    },
    {
      title: "Social Sphere",
      description:
        "A feature-rich social media platform enabling users to connect and share. Users can post content, interact through likes and comments, follow other users to stay updated on their activities, and engage in a variety of other social networking functions.",
      image: SocialSphere,
      repo: "https://github.com/IronJosh786/Social-Media-App",
      preview: "https://social-sphere-two.vercel.app/",
      className: "col-span-1",
      techStack: [
        "MongoDB",
        "Mongoose",
        "Express.js",
        "React.js",
        "Cloudinary",
        "JavaScript",
      ],
    },
    {
      title: "Wings In Progress",
      description:
        "A comprehensive application designed to provide pilots a streamlined platform to manage and track their flight training progress. It simplifies essential tasks like logging flight hours, monitoring progress towards certifications, and analyzing performance metrics to identify areas for improvement.",
      image: WingsInProgress,
      repo: "https://github.com/IronJosh786/WingsInProgress",
      preview: "https://wings-in-progress.vercel.app/",
      className: "col-span-1",
      techStack: [
        "Next.js",
        "MongoDB",
        "Mongoose",
        "React.js",
        "React Query",
        "Typescript",
      ],
    },
  ];
  return (
    <section id="projects">
      <BlurFade delay={0.15} inView>
        <h2 className="mb-8">Projects</h2>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <BlurFade
            delay={0.2}
            inView
            key={index}
            className={project.className}
          >
            <ProjectCard {...project} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
