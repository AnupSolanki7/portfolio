"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Header from "@/component/ui/Header";
import {
  DrawUnderline,
  DrawArrow,
  InkReveal,
} from "@/component/ui/HandwrittenText";

/* ============================================================
   DATA
   ============================================================ */
const HERO_PHRASES = [
  "Frontend Developer · Ahmedabad, India",
  "React & Next.js Specialist · 3.5 yrs",
  "UI Engineer · Available for hire",
];

const TECH_PILLS = [
  "React.js", "Next.js", "TypeScript", "Redux Toolkit", "React Query",
  "Tailwind CSS", "Node.js", "Gemini API", "OpenAI API", "Claude API",
  "AWS Transcribe", "Hugging Face", "Ollama", "PostgreSQL", "MongoDB",
];

const featuredProjects = [
  {
    chips: ["AI", "Python", "Gemini API"],
    title: "Company Brain",
    desc: "Enterprise knowledge intelligence platform — vector ingestion pipelines, semantic search, and contextual reasoning over org-wide data (Slack, docs, messages).",
    year: "2025",
  },
  {
    chips: ["Next.js", "Gemini API", "AWS"],
    title: "AI Offline Meeting Summarizer",
    desc: "Automatically transcribes audio recordings and generates structured summaries with action items — built for async-first teams.",
    year: "2024",
  },
];

