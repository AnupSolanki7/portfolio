"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import ProjectStats from "./components/ProjectStats";
import FeaturedProject from "./components/FeaturedProject";
import Icon from "@/component/AppIcon";
import Header from "@/component/ui/Header";
import Sidebar from "@/component/ui/Sidebar";

const ProjectsPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simplified project data
  const projects = [
    {
      id: 1,
      title: "Property Dollar",
      category: "Real Estate",
      description: "Real estate platform with virtual tours and advanced search",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      techStack: ["React", "Node.js", "MongoDB"],
      year: "2024",
      status: "live",
      featured: true,
      liveUrl: "https://propertydollar.com",
      githubUrl: "https://github.com/anupsolanki/property-dollar",
    },
    {
      id: 2,
      title: "iManagify",
      category: "Business",
      description: "Business management suite with project tracking and analytics",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      techStack: ["React", "TypeScript", "PostgreSQL"],
      year: "2023",
      status: "live",
      featured: false,
      liveUrl: "https://imanagify.com",
      githubUrl: "https://github.com/anupsolanki/imanagify",
    },
    {
      id: 3,
      title: "EcoTrack",
      category: "Sustainability",
      description: "Environmental impact tracking with AI-powered insights",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      techStack: ["React", "Python", "TensorFlow"],
      year: "2024",
      status: "development",
      featured: false,
      liveUrl: null,
      githubUrl: "https://github.com/anupsolanki/ecotrack",
    },
    {
      id: 4,
      title: "FinanceFlow",
      category: "FinTech",
      description: "Personal finance manager with AI budgeting and insights",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      techStack: ["React Native", "Node.js", "MongoDB"],
      year: "2023",
      status: "live",
      featured: false,
      liveUrl: "https://financeflow.app",
      githubUrl: "https://github.com/anupsolanki/financeflow",
    },
    {
      id: 5,
      title: "HealthHub",
      category: "HealthTech",
      description: "Telemedicine platform with secure video consultations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      techStack: ["React", "WebRTC", "PostgreSQL"],
      year: "2024",
      status: "live",
      featured: false,
      liveUrl: "https://healthhub.medical",
      githubUrl: "https://github.com/anupsolanki/healthhub",
    },
    {
      id: 6,
      title: "EduConnect",
      category: "EdTech",
      description: "Learning management system with AI-powered learning paths",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      techStack: ["React", "Next.js", "PostgreSQL"],
      year: "2023",
      status: "live",
      featured: false,
      liveUrl: "https://educonnect.learning",
      githubUrl: "https://github.com/anupsolanki/educonnect",
    },
  ];

  // Mock statistics
  const projectStats = {
    totalProjects: projects?.length,
    liveProjects: projects?.filter((p) => p?.status === "live")?.length,
    technologiesUsed: [...new Set(projects.flatMap((p) => p.techStack))]?.length,
    totalUsers: "50K+",
  };

  // Categories for navigation
  const categories = [
    { value: "all", label: "All Projects" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Business", label: "Business" },
    { value: "Sustainability", label: "Sustainability" },
    { value: "FinTech", label: "FinTech" },
    { value: "HealthTech", label: "HealthTech" },
    { value: "EdTech", label: "EdTech" },
  ];

  // Show all projects - no filtering
  const displayedProjects = projects;

  const featuredProject = projects.find((p) => p.featured);

  const handleViewDetails = (project: React.SetStateAction<null>) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}`}>
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="text-center space-y-4 mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="FolderOpen" size={24} className="text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Projects</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of innovative applications built with modern technologies and user-centric design
              </p>
            </div>

            {/* Project Stats */}
            <ProjectStats stats={projectStats} />

            {/* Featured Project */}
            {/* {featuredProject && (
              <FeaturedProject
                project={featuredProject}
                onViewDetails={handleViewDetails}
              />
            )} */}

            {/* Project Collection Header */}
            <ProjectFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Interested in working together?
                </h3>
                <p className="text-muted-foreground">
                  Let's build something amazing
                </p>
              </div>
              <button
                onClick={() => (window.location.href = "mailto:anup.solanki@example.com")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Start a Conversation</span>
              </button>
            </div>
          </div>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;