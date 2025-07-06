import Link from "next/link";
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
        <div>
          <h3>faizan</h3>
        </div>

        <nav>
          {/* Mobile Navigation */}
          <div className="flex gap-4 md:hidden">
            <div>
              <ModeToggle />
            </div>
            <div>
              <MobileDrawer />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.text}
                </Link>
              </div>
            ))}

            <div>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
