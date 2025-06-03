import Link from "next/link";
import { Button } from "./ui/button";
import { BlurFade } from "./blur-fade";

export function AboutSection() {
  return (
    <section id="about">
      <BlurFade delay={0.15} inView>
        <h1 className="mb-6">
          Hi, I&apos;m Faizan
          <br />
          Software Engineer
        </h1>
      </BlurFade>
      <BlurFade delay={0.2} inView>
        <p className="mb-8 text-lg">
          Focused on crafting visually stunning, and interactive applications.
          With expertise in frontend and backend technologies, I specialize in
          seamless user experiences, delivering innovative, full-stack
          solutions.
        </p>
      </BlurFade>
      <BlurFade delay={0.25} inView>
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
      </BlurFade>
    </section>
  );
}
