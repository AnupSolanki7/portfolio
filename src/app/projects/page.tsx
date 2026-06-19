"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/component/ui/Header";
import { InkReveal } from "@/component/ui/HandwrittenText";

/* ============================================================
   DATA
   ============================================================ */
const projects = [
  {
    id: "property-dollar",
    title: "Property Dollar",
    tag: "Real Estate SaaS",
    year: "2024",
    status: "Live",
    desc: "Full-featured property listing and management platform. Advanced search, virtual tours, AI-powered price predictions, and agent dashboards for 200+ listings.",
    challenge: "Build a platform that could handle complex property search queries in real-time while maintaining fast page loads.",
    solution: "Implemented server-side filtering with Next.js ISR, combined with client-side Algolia search for instant results.",
    impact: "40% reduction in search latency. 3x user engagement compared to previous platform.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Algolia", "OpenAI", "Tailwind CSS", "Vercel"],
    category: "SaaS",
    color: "#1D4ED8",
  },
  {
    id: "imanagify",
    title: "iManagify",
    tag: "Hotel Management",
    year: "2023",
    status: "Live",
    desc: "End-to-end hotel operations system managing bookings, housekeeping schedules, billing workflows, and real-time analytics across 50+ properties.",
    challenge: "Replace a legacy desktop app with a modern web platform — without disrupting live hotel operations during migration.",
    solution: "Phased migration with feature parity gate. Built a dual-mode system that bridged old and new data schemas during cutover.",
    impact: "Used by 400+ hotel staff daily. Booking processing time down 60%.",
    tech: ["React", "Node.js", "Feathers.js", "PostgreSQL", "Recharts", "Ant Design"],
    category: "Dashboard",
    color: "#059669",
  },
  {
    id: "travelease",
    title: "TravelEase",
    tag: "Travel Booking",
    year: "2023",
    status: "Live",
    desc: "Modern travel booking platform with flight, hotel, and package deals. Custom itinerary builder, price alert system, and multi-currency checkout.",
    challenge: "Aggregate pricing from multiple travel APIs while ensuring consistency and preventing race conditions on bookings.",
    solution: "Event-driven pricing cache with Redis. Optimistic UI updates with server-validated confirmations.",
    impact: "10,000+ transactions processed. 4.8-star user rating for booking experience.",
    tech: ["Next.js", "TypeScript", "Redis", "Stripe", "Node.js", "REST APIs"],
    category: "E-Commerce",
    color: "#7C3AED",
  },
  {
    id: "benchpage",
    title: "BenchPage",
    tag: "Recruitment Platform",
    year: "2023",
    status: "Live",
    desc: "B2B recruitment platform connecting IT talent with opportunities. Candidate profiles, skill assessments, ATS integration, and recruiter analytics.",
    challenge: "Build a scalable candidate-matching algorithm that balances skill relevance with recruiter preferences.",
    solution: "Weighted scoring system with configurable recruiter parameters. Built admin dashboards for A/B testing match quality.",
    impact: "1,200+ placements facilitated. Used by 80+ recruiting agencies.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "GraphQL", "AWS S3"],
    category: "SaaS",
    color: "#EA580C",
  },
  {
    id: "grocery-app",
    title: "Grocery App",
    tag: "E-Commerce",
    year: "2022",
    status: "Live",
    desc: "On-demand grocery delivery platform with real-time inventory, dynamic pricing, delivery tracking, and subscription boxes.",
    challenge: "Maintain real-time inventory accuracy across multiple warehouse locations during high-traffic flash sales.",
    solution: "WebSocket-based inventory pub/sub with optimistic locking on checkout. Graceful degradation for sold-out items.",
    impact: "500+ daily orders at peak. Sub-200ms cart operations.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL", "WebSockets", "Stripe"],
    category: "E-Commerce",
    color: "#16A34A",
  },
  {
    id: "recaply",
    title: "Recaply",
    tag: "AI Video Summary",
    year: "2024",
    status: "Live",
    desc: "AI-powered tool that transcribes and summarises any video into structured notes, action items, and key highlights using OpenAI and AWS Transcribe.",
    challenge: "Process long-form video (90+ mins) efficiently while keeping the UI responsive and the cost per transcription sustainable.",
    solution: "Chunked processing with background jobs. Progressive UI updates via polling. Token-aware prompt engineering to stay within cost limits.",
    impact: "500+ videos summarised. Average time-to-summary: 45 seconds for a 30-minute video.",
    tech: ["Next.js", "OpenAI API", "AWS Transcribe", "Vercel", "TypeScript", "Nodemailer"],
    category: "AI",
    color: "#0891B2",
  },
];

const categories = ["All", "SaaS", "Dashboard", "E-Commerce", "AI"];

