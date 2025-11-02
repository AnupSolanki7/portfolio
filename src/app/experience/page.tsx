"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/component/ui/Header";
import Sidebar from "@/component/ui/Sidebar";
import Icon from "@/component/AppIcon";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsProgress from "./components/SkillsProgress";
import LeadershipMetrics from "./components/LeadershipMetrics";

const ExperiencePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState("timeline");
  const [isMobile, setIsMobile] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  // 🎨 VS Code Dark+ palette
  const theme = {
    background: "bg-[#1e1e1e]",
    editor: "bg-[#1e1e1e]",
    surface: "bg-[#252526]",
    surfaceLight: "bg-[#2d2d30]",
    surfaceLighter: "bg-[#3e3e42]",
    border: "border-[#404040]",
    borderLight: "border-[#464647]",
    textPrimary: "text-[#d4d4d4]",
    textSecondary: "text-[#969696]",
    textMuted: "text-[#6a6a6a]",
    comment: "text-[#6a9955]",
    keyword: "text-[#569cd6]",
    string: "text-[#ce9178]",
    function: "text-[#dcdcaa]",
    variable: "text-[#9cdcfe]",
    number: "text-[#b5cea8]",
    class: "text-[#4ec9b0]",
    accent: "text-[#007acc]",
    success: "text-[#4ec9b0]",
    warning: "text-[#ce9178]",
    error: "text-[#f44747]",
  };

  // 🗂 File-tabs
  const viewOptions = [
    {
      id: "timeline",
      label: "experience.json",
      icon: "Clock",
      color: theme.string,
      description:
        "My professional journey from building frontends to leading AI-driven SaaS platforms.",
    },
    {
      id: "skills",
      label: "skills.ts",
      icon: "Code",
      color: theme.keyword,
      description: "Technical evolution and specialization areas.",
    },
    {
      id: "leadership",
      label: "leadership.md",
      icon: "Users",
      color: theme.class,
      description: "Mentoring, hiring, and leadership achievements.",
    },
  ];

  // 📊 Experience quick stats
  const experienceStats = [
    {
      metric: "3+",
      label: "Years Experience",
      icon: "Calendar",
      color: theme.keyword,
      fileType: "years.yaml",
    },
    {
      metric: "30+",
      label: "Interviews Conducted",
      icon: "UserCheck",
      color: theme.string,
      fileType: "interviews.json",
    },
    {
      metric: "7+",
      label: "Major Projects Delivered",
      icon: "Target",
      color: theme.function,
      fileType: "projects.ts",
    },
    {
      metric: "8",
      label: "Developers Mentored",
      icon: "GraduationCap",
      color: theme.class,
      fileType: "mentoring.md",
    },
  ];

  // 🏆 Career highlights (resume-based)
  const careerHighlights = [
    {
      title: "Frontend Revamp & Optimization",
      description:
        "Led UI revamps across multiple SaaS and AI products, improving load time by 25%.",
      icon: "Monitor",
      color: theme.keyword,
      fileType: "revamp.tsx",
    },
    {
      title: "AI Integration",
      description:
        "Integrated Gemini API & AWS Transcribe to automate workflows and enhance user experience.",
      icon: "Cpu",
      color: theme.function,
      fileType: "ai.ts",
    },
    {
      title: "Leadership & Mentorship",
      description:
        "Conducted 30+ interviews, mentored junior devs, and cultivated a strong frontend team.",
      icon: "Users",
      color: theme.class,
      fileType: "mentorship.md",
    },
    {
      title: "Rising Star Award",
      description:
        "Recognized at Solguruz for leading AI-driven automation and boosting team productivity.",
      icon: "Award",
      color: theme.warning,
      fileType: "award.yaml",
    },
  ];

  // Responsive
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 💻 Terminal simulation
  const runTerminalCommand = (cmd: string) => {
    setTerminalOutput([
      `$ ${cmd}`,
      "> Bootstrapping professional timeline...",
      "> ✓ Experience found: 3+ years | 7 projects | AI integrations",
      "> 🚀 Optimizing leadership metrics and skill map",
      "> ✅ Data compiled successfully",
    ]);
  };
  useEffect(() => {
    if (terminalOpen) runTerminalCommand("cat experience.json");
  }, [terminalOpen]);

  const toggleTerminal = () => setTerminalOpen((p) => !p);
  const toggleSidebar = () => setSidebarCollapsed((p) => !p);

  const renderActiveView = () => {
    switch (activeView) {
      case "timeline":
        return <ExperienceTimeline theme={theme} />;
      case "skills":
        return <SkillsProgress theme={theme} />;
      case "leadership":
        return <LeadershipMetrics theme={theme} />;
      default:
        return <ExperienceTimeline theme={theme} />;
    }
  };

  return (
    <div className={`min-h-screen ${theme.background} font-mono`}>
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />

        <main className="flex-1">
          <div className="flex flex-col min-h-[calc(100vh-64px)]">
            {/* Tabs */}
            <div className={`${theme.surface} border-b ${theme.border}`}>
              <div className="flex overflow-x-auto scrollbar-hide">
                {viewOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveView(opt.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-r ${theme.border} text-sm ${
                      activeView === opt.id
                        ? `${theme.editor} ${theme.textPrimary} border-t-2 border-t-[#007acc]`
                        : `${theme.surface} ${theme.textSecondary} hover:${theme.surfaceLight}`
                    }`}
                  >
                    <Icon name={opt.icon} size={14} className={opt.color} />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              <div className={`${theme.editor} p-6`}>
                {/* Active view */}
                <div className={`${theme.surface} border ${theme.border} rounded-lg p-6 mb-8`}>
                  <div className="text-center mb-6">
                    <Icon
                      name={viewOptions.find((v) => v.id === activeView)?.icon || "Clock"}
                      size={20}
                      className={
                        viewOptions.find((v) => v.id === activeView)?.color
                      }
                    />
                    <h2 className={`text-xl font-semibold ${theme.textPrimary}`}>
                      {viewOptions.find((v) => v.id === activeView)?.label}
                    </h2>
                    <p className={theme.textSecondary}>
                      {
                        viewOptions.find((v) => v.id === activeView)
                          ?.description
                      }
                    </p>
                  </div>
                  {renderActiveView()}
                </div>

                {/* Highlights */}
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center items-center gap-2">
                      <Icon name="Award" size={18} className={theme.warning} />
                      <span className={`text-sm ${theme.textSecondary}`}>
                        Career Highlights
                      </span>
                    </div>
                    <h3 className={`text-xl font-semibold ${theme.textPrimary}`}>
                      Key Achievements
                    </h3>
                  </div>

                  <div
                    className={`grid gap-4 ${
                      isMobile ? "grid-cols-1" : "md:grid-cols-2"
                    }`}
                  >
                    {careerHighlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`${theme.surface} border ${theme.border} rounded-lg p-4 group hover:${theme.surfaceLight} transition-all`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 ${theme.surfaceLight} rounded-lg flex items-center justify-center border ${theme.border}`}
                          >
                            <Icon name={h.icon} size={18} className={h.color} />
                          </div>
                          <div>
                            <h4 className={`font-semibold ${theme.textPrimary}`}>
                              {h.title}
                            </h4>
                            <p className={`text-sm ${theme.textSecondary}`}>
                              {h.description}
                            </p>
                          </div>
                        </div>
                        <div className={`text-xs ${theme.textMuted} mt-2`}>
                          {h.fileType}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal */}
            {terminalOpen && (
              <div className={`border-t ${theme.border}`}>
                <div
                  className={`${theme.surface} border-b ${theme.border} px-4 py-2 flex items-center justify-between`}
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Terminal" size={14} className={theme.textSecondary} />
                    <span className={`text-sm ${theme.textPrimary}`}>TERMINAL</span>
                  </div>
                  <button
                    onClick={toggleTerminal}
                    className="p-1 hover:bg-[#3e3e42] rounded"
                  >
                    <Icon name="X" size={12} className={theme.textSecondary} />
                  </button>
                </div>
                <div className={`${theme.editor} p-4 font-mono text-sm h-40 overflow-auto`}>
                  {terminalOutput.map((l, i) => (
                    <div
                      key={i}
                      className={`${
                        l.startsWith("$")
                          ? theme.keyword
                          : l.includes("✓")
                          ? theme.success
                          : theme.textPrimary
                      } mb-1`}
                    >
                      {l}
                    </div>
                  ))}
                  <div className="flex items-center">
                    <span className={theme.keyword}>$</span>
                    <span className={`${theme.textPrimary} ml-2 animate-pulse`}>
                      _
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Floating terminal button */}
          <div className="fixed bottom-6 right-6 z-40">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              onClick={toggleTerminal}
              className={`${theme.surfaceLighter} hover:${theme.surfaceLight} ${theme.textPrimary} rounded-full shadow-xl w-12 h-12 border ${theme.border} flex items-center justify-center`}
            >
              <Icon name="Terminal" size={20} className={theme.accent} />
            </motion.button>
          </div>

          {isMobile && <div className="h-16" />}
        </main>
      </div>
    </div>
  );
};

export default ExperiencePage;
