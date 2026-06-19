"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavItem {
  path: string;
  label: string;
  number: string;
}

const navItems: NavItem[] = [
  { path: "/",           label: "Home",       number: "01" },
  { path: "/about",      label: "About",      number: "02" },
  { path: "/projects",   label: "Projects",   number: "03" },
  { path: "/skills",     label: "Skills",     number: "04" },
  { path: "/experience", label: "Experience", number: "05" },
  { path: "/contact",    label: "Contact",    number: "06" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/95 backdrop-blur-sm border-b border-ink-blue/15 shadow-paper"
            : "bg-paper/90 backdrop-blur-sm border-b border-ink-blue/10"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(29,78,216,0.18)" : "1px solid rgba(29,78,216,0.1)" }}
      >
        {/* Red margin line accent at very top */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-margin-red/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

          {/* Logo — handwritten signature style */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group select-none"
          >
            {/* Ink dot */}
            <div className="w-2 h-2 rounded-full bg-ink-blue opacity-80 group-hover:opacity-100 transition-opacity" />
            <span
              className="text-2xl font-hand font-bold text-ink-blue leading-none tracking-wide"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              Anup Solanki
            </span>
            {/* Underline drawn on hover */}
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-ink-blue/30 transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative group px-3.5 py-2 text-sm font-sans transition-colors duration-150 ${
                  isActive(item.path)
                    ? "text-ink-blue"
                    : "text-graphite hover:text-ink-blue"
                }`}
              >
                <span className="relative">
                  {item.label}

                  {isActive(item.path) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-ink-blue rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive(item.path) && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-ink-blue/0 group-hover:bg-ink-blue/40 transition-all duration-200 rounded-full" />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Available + Let's Talk combined button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 border border-ink-blue/30 rounded-full px-4 py-1.5 text-sm font-sans text-graphite hover:bg-ink-blue/5 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available • Let&apos;s Talk
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden flex flex-col gap-[5px] p-2 group"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] w-5 bg-ink-blue transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-[2px] w-5 bg-ink-blue transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-5 bg-ink-blue transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[57px] left-0 right-0 z-40 md:hidden"
          >
            <div
              className="mx-4 rounded-sm overflow-hidden paper-card border border-ink-blue/20"
              style={{ boxShadow: "3px 5px 0 rgba(29,78,216,0.1)" }}
            >
              {/* Ruled lines bg */}
              <div
                className="ruled-bg"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent 0px, transparent 47px, rgba(59,130,246,0.18) 47px, rgba(59,130,246,0.18) 48px)",
                }}
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-5 py-3.5 border-b border-ink-blue/10 last:border-0 transition-colors ${
                        isActive(item.path)
                          ? "bg-ink-blue/6 text-ink-blue"
                          : "text-graphite hover:text-ink-blue hover:bg-ink-blue/4"
                      }`}
                    >
                      <span
                        className="font-hand text-xs text-graphite-pale w-6"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {item.number}
                      </span>
                      <span className="font-sans text-sm font-medium">{item.label}</span>
                      {isActive(item.path) && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-ink-blue" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Bottom CTA in mobile menu */}
                <div className="px-5 py-4">
                  <Link
                    href="/contact"
                    className="sketch-btn-filled w-full text-center block text-sm py-2.5"
                  >
                    Let&apos;s Build Something
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
