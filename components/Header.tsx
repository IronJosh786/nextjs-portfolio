import Link from "next/link";
import { motion } from "framer-motion";
import MobileDrawer from "./mobile-drawer";
import { ModeToggle } from "./mode-toggle";
import { headerVariants } from "@/lib/utils";

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-10 backdrop-blur-md border-b border-dashed container-padding"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="px-4 md:px-8 flex h-16 items-center justify-between border-l border-r border-dashed container">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          faizan
        </Link>
        <nav>
          <div className="flex gap-4 md:hidden">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ModeToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MobileDrawer />
            </motion.div>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="#about"
                className="transition-colors hover:text-primary"
              >
                About
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="#experience"
                className="transition-colors hover:text-primary"
              >
                Experience
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Link
                href="#projects"
                className="transition-colors hover:text-primary"
              >
                Projects
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#skills"
                className="transition-colors hover:text-primary"
              >
                Skills
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                href="#contact"
                className="transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ModeToggle />
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
