"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Header from "@/component/ui/Header";
import HandwrittenText, {
  DrawUnderline,
  DrawArrow,
  InkReveal,
} from "@/component/ui/HandwrittenText";
import { SectionTitle } from "@/component/ui/SketchCard";

/* ============================================================
   DATA
   ============================================================ */
const skills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Framer Motion", "GSAP", "Three.js", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "OpenAI API", "AWS",
];

const projects = [
  {
    id: "property-dollar",
    title: "Property Dollar",
    tag: "Real Estate SaaS",
    desc: "Full-featured property listing & management platform with advanced search, virtual tours, and AI-powered price predictions.",
    tech: ["Next.js", "TypeScript", "MongoDB", "AI"],
    status: "Live",
    year: "2024",
  },
  {
    id: "imanagify",
    title: "iManagify",
    tag: "Hotel Management",
    desc: "End-to-end hotel operations system — bookings, housekeeping, billing, and real-time analytics for 50+ properties.",
    tech: ["React", "Node.js", "PostgreSQL", "Charts"],
    status: "Live",
    year: "2023",
  },
  {
    id: "recaply",
    title: "Recaply",
    tag: "AI Video Summary",
    desc: "AI-powered tool that transcribes and summarises any video into actionable notes using OpenAI & AWS Transcribe.",
    tech: ["Next.js", "OpenAI", "AWS Transcribe", "Vercel"],
    status: "Live",
    year: "2024",
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "8",   label: "Devs Mentored" },
  { value: "∞",   label: "Coffee Cups" },
];

