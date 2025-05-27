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
        "Real-time multiplayer web app that lets users join or host quiz rooms and compete by answering AI-generated questions.",
      image: "/quizmaster.png",
      className: "col-span-1 md:col-span-2",
    },
    {
      title: "Wings In Progress",
      description:
        "A Next.js application designed to provide pilots a comprehensive platform to manage and track their flight training progress, simplifying tasks such as logging flights, tracking progress and analyzing performance metrics.",
      image: "/wingsinprogress.png",
      className: "col-span-1",
    },
    {
      title: "Social Sphere",
      description:
        "A social media platform enabling users to post, like, comment, follow other users and many more.",
      image: "/socialsphere.png",
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
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-8"
        variants={fadeIn}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
