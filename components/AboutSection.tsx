import Link from "next/link";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section id="about">
      <div className="mb-2 space-y-2">
        <h2><strong>Hi, I'm Faizan</strong></h2>
        <h3>Backend &amp; Applied AI Systems Engineer</h3>
      </div>
      <div>
        <p className="mb-8 text-lg">
          I build high-throughput distributed backends, event-driven messaging
          pipelines, and production AI agents. Currently scaling backend
          infrastructure, OAuth-secured MCP servers, and multi-tenant RAG
          systems at FutureBlink.
        </p>
      </div>
      <div>
        <div className="flex gap-2 sm:gap-4">
          <Button asChild>
            <Link target="_blank" href={"mailto:faizanejazshaikh@gmail.com"}>
              Email Me
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1wOr-glQNvFuiIwcrV_zhOuDsilbHvSX3/view?usp=sharing"
              }
            >
              View Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
