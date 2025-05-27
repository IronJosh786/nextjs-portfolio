import { useRef } from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";

export function ExperienceSection() {
  const experienceRef = useRef(null);
  const experienceInView = useInView(experienceRef, {
    once: true,
    amount: 0.1,
  });

  const responsibilities = [
    "Developed functionality to create workspaces for accounts, allowing each workspace to store and manage its own separate data.",
    "Implemented a comprehensive White Labeling solution, enabling users to fully rebrand the platform.",
    "Developed a mobile application that allows users to access, manage, and send emails directly from their inbox.",
    "Developed automated system for fetching, storing, and syncing data from Google Sheets to databases, running every 24 hours to detect and integrate any new data.",
  ];

  return (
    <motion.section
      id="experience"
      ref={experienceRef}
      initial="hidden"
      animate={experienceInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="px-4 md:px-8 py-8 border-l border-r border-dashed container lg:col-span-2"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-8"
        variants={fadeIn}
      >
        Work Experience
      </motion.h2>

      <motion.div variants={fadeIn}>
        <Card>
          <div className="h-full p-6 transition-all duration-300">
            <div className="flex flex-col justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/futureblink.webp"
                  alt="Company Logo"
                  height={48}
                  width={48}
                  className="object-cover rounded-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">FutureBlink</h3>
                  <p className="text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <div className="flex rounded-sm items-center gap-2 px-3 py-1 text-sm w-max bg-primary text-primary-foreground">
                <Zap className="h-3.5 w-3.5" />
                <span>June 2024 - Present</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm max-w-2xl">
              {responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.1 + index * 0.1 },
                    },
                  }}
                >
                  <div className="h-1.5 w-1.5 bg-primary shrink-0"></div>
                  <span>{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </Card>
      </motion.div>
    </motion.section>
  );
}
