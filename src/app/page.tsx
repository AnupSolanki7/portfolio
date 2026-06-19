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
   HERO CARDS — 3D Glassmorphism floating cards
   ============================================================ */
function HeroCards() {
  return (
    <div className="hidden lg:block relative" style={{ height: "500px" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative w-full h-full"
      >
        {/* ── SVG connection lines + dots + arrows ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          {/* Line: Performance → Code Architecture */}
          <line x1="310" y1="155" x2="395" y2="110" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" />
          <circle cx="310" cy="155" r="4.5" fill="#60A5FA" />
          <circle cx="395" cy="110" r="4.5" fill="#60A5FA" />
          {/* Line: Performance → UI Components */}
          <line x1="250" y1="210" x2="270" y2="355" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" />
          <circle cx="270" cy="355" r="4.5" fill="#60A5FA" />
          {/* Document icon dot */}
          <circle cx="455" cy="295" r="4.5" fill="#60A5FA" />
          <line x1="435" y1="285" x2="453" y2="293" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
          {/* Right arrow */}
          <line x1="478" y1="255" x2="498" y2="255" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5" />
          <polyline points="492,249 500,255 492,261" fill="none" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        </svg>

        {/* ── Document icon (right side) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          style={{ position: "absolute", right: "3%", top: "52%" }}
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
            <div style={{
              width: "42px", height: "42px", borderRadius: "10px",
              background: "linear-gradient(135deg, rgba(219,234,254,0.8) 0%, rgba(147,197,253,0.5) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 4px 16px rgba(29,78,216,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="2" width="11" height="15" rx="2" stroke="#3B82F6" strokeWidth="1.8" />
                <path d="M15 2l4 4v14a2 2 0 01-2 2H7" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="7" y1="8" x2="13" y2="8" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="7" y1="11" x2="11" y2="11" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* ── React Atom logo (left-middle) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          style={{ position: "absolute", left: "6%", top: "46%" }}
        >
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
            <div style={{
              width: "50px", height: "50px", borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(219,234,254,0.85) 0%, rgba(147,197,253,0.6) 100%)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 6px 20px rgba(29,78,216,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="30" height="30" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="3" fill="#60A5FA" />
                <ellipse cx="15" cy="15" rx="13" ry="5" fill="none" stroke="#60A5FA" strokeWidth="1.8" />
                <ellipse cx="15" cy="15" rx="13" ry="5" fill="none" stroke="#60A5FA" strokeWidth="1.8" transform="rotate(60 15 15)" />
                <ellipse cx="15" cy="15" rx="13" ry="5" fill="none" stroke="#60A5FA" strokeWidth="1.8" transform="rotate(120 15 15)" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARD 1 — Performance (top-left of right column) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", left: "12%", top: "5%" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "225px",
              borderRadius: "20px",
              background: "linear-gradient(145deg, rgba(255,255,255,0.75) 0%, rgba(219,234,254,0.55) 100%)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1.5px solid rgba(255,255,255,0.85)",
              boxShadow: "0 16px 48px rgba(29,78,216,0.14), 0 4px 12px rgba(29,78,216,0.08), inset 0 1px 0 rgba(255,255,255,1)",
              padding: "20px",
              position: "relative",
            }}
          >
            {/* </> code badge in top-right corner */}
            <div style={{
              position: "absolute", top: "-12px", right: "16px",
              background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
              borderRadius: "10px",
              padding: "6px 10px",
              boxShadow: "0 4px 12px rgba(29,78,216,0.4)",
            }}>
              <span style={{ color: "white", fontSize: "12px", fontFamily: "monospace", fontWeight: "bold" }}>&lt;/&gt;</span>
            </div>

            {/* Chart */}
            <div style={{ height: "115px", marginBottom: "12px" }}>
              <svg width="100%" height="100%" viewBox="0 0 185 105" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="perfFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[25, 50, 75].map((y) => (
                  <line key={y} x1="0" y1={y} x2="185" y2={y} stroke="rgba(147,197,253,0.22)" strokeWidth="0.8" />
                ))}
                {/* Area fill */}
                <path
                  d="M0 98 C30 94 55 80 80 65 C105 50 125 34 155 22 C168 16 178 14 185 10 L185 105 L0 105 Z"
                  fill="url(#perfFill)"
                />
                {/* Line */}
                <path
                  d="M0 98 C30 94 55 80 80 65 C105 50 125 34 155 22 C168 16 178 14 185 10"
                  fill="none" stroke="#3B82F6" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
                />
                {/* Peak dot */}
                <circle cx="185" cy="10" r="5" fill="#3B82F6" />
                <circle cx="185" cy="10" r="9" fill="rgba(59,130,246,0.18)" />
              </svg>
            </div>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#1D4ED8", fontFamily: "var(--font-hand)" }}>
              Performance
            </span>
          </motion.div>
        </motion.div>

        {/* ── CARD 2 — Code Architecture (top-right) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", right: "4%", top: "2%" }}
        >
          <motion.div
            animate={{ y: [0, -13, 0] }}
            transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            style={{
              width: "210px",
              borderRadius: "20px",
              background: "linear-gradient(145deg, rgba(12,20,50,0.95) 0%, rgba(20,35,85,0.92) 100%)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1.5px solid rgba(80,120,200,0.4)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.38), 0 4px 12px rgba(29,78,216,0.25)",
              padding: "20px",
            }}
          >
            {/* Two code columns with arrow */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
              {/* Left column */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "7px" }}>
                {[
                  { w: "92%", color: "#60A5FA" },
                  { w: "68%", color: "rgba(148,163,184,0.38)" },
                  { w: "82%", color: "#A78BFA" },
                  { w: "55%", color: "rgba(148,163,184,0.32)" },
                  { w: "75%", color: "#60A5FA" },
                ].map(({ w, color }, i) => (
                  <div key={i} style={{ height: "7px", width: w, borderRadius: "3.5px", background: color }} />
                ))}
              </div>
              {/* Arrow divider */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center", flexShrink: 0 }}>
                <span style={{ color: "rgba(148,163,184,0.6)", fontSize: "16px" }}>→</span>
                <span style={{ color: "rgba(148,163,184,0.3)", fontSize: "16px" }}>→</span>
              </div>
              {/* Right column */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "7px" }}>
                {[
                  { w: "78%", color: "rgba(148,163,184,0.32)" },
                  { w: "88%", color: "#34D399" },
                  { w: "62%", color: "rgba(148,163,184,0.38)" },
                  { w: "82%", color: "#F472B6" },
                  { w: "58%", color: "#34D399" },
                ].map(({ w, color }, i) => (
                  <div key={i} style={{ height: "7px", width: w, borderRadius: "3.5px", background: color }} />
                ))}
              </div>
            </div>
            {/* Separator */}
            <div style={{ height: "1px", background: "rgba(80,120,200,0.3)", marginBottom: "12px" }} />
            <span style={{ fontSize: "14px", fontWeight: "700", color: "#93C5FD", fontFamily: "var(--font-hand)" }}>
              Code Architecture
            </span>
          </motion.div>
        </motion.div>

        {/* ── CARD 3 — UI Components (bottom-center) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", left: "22%", bottom: "4%" }}
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            style={{
              width: "235px",
              borderRadius: "20px",
              background: "linear-gradient(145deg, rgba(255,255,255,0.75) 0%, rgba(219,234,254,0.55) 100%)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1.5px solid rgba(255,255,255,0.88)",
              boxShadow: "0 16px 48px rgba(29,78,216,0.13), 0 4px 12px rgba(29,78,216,0.07), inset 0 1px 0 rgba(255,255,255,1)",
              padding: "16px",
            }}
          >
            {/* Browser mockup */}
            <div style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1.5px solid rgba(147,197,253,0.5)",
              marginBottom: "12px",
            }}>
              {/* Browser bar */}
              <div style={{
                background: "rgba(219,234,254,0.75)",
                padding: "7px 10px",
                display: "flex", alignItems: "center", gap: "5px",
              }}>
                {["#F87171", "#FCD34D", "#4ADE80"].map((c) => (
                  <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c, opacity: 0.9 }} />
                ))}
              </div>
              {/* Content area */}
              <div style={{ display: "flex", height: "88px", background: "rgba(248,252,255,0.65)" }}>
                {/* Sidebar */}
                <div style={{
                  width: "34px", background: "rgba(219,234,254,0.6)",
                  padding: "8px 6px", display: "flex", flexDirection: "column", gap: "6px",
                }}>
                  {[true, false, false, false].map((active, i) => (
                    <div key={i} style={{
                      height: "5px", borderRadius: "3px",
                      background: active ? "#3B82F6" : "rgba(147,197,253,0.5)",
                    }} />
                  ))}
                </div>
                {/* Main content */}
                <div style={{ flex: 1, padding: "8px 10px", display: "flex", flexDirection: "column", gap: "7px" }}>
                  <div style={{ height: "7px", width: "60%", borderRadius: "3px", background: "rgba(147,197,253,0.6)" }} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5px" }}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} style={{
                        height: "22px", borderRadius: "5px",
                        background: "rgba(219,234,254,0.7)",
                        border: "1px solid rgba(147,197,253,0.4)",
                      }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#1D4ED8", fontFamily: "var(--font-hand)" }}>
              UI Components
            </span>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}

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
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -30]);

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
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_0.95fr] lg:gap-16 gap-0 items-center pb-12 pt-8">

        {/* LEFT — headline + cta */}
        <div>
          {/* Rotating phrase */}
          <InkReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-ink-blue/40" />
              <span className="font-hand text-sm text-ink-blue font-medium" style={{ fontFamily: "var(--font-hand)" }}>
                {HERO_PHRASES[phraseIdx]}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-0.5"
                >|</motion.span>
              </span>
            </div>
          </InkReveal>

          {/* Headline — "I Build Digital" on one line, "Experiences." on second */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="ink-heading text-6xl sm:text-7xl md:text-8xl leading-[1.05]"
            >
              I Build Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-7 relative inline-block w-full">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="ink-heading text-6xl sm:text-7xl md:text-8xl leading-[1.05]"
            >
              Experiences.
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 1.7, ease: "easeOut" }}
              className="origin-left"
            >
              <DrawUnderline delay={0} color="#1D4ED8" strokeWidth={3} />
            </motion.div>
          </div>

          {/* Description */}
          <InkReveal delay={1.5}>
            <p className="text-base md:text-lg text-graphite max-w-md leading-relaxed font-sans mb-8">
              Hi, I&apos;m <strong className="text-ink font-semibold">Anup Solanki</strong> — a React &
              Next.js specialist who turns complex product ideas into fast, interactive,
              and polished web applications. I write code the way a designer thinks.
            </p>
          </InkReveal>

          {/* CTA Buttons */}
          <InkReveal delay={1.8}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/projects" className="sketch-btn-filled text-base px-7 py-3">
                View Projects
              </Link>
              <Link href="/contact" className="sketch-btn text-base px-7 py-3">
                Contact Me
              </Link>
            </div>
          </InkReveal>

          {/* Stat boxes */}
          <InkReveal delay={2.0}>
            <div className="flex flex-wrap gap-3">
              {[
                { number: "3+", label: "yrs exp" },
                { number: "20+", label: "projects" },
                { number: "30+", label: "interviews" },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  className="border border-ink-blue/20 rounded-lg px-5 py-3 text-center bg-paper-light/60"
                  style={{ minWidth: "90px" }}
                >
                  <div
                    className="font-hand text-2xl font-bold text-ink-blue leading-tight"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {number}
                  </div>
                  <div className="text-xs text-graphite-light font-sans mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </InkReveal>
        </div>

        {/* RIGHT — 3D glassmorphism cards */}
        <HeroCards />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
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
