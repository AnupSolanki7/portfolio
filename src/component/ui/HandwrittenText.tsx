"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HandwrittenTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function HandwrittenText({
  children,
  as: Tag = "span",
  className = "",
  delay = 0,
  duration = 1.4,
  once = true,
}: HandwrittenTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once,
    margin: "-60px",
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as any}
      className={`font-hand relative inline-block overflow-hidden ${className}`}
      style={{ fontFamily: "var(--font-hand)" }}
    >
      <motion.span
        style={{ display: "block" }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}

/* -------------------------------------------------------
   DrawUnderline — SVG wavy underline that draws in
------------------------------------------------------- */
interface DrawUnderlineProps {
  className?: string;
  color?: string;
  delay?: number;
  strokeWidth?: number;
}

export function DrawUnderline({
  className = "",
  color = "#1D4ED8",
  delay = 0.8,
  strokeWidth = 2.5,
}: DrawUnderlineProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-40px",
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 8"
      className={`w-full overflow-visible ${className}`}
      aria-hidden="true"
      style={{ height: "8px" }}
    >
      <motion.path
        d="M 2 6 Q 25 1 50 5 Q 75 9 100 4 Q 125 0 150 5 Q 175 9 198 5"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* -------------------------------------------------------
   DrawCircle — hand-drawn circle that appears around text
------------------------------------------------------- */
interface DrawCircleProps {
  className?: string;
  color?: string;
  delay?: number;
}

export function DrawCircle({
  className = "",
  color = "#1D4ED8",
  delay = 0,
}: DrawCircleProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-40px",
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 40"
      className={`absolute inset-0 w-full h-full overflow-visible pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.ellipse
        cx="60"
        cy="20"
        rx="58"
        ry="18"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        style={{ pathLength: 0 }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
        transition={{ duration: 1.1, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* -------------------------------------------------------
   DrawArrow — animated arrow annotation
------------------------------------------------------- */
interface DrawArrowProps {
  className?: string;
  color?: string;
  delay?: number;
  direction?: "right" | "down" | "down-right";
}

export function DrawArrow({
  className = "",
  color = "#6B7280",
  delay = 0,
  direction = "right",
}: DrawArrowProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-40px",
  });

  const paths = {
    right: {
      viewBox: "0 0 60 20",
      line: "M 2 10 Q 20 8 46 10",
      head: "M 38 5 L 48 10 L 38 15",
    },
    down: {
      viewBox: "0 0 20 60",
      line: "M 10 2 Q 12 20 10 46",
      head: "M 5 38 L 10 48 L 15 38",
    },
    "down-right": {
      viewBox: "0 0 60 60",
      line: "M 6 6 Q 20 20 48 48",
      head: "M 38 44 L 50 50 L 44 38",
    },
  };

  const { viewBox, line, head } = paths[direction];

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d={line}
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.7 } : {}}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      />
      <motion.path
        d={head}
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.7 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.55, ease: "easeOut" }}
      />
    </svg>
  );
}

/* -------------------------------------------------------
   InkReveal — generic fade+slide up for non-heading text
------------------------------------------------------- */
interface InkRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "span" | "li";
}

export function InkReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: InkRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-50px",
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
