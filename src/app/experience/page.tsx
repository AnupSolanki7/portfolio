"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/component/ui/Header";
import { InkReveal } from "@/component/ui/HandwrittenText";
import { SectionTitle } from "@/component/ui/SketchCard";

/* ============================================================
   DATA
   ============================================================ */
const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Solguruz",
    period: "Jan 2023 – Present",
    type: "Full-Time",
    location: "Ahmedabad, India",
    summary: "Leading frontend architecture for 3 SaaS products. Driving AI integrations, performance optimisations, and team culture.",
    achievements: [
      "Integrated OpenAI, Gemini, and AWS Transcribe APIs into 3 production products",
      "Reduced average page load time by 40% through code-splitting and ISR strategies",
      "Conducted 30+ technical interviews; built structured onboarding for new developers",
      "Mentored 8 junior developers — 3 promoted to mid-level within 12 months",
      "Won Rising Star of the Year award (company-wide recognition)",
    ],
    tech: ["Next.js", "TypeScript", "OpenAI", "AWS", "Node.js", "MongoDB"],
  },
  {
    role: "Mid-Level Frontend Developer",
    company: "Solguruz",
    period: "Jul 2022 – Dec 2022",
    type: "Full-Time",
    location: "Ahmedabad, India",
    summary: "Led the complete frontend revamp of iManagify hotel management platform. Introduced design systems and TypeScript across the team.",
    achievements: [
      "Redesigned and rebuilt the hotel management UI from scratch — 60% faster booking processing",
      "Introduced TypeScript company-wide; led migration of 3 legacy JavaScript codebases",
      "Built a shared component library used across 5 internal projects",
      "Implemented role-based access control for multi-tenant SaaS applications",
    ],
    tech: ["React", "TypeScript", "Ant Design", "Node.js", "PostgreSQL"],
  },
  {
    role: "Junior Frontend Developer",
    company: "Solguruz",
    period: "Jun 2021 – Jun 2022",
    type: "Full-Time",
    location: "Ahmedabad, India",
    summary: "First production role. Shipped features across real estate, travel, and e-commerce platforms.",
    achievements: [
      "Built and launched TravelEase booking platform from design mockups to production",
      "Developed reusable React component library for Property Dollar real estate platform",
      "Collaborated with backend teams to design REST API contracts",
      "Maintained and improved existing legacy jQuery codebases alongside new React work",
    ],
    tech: ["React", "JavaScript", "Redux", "CSS3", "REST APIs", "Git"],
  },
];

const metrics = [
  { value: "3+",  label: "Years at Solguruz",    icon: "📅" },
  { value: "6",   label: "Products Shipped",       icon: "🚀" },
  { value: "8",   label: "Developers Mentored",    icon: "👥" },
  { value: "30+", label: "Interviews Conducted",   icon: "🎙" },
  { value: "40%", label: "Load Time Improvement",  icon: "⚡" },
  { value: "1",   label: "Rising Star Award",      icon: "🏆" },
];

const roadmap = [
  { year: "2020", label: "Self-learning",        note: "HTML, CSS, JS",        icon: "📖" },
  { year: "2021", label: "First job",            note: "Junior Dev @ Solguruz",icon: "💼" },
  { year: "2022", label: "Led revamp",           note: "iManagify rebuild",     icon: "🔨" },
  { year: "2023", label: "AI & Leadership",      note: "Rising Star",           icon: "🌟" },
  { year: "2024", label: "Senior",               note: "Full-stack + AI scale", icon: "🚀" },
];

/* ============================================================
   PAGE
   ============================================================ */
