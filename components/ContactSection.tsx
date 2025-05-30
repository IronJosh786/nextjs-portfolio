import { useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { fadeIn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function ContactSection() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.1 });

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
        <motion.h2 className="mb-4" variants={fadeIn}>
          Let&apos;s build something great!
        </motion.h2>
        <motion.p className="mb-8" variants={fadeIn}>
          I&apos;m always open to new opportunities, collaborations, and
          connections. Feel free to reach out to ask a question or share your
          project idea.
        </motion.p>
        <motion.div variants={fadeIn}>
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
