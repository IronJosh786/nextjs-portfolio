import Link from "next/link";
import { BlurFade } from "./blur-fade";
import { ModeToggle } from "./mode-toggle";
import MobileDrawer from "./mobile-drawer";

const navLinks = [
  { href: "#about", text: "About" },
  { href: "#experience", text: "Experience" },
  { href: "#projects", text: "Projects" },
  { href: "#skills", text: "Skills" },
  { href: "#contact", text: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background !opacity-95 border-b border-dashed container-padding">
      <div className="px-6 lg:px-8 flex h-16 items-center justify-between border-l border-r border-dashed container">
        <BlurFade delay={0.9}>
          <h4>faizan</h4>
        </BlurFade>

        <nav>
          {/* Mobile Navigation */}
          <div className="flex gap-4 md:hidden">
            <BlurFade delay={0.9}>
              <ModeToggle />
            </BlurFade>
            <BlurFade delay={0.9}>
              <MobileDrawer />
            </BlurFade>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            {navLinks.map((link) => (
              <BlurFade delay={0.9} key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.text}
                </Link>
              </BlurFade>
            ))}

            <BlurFade delay={0.9}>
              <ModeToggle />
            </BlurFade>
          </div>
        </nav>
      </div>
    </header>
  );
}
