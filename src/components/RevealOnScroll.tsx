import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function RevealOnScroll({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  );
}