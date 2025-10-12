"use client";

import React, { useState } from "react";
import Header from "@/component/ui/Header";
import Sidebar from "@/component/ui/Sidebar";
import Icon from "@/component/AppIcon";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsProgress from "./components/SkillsProgress";
import LeadershipMetrics from "./components/LeadershipMetrics";

const ExperiencePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState("timeline");

  const viewOptions = [
    {
      id: "timeline",
      label: "Timeline",
      icon: "Clock",
    },
    {
      id: "skills",
      label: "Skills",
      icon: "Code",
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: "Users",
    },
  ];

  const experienceStats = [
    {
      metric: "2+",
      label: "Years Experience",
      icon: "Calendar",
    },
    {
      metric: "30+",
      label: "Interviews",
      icon: "Users",
    },
    {
      metric: "5+",
      label: "Projects Led",
      icon: "Target",
    },
    {
      metric: "8",
      label: "Mentored",
      icon: "GraduationCap",
    },
  ];

  const careerHighlights = [
    {
      title: "Technical Leadership",
      description: "Led 5+ high-impact projects with 95% success rate",
      icon: "Code"
    },
    {
      title: "Team Development", 
      description: "Mentored 8 developers with 100% retention rate",
      icon: "Users"
    },
    {
      title: "Hiring Excellence",
      description: "Conducted 30+ interviews with 85% hire success",
      icon: "UserCheck"
    },
    {
      title: "Process Optimization",
      description: "Improved team productivity by 3x through better workflows",
      icon: "TrendingUp"
    }
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case "timeline":
        return <ExperienceTimeline />;
      case "skills":
        return (
          <SkillsProgress />
        );
      case "leadership":
        return (
          <LeadershipMetrics/>
        );
      default:
        return <ExperienceTimeline />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}`}>
          <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="text-center space-y-4 mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Briefcase" size={24} className="text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Experience</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional journey, achievements, and leadership experience
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {experienceStats?.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/50 border border-border rounded-xl p-4 text-center hover:bg-card/80 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat?.metric}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name={stat?.icon} size={14} />
                    <span>{stat?.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View Selector */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {viewOptions?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => setActiveView(option?.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeView === option?.id
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-foreground border-border hover:bg-muted"
                  }`}
                >
                  <Icon name={option?.icon} size={16} />
                  <span>{option?.label}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-card/30 border border-border rounded-xl p-6 mb-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name={viewOptions.find(v => v.id === activeView)?.icon || "Clock"} 
                        size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">
                    {viewOptions.find(v => v.id === activeView)?.label}
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  {activeView === 'timeline' && 'Professional journey and career progression'}
                  {activeView === 'skills' && 'Technical proficiency and expertise levels'} 
                  {activeView === 'leadership' && 'Team leadership and mentoring achievements'}
                </p>
              </div>

              {/* Dynamic Content */}
              {renderActiveView()}
            </div>

            {/* Career Highlights */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="Award" size={18} />
                  <span className="text-sm font-medium">Career Highlights</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Key Achievements</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {careerHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-card/50 border border-border rounded-xl p-4 space-y-3 group hover:bg-card/80 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name={highlight.icon} size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExperiencePage;