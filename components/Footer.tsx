import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      className="container-padding"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.2 }}
    >
      <div className="px-4 md:px-8 py-8 border-l border-r border-dashed container">
        <div className="flex flex-col items-center sm:flex-row justify-between sm:items-center gap-8">
          <div className="text-center sm:text-start">
            <h4>faizan</h4>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <motion.div
            className="flex gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            {[
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
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={href}
                  target="_blank"
                  className="p-2.5 bg-muted rounded-md hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
