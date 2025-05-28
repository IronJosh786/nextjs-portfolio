import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function ProjectCard({
  title,
  description,
  image,
  className = "",
}: {
  title: string;
  description: string;
  image: string;
  className: string;
}) {
  const isFullWidth = className.includes("md:col-span-2");

  return (
    <motion.div className={`group ${className}`} variants={fadeIn}>
      <Card
        className={`relative overflow-hidden transition-all duration-300 ${
          isFullWidth ? "aspect-[4/3] md:aspect-[8/3]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-transparent opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-lg transition-all duration-300">
          <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="mb-4 text-white/90 text-sm">{description}</p>
            <div className="flex items-center gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <Button size="sm" variant="outline">
                Code <Github className="ml-2 h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                Preview <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
