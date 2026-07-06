"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";

const ICONS = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0 },
  { Icon: Database, x: "85%", y: "15%", delay: 1 },
  { Icon: Layers, x: "75%", y: "70%", delay: 2 },
  { Icon: Brain, x: "15%", y: "75%", delay: 1.5 },
  { Icon: Sparkles, x: "50%", y: "10%", delay: 0.5 },
  { Icon: Cloud, x: "90%", y: "50%", delay: 2.5 },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {ICONS.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute flex h-10 w-10 items-center justify-center rounded-xl glass text-primary/60"
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={18} />
        </motion.div>
      ))}
    </div>
  );
}