/* ============================================================
   HERO SECTION
   ============================================================ */
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yAnnotations = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-20"
    >
      {/* Background sketch lines */}
      <motion.div
        style={{ y: yAnnotations }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-24 left-0 w-32 opacity-8"
          viewBox="0 0 160 80"
        >
          {[0, 12, 24, 36, 48].map((y) => (
            <line key={y} x1="8" y1={y + 10} x2="150" y2={y + 10}
              stroke="#1D4ED8" strokeWidth="1" strokeDasharray="4 3" />
          ))}
        </svg>
        <svg
          className="absolute top-24 right-0 w-32 opacity-8"
          viewBox="0 0 160 80"
        >
          {[0, 12, 24, 36, 48].map((y) => (
            <line key={y} x1="8" y1={y + 10} x2="150" y2={y + 10}
              stroke="#1D4ED8" strokeWidth="1" strokeDasharray="4 3" />
          ))}
        </svg>
      </motion.div>

      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_0.9fr] lg:gap-20 gap-0 items-center pb-12">

        {/* LEFT — headline + cta */}
        <div>
          <InkReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-ink-blue/40" />
              <span className="font-hand text-sm text-ink-blue font-medium" style={{ fontFamily: "var(--font-hand)" }}>
                Frontend Developer · Ahmedabad, India
              </span>
            </div>
          </InkReveal>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="ink-heading text-5xl sm:text-6xl md:text-7xl leading-tight"
            >
              I Build
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="ink-heading text-5xl sm:text-6xl md:text-7xl leading-tight"
            >
              Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 relative inline-block">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="ink-heading text-5xl sm:text-6xl md:text-7xl leading-tight"
            >
              Experiences.
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 2.0, ease: "easeOut" }}
              className="origin-left"
            >
              <DrawUnderline delay={0} color="#1D4ED8" strokeWidth={3} />
            </motion.div>
          </div>

          <InkReveal delay={1.8}>
            <p className="text-base md:text-lg text-graphite max-w-lg leading-relaxed font-sans mb-8">
              Hi, I&apos;m <strong className="text-ink font-semibold">Anup Solanki</strong> — a React &
              Next.js specialist who turns complex product ideas into fast, interactive,
              and polished web applications. I write code the way a designer thinks.
            </p>
          </InkReveal>

          <InkReveal delay={2.1}>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/projects" className="sketch-btn-filled text-base px-7 py-3">
                View Projects
              </Link>
              <Link href="/contact" className="sketch-btn text-base px-7 py-3">
                Contact Me
              </Link>
            </div>
          </InkReveal>

          {/* Stats row — mobile only */}
          <InkReveal delay={2.4} className="lg:hidden">
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-ink-blue/12">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <span className="font-hand text-3xl font-bold text-ink-blue block" style={{ fontFamily: "var(--font-hand)" }}>
                    {value}
                  </span>
                  <span className="text-xs text-graphite-light font-sans uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </InkReveal>
        </div>

        {/* RIGHT — code doodle illustration (desktop only) */}
        <div className="hidden lg:block relative">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -8, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="absolute -top-4 right-2 annotation-tag rotate-[5deg] float-note z-20"
            style={{ animationDelay: "0.5s" }}
          >
            Available for hire ✓
          </motion.div>

          {/* Code doodle SVG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <svg viewBox="0 0 400 310" className="w-full h-auto" style={{ maxHeight: "360px" }} aria-hidden="true">

              {/* ── LAPTOP LID ── */}
              <motion.path
                d="M 78 38 L 322 38 L 322 212 L 78 212 Z"
                fill="rgba(29,78,216,0.03)"
                stroke="rgba(29,78,216,0.38)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.1, ease: "easeInOut" }}
              />
              {/* Screen bezel */}
              <motion.path
                d="M 93 52 L 307 52 L 307 200 L 93 200 Z"
                fill="rgba(29,78,216,0.03)"
                stroke="rgba(29,78,216,0.18)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.95, duration: 0.4 }}
              />

              {/* ── KEYBOARD BASE ── */}
              <motion.path
                d="M 62 218 L 338 218 L 338 244 L 62 244 Z"
                fill="rgba(29,78,216,0.02)"
                stroke="rgba(29,78,216,0.28)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.65, duration: 0.55 }}
              />
              {/* Key rows */}
              <motion.path
                d="M 80 228 L 320 228"
                stroke="rgba(29,78,216,0.12)" strokeWidth="1" strokeDasharray="5 3" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              />
              {/* Touchpad */}
              <motion.rect
                x="165" y="233" width="70" height="7" rx="2"
                fill="none" stroke="rgba(29,78,216,0.14)" strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              />

              {/* ── CODE LINES (screen) ── */}
              {([
                [108, 68,  155, "rgba(29,78,216,0.7)",  2.5],
                [108, 82,  222, "rgba(29,78,216,0.3)",  1.5],
                [122, 96,  258, "rgba(29,78,216,0.24)", 1.5],
                [122, 110, 186, "rgba(29,78,216,0.5)",  2.0],
                [108, 124, 244, "rgba(29,78,216,0.28)", 1.5],
                [108, 138, 286, "rgba(29,78,216,0.16)", 1.5],
                [122, 152, 210, "rgba(29,78,216,0.34)", 1.5],
                [108, 166, 175, "rgba(29,78,216,0.5)",  2.0],
                [108, 180, 238, "rgba(29,78,216,0.22)", 1.5],
              ] as [number,number,number,string,number][]).map(([x1, y, x2, clr, sw], i) => (
                <motion.path
                  key={i}
                  d={`M ${x1} ${y} L ${x2} ${y}`}
                  stroke={clr} strokeWidth={sw} strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2.15 + i * 0.09, duration: 0.38 }}
                />
              ))}

              {/* ── FLOATING CODE SYMBOLS ── */}
              {/* { } top-left */}
              <motion.text
                x="18" y="30"
                initial={{ opacity: 0 }} animate={{ opacity: 0.42 }}
                transition={{ delay: 2.8 }}
                style={{ fontSize: "22px", fontFamily: "Courier New, monospace", fill: "rgba(29,78,216,0.42)" }}
              >{"{ }"}</motion.text>

              {/* </> top-right */}
              <motion.text
                x="336" y="28"
                initial={{ opacity: 0 }} animate={{ opacity: 0.38 }}
                transition={{ delay: 2.9 }}
                style={{ fontSize: "19px", fontFamily: "Courier New, monospace", fill: "rgba(29,78,216,0.38)" }}
              >{"</>"}</motion.text>

              {/* => right side */}
              <motion.text
                x="348" y="138"
                initial={{ opacity: 0 }} animate={{ opacity: 0.32 }}
                transition={{ delay: 3.0 }}
                style={{ fontSize: "16px", fontFamily: "Courier New, monospace", fill: "rgba(29,78,216,0.32)" }}
              >{"=>"}</motion.text>

              {/* // comment bottom-left */}
              <motion.text
                x="18" y="272"
                initial={{ opacity: 0 }} animate={{ opacity: 0.32 }}
                transition={{ delay: 3.1 }}
                style={{ fontSize: "13px", fontFamily: "Courier New, monospace", fill: "rgba(29,78,216,0.32)" }}
              >{"// build."}</motion.text>

              {/* ── COFFEE CUP (bottom-right) ── */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.15 }}>
                <path d="M 348 258 L 354 284 L 386 284 L 392 258 Z"
                  fill="rgba(29,78,216,0.05)" stroke="rgba(29,78,216,0.38)"
                  strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M 386 264 Q 400 264 400 273 Q 400 282 386 282"
                  fill="none" stroke="rgba(29,78,216,0.38)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 360 252 Q 358 244 361 237" fill="none" stroke="rgba(29,78,216,0.22)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 370 252 Q 368 244 371 237" fill="none" stroke="rgba(29,78,216,0.22)" strokeWidth="1.5" strokeLinecap="round" />
                <text x="362" y="277" style={{ fontSize: "11px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.5)" }}>∞</text>
              </motion.g>

              {/* ── ANNOTATION TAG ── */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.25 }}>
                <rect x="18" y="186" width="72" height="18" rx="2"
                  fill="rgba(29,78,216,0.05)" stroke="rgba(29,78,216,0.2)"
                  strokeWidth="0.8" strokeDasharray="3 2" />
                <text x="54" y="199" textAnchor="middle"
                  style={{ fontSize: "9px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.6)" }}>
                  20+ projects
                </text>
              </motion.g>

              {/* ── CURSOR BLINK on screen ── */}
              <motion.rect
                x="108" y="188" width="8" height="10" rx="1"
                fill="rgba(29,78,216,0.4)"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: 3.5 }}
              />
            </svg>
          </motion.div>

          {/* Arrow annotation */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.8 }}
            className="absolute -bottom-8 left-4 flex items-center gap-2 float-note"
            style={{ animationDelay: "1s" }}
          >
            <DrawArrow direction="right" className="w-10 h-4" color="#9CA3AF" delay={0} />
            <span className="font-hand text-xs text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>
              3+ yrs exp.
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-hand text-xs text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-ink-blue/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */
function AboutSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left — text */}
        <div>
          <SectionTitle
            number="02"
            title="Who Am I?"
            subtitle="A few pages from the developer's journal."
          />

          <InkReveal delay={0.3}>
            <p className="mt-6 text-graphite leading-relaxed font-sans">
              I&apos;m a <span className="marker-yellow px-0.5">frontend-focused full-stack developer</span> based
              in Ahmedabad with 3+ years of production experience. I obsess over
              the intersection of performance, aesthetics, and user experience.
            </p>
          </InkReveal>

          <InkReveal delay={0.45}>
            <p className="mt-4 text-graphite leading-relaxed font-sans">
              At Solguruz, I led a complete UI revamp that improved load times by 40%,
              integrated AI workflows into three products, and mentored a team of 8
              junior developers. I was awarded{" "}
              <span className="marker-blue px-0.5 font-medium text-ink">
                Rising Star of the Year
              </span>{" "}
              for that work.
            </p>
          </InkReveal>

          <InkReveal delay={0.6}>
            <p className="mt-4 text-graphite leading-relaxed font-sans">
              I believe great software is crafted, not just coded — and that the best
              products feel inevitable once you use them.
            </p>
          </InkReveal>

          <InkReveal delay={0.75}>
            <div className="mt-8 flex gap-4">
              <Link href="/about" className="sketch-btn text-sm">
                Read More
              </Link>
              <Link
                href="/experience"
                className="text-sm text-ink-blue font-hand flex items-center gap-2"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                View Experience
                <DrawArrow direction="right" className="w-10 h-4" color="#1D4ED8" delay={0} />
              </Link>
            </div>
          </InkReveal>
        </div>

        {/* Right — notebook-style key facts */}
        <div className="space-y-4 mt-2">
          {[
            {
              icon: "⚡",
              title: "React & Next.js Expert",
              body: "Deep expertise in component architecture, SSR/SSG, performance tuning, and modern React patterns.",
              tilt: 0.8,
            },
            {
              icon: "🤖",
              title: "AI Integration",
              body: "Built production features using OpenAI, Gemini API, and AWS Transcribe — real AI, not hype.",
              tilt: -0.6,
            },
            {
              icon: "🏗️",
              title: "Product Thinker",
              body: "I understand the 'why' behind every feature. Good engineering decisions are also business decisions.",
              tilt: 0.4,
            },
            {
              icon: "👥",
              title: "Team Leader",
              body: "Conducted 30+ technical interviews, mentored 8 developers, ran code reviews and architectural decisions.",
              tilt: -0.5,
            },
          ].map(({ icon, title, body, tilt }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3, rotate: tilt + 0.2 }}
              className="paper-card rounded-sm p-4 flex gap-4 cursor-default"
              style={{ rotate: tilt }}
            >
              <span className="text-2xl mt-0.5 flex-shrink-0">{icon}</span>
              <div>
                <h4
                  className="font-hand text-base font-bold text-ink-blue mb-1"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  {title}
                </h4>
                <p className="text-sm text-graphite font-sans leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILLS SECTION
   ============================================================ */
function SkillsSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
      {/* Blueprint-style bg strip */}
      <div
        className="absolute inset-0 graph-bg opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionTitle
          number="03"
          title="Technical Arsenal"
          subtitle="Tools I pick up and never put down."
          align="center"
          className="mb-14"
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -3, scale: 1.04 }}
              className="relative group"
            >
              <div
                className="px-4 py-2.5 rounded-sm border border-ink-blue/25 bg-paper-light cursor-default select-none"
                style={{
                  boxShadow: "1.5px 2px 0 rgba(29,78,216,0.08)",
                }}
              >
                <span
                  className="font-hand text-base font-semibold text-ink"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  {skill}
                </span>
              </div>
              {/* Hover underline */}
              <motion.div
                className="absolute -bottom-1 left-2 right-2 h-[1.5px] bg-ink-blue/0 group-hover:bg-ink-blue/40 transition-all duration-200"
              />
            </motion.div>
          ))}
        </div>

        <InkReveal delay={0.4} className="mt-10 text-center">
          <Link
            href="/skills"
            className="font-hand text-ink-blue text-base inline-flex items-center gap-2"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            See full skill breakdown
            <DrawArrow direction="right" className="w-12 h-5" color="#1D4ED8" delay={0} />
          </Link>
        </InkReveal>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS SECTION
   ============================================================ */
function ProjectsSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          number="04"
          title="Selected Work"
          subtitle="Three blueprints from the sketchbook."
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{
                y: -6,
                rotate: 0.15,
                boxShadow: "4px 12px 0 rgba(59,130,246,0.14)",
              }}
              className="relative rounded-sm border border-ink-light/30 overflow-hidden cursor-default"
              style={{
                rotate: [-0.5, 0.4, -0.3][i] ?? 0,
                backgroundColor: "#EFF6FF",
                backgroundImage: `
                  repeating-linear-gradient(rgba(59,130,246,0.08) 0px, rgba(59,130,246,0.08) 1px, transparent 1px, transparent 22px),
                  repeating-linear-gradient(90deg, rgba(59,130,246,0.08) 0px, rgba(59,130,246,0.08) 1px, transparent 1px, transparent 22px)
                `,
                boxShadow: "2px 4px 0 rgba(59,130,246,0.09), 4px 8px 0 rgba(59,130,246,0.045)",
              }}
            >
              {/* Top strip */}
              <div className="h-1 bg-ink-blue/60" />

              <div className="p-5">
                {/* Tag + year */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="font-hand text-xs text-ink-blue border border-ink-blue/30 px-2 py-0.5 rounded-sm"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {project.tag}
                  </span>
                  <span
                    className="font-hand text-xs text-graphite-pale"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-hand text-xl font-bold text-ink mb-2"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  {project.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-graphite font-sans leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-sans bg-white/60 text-graphite border border-ink-blue/15 px-2 py-0.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-sans text-graphite-light">{project.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <InkReveal delay={0.5} className="mt-10">
          <Link href="/projects" className="sketch-btn inline-flex text-sm px-6 py-2.5">
            All Projects →
          </Link>
        </InkReveal>
      </div>
    </section>
  );
}

