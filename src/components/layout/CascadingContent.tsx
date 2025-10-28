import { motion } from "framer-motion";
import type { ReactNode } from "react";

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.1,
      duration: 1,
      ease: "easeOut" as const,
    },
  }),
};

export default function CascadingContent({
  content,
}: {
  content: ReactNode[];
}) {
  return (
    <div className="space-y-16">
      {content.map((element, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {element}
        </motion.div>
      ))}
    </div>
  );
}
