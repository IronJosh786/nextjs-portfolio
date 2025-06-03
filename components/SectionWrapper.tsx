import { motion } from "framer-motion";
import { staggeredChild } from "@/lib/utils";

export function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <motion.div
      key={id}
      variants={staggeredChild}
      className={`border-b border-dashed container-padding`}
    >
      <div
        className={`px-6 lg:px-8 py-8 border-l border-r border-dashed container ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
