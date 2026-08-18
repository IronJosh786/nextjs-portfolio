import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import SalesBlink from "@/public/salesblink.webp";
import FutureBlink from "@/public/futureblink.webp";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

function SalesBlinkPopoverCard() {
  return (
    <Popover>
      <PopoverTrigger className="px-1 py-0 text-primary underline underline-offset-2 cursor-pointer">
        SalesBlink
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
      Led <span className="text-foreground font-medium">backend scalability</span>{" "}
      initiatives for <SalesBlinkPopoverCard /> by implementing{" "}
      <span className="text-foreground font-medium">
        distributed locking via atomic MongoDB operations
      </span>
      , enabling{" "}
      <span className="text-foreground font-medium">horizontal scaling</span>{" "}
      across microservices while eliminating race conditions and duplicate
      processing.
    </div>,

    <div className="text-muted-foreground" key="r2">
      Drove{" "}
      <span className="text-foreground font-medium">
        API performance optimizations
      </span>{" "}
      by rearchitecting high-traffic endpoints with{" "}
      <span className="text-foreground font-medium">
        batched, set-based database queries
      </span>
      , boosting throughput by{" "}
      <span className="text-foreground font-medium">up to 5x</span> and slashing
      response times by{" "}
      <span className="text-foreground font-medium">90%</span>.
    </div>,

    <div className="text-muted-foreground" key="r3">
      Architected and deployed a{" "}
      <span className="text-foreground font-medium">
        Model Context Protocol (MCP) server
      </span>
      , enabling <span className="text-foreground font-medium">AI agents</span>{" "}
      to interface reliably with internal APIs and powering an{" "}
      <span className="text-foreground font-medium">
        automated support AI system
      </span>{" "}
      to fetch real-time user context with minimal manual intervention.
    </div>,

    <div className="text-muted-foreground" key="r4">
      Optimized the{" "}
      <span className="text-foreground font-medium">
        email response tracking engine
      </span>
      , cutting reply detection latency from{" "}
      <span className="text-foreground font-medium">hours to seconds</span> and
      significantly improving inbox synchronization throughput.
    </div>,

    <div className="text-muted-foreground" key="r5">
      Engineered a{" "}
      <span className="text-foreground font-medium">
        multi-tenant, RAG-based voice agent
      </span>{" "}
      for Shopify merchants to boost e-commerce conversion rates through
      real-time, context-aware customer interactions.
    </div>,
  ];
  const techStack = [
    "JavaScript",
    "Next.js",
    "React",
    "React Native (Expo)",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Langchain",
    "Pinecone",
    "Docker",
    "RabbitMQ"
  ];
  return (
    <section id="experience">
      <h2 className="mb-8">Work Experience</h2>
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
              <h3>FutureBlink</h3>
              <p className="text-sm">June 2024 - Present</p>
            </div>
          </div>
          <div />
          <div className="space-y-6">
            <div className="space-y-4">
              <h3>Software Engineer</h3>
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
    </section>
  );
}
