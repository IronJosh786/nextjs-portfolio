import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { fadeIn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Code, SquareArrowOutUpRight } from "lucide-react";

export function ProjectCard({
  title,
  description,
  image,
  className = "",
  repo,
  preview,
}: {
  title: string;
  description: string;
  image: string;
  className: string;
  repo: string;
  preview: string;
}) {
  const projectCardRef = useRef(null);
  const isInView = useInView(projectCardRef, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={projectCardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      <Card className={"flex h-full flex-col p-2"}>
        <div className="flex h-full flex-col rounded-lg">
          <Image
            alt={title}
            loading="lazy"
            width="300"
            height="300"
            decoding="async"
            data-nimg="1"
            className="w-full rounded-lg object-cover"
            src={image}
          />
          <div className="my-4 w-full flex flex-col flex-grow gap-4 text-balance px-2">
            <h4>{title}</h4>
            <p className="flex-grow m-0">{description}</p>
          </div>
          <div className="flex gap-2 px-2 mb-2">
            <Button size="sm" variant="outline" asChild>
              <Link href={repo} target="_blank">
                Code <Code className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href={preview} target="_blank">
                Preview <SquareArrowOutUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
