import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BlurFade } from "./blur-fade";

export function ContactSection() {
  return (
    <section id="contact">
      <BlurFade delay={0.15} inView>
        <Card className="p-8 md:p-12">
          <h2 className="mb-4">Let&apos;s build something great!</h2>
          <p className="mb-8">
            I&apos;m always open to new opportunities, collaborations, and
            connections. Feel free to reach out to ask a question or share your
            project idea.
          </p>
          <div>
            <Button asChild>
              <Link target="_blank" href={"mailto:faizanejazshaikh@gmail.com"}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </Card>
      </BlurFade>
    </section>
  );
}
