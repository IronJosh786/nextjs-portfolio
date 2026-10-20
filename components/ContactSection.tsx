import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact">
      <div>
        <Card className="p-8 md:p-12">
          <h2 className="mb-4">Let&apos;s build something great!</h2>
          <p className="mb-8">
            Open to discussing high-throughput distributed backends, event-driven
            messaging pipelines, and applied AI systems opportunities. Feel free
            to reach out to connect or discuss your team&apos;s engineering
            challenges.
          </p>
          <div>
            <Button asChild>
              <Link target="_blank" href={"mailto:faizanejazshaikh@gmail.com"}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
