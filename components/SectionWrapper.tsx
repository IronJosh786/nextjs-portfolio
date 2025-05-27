import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
}: {
  children: any;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`border-b border-dashed container-padding ${className}`}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
