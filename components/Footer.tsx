import Link from "next/link";
import { BlurFade } from "./blur-fade";
import { Linkedin, Mail, Github, Twitter } from "lucide-react";

export function Footer() {
  const socials = [
    {
      icon: Github,
      href: "https://github.com/IronJosh786",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/faizan-ejaz-shaikh/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/faizanejaz_",
      label: "X",
    },
    {
      icon: Mail,
      href: "mailto:faizanejazshaikh@gmail.com",
      label: "Email",
    },
  ];
  return (
    <footer className="container-padding">
      <div className="px-6 lg:px-8 py-8 border-l border-r border-dashed container">
        <div className="flex flex-col items-center sm:flex-row justify-between sm:items-center gap-8">
          <div className="text-center sm:text-start">
            <BlurFade delay={0.15} inView>
              <h4>faizan</h4>
              <p className="mt-2 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </BlurFade>
          </div>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }, index) => (
              <BlurFade key={label} delay={0.2 + index * 0.05} inView>
                <Link
                  href={href}
                  target="_blank"
                  className="p-2.5 bg-muted rounded-md hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
