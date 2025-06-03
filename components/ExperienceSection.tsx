import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { BlurFade } from "./blur-fade";
import SalesBlink from "@/public/salesblink.webp";
import FutureBlink from "@/public/futureblink.webp";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

function SalesBlinkPopoverCard() {
  return (
    <Popover>
      <PopoverTrigger asChild className="px-1 py-0">
        <span className="text-primary underline underline-offset-2 cursor-pointer">
          SalesBlink
        </span>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="relative h-10 w-12">
              <Image
                src={SalesBlink}
                placeholder="blur"
                alt="salesblink image"
                fill
                priority={true}
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm">@salesblink</h4>
              <Link
                className="text-sm text-muted-foreground"
                href={"https://salesblink.io"}
                target="_blank"
              >
                https://salesblink.io
              </Link>
            </div>
          </div>
          <p className="text-sm">
            AI powered cold email outreach automation platform.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function ExperienceSection() {
  const responsibilities = [
    <div className="text-muted-foreground" key="r1">
      Engineered a{" "}
      <span className="text-foreground font-medium">
        multi-tenant voice agent
      </span>{" "}
      platform to enhance user engagement and drive e-commerce conversions.
    </div>,
    <div className="text-muted-foreground" key="r2">
      Built a{" "}
      <span className="text-foreground font-medium">Google Sheets add-on</span>{" "}
      that streamlines email verification, improving user productivity and data
      reliability.
    </div>,
    <div className="text-muted-foreground" key="r3">
      Worked on <SalesBlinkPopoverCard /> including implementing{" "}
      <span className="text-foreground font-medium">Workspace</span>{" "}
      functionality for account-level data separation and a comprehensive{" "}
      <span className="text-foreground font-medium">White Labeling</span>{" "}
      solution for platform rebranding.
    </div>,
    <div className="text-muted-foreground" key="r4">
      Developed a{" "}
      <span className="text-foreground font-medium">
        cross platform mobile application
      </span>{" "}
      for SalesBlink that allows users to access, manage, and send emails
      directly from their inbox.
    </div>,
  ];
  const techStack = [
    "JavaScript",
    "Next.js",
    "React.js",
    "React Native",
    "Expo",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Langchain",
    "Pinecone",
  ];
  return (
    <section id="experience">
      <BlurFade delay={0.15} inView>
        <h2 className="mb-8">Work Experience</h2>
      </BlurFade>
      <BlurFade delay={0.2} inView>
        <div>
          <div className="grid grid-cols-1 gap-4 md:gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]">
            <div className="flex gap-4 h-max items-center">
              <div className="h-10 w-10 relative flex-shrink-0">
                <Image
                  src={FutureBlink}
                  alt="image"
                  fill
                  priority={true}
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h4>FutureBlink</h4>
                <p className="text-sm">June 2024 - Present</p>
              </div>
            </div>
            <div />
            <div className="space-y-6">
              <div className="space-y-4">
                <h4>Junior Software Engineer</h4>
                <div className="space-y-3">
                  {responsibilities.map((task) => task)}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {techStack.map((tech) => (
                    <Badge variant={"secondary"} key={tech}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
