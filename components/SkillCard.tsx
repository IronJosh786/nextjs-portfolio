import { useRef } from "react";
import { Card } from "./ui/card";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@/lib/utils";

export function SkillCard({
  icon: Icon,
  title,
  skills,
  delay = 0,
}: {
  icon: any;
  title: string;
  skills: string[];
  delay: number;
}) {
  // const fadeIn = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: "easeOut" },
  //   },
  // };
  const skillCardRef = useRef(null);
  const isInView = useInView(skillCardRef, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={skillCardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className="col-span-1 h-full w-full"
    >
      <Card className="h-full p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-md bg-primary text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <h4>{title}</h4>
        </div>
        <ul className="space-y-3 text-sm">
          {skills.map((skill: string, index: number) => (
            <motion.li
              key={index}
              className="flex items-center gap-4"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: delay + index * 0.1 },
                },
              }}
            >
              <div className="h-1.5 w-1.5 bg-primary"></div>
              <span>{skill}</span>
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
