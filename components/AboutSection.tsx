import Link from "next/link";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section id="about">
      <div className="mb-2 space-y-2">
        <h1>Hi, I&apos;m Faizan</h1>
        <h2>Software Engineer</h2>
      </div>
      <div>
        <p className="mb-8 text-lg">
          Focused on crafting visually stunning, and interactive applications.
          With expertise in frontend and backend technologies, I specialize in
          seamless user experiences, delivering innovative, full-stack
          solutions.
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
