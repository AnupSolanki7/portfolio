"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SketchCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "paper" | "blueprint" | "sticky" | "pinned";
  tilt?: number;
  hover?: boolean;
}

export default function SketchCard({
  children,
  className = "",
  delay = 0,
  variant = "paper",
  tilt = 0,
  hover = true,
}: SketchCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variantStyles: Record<string, string> = {
    paper: "bg-paper-light border border-ink-blue/18",
    blueprint: "bg-blue-50 border border-ink-light/30",
    sticky: "bg-highlight border border-yellow-200",
    pinned: "bg-paper-light border border-ink-blue/18",
  };

  const variantShadow: Record<string, string> = {
    paper: "2px 3px 0 rgba(29,78,216,0.07), 4px 6px 0 rgba(29,78,216,0.035)",
    blueprint: "2px 3px 0 rgba(59,130,246,0.1), 4px 6px 0 rgba(59,130,246,0.05)",
    sticky: "3px 3px 0 rgba(0,0,0,0.08), 5px 5px 0 rgba(0,0,0,0.04)",
    pinned: "2px 3px 0 rgba(29,78,216,0.07), 4px 6px 0 rgba(29,78,216,0.035)",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, rotate: tilt - 1 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: tilt } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -4,
              rotate: tilt + 0.3,
              boxShadow: "4px 10px 0 rgba(29,78,216,0.12), 8px 18px 0 rgba(29,78,216,0.06)",
            }
          : {}
      }
      className={`relative rounded-sm transition-shadow ${variantStyles[variant]} ${className}`}
      style={{
        boxShadow: variantShadow[variant],
        rotate: tilt,
      }}
    >
      {/* Inner sketch double-border */}
      <div
        className="absolute inset-[3px] border border-ink-blue/8 rounded-sm pointer-events-none"
        aria-hidden="true"
      />

      {/* Pin for "pinned" variant */}
      {variant === "pinned" && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 paper-pin z-10"
          aria-hidden="true"
        />
      )}

      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   BlueprintCard — graph paper card for project display
------------------------------------------------------- */
interface BlueprintCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BlueprintCard({ children, className = "", delay = 0 }: BlueprintCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -5,
        boxShadow: "4px 12px 0 rgba(59,130,246,0.14), 8px 20px 0 rgba(59,130,246,0.07)",
      }}
      className={`relative rounded-sm border border-ink-light/30 overflow-hidden transition-shadow ${className}`}
      style={{
        backgroundColor: "#F7F2E8",
        backgroundImage: `
          repeating-linear-gradient(
            rgba(59,130,246,0.09) 0px, rgba(59,130,246,0.09) 1px,
            transparent 1px, transparent 22px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(59,130,246,0.09) 0px, rgba(59,130,246,0.09) 1px,
            transparent 1px, transparent 22px
          )
        `,
        boxShadow: "2px 4px 0 rgba(59,130,246,0.09), 4px 8px 0 rgba(59,130,246,0.045)",
      }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   SectionTitle — notebook chapter heading with number
------------------------------------------------------- */
interface SectionTitleProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  number,
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const centered = align === "center";

  return (
    <div ref={ref} className={`${centered ? "text-center" : ""} ${className}`}>
      {number && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="font-hand text-sm text-graphite-pale block mb-1"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          § {number}
        </motion.span>
      )}

      <div className="overflow-hidden">
        <motion.h2
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="ink-heading text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>
      </div>

      {/* Drawn underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className={`mt-2 h-[2.5px] bg-ink-blue/30 rounded-full origin-left ${centered ? "mx-auto" : ""}`}
        style={{ width: centered ? "80px" : "60px" }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-3 text-graphite-light text-base font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
