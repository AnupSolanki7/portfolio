"use client";

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsProgress from "./components/SkillsProgress";
import LeadershipMetrics from "./components/LeadershipMetrics";
import CodeEditor from "./components/CodeEditor";
import Header from "@/component/ui/Header";
import Sidebar from "@/component/ui/Sidebar";
import Icon from "@/component/AppIcon";
import Button from "@/component/ui/Button";

const ExperiencePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState("timeline");

  const viewOptions = [
    {
      id: "timeline",
      label: "Experience Timeline",
      icon: "Clock",
      description: "Professional journey and career progression",
    },
    {
      id: "skills",
      label: "Skills Matrix",
      icon: "Code",
      description: "Technical proficiency and expertise levels",
    },
    {
      id: "leadership",
      label: "Leadership Impact",
      icon: "Users",
      description: "Team leadership and mentoring achievements",
    },
    {
      id: "code",
      label: "Code View",
      icon: "FileText",
      description: "Experience data in code format",
    },
  ];

  const experienceStats = [
    {
      metric: "2+",
      label: "Years Experience",
      description: "Professional development",
      icon: "Calendar",
      color: "text-primary",
    },
    {
      metric: "30+",
      label: "Interviews Conducted",
      description: "Technical assessments",
      icon: "Users",
      color: "text-success",
    },
    {
      metric: "5+",
      label: "Projects Led",
      description: "High-impact deliveries",
      icon: "Target",
      color: "text-warning",
    },
    {
      metric: "8",
      label: "Developers Mentored",
      description: "Team growth initiatives",
      icon: "GraduationCap",
      color: "text-accent",
    },
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case "timeline":
        return <ExperienceTimeline />;
      case "skills":
        return <SkillsProgress />;
      case "leadership":
        return <LeadershipMetrics />;
      case "code":
        return <CodeEditor />;
      default:
        return <ExperienceTimeline />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Experience.js - Professional Journey | CodeFolio Studio</title>
        <meta
          name="description"
          content="Professional timeline with achievements and impact metrics. 2+ years of focused expertise at Solguruz with leadership capabilities."
        />
        <meta
          name="keywords"
          content="Anup Solanki, Frontend Developer, React Developer, Experience, Leadership, Solguruz, Professional Journey"
        />
      </Helmet>
      <Header />
      <div className="flex">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main
          className={`transition-all duration-300 ${
            sidebarCollapsed ? "lg:ml-0" : "lg:ml-60"
          }`}
        >
          <div className="p-6 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Briefcase" size={20} className="text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    experience.js
                  </h1>
                  <p className="text-muted-foreground">
                    Professional timeline with achievements and impact metrics
                  </p>
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                <span>src</span>
                <Icon name="ChevronRight" size={14} />
                <span>pages</span>
                <Icon name="ChevronRight" size={14} />
                <span className="text-foreground">experience.js</span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {experienceStats?.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon
                        name={stat?.icon}
                        size={20}
                        className={stat?.color}
                      />
                    </div>
                    <div className={`text-xl font-bold ${stat?.color} mb-1`}>
                      {stat?.metric}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {stat?.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat?.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* View Selector */}
              <div className="flex flex-wrap gap-2">
                {viewOptions?.map((option) => (
                  <Button
                    key={option?.id}
                    variant={activeView === option?.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveView(option?.id)}
                    iconName={option?.icon}
                    iconPosition="left"
                    className="text-sm"
                  >
                    {option?.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-card border border-border rounded-lg">
              {/* Content Header */}
              <div className="border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name={
                        viewOptions?.find((v) => v?.id === activeView)?.icon ||
                        "Clock"
                      }
                      size={18}
                      className="text-primary"
                    />
                    <div>
                      <h2 className="font-semibold text-foreground">
                        {viewOptions?.find((v) => v?.id === activeView)?.label}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {
                          viewOptions?.find((v) => v?.id === activeView)
                            ?.description
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span>Live Data</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="RefreshCw"
                      iconPosition="left"
                      className="text-xs"
                    >
                      Refresh
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="p-6">{renderActiveView()}</div>
            </div>

            {/* Professional Summary */}
            <div className="mt-8 bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="User" size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Professional Summary
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Key highlights and career overview
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">
                    Career Highlights
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-success mt-0.5"
                      />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Technical Leadership
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Led 5+ high-impact projects with 95% success rate
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-success mt-0.5"
                      />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Team Development
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Mentored 8 developers with 100% retention rate
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-success mt-0.5"
                      />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Hiring Excellence
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Conducted 30+ interviews with 85% hire success
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-success mt-0.5"
                      />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Process Optimization
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Improved team productivity by 3x through better
                          workflows
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">
                    Core Competencies
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted/20 rounded-lg p-3 text-center">
                      <Icon
                        name="Code"
                        size={20}
                        className="text-primary mx-auto mb-2"
                      />
                      <div className="text-sm font-medium text-foreground">
                        Technical Excellence
                      </div>
                      <div className="text-xs text-muted-foreground">
                        React & Modern JS
                      </div>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-3 text-center">
                      <Icon
                        name="Users"
                        size={20}
                        className="text-success mx-auto mb-2"
                      />
                      <div className="text-sm font-medium text-foreground">
                        Team Leadership
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Mentoring & Growth
                      </div>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-3 text-center">
                      <Icon
                        name="Target"
                        size={20}
                        className="text-warning mx-auto mb-2"
                      />
                      <div className="text-sm font-medium text-foreground">
                        Project Delivery
                      </div>
                      <div className="text-xs text-muted-foreground">
                        On-time & Quality
                      </div>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-3 text-center">
                      <Icon
                        name="MessageCircle"
                        size={20}
                        className="text-accent mx-auto mb-2"
                      />
                      <div className="text-sm font-medium text-foreground">
                        Communication
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Stakeholder Relations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExperiencePage;