/* ============================================================
   HERO SECTION
   ============================================================ */
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [phraseIdx, setPhraseIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yAnnotations = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const t = setInterval(
      () => setPhraseIdx((i) => (i + 1) % HERO_PHRASES.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

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
        <svg className="absolute bottom-24 left-0 w-32 opacity-8" viewBox="0 0 160 80">
          {[0, 12, 24, 36, 48].map((y) => (
            <line key={y} x1="8" y1={y + 10} x2="150" y2={y + 10}
              stroke="#1D4ED8" strokeWidth="1" strokeDasharray="4 3" />
          ))}
        </svg>
        <svg className="absolute top-24 right-0 w-32 opacity-8" viewBox="0 0 160 80">
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
              <span
                className="font-hand text-sm text-ink-blue font-medium"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {HERO_PHRASES[phraseIdx]}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-0.5"
                >|</motion.span>
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
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link href="/projects" className="sketch-btn-filled text-base px-7 py-3">
                View Projects
              </Link>
              <Link href="/contact" className="sketch-btn text-base px-7 py-3">
                Contact Me
              </Link>
            </div>
          </InkReveal>

          {/* Stat chips */}
          <InkReveal delay={2.3}>
            <div className="flex flex-wrap gap-2">
              {["3+ yrs exp", "20+ projects", "30+ interviews"].map((chip) => (
                <span
                  key={chip}
                  className="border border-ink-blue/30 rounded px-4 py-1 text-sm font-hand text-graphite"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </InkReveal>
        </div>

        {/* RIGHT — rich pinboard collage (desktop only) */}
        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <svg viewBox="0 0 520 450" className="w-full h-auto" style={{ maxHeight: "500px" }} aria-hidden="true">

              {/* ── COFFEE STAINS ── */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }}>
                <circle cx="390" cy="390" r="42" fill="rgba(139,90,43,0.07)" />
                <circle cx="393" cy="393" r="34" fill="rgba(139,90,43,0.04)" stroke="rgba(139,90,43,0.1)" strokeWidth="1.5" />
                <circle cx="487" cy="50" r="27" fill="rgba(139,90,43,0.07)" />
                <circle cx="489" cy="52" r="20" fill="rgba(139,90,43,0.04)" stroke="rgba(139,90,43,0.1)" strokeWidth="1" />
              </motion.g>

              {/* ── PSEUDO-CODE SNIPPETS ── */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}
                style={{ fontSize: "7.5px", fontFamily: "Courier New, monospace" }}>
                <text x="270" y="38" fill="rgba(29,78,216,0.3)" style={{ fontStyle: "italic" }}>pseudo-code:</text>
                <text x="275" y="50" fill="rgba(29,78,216,0.25)">{"// build{"}</text>
                <text x="280" y="61" fill="rgba(29,78,216,0.22)">{"  footcode:{"}</text>
                <text x="285" y="72" fill="rgba(29,78,216,0.2)">{"  modelstream{}"}</text>
                <text x="285" y="83" fill="rgba(29,78,216,0.2)">{"  device"}</text>
                <text x="275" y="94" fill="rgba(29,78,216,0.22)">{"}"}</text>
              </motion.g>
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}
                style={{ fontSize: "7.5px", fontFamily: "Courier New, monospace" }}>
                <text x="432" y="132" fill="rgba(29,78,216,0.28)" style={{ fontStyle: "italic" }}>pseudo-code:</text>
                <text x="430" y="143" fill="rgba(29,78,216,0.22)">{"/ pseudo-code()"}</text>
              </motion.g>
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}
                style={{ fontSize: "7.5px", fontFamily: "Courier New, monospace" }}>
                <text x="342" y="182" fill="rgba(29,78,216,0.28)" style={{ fontStyle: "italic" }}>pseudo-code:</text>
                <text x="344" y="193" fill="rgba(29,78,216,0.25)">{"// build{"}</text>
                <text x="349" y="204" fill="rgba(29,78,216,0.22)">{"  -> creat"}</text>
                <text x="344" y="215" fill="rgba(29,78,216,0.25)">{"}"}</text>
              </motion.g>

              {/* ── CONNECTOR LINES ── */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }}
                stroke="rgba(29,78,216,0.14)" strokeWidth="1" strokeDasharray="3 2" fill="none">
                <line x1="195" y1="95" x2="268" y2="52" />
                <line x1="285" y1="178" x2="338" y2="155" />
                <line x1="172" y1="278" x2="248" y2="268" />
                <path d="M 437 122 C 422 116 408 103 398 94" />
                <path d="M 186 138 C 222 152 242 163 250 170" />
              </motion.g>

              {/* ── CARD 1 — React Performance Optimization ── */}
              <motion.g transform="rotate(-3, 108, 112)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.6 }}>
                <rect x="68" y="22" width="52" height="12" rx="2"
                  fill="rgba(29,78,216,0.06)" stroke="rgba(29,78,216,0.2)" strokeWidth="0.8" />
                <rect x="26" y="37" width="166" height="120" rx="3"
                  fill="rgba(0,0,0,0.05)" transform="translate(3,3)" />
                <rect x="26" y="35" width="166" height="120" rx="3"
                  fill="rgba(248,244,236,0.97)" stroke="rgba(29,78,216,0.22)" strokeWidth="1.5" />
                <rect x="36" y="45" width="146" height="66" rx="2"
                  fill="rgba(29,78,216,0.03)" stroke="rgba(29,78,216,0.1)" strokeWidth="1" />
                {[90,78,66].map(y => (
                  <line key={y} x1="36" y1={y} x2="182" y2={y} stroke="rgba(29,78,216,0.09)" strokeWidth="0.5" strokeDasharray="2 2" />
                ))}
                <rect x="50" y="69" width="15" height="22" rx="1" fill="rgba(29,78,216,0.3)" />
                <rect x="72" y="60" width="15" height="31" rx="1" fill="rgba(29,78,216,0.2)" />
                <rect x="94" y="64" width="15" height="27" rx="1" fill="rgba(29,78,216,0.45)" />
                <rect x="116" y="55" width="15" height="36" rx="1" fill="rgba(29,78,216,0.25)" />
                <rect x="138" y="62" width="15" height="29" rx="1" fill="rgba(29,78,216,0.38)" />
                <line x1="42" y1="91" x2="162" y2="91" stroke="rgba(29,78,216,0.22)" strokeWidth="1" />
                <path d="M 57 85 L 79 76 L 101 80 L 123 69 L 145 73"
                  fill="none" stroke="rgba(220,38,38,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="109" y="120" textAnchor="middle"
                  style={{ fontSize: "9px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.82)", fontWeight: "600" }}>
                  React Performance
                </text>
                <text x="109" y="132" textAnchor="middle"
                  style={{ fontSize: "9px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.72)" }}>
                  Optimization
                </text>
              </motion.g>

              {/* ── CARD 2 — Next.js Static Site Generation ── */}
              <motion.g transform="rotate(2, 212, 252)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 0.6 }}>
                <rect x="178" y="152" width="46" height="12" rx="2"
                  fill="rgba(29,78,216,0.06)" stroke="rgba(29,78,216,0.2)" strokeWidth="0.8" />
                <rect x="146" y="167" width="146" height="116" rx="3"
                  fill="rgba(0,0,0,0.05)" transform="translate(3,3)" />
                <rect x="146" y="165" width="146" height="116" rx="3"
                  fill="rgba(248,244,236,0.97)" stroke="rgba(29,78,216,0.22)" strokeWidth="1.5" />
                <rect x="157" y="173" width="48" height="76" rx="5"
                  fill="none" stroke="rgba(29,78,216,0.45)" strokeWidth="1.8" />
                <rect x="160" y="179" width="42" height="53" rx="1"
                  fill="rgba(29,78,216,0.04)" stroke="rgba(29,78,216,0.1)" strokeWidth="0.5" />
                {[186,194,201,208].map((y) => (
                  <line key={y} x1="165" y1={y} x2={y === 208 ? 191 : 197} y2={y}
                    stroke="rgba(29,78,216,0.22)" strokeWidth="1" />
                ))}
                <circle cx="181" cy="237" r="5" fill="none" stroke="rgba(29,78,216,0.3)" strokeWidth="1" />
                <rect x="214" y="175" width="54" height="65" rx="4"
                  fill="none" stroke="rgba(29,78,216,0.35)" strokeWidth="1.5" />
                <rect x="217" y="179" width="48" height="48" rx="1" fill="rgba(29,78,216,0.03)" />
                {[187,195,203,211].map((y) => (
                  <line key={y} x1="221" y1={y} x2={y === 211 ? 253 : 261} y2={y}
                    stroke="rgba(29,78,216,0.18)" strokeWidth="0.9" />
                ))}
                <text x="219" y="262" textAnchor="middle"
                  style={{ fontSize: "6.5px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.35)", fontStyle: "italic" }}>
                  site projects
                </text>
                <text x="219" y="272" textAnchor="middle"
                  style={{ fontSize: "8.5px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.82)", fontWeight: "600" }}>
                  Next.js Static
                </text>
                <text x="219" y="282" textAnchor="middle"
                  style={{ fontSize: "8.5px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.72)" }}>
                  Site Generation
                </text>
              </motion.g>

              {/* ── CARD 3 — State Management (Redux) ── */}
              <motion.g transform="rotate(-2, 92, 348)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 0.6 }}>
                <rect x="57" y="284" width="40" height="11" rx="2"
                  fill="rgba(29,78,216,0.06)" stroke="rgba(29,78,216,0.2)" strokeWidth="0.8" />
                <rect x="22" y="298" width="148" height="100" rx="3"
                  fill="rgba(0,0,0,0.05)" transform="translate(3,3)" />
                <rect x="22" y="296" width="148" height="100" rx="3"
                  fill="rgba(248,244,236,0.97)" stroke="rgba(29,78,216,0.22)" strokeWidth="1.5" />
                <rect x="30" y="304" width="132" height="62" rx="2"
                  fill="rgba(29,78,216,0.05)" stroke="rgba(29,78,216,0.15)" strokeWidth="1" />
                <rect x="30" y="304" width="132" height="11" rx="2" fill="rgba(29,78,216,0.1)" />
                <circle cx="39" cy="309" r="2.5" fill="rgba(220,38,38,0.55)" />
                <circle cx="47" cy="309" r="2.5" fill="rgba(234,179,8,0.55)" />
                <circle cx="55" cy="309" r="2.5" fill="rgba(34,197,94,0.55)" />
                <line x1="37" y1="322" x2="130" y2="322" stroke="rgba(29,78,216,0.35)" strokeWidth="1.8" />
                <line x1="37" y1="331" x2="110" y2="331" stroke="rgba(29,78,216,0.22)" strokeWidth="1.2" />
                <line x1="44" y1="339" x2="122" y2="339" stroke="rgba(29,78,216,0.28)" strokeWidth="1.2" />
                <line x1="44" y1="347" x2="96" y2="347" stroke="rgba(29,78,216,0.2)" strokeWidth="1.2" />
                <line x1="37" y1="355" x2="114" y2="355" stroke="rgba(29,78,216,0.22)" strokeWidth="1.2" />
                <rect x="37" y="359" width="7" height="8" rx="1" fill="rgba(29,78,216,0.35)" />
                <text x="96" y="381" textAnchor="middle"
                  style={{ fontSize: "8.5px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.82)", fontWeight: "600" }}>
                  State Management
                </text>
                <text x="96" y="391" textAnchor="middle"
                  style={{ fontSize: "8.5px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.65)" }}>
                  (Redux)
                </text>
              </motion.g>

              {/* ── REACT LOGO ── */}
              <motion.g transform="translate(352, 62)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.5 }}>
                <circle cx="0" cy="0" r="14" fill="rgba(29,78,216,0.1)" stroke="rgba(29,78,216,0.18)" strokeWidth="1" />
                <ellipse cx="0" cy="0" rx="44" ry="16" fill="none" stroke="rgba(29,78,216,0.7)" strokeWidth="2.2" />
                <ellipse cx="0" cy="0" rx="44" ry="16" fill="none" stroke="rgba(29,78,216,0.7)" strokeWidth="2.2" transform="rotate(60)" />
                <ellipse cx="0" cy="0" rx="44" ry="16" fill="none" stroke="rgba(29,78,216,0.7)" strokeWidth="2.2" transform="rotate(120)" />
                <circle cx="0" cy="0" r="7" fill="rgba(29,78,216,0.85)" />
              </motion.g>

              {/* ── TYPESCRIPT BADGE ── */}
              <motion.g transform="translate(456, 62)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, duration: 0.5 }}>
                <rect x="0" y="0" width="56" height="56" rx="5" fill="rgba(29,78,216,0.9)" />
                <text x="28" y="38" textAnchor="middle"
                  style={{ fontSize: "22px", fontFamily: "Arial, sans-serif", fill: "white", fontWeight: "bold" }}>TS</text>
              </motion.g>

              {/* ── NEXT.JS BADGE ── */}
              <motion.g transform="translate(338, 148)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4 }}>
                <rect x="0" y="0" width="80" height="30" rx="4" fill="rgba(8,8,8,0.82)" />
                <text x="40" y="21" textAnchor="middle"
                  style={{ fontSize: "13px", fontFamily: "Arial, sans-serif", fill: "white", fontWeight: "bold", letterSpacing: "0.5px" }}>NEXT.js</text>
              </motion.g>

              {/* ── DOCKER BADGE ── */}
              <motion.g transform="translate(406, 178)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.4 }}>
                <rect x="0" y="0" width="74" height="54" rx="4"
                  fill="rgba(29,78,216,0.07)" stroke="rgba(29,78,216,0.28)" strokeWidth="1.5" />
                <rect x="8" y="8" width="13" height="11" rx="1" fill="none" stroke="rgba(29,78,216,0.5)" strokeWidth="1.2" />
                <rect x="23" y="8" width="13" height="11" rx="1" fill="none" stroke="rgba(29,78,216,0.5)" strokeWidth="1.2" />
                <rect x="38" y="8" width="13" height="11" rx="1" fill="none" stroke="rgba(29,78,216,0.5)" strokeWidth="1.2" />
                <rect x="8" y="21" width="13" height="11" rx="1" fill="none" stroke="rgba(29,78,216,0.5)" strokeWidth="1.2" />
                <rect x="23" y="21" width="13" height="11" rx="1" fill="none" stroke="rgba(29,78,216,0.5)" strokeWidth="1.2" />
                <path d="M 6 38 Q 37 28 68 36"
                  fill="none" stroke="rgba(29,78,216,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                <text x="37" y="50" textAnchor="middle"
                  style={{ fontSize: "9px", fontFamily: "Arial, sans-serif", fill: "rgba(29,78,216,0.75)", fontWeight: "bold", letterSpacing: "1px" }}>docker</text>
              </motion.g>

              {/* ── SKILL HEXAGONS ── */}
              {[
                { cx: 365, cy: 278, label: "GraphQL", score: "9/x" },
                { cx: 420, cy: 258, label: "Experience", score: "9/x" },
                { cx: 362, cy: 328, label: "TDD", score: "8/x" },
                { cx: 418, cy: 308, label: "Con", score: "8/x" },
                { cx: 474, cy: 288, label: "CI/CD", score: "9/x" },
              ].map(({ cx, cy, label, score }, i) => {
                const r = 28;
                const pts = Array.from({ length: 6 }, (_, k) => {
                  const a = (Math.PI / 3) * k - Math.PI / 6;
                  return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
                }).join(" ");
                return (
                  <motion.g key={label}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 2.45 + i * 0.08, duration: 0.4 }}>
                    <polygon points={pts}
                      fill="rgba(248,244,236,0.93)" stroke="rgba(29,78,216,0.38)" strokeWidth="1.5" />
                    <text x={cx} y={cy - 6} textAnchor="middle"
                      style={{ fontSize: "7px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.85)", fontWeight: "700" }}>
                      {label}
                    </text>
                    <text x={cx} y={cy + 4} textAnchor="middle"
                      style={{ fontSize: "6px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.6)" }}>
                      Experience
                    </text>
                    <text x={cx} y={cy + 15} textAnchor="middle"
                      style={{ fontSize: "9px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.82)", fontWeight: "bold" }}>
                      {score}
                    </text>
                  </motion.g>
                );
              })}

              {/* ── AVAILABLE FOR HIRE badge ── */}
              <motion.g transform="translate(248, 170)"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 0.4 }}>
                <rect x="0" y="0" width="96" height="22" rx="3"
                  fill="rgba(29,78,216,0.06)" stroke="rgba(29,78,216,0.28)" strokeWidth="1" strokeDasharray="3 2" />
                <circle cx="11" cy="11" r="3.5" fill="rgba(34,197,94,0.75)" />
                <text x="54" y="15" textAnchor="middle"
                  style={{ fontSize: "9px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.78)", fontWeight: "600" }}>
                  Available for hire!
                </text>
              </motion.g>

              {/* ── HAND EXPERIENCE RATING annotation ── */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }}>
                <path d="M 462 248 C 470 242 474 234 471 224"
                  fill="none" stroke="rgba(29,78,216,0.3)" strokeWidth="1" strokeLinecap="round" />
                <path d="M 467 226 L 471 224 L 473 228"
                  fill="none" stroke="rgba(29,78,216,0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <text x="475" y="238"
                  style={{ fontSize: "7px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.45)" }}>Hand experience</text>
                <text x="475" y="248"
                  style={{ fontSize: "7px", fontFamily: "var(--font-hand)", fill: "rgba(29,78,216,0.45)" }}>rating</text>
              </motion.g>

              {/* ── TO GET REP annotation ── */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
                <text x="178" y="410"
                  style={{ fontSize: "7px", fontFamily: "Courier New, monospace", fill: "rgba(29,78,216,0.28)", fontStyle: "italic" }}>
                  {"// To get rep."}
                </text>
                <path d="M 181 405 L 181 399 L 192 391"
                  fill="none" stroke="rgba(29,78,216,0.22)" strokeWidth="1" strokeLinecap="round" />
              </motion.g>
            </svg>
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
        <span className="font-hand text-xs text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>scroll</span>
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
   MARQUEE SECTION
   ============================================================ */
function MarqueeSection() {
  return (
    <section className="border-t border-ink-blue/10 py-6 px-6 md:px-12 lg:px-20">
      <p className="font-sans text-xs text-graphite-pale mb-3 tracking-wider uppercase select-none">
        Tech I work with →
      </p>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...TECH_PILLS, ...TECH_PILLS].map((item, i) => (
            <span key={i} className="annotation-tag flex-shrink-0 px-3 py-1">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   WHAT I DO SECTION
   ============================================================ */
function WhatIDoSection() {
  const serviceCards = [
    {
      icon: (
        <svg viewBox="0 0 48 38" width="48" height="38" aria-hidden="true">
          <rect x="2" y="2" width="44" height="34" rx="2" stroke="rgba(29,78,216,0.6)" strokeWidth="2" fill="rgba(29,78,216,0.03)"/>
          <line x1="2" y1="12" x2="46" y2="12" stroke="rgba(29,78,216,0.35)" strokeWidth="1.5"/>
          <circle cx="9" cy="7" r="2.5" fill="rgba(220,38,38,0.45)"/>
          <circle cx="16" cy="7" r="2.5" fill="rgba(234,179,8,0.45)"/>
          <circle cx="23" cy="7" r="2.5" fill="rgba(34,197,94,0.45)"/>
          <rect x="6" y="17" width="34" height="3" rx="1" fill="rgba(29,78,216,0.18)"/>
          <rect x="6" y="24" width="24" height="3" rx="1" fill="rgba(29,78,216,0.12)"/>
          <rect x="6" y="30" width="16" height="2.5" rx="1" fill="rgba(29,78,216,0.08)"/>
        </svg>
      ),
      title: "Frontend Engineering",
      tags: ["React.js", "Next.js", "TypeScript"],
      body: "Building fast, accessible, production-ready interfaces that designers love and users trust.",
    },
    {
      icon: (
        <svg viewBox="0 0 40 48" width="40" height="48" aria-hidden="true">
          <line x1="20" y1="6" x2="20" y2="1" stroke="rgba(29,78,216,0.55)" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="1" r="2.5" fill="rgba(29,78,216,0.55)"/>
          <rect x="4" y="6" width="32" height="22" rx="3" stroke="rgba(29,78,216,0.6)" strokeWidth="2" fill="rgba(29,78,216,0.04)"/>
          <rect x="10" y="12" width="6" height="6" rx="1.5" fill="rgba(29,78,216,0.45)"/>
          <rect x="24" y="12" width="6" height="6" rx="1.5" fill="rgba(29,78,216,0.45)"/>
          <line x1="11" y1="22" x2="29" y2="22" stroke="rgba(29,78,216,0.25)" strokeWidth="1.5"/>
          <rect x="8" y="30" width="24" height="16" rx="2" stroke="rgba(29,78,216,0.4)" strokeWidth="2" fill="rgba(29,78,216,0.03)"/>
          <line x1="12" y1="36" x2="28" y2="36" stroke="rgba(29,78,216,0.22)" strokeWidth="1.2"/>
          <line x1="12" y1="41" x2="22" y2="41" stroke="rgba(29,78,216,0.16)" strokeWidth="1.2"/>
        </svg>
      ),
      title: "AI Integration",
      tags: ["Gemini API", "OpenAI", "Claude API"],
      body: "Shipping intelligent product features — summarizers, triagers, semantic search — using LLMs and vector databases.",
    },
    {
      icon: (
        <svg viewBox="0 0 56 40" width="56" height="40" aria-hidden="true">
          <circle cx="10" cy="12" r="8" stroke="rgba(29,78,216,0.45)" strokeWidth="1.5" fill="none"/>
          <circle cx="28" cy="10" r="10" stroke="rgba(29,78,216,0.6)" strokeWidth="2" fill="rgba(29,78,216,0.04)"/>
          <circle cx="46" cy="12" r="8" stroke="rgba(29,78,216,0.45)" strokeWidth="1.5" fill="none"/>
          <path d="M 0 40 Q 1 28 10 26 Q 19 28 20 40" stroke="rgba(29,78,216,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M 16 40 Q 18 26 28 24 Q 38 26 40 40" stroke="rgba(29,78,216,0.5)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 36 40 Q 37 28 46 26 Q 55 28 56 40" stroke="rgba(29,78,216,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: "Team Leadership",
      tags: ["OKRs", "Sprints", "Mentoring"],
      body: "Acting team lead at Solguruz — sprint coordination, OKR ownership, 30+ technical interviews conducted.",
    },
  ];

  return (
    <section className="border-t border-ink-blue/10 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <InkReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-px bg-ink-blue/40" />
            <span className="font-hand text-sm text-ink-blue" style={{ fontFamily: "var(--font-hand)" }}>
              § 02 / What I do
            </span>
          </div>
        </InkReveal>
        <InkReveal delay={0.1}>
          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="ink-heading text-4xl md:text-5xl"
            >
              Where I add value
            </motion.h2>
          </div>
        </InkReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map(({ icon, title, tags, body }, i) => (
            <InkReveal key={title} delay={i * 0.1}>
              <div className="paper-card hover:-translate-y-1 transition-transform duration-200 cursor-default p-6 flex flex-col gap-3 h-full rounded-sm">
                <div>{icon}</div>
                <h3 className="font-hand text-xl font-bold text-ink-blue" style={{ fontFamily: "var(--font-hand)" }}>
                  {title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="annotation-tag text-xs px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-graphite font-sans leading-relaxed">{body}</p>
              </div>
            </InkReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURED PROJECTS SECTION
   ============================================================ */
function FeaturedProjectsSection() {
  return (
    <section className="border-t border-b border-ink-blue/10 py-16 px-6 md:px-12 lg:px-20 bg-ink-blue/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <InkReveal>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-px bg-ink-blue/40" />
                <span className="font-hand text-sm text-ink-blue" style={{ fontFamily: "var(--font-hand)" }}>
                  § 03 / Selected work
                </span>
              </div>
            </InkReveal>
            <InkReveal delay={0.1}>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="ink-heading text-4xl md:text-5xl"
                >
                  Things I&apos;ve shipped
                </motion.h2>
              </div>
            </InkReveal>
          </div>
          <InkReveal delay={0.15}>
            <Link
              href="/projects"
              className="font-hand text-sm text-ink-blue flex items-center gap-2"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              View all projects
              <DrawArrow direction="right" className="w-10 h-4" color="#1D4ED8" delay={0} />
            </Link>
          </InkReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map(({ chips, title, desc, year }, i) => (
            <InkReveal key={title} delay={i * 0.1}>
              <div className="paper-card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200 cursor-default h-full rounded-sm">
                <div className="flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span key={chip} className="annotation-tag text-xs px-2 py-0.5">{chip}</span>
                  ))}
                </div>
                <h3 className="ink-heading text-2xl">{title}</h3>
                <p className="text-sm text-graphite font-sans leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center justify-between pt-2 border-t border-ink-blue/8">
                  <div className="flex items-center gap-2">
                    <DrawArrow direction="right" className="w-10 h-4" color="#1D4ED8" delay={0} />
                    <span className="font-hand text-sm text-ink-blue" style={{ fontFamily: "var(--font-hand)" }}>
                      View project →
                    </span>
                  </div>
                  <span className="font-hand text-xs text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>
                    {year}
                  </span>
                </div>
              </div>
            </InkReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STATS SECTION
   ============================================================ */
function StatsSection() {
  const statBlocks = [
    { number: "3 yrs 11 mo", label: "Total experience" },
    { number: "20+",          label: "Projects shipped" },
    { number: "30+",          label: "Technical interviews" },
    { number: "2024",         label: "Rising Star Award — Solguruz" },
  ];

  return (
    <section className="border-t border-ink-blue/10 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {statBlocks.map(({ number, label }, i) => (
            <InkReveal key={label} delay={i * 0.1}>
              <div className="flex flex-col gap-1">
                <span
                  className="font-hand text-4xl font-bold text-ink-blue leading-none"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  {number}
                </span>
                <span className="text-sm text-graphite-light font-sans leading-snug">{label}</span>
              </div>
            </InkReveal>
          ))}
        </div>

        <InkReveal delay={0.4}>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-sm text-graphite-light font-sans">
              Senior Software Engineer at Solguruz LLP · Ahmedabad, India
            </span>
          </div>
        </InkReveal>
      </div>
    </section>
  );
}

/* ============================================================
   CTA STRIP
   ============================================================ */
function CTAStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-ink-blue py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">

        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-hand text-sm text-white/60 mb-2"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            Let&apos;s build something
          </motion.p>
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-hand text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              Got a project in mind?
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 font-sans text-base max-w-lg mb-8"
          >
            I&apos;m open to senior frontend roles, freelance projects, and AI integration work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="bg-white text-ink-blue px-6 py-3 font-hand text-lg border border-white hover:bg-transparent hover:text-white transition-colors duration-200 rounded-sm"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="border border-white/50 text-white px-6 py-3 font-hand text-lg hover:bg-white/10 transition-colors duration-200 rounded-sm"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* Right — decorative envelope SVG (desktop only) */}
        <div className="hidden lg:block" aria-hidden="true">
          <motion.svg
            viewBox="0 0 200 160" width="200" height="160"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.2 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <rect x="10" y="35" width="180" height="110" rx="4" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M 10 35 L 100 95 L 190 35" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M 10 145 L 80 95 M 190 145 L 120 95" stroke="white" strokeWidth="1.5" fill="none"/>
            <path d="M 80 18 L 120 18 M 110 10 L 120 18 L 110 26"
              stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="160" cy="18" r="13" stroke="white" strokeWidth="1.5" fill="none"/>
            <text x="154" y="23" fontSize="14" fill="white" style={{ fontFamily: "sans-serif" }}>@</text>
          </motion.svg>
        </div>
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
        <MarqueeSection />
        <WhatIDoSection />
        <FeaturedProjectsSection />
        <StatsSection />
        <CTAStrip />
      </main>

      <footer className="border-t border-ink-blue/10 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-hand text-sm text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>
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
