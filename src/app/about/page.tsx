"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/component/ui/Header";
import HandwrittenText, { InkReveal } from "@/component/ui/HandwrittenText";
import { SectionTitle } from "@/component/ui/SketchCard";

const timeline = [
  {
    year: "2020",
    title: "The Spark",
    company: "Self-taught",
    desc: "Started with HTML/CSS. Built first portfolio. Discovered JavaScript and never looked back. Late nights, tutorials, and pure curiosity.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    year: "2021",
    title: "React Developer",
    company: "Solguruz — Junior",
    desc: "Joined Solguruz as a junior developer. Shipped first production React features within 2 weeks. Learned what 'scale' really means.",
    tags: ["React", "Redux", "REST APIs", "Git"],
  },
  {
    year: "2022–23",
    title: "Frontend Lead",
    company: "Solguruz — Mid",
    desc: "Led the frontend revamp of 3 SaaS products. Introduced TypeScript, design systems, and component libraries across the team.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Design Systems"],
  },
  {
    year: "2023–24",
    title: "Full-Stack & AI",
    company: "Solguruz — Senior",
    desc: "Integrated AI features (OpenAI, Gemini, AWS Transcribe). Mentored 8 developers. Conducted 30+ technical interviews. Won Rising Star.",
    tags: ["AI APIs", "Node.js", "MongoDB", "Mentorship"],
  },
];

const traits = [
  { emoji: "🔬", label: "Detail-oriented", desc: "Pixel precision. Performance-aware. Never ships 'good enough'." },
  { emoji: "🎨", label: "Creative thinker", desc: "Treats every component as both engineering and art." },
  { emoji: "📐", label: "Systems builder", desc: "Thinks in scalable patterns, not one-off solutions." },
  { emoji: "💬", label: "Clear communicator", desc: "Explains trade-offs to both engineers and stakeholders." },
];

const awards = [
  { title: "Rising Star of the Year", org: "Solguruz", year: "2023", note: "For leading UI revamp & mentorship programme" },
  { title: "Best Frontend Delivery", org: "Internal", year: "2022", note: "iManagify hotel management platform" },
];

export default function AboutPage() {
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
                    § 02 — About
                  </span>
                </div>
              </InkReveal>

              {["Developer.", "Builder.", "Thinker."].map((word, i) => (
                <div key={word} className="overflow-hidden mb-2">
                  <motion.h1
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 1.5, delay: 0.2 + i * 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="ink-heading text-5xl md:text-7xl"
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}

              <InkReveal delay={1.6}>
                <p className="mt-6 text-graphite font-sans max-w-2xl leading-relaxed">
                  My story — written honestly, without buzzwords.
                </p>
              </InkReveal>
            </div>

            {/* RIGHT: Developer identity doodle */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, y: -8, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ delay: 2.5 }}
                className="absolute -top-4 right-2 annotation-tag rotate-[3deg] float-note z-20"
              >
                Ahmedabad, India 📍
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
                  {/* Head */}
                  <motion.circle cx="160" cy="82" r="46"
                    stroke="rgba(29,78,216,0.65)" strokeWidth="2" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }} />
                  {/* Eyes */}
                  <motion.circle cx="146" cy="77" r="3.5" fill="rgba(29,78,216,0.55)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} />
                  <motion.circle cx="174" cy="77" r="3.5" fill="rgba(29,78,216,0.55)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} />
                  {/* Smile */}
                  <motion.path d="M 146 92 Q 160 103 174 92"
                    stroke="rgba(29,78,216,0.55)" strokeWidth="1.8" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.3 }} />
                  {/* Shoulders */}
                  <motion.path d="M 105 185 Q 108 162 126 152 Q 142 143 160 140 Q 178 143 194 152 Q 212 162 215 185"
                    stroke="rgba(29,78,216,0.55)" strokeWidth="2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.55 }} />
                  {/* Notebook */}
                  <motion.path d="M 52 200 L 52 285 L 168 285 L 168 200 Z"
                    stroke="rgba(29,78,216,0.65)" strokeWidth="2" fill="rgba(29,78,216,0.03)" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.65, duration: 0.45 }} />
                  {/* Notebook spine */}
                  <motion.path d="M 66 200 L 66 285"
                    stroke="rgba(29,78,216,0.4)" strokeWidth="1.5" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.1, duration: 0.25 }} />
                  {/* Notebook lines */}
                  {([216,228,240,252,264,276] as number[]).map((y, i) => (
                    <motion.path key={i} d={`M 78 ${y} L 156 ${y}`}
                      stroke="rgba(29,78,216,0.22)" strokeWidth="1" fill="none"
                      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 2.15 + i * 0.04, duration: 0.22 }} />
                  ))}
                  {/* Pen */}
                  <motion.path d="M 162 280 L 184 252 L 189 250 L 188 256 L 166 284"
                    stroke="rgba(29,78,216,0.6)" strokeWidth="1.8" fill="rgba(29,78,216,0.05)"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.35 }} />
                  {/* Trait tags */}
                  {([
                    [222, 196, "🔬 Detail-oriented"],
                    [235, 228, "🎨 Creative thinker"],
                    [222, 260, "📐 Systems builder"],
                  ] as [number,number,string][]).map(([x,y,txt],i) => (
                    <g key={i}>
                      <motion.rect x={x} y={y - 16} width="140" height="20" rx="4"
                        stroke="rgba(29,78,216,0.38)" strokeWidth="1.5" fill="rgba(29,78,216,0.04)"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 + i * 0.12 }} />
                      <motion.text x={x + 8} y={y - 2} fontSize="9"
                        fill="rgba(29,78,216,0.72)" fontFamily="sans-serif"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 2.7 + i * 0.12 }}>{txt}</motion.text>
                    </g>
                  ))}
                  {/* Dashed connector: shoulder → traits */}
                  <motion.path d="M 215 162 Q 242 172 242 196"
                    stroke="rgba(29,78,216,0.18)" strokeWidth="1" fill="none" strokeDasharray="3 3"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.55, duration: 0.3 }} />
                  {/* Corner label */}
                  <motion.text x="18" y="300" fontSize="9" fill="rgba(29,78,216,0.38)" fontFamily="sans-serif"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>5+ yrs of building</motion.text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PERSONAL STORY */}
        <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-ink-blue/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-5">
              <SectionTitle number="01" title="The Origin Story" />

              <InkReveal delay={0.2}>
                <p className="text-graphite font-sans leading-relaxed">
                  I stumbled into coding at 18, trying to build a website for a college project.
                  I expected to copy-paste HTML. What happened instead was{" "}
                  <span className="marker-yellow px-0.5">complete obsession.</span>
                </p>
              </InkReveal>
              <InkReveal delay={0.35}>
                <p className="text-graphite font-sans leading-relaxed">
                  Three years, dozens of projects, and one{" "}
                  <span className="marker-blue px-0.5 font-medium text-ink">Rising Star award</span>{" "}
                  later — I build full-stack React applications that have served hundreds of
                  thousands of users. I specialise in experiences that feel fast, look beautiful,
                  and scale without friction.
                </p>
              </InkReveal>
              <InkReveal delay={0.5}>
                <p className="text-graphite font-sans leading-relaxed">
                  What drives me isn&apos;t the code itself — it&apos;s the moment a user opens
                  something I built and it just <em className="text-ink not-italic font-medium">works</em>.
                  Clean. Instant. Intuitive.
                </p>
              </InkReveal>
              <InkReveal delay={0.65}>
                <p className="text-graphite font-sans leading-relaxed">
                  Outside of code: I follow product strategy obsessively, sketch UX flows on
                  actual paper, and have a borderline unhealthy appreciation for typography.
                </p>
              </InkReveal>
            </div>

            <div className="grid grid-cols-2 gap-4 content-start mt-8 md:mt-10">
              {traits.map(({ emoji, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="paper-card rounded-sm p-4"
                  style={{ rotate: ([-1.5, 1.2, -0.8, 1.5][i] ?? 0) + "deg" }}
                >
                  <div className="text-2xl mb-2">{emoji}</div>
                  <div className="font-hand text-base font-bold text-ink-blue mb-1" style={{ fontFamily: "var(--font-hand)" }}>
                    {label}
                  </div>
                  <p className="text-xs text-graphite font-sans leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREER TIMELINE */}
        <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-ink-blue/10">
          <div className="max-w-4xl mx-auto">
            <SectionTitle number="02" title="Career Timeline" subtitle="The notebook pages, in order." className="mb-14" />

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-ink-blue/15" aria-hidden="true" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-ink-blue bg-paper z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink-blue" />
                    </div>

                    <span className="font-hand text-xs text-graphite-pale annotation-tag mb-2 inline-block" style={{ fontFamily: "var(--font-hand)" }}>
                      {item.year}
                    </span>

                    <div className="paper-card rounded-sm p-5 mt-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <h3 className="font-hand text-xl font-bold text-ink-blue" style={{ fontFamily: "var(--font-hand)" }}>
                          {item.title}
                        </h3>
                        <span className="text-xs text-graphite-light font-sans">{item.company}</span>
                      </div>
                      <p className="text-sm text-graphite font-sans leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="text-xs font-sans bg-ink-faint/40 text-ink-blue border border-ink-blue/15 px-2 py-0.5 rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-ink-blue/10">
          <div className="max-w-4xl mx-auto">
            <SectionTitle number="03" title="Recognition" className="mb-10" />
            <div className="grid sm:grid-cols-2 gap-5">
              {awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                  className="paper-card rounded-sm p-5 flex gap-4 items-start"
                >
                  <div className="text-3xl">🏆</div>
                  <div>
                    <div className="font-hand text-lg font-bold text-ink-blue mb-0.5" style={{ fontFamily: "var(--font-hand)" }}>
                      {award.title}
                    </div>
                    <div className="text-xs text-graphite-light font-sans mb-1">{award.org} · {award.year}</div>
                    <p className="text-xs text-graphite font-sans italic">{award.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <InkReveal>
              <HandwrittenText as="h2" className="text-3xl md:text-5xl text-ink-blue mb-6" duration={1.3}>
                Want to work together?
              </HandwrittenText>
            </InkReveal>
            <InkReveal delay={0.3}>
              <p className="text-graphite font-sans mb-8">
                I&apos;m open to full-time roles, contract work, and meaningful collaborations.
                If what you&apos;re building sounds interesting, I&apos;d love to hear about it.
              </p>
            </InkReveal>
            <InkReveal delay={0.5}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="sketch-btn-filled text-base px-8 py-3">Get in Touch</Link>
                <Link href="/projects" className="sketch-btn text-base px-8 py-3">See My Work</Link>
              </div>
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
