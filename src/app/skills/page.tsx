"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/component/ui/Header";
import { InkReveal } from "@/component/ui/HandwrittenText";
import { SectionTitle } from "@/component/ui/SketchCard";

/* ============================================================
   DATA
   ============================================================ */
const skillGroups = [
  {
    label: "Frontend",
    symbol: "◈",
    color: "#1D4ED8",
    skills: [
      { name: "React",          level: 95 },
      { name: "Next.js",        level: 92 },
      { name: "TypeScript",     level: 88 },
      { name: "Tailwind CSS",   level: 93 },
      { name: "Framer Motion",  level: 82 },
      { name: "Redux / Zustand",level: 85 },
      { name: "GSAP",           level: 72 },
      { name: "Three.js",       level: 60 },
    ],
  },
  {
    label: "Backend",
    symbol: "⊕",
    color: "#059669",
    skills: [
      { name: "Node.js",        level: 80 },
      { name: "Express",        level: 82 },
      { name: "Feathers.js",    level: 75 },
      { name: "REST APIs",      level: 90 },
      { name: "GraphQL",        level: 68 },
      { name: "MongoDB",        level: 78 },
      { name: "PostgreSQL",     level: 72 },
      { name: "Redis",          level: 65 },
    ],
  },
  {
    label: "AI & Cloud",
    symbol: "◎",
    color: "#0891B2",
    skills: [
      { name: "OpenAI API",     level: 85 },
      { name: "Gemini API",     level: 78 },
      { name: "AWS Transcribe", level: 72 },
      { name: "AWS S3",         level: 70 },
      { name: "Vercel",         level: 88 },
    ],
  },
  {
    label: "Tooling",
    symbol: "✦",
    color: "#7C3AED",
    skills: [
      { name: "Git / GitHub",   level: 92 },
      { name: "Docker",         level: 60 },
      { name: "Figma",          level: 75 },
      { name: "Testing (Jest)", level: 70 },
      { name: "SEO",            level: 80 },
      { name: "Performance",    level: 85 },
    ],
  },
];

const certifications = [
  { title: "Meta Front-End Developer Certificate", issuer: "Coursera / Meta", year: "2022" },
  { title: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: "2021" },
  { title: "React — The Complete Guide", issuer: "Udemy", year: "2021" },
  { title: "Next.js & React — The Complete Guide", issuer: "Udemy", year: "2022" },
];

const currentlyLearning = [
  "Rust (systems programming)",
  "WebGL / GLSL shaders",
  "LLM fine-tuning",
  "Kubernetes",
];

/* ============================================================
   SKILL BAR
   ============================================================ */
