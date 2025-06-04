import Link from "next/link";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image, { StaticImageData } from "next/image";
import { Code, SquareArrowOutUpRight } from "lucide-react";

export function ProjectCard({
  title,
  description,
  image,
  repo,
  preview,
  techStack,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  repo: string;
  preview: string;
  techStack: string[];
}) {
  return (
    <Card className="flex h-full flex-col p-2">
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
          <h3>{title}</h3>
          <p className="flex-grow m-0">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((skill) => (
              <Badge key={`${title}-${skill}`} variant={"secondary"}>
                {skill}
              </Badge>
            ))}
          </div>
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
  );
}