/* ============================================================
   PROJECT MODAL
   ============================================================ */
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm"
        style={{
          backgroundColor: "#F7F2E8",
          backgroundImage: `
            repeating-linear-gradient(rgba(59,130,246,0.08) 0px, rgba(59,130,246,0.08) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(90deg, rgba(59,130,246,0.08) 0px, rgba(59,130,246,0.08) 1px, transparent 1px, transparent 22px)
          `,
          boxShadow: "6px 12px 0 rgba(29,78,216,0.15), 12px 24px 0 rgba(29,78,216,0.08)",
          border: "1.5px solid rgba(29,78,216,0.3)",
        }}
      >
        {/* Top colour strip */}
        <div className="h-1.5 rounded-t-sm" style={{ backgroundColor: project.color }} />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span
                className="font-hand text-xs border px-2 py-0.5 rounded-sm mb-2 inline-block"
                style={{ fontFamily: "var(--font-hand)", color: project.color, borderColor: project.color + "40" }}
              >
                {project.tag}
              </span>
              <h2
                className="font-hand text-3xl font-bold text-ink"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-graphite-light hover:text-ink transition-colors text-xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-graphite font-sans text-sm leading-relaxed mb-6">{project.desc}</p>

          {/* Challenge / Solution / Impact */}
          {[
            { label: "Challenge", content: project.challenge, symbol: "⚠" },
            { label: "Solution", content: project.solution, symbol: "✦" },
            { label: "Impact",   content: project.impact,   symbol: "→" },
          ].map(({ label, content, symbol }) => (
            <div key={label} className="mb-4 pl-4 border-l-2 border-ink-blue/20">
              <div
                className="font-hand text-sm font-bold text-ink-blue mb-1"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {symbol} {label}
              </div>
              <p className="text-sm text-graphite font-sans leading-relaxed">{content}</p>
            </div>
          ))}

          {/* Tech */}
          <div className="mt-5 pt-4 border-t border-ink-blue/15">
            <div
              className="font-hand text-xs text-graphite-pale mb-2"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-sans bg-white/60 text-graphite border border-ink-blue/15 px-2 py-0.5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-graphite-pale font-sans">{project.year}</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-sans text-graphite-light">{project.status}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 border-b border-ink-blue/10 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_0.9fr] lg:gap-20 gap-0 items-center pb-12">
            <div>
              <InkReveal delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-ink-blue/40" />
                  <span className="font-hand text-sm text-ink-blue" style={{ fontFamily: "var(--font-hand)" }}>
                    § 03 — Projects
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
                  The Sketchbook.
                </motion.h1>
              </div>
              <InkReveal delay={1}>
                <p className="mt-4 text-graphite font-sans max-w-2xl">
                  Six blueprints from production. Each one a story of a problem, a solution,
                  and the business impact in between.
                </p>
              </InkReveal>
            </div>

            {/* RIGHT: Browser / project cards doodle */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, y: -8, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ delay: 2.5 }}
                className="absolute -top-4 right-2 annotation-tag rotate-[5deg] float-note z-20"
              >
                6 live in production ✓
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <svg viewBox="0 0 400 310" className="w-full h-auto" style={{ maxHeight: "360px" }} aria-hidden="true">
                  {/* Browser frame */}
                  <motion.path d="M 28 36 L 372 36 L 372 278 L 28 278 Z"
                    stroke="rgba(29,78,216,0.6)" strokeWidth="2" fill="rgba(29,78,216,0.02)" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }} />
                  {/* Title bar fill */}
                  <motion.path d="M 28 36 L 372 36 L 372 64 L 28 64 Z"
                    stroke="rgba(29,78,216,0.3)" strokeWidth="1" fill="rgba(29,78,216,0.05)"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.65, duration: 0.3 }} />
                  {/* Window control dots */}
                  <motion.circle cx="50" cy="50" r="5" fill="rgba(220,38,38,0.45)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} />
                  <motion.circle cx="66" cy="50" r="5" fill="rgba(234,179,8,0.45)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.85 }} />
                  <motion.circle cx="82" cy="50" r="5" fill="rgba(34,197,94,0.45)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }} />
                  {/* Address bar */}
                  <motion.path d="M 98 43 L 348 43 L 348 57 L 98 57 Z"
                    stroke="rgba(29,78,216,0.22)" strokeWidth="1" fill="rgba(29,78,216,0.03)"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.72, duration: 0.25 }} />
                  {/* 6 project cards — 3 cols × 2 rows */}
                  {([
                    [36,  72,  "#1D4ED8"],
                    [154, 72,  "#059669"],
                    [272, 72,  "#7C3AED"],
                    [36,  178, "#EA580C"],
                    [154, 178, "#16A34A"],
                    [272, 178, "#0891B2"],
                  ] as [number,number,string][]).map(([x,y,color],i) => (
                    <g key={i}>
                      <motion.rect x={x} y={y} width="108" height="96" rx="2"
                        stroke={`${color}50`} strokeWidth="1.5" fill={`${color}05`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.0 + i * 0.1 }} />
                      <motion.rect x={x} y={y} width="108" height="6" rx="2"
                        fill={`${color}65`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.05 + i * 0.1 }} />
                      <motion.path d={`M ${x+8} ${y+22} L ${x+100} ${y+22}`}
                        stroke={`${color}45`} strokeWidth="1.5" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.1 + i * 0.1, duration: 0.2 }} />
                      <motion.path d={`M ${x+8} ${y+36} L ${x+82} ${y+36}`}
                        stroke="rgba(29,78,216,0.18)" strokeWidth="1" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.15 + i * 0.1, duration: 0.18 }} />
                      <motion.path d={`M ${x+8} ${y+48} L ${x+68} ${y+48}`}
                        stroke="rgba(29,78,216,0.14)" strokeWidth="1" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.2 + i * 0.1, duration: 0.16 }} />
                    </g>
                  ))}
                  {/* Corner label */}
                  <motion.text x="18" y="298" fontSize="9" fill="rgba(29,78,216,0.38)" fontFamily="sans-serif"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>production-grade · all live</motion.text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FILTER */}
        <section className="sticky top-[57px] z-30 bg-paper/95 backdrop-blur-sm border-b border-ink-blue/10 px-6 md:px-12 lg:px-20 py-3">
          <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-hand text-sm px-4 py-1.5 rounded-sm border transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-ink-blue text-white border-ink-blue"
                    : "border-ink-blue/25 text-graphite hover:border-ink-blue/60 hover:text-ink-blue bg-transparent"
                }`}
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* GRID */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{
                      y: -6,
                      rotate: 0.2,
                      boxShadow: "4px 12px 0 rgba(59,130,246,0.14)",
                    }}
                    onClick={() => setSelectedProject(project)}
                    className="relative rounded-sm border border-ink-light/30 overflow-hidden cursor-pointer group"
                    style={{
                      rotate: ([-0.5, 0.4, -0.3, 0.5, -0.4, 0.3][i] ?? 0) + "deg",
                      backgroundColor: "#F7F2E8",
                      backgroundImage: `
                        repeating-linear-gradient(rgba(59,130,246,0.08) 0px, rgba(59,130,246,0.08) 1px, transparent 1px, transparent 22px),
                        repeating-linear-gradient(90deg, rgba(59,130,246,0.08) 0px, rgba(59,130,246,0.08) 1px, transparent 1px, transparent 22px)
                      `,
                      boxShadow: "2px 4px 0 rgba(59,130,246,0.09), 4px 8px 0 rgba(59,130,246,0.045)",
                    }}
                  >
                    {/* Colour strip */}
                    <div className="h-1" style={{ backgroundColor: project.color }} />

                    <div className="p-5">
                      {/* Tag + year */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="font-hand text-xs border px-2 py-0.5 rounded-sm"
                          style={{
                            fontFamily: "var(--font-hand)",
                            color: project.color,
                            borderColor: project.color + "40",
                          }}
                        >
                          {project.tag}
                        </span>
                        <span className="font-hand text-xs text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>
                          {project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-hand text-xl font-bold text-ink mb-2 group-hover:text-ink-blue transition-colors"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {project.title}
                      </h3>

                      {/* Desc */}
                      <p className="text-sm text-graphite font-sans leading-relaxed mb-4 line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-sans bg-white/60 text-graphite border border-ink-blue/15 px-2 py-0.5 rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-[11px] font-sans text-graphite-pale">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-ink-blue/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-xs font-sans text-graphite-light">{project.status}</span>
                        </div>
                        <span
                          className="font-hand text-xs text-ink-blue group-hover:underline"
                          style={{ fontFamily: "var(--font-hand)" }}
                        >
                          Read more →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
          <div className="max-w-3xl mx-auto text-center">
            <InkReveal>
              <p
                className="font-hand text-2xl text-ink-blue mb-6"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                Got a project idea?
              </p>
            </InkReveal>
            <InkReveal delay={0.2}>
              <Link href="/contact" className="sketch-btn-filled text-base px-8 py-3">
                Let&apos;s Build It Together
              </Link>
            </InkReveal>
          </div>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <footer className="border-t border-ink-blue/10 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-hand text-sm text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>© 2024 Anup Solanki</span>
          <Link href="/" className="text-xs text-graphite-pale font-sans hover:text-ink-blue transition-colors">← Back to Notebook</Link>
        </div>
      </footer>
    </>
  );
}
