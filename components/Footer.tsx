import Link from "next/link";
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
            <div>
              <h3>faizan</h3>
              <p className="mt-2 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }, index) => (
              <div key={label}>
                <Link
                  href={href}
                  target="_blank"
                  className="p-2.5 bg-muted rounded-md hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