export default function ExperiencePage() {
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
                    § 05 — Experience
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
                  The Roadmap.
                </motion.h1>
              </div>
              <InkReveal delay={1}>
                <p className="mt-4 text-graphite font-sans max-w-2xl">
                  Three years. One company. A continuous curve of learning, shipping,
                  leading, and scaling.
                </p>
              </InkReveal>
            </div>

            {/* RIGHT: Career path timeline doodle */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, y: -8, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ delay: 2.5 }}
                className="absolute -top-4 right-2 annotation-tag rotate-[3deg] float-note z-20"
              >
                Rising Star ⭐ 2023
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
                    [50,25],[100,25],[150,25],[200,25],[250,25],[300,25],[350,25],
                    [50,75],[100,75],[150,75],[200,75],[250,75],[300,75],[350,75],
                    [50,125],[100,125],[150,125],[200,125],[250,125],[300,125],[350,125],
                    [50,175],[100,175],[150,175],[200,175],[250,175],[300,175],[350,175],
                    [50,225],[100,225],[150,225],[200,225],[250,225],[300,225],[350,225],
                    [50,275],[100,275],[150,275],[200,275],[250,275],[300,275],[350,275],
                  ] as [number,number][]).map(([cx,cy],i) => (
                    <circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(29,78,216,0.08)" />
                  ))}
                  {/* Career path curve */}
                  <motion.path
                    d="M 52 288 C 75 268 118 248 152 218 C 186 188 182 158 210 132 C 238 106 264 96 294 72 C 312 58 330 44 352 28"
                    stroke="rgba(29,78,216,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1.4, ease: "easeInOut" }}
                  />
                  {/* Milestone nodes */}
                  {([
                    [52,  288, "2020", "Self-taught",    "right"],
                    [152, 218, "2021", "Junior Dev",     "right"],
                    [210, 132, "2022", "Frontend Lead",  "right"],
                    [294,  72, "2023", "Rising Star ⭐", "left"],
                    [352,  28, "2024", "Senior",         "left"],
                  ] as [number,number,string,string,string][]).map(([cx,cy,year,label,side],i) => (
                    <g key={i}>
                      <motion.circle cx={cx} cy={cy} r="8"
                        stroke="rgba(29,78,216,0.7)" strokeWidth="2" fill="rgba(29,78,216,0.1)"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.0 + i * 0.2 }} />
                      <motion.circle cx={cx} cy={cy} r="3"
                        fill="rgba(29,78,216,0.8)"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.1 + i * 0.2 }} />
                      <motion.text
                        x={side === "right" ? cx + 14 : cx - 14}
                        y={cy - 4}
                        fontSize="8.5" fontWeight="600"
                        fill="rgba(29,78,216,0.8)"
                        textAnchor={side === "right" ? "start" : "end"}
                        fontFamily="sans-serif"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.15 + i * 0.2 }}
                      >{year}</motion.text>
                      <motion.text
                        x={side === "right" ? cx + 14 : cx - 14}
                        y={cy + 8}
                        fontSize="8"
                        fill="rgba(29,78,216,0.5)"
                        textAnchor={side === "right" ? "start" : "end"}
                        fontFamily="sans-serif"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 + i * 0.2 }}
                      >{label}</motion.text>
                    </g>
                  ))}
                  {/* Forward arrow */}
                  <motion.path d="M 352 28 L 378 12 M 378 12 L 367 15 M 378 12 L 370 22"
                    stroke="rgba(29,78,216,0.7)" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 3.1, duration: 0.35 }} />
                  {/* Corner label */}
                  <motion.text x="18" y="300" fontSize="9" fill="rgba(29,78,216,0.38)" fontFamily="sans-serif"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>3+ yrs · Solguruz</motion.text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="py-14 px-6 md:px-12 lg:px-20 border-b border-ink-blue/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {metrics.map(({ value, label, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="paper-card rounded-sm p-4 text-center"
                >
                  <div className="text-2xl mb-1">{icon}</div>
                  <div
                    className="font-hand text-3xl font-bold text-ink-blue"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-graphite-light font-sans mt-0.5 leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREER JOURNEY ROADMAP */}
        <section className="py-16 px-6 md:px-12 lg:px-20 border-b border-ink-blue/10 overflow-hidden">
          <div className="absolute inset-0 ruled-bg opacity-40 pointer-events-none" aria-hidden="true" />
          <div className="max-w-6xl mx-auto relative">
            <SectionTitle number="01" title="The Journey" className="mb-14" />

            {/* Desktop horizontal timeline */}
            <div className="hidden md:block relative">
              {/* Dashed connecting line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="absolute top-8 left-0 right-0 h-px origin-left"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(29,78,216,0.3) 0, rgba(29,78,216,0.3) 10px, transparent 10px, transparent 18px)",
                }}
              />

              <div className="grid grid-cols-5 gap-4">
                {roadmap.map(({ year, label, note, icon }, i) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.45 }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.15, type: "spring", stiffness: 300 }}
                      className="w-6 h-6 rounded-full border-2 border-ink-blue bg-paper z-10 mb-6 flex items-center justify-center flex-shrink-0"
                    >
                      <div className="w-2 h-2 rounded-full bg-ink-blue" />
                    </motion.div>
                    <div className="paper-card rounded-sm p-3 w-full">
                      <div className="text-xl mb-1">{icon}</div>
                      <div
                        className="font-hand text-xs text-graphite-pale mb-0.5"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {year}
                      </div>
                      <div
                        className="font-hand text-sm font-bold text-ink-blue mb-0.5"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {label}
                      </div>
                      <div className="text-xs text-graphite font-sans">{note}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="md:hidden relative pl-10">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-ink-blue/15" />
              {roadmap.map(({ year, label, note, icon }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="relative mb-6"
                >
                  <div className="absolute -left-7 top-1 w-4 h-4 rounded-full border-2 border-ink-blue bg-paper flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-ink-blue" />
                  </div>
                  <div className="paper-card rounded-sm p-3">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-lg">{icon}</span>
                      <span
                        className="font-hand text-sm font-bold text-ink-blue"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="font-hand text-xs text-graphite-pale ml-auto"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {year}
                      </span>
                    </div>
                    <div className="text-xs text-graphite font-sans">{note}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE CARDS */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <SectionTitle number="02" title="Work History" subtitle="The full detail, in reverse chronological order." className="mb-14" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="paper-card rounded-sm overflow-hidden"
                >
                  {/* Top colour strip */}
                  <div
                    className="h-1"
                    style={{
                      backgroundColor: ["#1D4ED8", "#059669", "#7C3AED"][i] ?? "#1D4ED8",
                    }}
                  />

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3
                          className="font-hand text-2xl font-bold text-ink-blue"
                          style={{ fontFamily: "var(--font-hand)" }}
                        >
                          {exp.role}
                        </h3>
                        <div
                          className="font-hand text-base text-ink"
                          style={{ fontFamily: "var(--font-hand)" }}
                        >
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="annotation-tag mb-1 inline-block">{exp.period}</div>
                        <div className="text-xs text-graphite-pale font-sans block">{exp.location}</div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-graphite font-sans leading-relaxed mb-4">{exp.summary}</p>

                    {/* Achievements */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm text-graphite font-sans">
                          <span className="text-ink-blue/60 mt-1 flex-shrink-0">→</span>
                          {a}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ink-blue/10">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-sans bg-ink-faint/40 text-ink-blue border border-ink-blue/15 px-2 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
          <div className="max-w-3xl mx-auto text-center">
            <InkReveal>
              <p className="font-hand text-2xl text-ink-blue mb-6" style={{ fontFamily: "var(--font-hand)" }}>
                The next chapter is still blank.
              </p>
            </InkReveal>
            <InkReveal delay={0.2}>
              <p className="text-graphite font-sans mb-8">
                Open to senior frontend, full-stack, or hybrid engineering roles where
                product thinking matters as much as technical execution.
              </p>
            </InkReveal>
            <InkReveal delay={0.4}>
              <Link href="/contact" className="sketch-btn-filled text-base px-8 py-3">
                Start a Conversation
              </Link>
            </InkReveal>
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
