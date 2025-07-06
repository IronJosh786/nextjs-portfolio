import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

function MobileDrawer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="text-center">
        <DrawerHeader className="!text-center">
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Navigate to a section</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col gap-4">
          {links.map((link, index) => (
            <div key={link.href}>
              <DrawerClose asChild>
                <Link href={link.href}>{link.label}</Link>
              </DrawerClose>
            </div>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileDrawer;
