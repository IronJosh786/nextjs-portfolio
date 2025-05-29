import { useRef } from "react";
import { fadeIn } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function AboutSection() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="about"
      className="px-4 md:px-8 py-12 border-l border-r border-dashed container"
      ref={aboutRef}
      initial="hidden"
      animate={aboutInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <motion.h1
        className="mb-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        Hi, I&apos;m <span>Faizan</span>
        <br />
        Software Engineer
      </motion.h1>
      <motion.p
        className="mb-8 text-lg"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
          },
        }}
      >
        Focused on crafting visually stunning, and interactive applications.
        With expertise in frontend and backend technologies, I specialize in
        seamless user experiences, delivering innovative, full-stack solutions.
      </motion.p>
      <motion.div
        className="flex gap-2 sm:gap-4"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
          },
        }}
      >
        <Button asChild>
          <Link target="_blank" href={"mailto:faizanejazshaikh@gmail.com"}>
            Email Me
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1wOr-glQNvFuiIwcrV_zhOuDsilbHvSX3/view?usp=sharing"
            }
          >
            View Resume
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