function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="mb-3"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-sans text-graphite">{name}</span>
        <span
          className="font-hand text-xs text-graphite-pale"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-ink-blue/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.15, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color + "aa" }}
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function SkillsPage() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const visibleGroups = activeGroup
    ? skillGroups.filter((g) => g.label === activeGroup)
    : skillGroups;

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 border-b border-ink-blue/10 overflow-hidden">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-margin-red/20" aria-hidden="true" />
          <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_0.9fr] lg:gap-20 gap-0 items-center pb-12">
            <div>
              <InkReveal delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-ink-blue/40" />
                  <span className="font-hand text-sm text-ink-blue" style={{ fontFamily: "var(--font-hand)" }}>
                    § 04 — Skills
                  </span>
                </div>
              </InkReveal>
              <div className="overflow-hidden mb-2">
                <motion.h1
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="ink-heading text-5xl md:text-7xl"
                >
                  Technical Notes.
                </motion.h1>
              </div>
              <InkReveal delay={1}>
                <p className="mt-4 text-graphite font-sans max-w-2xl">
                  A living document of every tool, language, and concept I&apos;ve
                  internalised. Organised the way I keep my engineering notebook — by domain.
                </p>
              </InkReveal>
            </div>

            {/* RIGHT: Engineering notebook / skill bars doodle */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, y: -8, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ delay: 2.5 }}
                className="absolute -top-4 right-2 annotation-tag rotate-[-2deg] float-note z-20"
              >
                React 95% · Next.js 92% ✓
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <svg viewBox="0 0 400 310" className="w-full h-auto" style={{ maxHeight: "360px" }} aria-hidden="true">
                  {/* Background grid dots */}
                  {([
                    [40,20],[90,20],[140,20],[190,20],[240,20],[290,20],[340,20],[390,20],
                    [40,70],[90,70],[140,70],[190,70],[240,70],[290,70],[340,70],[390,70],
                    [40,120],[90,120],[140,120],[190,120],[240,120],[290,120],[340,120],[390,120],
                    [40,170],[90,170],[140,170],[190,170],[240,170],[290,170],[340,170],[390,170],
                    [40,220],[90,220],[140,220],[190,220],[240,220],[290,220],[340,220],[390,220],
                    [40,270],[90,270],[140,270],[190,270],[240,270],[290,270],[340,270],[390,270],
                  ] as [number,number][]).map(([cx,cy],i) => (
                    <circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(29,78,216,0.08)" />
                  ))}
                  {/* Large gear — outer ring */}
                  <motion.circle cx="140" cy="158" r="80"
                    stroke="rgba(29,78,216,0.5)" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }} />
                  {/* Large gear — inner ring */}
                  <motion.circle cx="140" cy="158" r="52"
                    stroke="rgba(29,78,216,0.3)" strokeWidth="1.5" fill="rgba(29,78,216,0.03)"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }} />
                  {/* Large gear — spokes (8 spokes) */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * Math.PI * 2) / 8;
                    const ix = 140 + Math.cos(angle) * 52;
                    const iy = 158 + Math.sin(angle) * 52;
                    const ox = 140 + Math.cos(angle) * 80;
                    const oy = 158 + Math.sin(angle) * 80;
                    return (
                      <motion.path key={i} d={`M ${ix.toFixed(1)} ${iy.toFixed(1)} L ${ox.toFixed(1)} ${oy.toFixed(1)}`}
                        stroke="rgba(29,78,216,0.35)" strokeWidth="1.5" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1.9 + i * 0.05, duration: 0.25 }} />
                    );
                  })}
                  {/* Small gear — outer ring */}
                  <motion.circle cx="262" cy="88" r="44"
                    stroke="rgba(29,78,216,0.4)" strokeWidth="1.8" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.1, duration: 0.55 }} />
                  {/* Small gear — inner ring */}
                  <motion.circle cx="262" cy="88" r="28"
                    stroke="rgba(29,78,216,0.25)" strokeWidth="1.2" fill="rgba(29,78,216,0.03)"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.4 }} />
                  {/* Small gear — spokes (6) */}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i * Math.PI * 2) / 6;
                    const ix = 262 + Math.cos(angle) * 28;
                    const iy = 88 + Math.sin(angle) * 28;
                    const ox = 262 + Math.cos(angle) * 44;
                    const oy = 88 + Math.sin(angle) * 44;
                    return (
                      <motion.path key={i} d={`M ${ix.toFixed(1)} ${iy.toFixed(1)} L ${ox.toFixed(1)} ${oy.toFixed(1)}`}
                        stroke="rgba(29,78,216,0.28)" strokeWidth="1.2" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.25 + i * 0.04, duration: 0.2 }} />
                    );
                  })}
                  {/* Skill bars on the right */}
                  {([
                    [248, 168, 130, "#1D4ED8", "React 95%"],
                    [248, 192, 108, "#059669", "Node 80%"],
                    [248, 216, 118, "#0891B2", "AI APIs 85%"],
                    [248, 240, 96,  "#7C3AED", "Docker 60%"],
                  ] as [number,number,number,string,string][]).map(([x,y,w,color,label],i) => (
                    <g key={i}>
                      <motion.path d={`M ${x} ${y} L ${x + 144} ${y}`}
                        stroke="rgba(29,78,216,0.12)" strokeWidth="8" strokeLinecap="round" fill="none"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 + i * 0.1 }} />
                      <motion.path d={`M ${x} ${y} L ${x + w} ${y}`}
                        stroke={color + "90"} strokeWidth="8" strokeLinecap="round" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.55 + i * 0.1, duration: 0.5, ease: "easeOut" }} />
                      <motion.text x={x} y={y - 6} fontSize="8.5" fill="rgba(29,78,216,0.55)" fontFamily="sans-serif"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 + i * 0.1 }}>{label}</motion.text>
                    </g>
                  ))}
                  {/* Corner label */}
                  <motion.text x="18" y="298" fontSize="9" fill="rgba(29,78,216,0.38)" fontFamily="sans-serif"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>20+ tools mastered</motion.text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FILTER TABS */}
        <section className="sticky top-[57px] z-30 bg-paper/95 backdrop-blur-sm border-b border-ink-blue/10 px-6 md:px-12 lg:px-20 py-3">
          <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveGroup(null)}
              className={`flex-shrink-0 font-hand text-sm px-4 py-1.5 rounded-sm border transition-all duration-150 ${
                !activeGroup
                  ? "bg-ink-blue text-white border-ink-blue"
                  : "border-ink-blue/25 text-graphite hover:border-ink-blue/60 hover:text-ink-blue bg-transparent"
              }`}
              style={{ fontFamily: "var(--font-hand)" }}
            >
              All
            </button>
            {skillGroups.map((g) => (
              <button
                key={g.label}
                onClick={() => setActiveGroup(activeGroup === g.label ? null : g.label)}
                className={`flex-shrink-0 font-hand text-sm px-4 py-1.5 rounded-sm border transition-all duration-150 ${
                  activeGroup === g.label
                    ? "text-white border-transparent"
                    : "border-ink-blue/25 text-graphite hover:border-ink-blue/60 hover:text-ink-blue bg-transparent"
                }`}
                style={{
                  fontFamily: "var(--font-hand)",
                  ...(activeGroup === g.label && { backgroundColor: g.color }),
                }}
              >
                {g.symbol} {g.label}
              </button>
            ))}
          </div>
        </section>

        {/* SKILL GROUPS GRID */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
              {visibleGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: gi * 0.1, duration: 0.45 }}
                  className="relative rounded-sm border overflow-hidden"
                  style={{
                    borderColor: group.color + "30",
                    backgroundColor: "#EFF6FF",
                    backgroundImage: `
                      repeating-linear-gradient(rgba(59,130,246,0.07) 0px, rgba(59,130,246,0.07) 1px, transparent 1px, transparent 22px),
                      repeating-linear-gradient(90deg, rgba(59,130,246,0.07) 0px, rgba(59,130,246,0.07) 1px, transparent 1px, transparent 22px)
                    `,
                    boxShadow: "2px 4px 0 rgba(59,130,246,0.08)",
                  }}
                >
                  {/* Top colour strip */}
                  <div className="h-1" style={{ backgroundColor: group.color }} />

                  <div className="p-6">
                    {/* Group header */}
                    <div className="flex items-center gap-2 mb-5">
                      <span
                        className="font-hand text-2xl"
                        style={{ color: group.color, fontFamily: "var(--font-hand)" }}
                      >
                        {group.symbol}
                      </span>
                      <h3
                        className="font-hand text-xl font-bold text-ink"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {group.label}
                      </h3>
                      <span
                        className="ml-auto font-hand text-xs text-graphite-pale"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {group.skills.length} skills
                      </span>
                    </div>

                    {/* Skill bars */}
                    {group.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={group.color}
                        delay={gi * 0.05 + si * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="02" title="Certifications" className="mb-10" />
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.4 }}
                  className="paper-card rounded-sm p-4 flex gap-3 items-start"
                >
                  <span className="text-xl mt-0.5">📜</span>
                  <div>
                    <div
                      className="font-hand text-base font-bold text-ink-blue mb-0.5"
                      style={{ fontFamily: "var(--font-hand)" }}
                    >
                      {cert.title}
                    </div>
                    <div className="text-xs text-graphite-light font-sans">
                      {cert.issuer} · {cert.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRENTLY LEARNING */}
        <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="03" title="Currently Learning" subtitle="The next pages of the notebook." className="mb-8" />
            <div className="flex flex-wrap gap-3">
              {currentlyLearning.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.35 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm border border-dashed border-ink-blue/30 bg-paper-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-blue/40" />
                  <span
                    className="font-hand text-sm text-graphite"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink-blue/10 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-hand text-sm text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>© 2024 Anup Solanki</span>
          <Link href="/" className="text-xs text-graphite-pale font-sans hover:text-ink-blue transition-colors">← Back to Notebook</Link>
        </div>
      </footer>
    </>
  );
}