/* ============================================================
   JOURNEY SECTION
   ============================================================ */
function JourneySection() {
  const stages = [
    { year: "2020", title: "Learning", desc: "First lines of HTML & CSS. Fell in love with making things interactive.", icon: "📖" },
    { year: "2021", title: "Building", desc: "React clicked. Started shipping real features to real users.", icon: "🔨" },
    { year: "2022", title: "Leading", desc: "Led frontend architecture for 3 SaaS products. Mentored junior devs.", icon: "🧭" },
    { year: "2024", title: "Scaling", desc: "AI integrations, performance optimisation, full-stack Next.js at scale.", icon: "🚀" },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10 overflow-hidden">
      {/* Faint wide ruled lines */}
      <div className="absolute inset-0 ruled-bg opacity-50" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <SectionTitle
          number="05"
          title="The Journey"
          subtitle="A hand-drawn roadmap of how I got here."
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="w-full h-px bg-ink-blue/25 origin-left"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, rgba(29,78,216,0.3) 0, rgba(29,78,216,0.3) 8px, transparent 8px, transparent 14px)",
              }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative flex flex-col items-start md:items-center text-left md:text-center"
              >
                {/* Dot on line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 300 }}
                  className="w-5 h-5 rounded-full border-2 border-ink-blue bg-paper z-10 mb-6 flex-shrink-0 flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-ink-blue" />
                </motion.div>

                {/* Card */}
                <div className="paper-card rounded-sm p-4 w-full">
                  <div className="text-2xl mb-2">{stage.icon}</div>
                  <div
                    className="font-hand text-xs text-graphite-pale mb-1"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {stage.year}
                  </div>
                  <h4
                    className="font-hand text-lg font-bold text-ink-blue mb-2"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {stage.title}
                  </h4>
                  <p className="text-xs text-graphite font-sans leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <InkReveal delay={0.4} className="mt-12">
          <Link href="/experience" className="sketch-btn inline-flex text-sm px-6 py-2.5">
            Full Experience →
          </Link>
        </InkReveal>
      </div>
    </section>
  );
}

