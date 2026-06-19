"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/component/ui/Header";
import HandwrittenText, {
  DrawUnderline,
  InkReveal,
} from "@/component/ui/HandwrittenText";

/* ============================================================
   CONTACT FORM — uses existing /api/contact route
   ============================================================ */
type FormState = "idle" | "sending" | "sent" | "error";

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="paper-card rounded-sm p-8 text-center"
      >
        <div className="text-4xl mb-4">✉️</div>
        <div
          className="font-hand text-2xl font-bold text-ink-blue mb-2"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          Message sent!
        </div>
        <p className="text-graphite font-sans text-sm">
          I&apos;ll get back to you within 24 hours. Looking forward to it.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="paper-card rounded-sm overflow-hidden">
      {/* Top ruled line */}
      <div
        className="h-1.5"
        style={{ background: "linear-gradient(90deg, #1D4ED8, #60A5FA)" }}
      />

      <div className="p-6 md:p-8 space-y-5">
        {/* Name + Email row */}
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { id: "name",  label: "Full Name",     type: "text",  placeholder: "Your name" },
            { id: "email", label: "Email Address",  type: "email", placeholder: "your@email.com" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block font-hand text-sm text-ink-blue mb-1.5"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                required
                placeholder={placeholder}
                value={form[id as keyof typeof form]}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink-blue/30 focus:border-ink-blue/70 outline-none py-1.5 text-sm font-sans text-graphite placeholder-graphite-pale/60 transition-colors"
              />
            </div>
          ))}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block font-hand text-sm text-ink-blue mb-1.5"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            value={form.subject}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-ink-blue/30 focus:border-ink-blue/70 outline-none py-1.5 text-sm font-sans text-graphite placeholder-graphite-pale/60 transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-hand text-sm text-ink-blue mb-1.5"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project, role, or idea..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border border-ink-blue/20 focus:border-ink-blue/50 outline-none py-2.5 px-3 text-sm font-sans text-graphite placeholder-graphite-pale/60 transition-colors resize-none rounded-sm"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent 0px, transparent 23px, rgba(59,130,246,0.1) 23px, rgba(59,130,246,0.1) 24px)",
            }}
          />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-graphite-pale font-sans">
            {state === "error" && (
              <span className="text-red-500">Something went wrong. Try emailing directly.</span>
            )}
          </span>
          <button
            type="submit"
            disabled={state === "sending"}
            className="sketch-btn-filled text-sm px-7 py-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state === "sending" ? "Sending..." : "Send Message →"}
          </button>
        </div>
      </div>
    </form>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
const contactLinks = [
  {
    label: "Email",
    value: "anupsolanki.dev@gmail.com",
    href: "mailto:anupsolanki.dev@gmail.com",
    icon: "✉",
    desc: "Best for project inquiries",
  },
  {
    label: "GitHub",
    value: "github.com/AnupSolanki7",
    href: "https://github.com/AnupSolanki7",
    icon: "⌨",
    desc: "Code, contributions, OSS",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anup-solanki",
    href: "https://linkedin.com/in/anup-solanki",
    icon: "💼",
    desc: "Professional network",
  },
];

