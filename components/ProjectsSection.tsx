import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";

export function ProjectsSection() {
  const projectRef = useRef(null);
  const projectInView = useInView(projectRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Quiz Master",
      description:
        "A dynamic, real-time multiplayer web application that allows users to join or host engaging quiz rooms. Participants can compete by answering AI-generated questions on a variety of topics, providing an interactive and competitive experience.",
      image: "/quizmaster.webp",
      repo: "https://github.com/IronJosh786/multiplayer-quiz-game",
      preview: "https://quiz.faizanejaz.com/",
      className: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
      title: "Social Sphere",
      description:
        "A feature-rich social media platform enabling users to connect and share. Users can post content, interact through likes and comments, follow other users to stay updated on their activities, and engage in a variety of other social networking functions.",
      image: "/socialsphere.webp",
      repo: "https://github.com/IronJosh786/Social-Media-App",
      preview: "https://social-sphere-two.vercel.app/",
      className: "col-span-1",
    },
    {
      title: "Wings In Progress",
      description:
        "A comprehensive application designed to provide pilots a streamlined platform to manage and track their flight training progress. It simplifies essential tasks like logging flight hours, monitoring progress towards certifications, and analyzing performance metrics to identify areas for improvement.",
      image: "/wingsinprogress.webp",
      repo: "https://github.com/IronJosh786/WingsInProgress",
      preview: "https://wings-in-progress.vercel.app/",
      className: "col-span-1",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="px-4 md:px-8 py-8 border-l border-r border-dashed container"
      ref={projectRef}
      initial="hidden"
      animate={projectInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h2 className="mb-8" variants={fadeIn}>
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