/* ============================================================
   PHILOSOPHY SECTION
   ============================================================ */
function PhilosophySection() {
  const principles = [
    { label: "Creativity", symbol: "✦", note: "Every UI is a story." },
    { label: "Engineering", symbol: "⊕", note: "Every story needs structure." },
    { label: "Interaction", symbol: "◎", note: "Structure needs to breathe." },
    { label: "Impact", symbol: "→", note: "Breathing creates impact." },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
      {/* Blueprint bg */}
      <div className="absolute inset-0 graph-bg opacity-30" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Main heading */}
        <div className="overflow-hidden mb-3">
          <HandwrittenText
            as="h2"
            className="text-4xl md:text-6xl text-ink-blue"
            duration={1.5}
          >
            Building Experiences
          </HandwrittenText>
        </div>
        <div className="overflow-hidden mb-8">
          <HandwrittenText
            as="h2"
            className="text-4xl md:text-6xl text-ink-blue"
            delay={0.6}
            duration={1.5}
          >
            That Feel Alive.
          </HandwrittenText>
        </div>

        <InkReveal delay={0.3}>
          <p className="text-graphite font-sans max-w-2xl mx-auto leading-relaxed mb-16">
            I approach every project as a synthesis of art and engineering — where
            clean code meets deliberate interaction design, and performance meets
            personality. Great digital products don&apos;t just work. They resonate.
          </p>
        </InkReveal>

        {/* Four principles — sketch boxes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {principles.map(({ label, symbol, note }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="paper-card rounded-sm p-5 text-left"
            >
              <div
                className="font-hand text-3xl text-ink-blue/40 mb-2"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {symbol}
              </div>
              <h4
                className="font-hand text-lg font-bold text-ink-blue mb-1"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {label}
              </h4>
              <p className="text-xs text-graphite-light font-sans italic">{note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT CTA SECTION
   ============================================================ */
function ContactCTA() {
  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10 overflow-hidden">
      {/* Faint grid */}
      <div className="absolute inset-0 ruled-bg opacity-40" aria-hidden="true" />

      {/* Red margin accent */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-margin-red/20" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Decorative annotation */}
        <InkReveal>
          <p
            className="font-hand text-sm text-graphite-pale mb-6"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            — last page of this notebook —
          </p>
        </InkReveal>

        {/* Main heading */}
        <div className="overflow-hidden mb-2">
          <HandwrittenText as="h2" className="text-4xl md:text-6xl text-ink-blue" duration={1.4}>
            Let&apos;s Build Something
          </HandwrittenText>
        </div>
        <div className="overflow-hidden mb-8">
          <HandwrittenText
            as="h2"
            className="text-4xl md:text-6xl text-ink-blue"
            delay={0.5}
            duration={1.4}
          >
            Meaningful.
          </HandwrittenText>
        </div>

        <InkReveal delay={0.5}>
          <p className="text-graphite font-sans max-w-xl mx-auto mb-10 leading-relaxed">
            I&apos;m open to full-time roles, freelance projects, and interesting
            collaborations. Let&apos;s start a conversation.
          </p>
        </InkReveal>

        <InkReveal delay={0.7}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/contact" className="sketch-btn-filled text-base px-8 py-3">
              Send a Message
            </Link>
            <a
              href="mailto:anupsolanki.dev@gmail.com"
              className="sketch-btn text-base px-8 py-3"
            >
              anupsolanki.dev@gmail.com
            </a>
          </div>
        </InkReveal>

        {/* Social links */}
        <InkReveal delay={0.9}>
          <div className="flex justify-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/AnupSolanki7" },
              { label: "LinkedIn", href: "https://linkedin.com/in/anup-solanki" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-hand text-sm text-ink-blue hover:text-ink transition-colors flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                <span className="w-3 h-px bg-current" />
                {label}
              </a>
            ))}
          </div>
        </InkReveal>

        {/* Handwritten signature */}
        <InkReveal delay={1.1}>
          <div className="mt-16 flex flex-col items-center gap-2">
            <span
              className="font-hand text-3xl text-ink-blue/50"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              — Anup
            </span>
            <DrawUnderline
              className="max-w-[120px] mx-auto"
              color="#1D4ED8"
              strokeWidth={1.5}
              delay={0}
            />
          </div>
        </InkReveal>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <PhilosophySection />
        <ContactCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-ink-blue/10 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="font-hand text-sm text-graphite-pale"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            © 2024 Anup Solanki — handcrafted with care
          </span>
          <span className="text-xs text-graphite-pale font-sans">
            React · Next.js · Framer Motion
          </span>
        </div>
      </footer>
    </>
  );
}
