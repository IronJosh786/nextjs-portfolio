import { useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { fadeIn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function ContactSection() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="contact"
      className="px-4 md:px-8 py-8 border-l border-r border-dashed container"
      ref={contactRef}
      initial="hidden"
      animate={contactInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <Card className="p-8 md:p-12">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-2xl mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
            },
          }}
        >
          Have a project in mind? I&apos;m currently available for freelance
          work. Let&apos;s build something amazing together.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
            },
          }}
        >
          <Button asChild>
            <Link target="_blank" href={"mailto:faizanejazshaikh@gmail.com"}>
              Get in Touch
            </Link>
          </Button>
        </motion.div>
      </Card>
    </motion.section>
  );
}