export default function ContactPage() {
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
                    § 06 — Contact
                  </span>
                </div>
              </InkReveal>

              {/* Main heading */}
              <div className="overflow-hidden mb-2">
                <motion.h1
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="ink-heading text-5xl md:text-7xl"
                >
                  Let&apos;s Build
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.h1
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="ink-heading text-5xl md:text-7xl"
                >
                  Something
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="ink-heading text-5xl md:text-7xl"
                >
                  Meaningful.
                </motion.h1>
              </div>

              <DrawUnderline delay={0} color="#1D4ED8" strokeWidth={2.5} className="max-w-sm mb-6" />

              <InkReveal delay={1.6}>
                <p className="text-graphite font-sans max-w-2xl leading-relaxed mb-6">
                  Whether you have a product idea, a role you think I&apos;d be great for,
                  or just want to chat about React and building things on the internet — my
                  inbox is always open.
                </p>
              </InkReveal>

              <InkReveal delay={1.8}>
                <div className="flex items-center gap-2 text-sm font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-graphite">Available for full-time roles & freelance projects</span>
                </div>
              </InkReveal>
            </div>

            {/* RIGHT: Envelope / message doodle */}
            <div className="hidden lg:block relative">
              <motion.div
                initial={{ opacity: 0, y: -8, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ delay: 2.5 }}
                className="absolute -top-4 right-2 annotation-tag rotate-[4deg] float-note z-20"
              >
                Response time: &lt;24h ⏱
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
                  {/* Letter paper (sticking out of envelope top) */}
                  <motion.path d="M 118 44 L 118 178 L 282 178 L 282 44 Z"
                    stroke="rgba(29,78,216,0.55)" strokeWidth="2" fill="rgba(29,78,216,0.03)" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.65, duration: 0.45 }} />
                  {/* Lines on letter */}
                  {([70,88,106,124,142,158] as number[]).map((y, i) => (
                    <motion.path key={i} d={`M 134 ${y} L ${i < 4 ? 266 : 230} ${y}`}
                      stroke="rgba(29,78,216,0.22)" strokeWidth="1.2" fill="none"
                      initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 2.1 + i * 0.06, duration: 0.3 }} />
                  ))}
                  {/* Stamp */}
                  <motion.rect x="246" y="52" width="26" height="20" rx="2"
                    stroke="rgba(29,78,216,0.4)" strokeWidth="1.5" fill="rgba(29,78,216,0.06)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />
                  {/* Postmark circle over stamp */}
                  <motion.circle cx="256" cy="62" r="10"
                    stroke="rgba(29,78,216,0.25)" strokeWidth="1" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.55, duration: 0.3 }} />
                  {/* Envelope body */}
                  <motion.path d="M 32 128 L 368 128 L 368 282 L 32 282 Z"
                    stroke="rgba(29,78,216,0.65)" strokeWidth="2" fill="rgba(29,78,216,0.04)" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.55 }} />
                  {/* Open flap (triangle pointing up/back) */}
                  <motion.path d="M 32 128 L 200 62 L 368 128"
                    stroke="rgba(29,78,216,0.55)" strokeWidth="2" fill="rgba(29,78,216,0.03)" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.85, duration: 0.45 }} />
                  {/* Bottom fold lines */}
                  <motion.path d="M 32 282 L 180 198 M 368 282 L 220 198"
                    stroke="rgba(29,78,216,0.3)" strokeWidth="1.2" fill="none" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.4 }} />
                  {/* @ symbol inside envelope */}
                  <motion.text x="178" y="238" fontSize="42" fontWeight="300"
                    fill="rgba(29,78,216,0.12)" fontFamily="sans-serif"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>@</motion.text>
                  {/* "Open to work" floating tag */}
                  <motion.rect x="22" y="30" width="90" height="20" rx="4"
                    stroke="rgba(29,78,216,0.35)" strokeWidth="1.5" fill="rgba(29,78,216,0.04)"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} />
                  <motion.text x="30" y="44" fontSize="9" fill="rgba(29,78,216,0.65)" fontFamily="sans-serif"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}>Open to work ✓</motion.text>
                  {/* Corner label */}
                  <motion.text x="18" y="300" fontSize="9" fill="rgba(29,78,216,0.38)" fontFamily="sans-serif"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>inbox always open</motion.text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — contact links + availability */}
            <div>
              <div
                className="font-hand text-sm text-graphite-pale mb-6 block"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                Prefer direct contact? Here&apos;s where to find me:
              </div>

              <div className="space-y-4">
                {contactLinks.map(({ label, value, href, icon, desc }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 paper-card rounded-sm group transition-colors hover:border-ink-blue/30"
                  >
                    <div className="w-9 h-9 flex items-center justify-center border border-ink-blue/20 rounded-sm flex-shrink-0 text-lg">
                      {icon}
                    </div>
                    <div>
                      <div
                        className="font-hand text-sm font-bold text-ink-blue mb-0.5"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {label}
                      </div>
                      <div className="text-sm text-graphite font-sans group-hover:text-ink-blue transition-colors break-all">
                        {value}
                      </div>
                      <div className="text-xs text-graphite-pale font-sans mt-0.5">{desc}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability card */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="mt-6 paper-card rounded-sm p-5"
              >
                <div
                  className="font-hand text-base font-bold text-ink-blue mb-3"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  Current Availability
                </div>
                <div className="space-y-2 text-sm font-sans text-graphite">
                  {[
                    { label: "Full-time roles", available: true },
                    { label: "Freelance / contract", available: true },
                    { label: "Remote work", available: true },
                    { label: "Consulting sessions", available: true },
                  ].map(({ label, available }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${available ? "bg-emerald-500" : "bg-graphite-pale"}`} />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — form */}
            <div>
              <div
                className="font-hand text-sm text-graphite-pale mb-6 block"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                Or fill out the notebook page below:
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* SIGN-OFF */}
        <section className="py-20 px-6 md:px-12 lg:px-20 border-t border-ink-blue/10">
          <div className="max-w-4xl mx-auto text-center">
            <InkReveal>
              <p
                className="font-hand text-sm text-graphite-pale mb-8"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                — end of this notebook —
              </p>
            </InkReveal>

            <InkReveal delay={0.2}>
              <HandwrittenText as="p" className="text-5xl md:text-7xl text-ink-blue/30" duration={1.5}>
                Anup Solanki
              </HandwrittenText>
            </InkReveal>

            <InkReveal delay={0.5}>
              <DrawUnderline
                delay={0}
                color="#1D4ED8"
                strokeWidth={1.5}
                className="max-w-[200px] mx-auto mt-2"
              />
            </InkReveal>

            <InkReveal delay={0.8}>
              <p className="mt-6 text-xs text-graphite-pale font-sans">
                Frontend Developer · Ahmedabad, India · Open to Remote
              </p>
            </InkReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink-blue/10 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-hand text-sm text-graphite-pale" style={{ fontFamily: "var(--font-hand)" }}>
            © 2024 Anup Solanki — handcrafted with care
          </span>
          <Link href="/" className="text-xs text-graphite-pale font-sans hover:text-ink-blue transition-colors">
            ← Back to Notebook
          </Link>
        </div>
      </footer>
    </>
  );
}
