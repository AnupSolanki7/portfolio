"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectPreview from "./components/ProjectPreview";
import ProjectCard from "./components/ProjectCard";
import FilterBar from "./components/FilterBar";
import ProjectStats from "./components/ProjectStats";
import TechnologyFilter from "./components/TechnologyFilter";
import Icon from "@/component/AppIcon";
import Button from "@/component/ui/Button";
import Header from "@/component/ui/Header";
import Sidebar from "@/component/ui/Sidebar";

const PreviewPanel = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock project data
  const projects = [
    {
      id: 1,
      name: "Property Dollar",
      description:
        "Comprehensive real estate management platform with advanced property analytics, tenant management, and financial reporting capabilities.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      status: "live",
      featured: true,
      liveUrl: "https://propertydollar.com",
      githubUrl: "https://github.com/anupsolanki/property-dollar",
      previewUrl: "https://propertydollar.com",
      views: "2.5k",
      stars: 45,
      forks: 12,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "iManagify",
      description:
        "Intelligent project management solution with AI-powered task automation, team collaboration tools, and real-time analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Framer Motion",
        "Firebase",
        "Tailwind CSS",
      ],
      status: "live",
      featured: true,
      liveUrl: "https://imanagify.com",
      githubUrl: "https://github.com/anupsolanki/imanagify",
      previewUrl: "https://imanagify.com",
      views: "1.8k",
      stars: 38,
      forks: 9,
      lastUpdated: "5 days ago",
    },
    {
      id: 3,
      name: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for e-commerce platforms with real-time sales analytics, inventory management, and customer insights.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Next.js",
        "Styled Components",
        "Node.js",
        "PostgreSQL",
      ],
      status: "live",
      featured: false,
      liveUrl: "https://ecommerce-dashboard-demo.com",
      githubUrl: "https://github.com/anupsolanki/ecommerce-dashboard",
      previewUrl: "https://ecommerce-dashboard-demo.com",
      views: "1.2k",
      stars: 28,
      forks: 7,
      lastUpdated: "1 week ago",
    },
    {
      id: 4,
      name: "AI Chat Interface",
      description:
        "Intelligent conversational interface with natural language processing, context awareness, and multi-modal communication support.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Python", "FastAPI", "OpenAI API"],
      status: "development",
      featured: true,
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/anupsolanki/ai-chat",
      previewUrl: "https://ai-chat-demo.com",
      views: "890",
      stars: 52,
      forks: 15,
      lastUpdated: "3 days ago",
    },
    {
      id: 5,
      name: "Portfolio Website",
      description:
        "Interactive developer portfolio with VS Code theme, dynamic project showcases, and immersive user experience design.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      status: "live",
      featured: false,
      liveUrl: "https://anupsolanki.dev",
      githubUrl: "https://github.com/anupsolanki/portfolio",
      previewUrl: "https://anupsolanki.dev",
      views: "3.1k",
      stars: 67,
      forks: 23,
      lastUpdated: "1 day ago",
    },
    {
      id: 6,
      name: "Task Management App",
      description:
        "Collaborative task management application with drag-and-drop functionality, team workspaces, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      status: "live",
      featured: false,
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/anupsolanki/task-manager",
      previewUrl: "https://taskmanager-demo.com",
      views: "756",
      stars: 19,
      forks: 5,
      lastUpdated: "2 weeks ago",
    },
    {
      id: 7,
      name: "Weather Dashboard",
      description:
        "Comprehensive weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["React", "JavaScript", "CSS Modules", "Weather API"],
      status: "archived",
      featured: false,
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/anupsolanki/weather-dashboard",
      previewUrl: "https://weather-dashboard-demo.com",
      views: "432",
      stars: 12,
      forks: 3,
      lastUpdated: "3 months ago",
    },
    {
      id: 8,
      name: "Social Media Analytics",
      description:
        "Advanced social media analytics platform with engagement tracking, audience insights, and performance optimization tools.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "TypeScript", "D3.js", "Supabase"],
      status: "development",
      featured: true,
      liveUrl: "https://social-analytics-demo.com",
      githubUrl: "https://github.com/anupsolanki/social-analytics",
      previewUrl: "https://social-analytics-demo.com",
      views: "1.1k",
      stars: 34,
      forks: 8,
      lastUpdated: "4 days ago",
    },
  ];

  // Extract unique technologies with counts
  const technologies = projects?.reduce<{ name: string; count: number }[]>(
    (acc, project) => {
      project?.technologies?.forEach((tech) => {
        const existing = acc?.find((t) => t?.name === tech);
        if (existing) {
          existing.count++;
        } else {
          acc?.push({ name: tech, count: 1 });
        }
      });
      return acc;
    },
    []
  );

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter and sort projects
  const filteredProjects = projects
    ?.filter((project) => {
      // Filter by status
      if (
        activeFilter !== "all" &&
        project?.status !== activeFilter &&
        activeFilter !== "featured"
      ) {
        return false;
      }
      if (activeFilter === "featured" && !project?.featured) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery?.toLowerCase();
        if (
          !project?.name?.toLowerCase()?.includes(query) &&
          !project?.description?.toLowerCase()?.includes(query) &&
          !project?.technologies?.some((tech) =>
            tech?.toLowerCase()?.includes(query)
          )
        ) {
          return false;
        }
      }

      // Filter by selected technologies
      if (selectedTechs?.length > 0) {
        if (
          !selectedTechs?.some((tech) => project?.technologies?.includes(tech))
        ) {
          return false;
        }
      }

      return true;
    })
    ?.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (
            parseInt(b?.views?.replace("k", "000")?.replace(",", "")) -
            parseInt(a?.views?.replace("k", "000")?.replace(",", ""))
          );
        case "alphabetical":
          return a?.name?.localeCompare(b?.name);
        case "technology":
          return a?.technologies?.[0]?.localeCompare(b?.technologies?.[0]);
        default: // recent
          return (
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
          );
      }
    });

  const handlePreview = (project: React.SetStateAction<null>) => {
    setSelectedProject(project);
    setShowCode(false);
  };

  const handleViewCode = (project: React.SetStateAction<null>) => {
    setSelectedProject(project);
    setShowCode(true);
  };

  const handleTechToggle = (tech: any) => {
    setSelectedTechs((prev) =>
      prev?.includes(tech) ? prev?.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin">
            <Icon name="Loader2" size={48} className="text-primary" />
          </div>
          <p className="text-lg text-muted-foreground">
            Loading preview panel...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Project Preview Panel
                </h1>
                <p className="text-muted-foreground">
                  Interactive showcases and live demonstrations of my
                  development work
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() =>
                    window.open("https://github.com/anupsolanki", "_blank")
                  }
                >
                  GitHub
                </Button>

                <Button
                  variant="default"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() =>
                    window.open("https://anupsolanki.dev", "_blank")
                  }
                >
                  Live Portfolio
                </Button>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="FolderOpen" size={16} />
              <span>src</span>
              <Icon name="ChevronRight" size={12} />
              <span>pages</span>
              <Icon name="ChevronRight" size={12} />
              <span className="text-primary">preview.js</span>
            </div>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProjectStats projects={projects} />
          </motion.div>

          {/* Technology Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TechnologyFilter
              technologies={technologies}
              selectedTechs={selectedTechs}
              onTechToggle={handleTechToggle}
            />
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </motion.div>

          {/* Projects Grid/List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredProjects?.length > 0 ? (
              <div
                className={`${
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }`}
              >
                {filteredProjects?.map((project, index) => (
                  <motion.div
                    key={project?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project={project}
                      onPreview={handlePreview}
                      onViewCode={handleViewCode}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon
                  name="Search"
                  size={48}
                  className="mx-auto mb-4 text-muted-foreground opacity-50"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                    setSelectedTechs([]);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </motion.div>

          {/* Load More Button */}
          {filteredProjects?.length > 0 && filteredProjects?.length >= 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                iconName="Plus"
                iconPosition="left"
              >
                Load More Projects
              </Button>
            </motion.div>
          )}
        </div>
        {/* Project Preview Modal */}
        {selectedProject && (
          <ProjectPreview
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onCodeToggle={() => setShowCode(!showCode)}
            showCode={showCode}
          />
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;
