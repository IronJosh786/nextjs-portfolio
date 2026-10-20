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
        distributed locking via atomic MongoDB operations with stale-lock recovery
      </span>
      , enabling{" "}
      <span className="text-foreground font-medium">horizontal scaling</span>{" "}
      across microservices while eliminating race conditions and duplicate email
      dispatches.
    </div>,

    <div className="text-muted-foreground" key="r2">
      Drove{" "}
      <span className="text-foreground font-medium">
        API performance optimizations
      </span>{" "}
      by eliminating N+1 queries via{" "}
      <span className="text-foreground font-medium">
        batched set-based database lookups
      </span>
      , adding targeted{" "}
      <span className="text-foreground font-medium">ESR compound indexes</span>,
      and implementing a bounded in-memory FIFO cache, boosting throughput by{" "}
      <span className="text-foreground font-medium">up to 5x</span> and slashing
      response times by{" "}
      <span className="text-foreground font-medium">90%</span>.
    </div>,

    <div className="text-muted-foreground" key="r3">
      Architected and deployed an{" "}
      <span className="text-foreground font-medium">
        OAuth-secured Model Context Protocol (MCP) server
      </span>{" "}
      with strict transport-level token scoping, enabling external AI clients and
      internal automated support agents to safely query real-time user context and
      execute scoped actions.
    </div>,

    <div className="text-muted-foreground" key="r4">
      Re-architected the{" "}
      <span className="text-foreground font-medium">
        email response tracking engine
      </span>{" "}
      by introducing{" "}
      <span className="text-foreground font-medium">
        OAuth mailbox push webhooks
      </span>
      ,{" "}
      <span className="text-foreground font-medium">
        RabbitMQ message queues
      </span>
      , and time-and-size bounded consumer micro-batching alongside tiered
      SMTP/IMAP polling, cutting reply detection latency from{" "}
      <span className="text-foreground font-medium">hours to seconds</span>.
    </div>,

    <div className="text-muted-foreground" key="r5">
      Engineered a{" "}
      <span className="text-foreground font-medium">
        multi-tenant, RAG-based AI voice agent
      </span>{" "}
      for Shopify merchants using{" "}
      <span className="text-foreground font-medium">
        Vapi, Twilio, LangChain, and Pinecone
      </span>{" "}
      (with per-merchant namespace isolation), delivering low-latency,
      context-aware customer support.
    </div>,
  ];

  const techStack = [
    "TypeScript",
    "Node.js",
    "MongoDB",
    "RabbitMQ",
    "Model Context Protocol (MCP)",
    "PostgreSQL",
    "Redis",
    "Pinecone",
    "LangChain",
    "Vapi",
    "Twilio",
    "Express",
    "Next.js",
    "Docker",
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
                alt="FutureBlink logo"
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
