import Icon from "@/component/AppIcon";
import Image from "@/component/AppImage";
import Button from "@/component/ui/Button";
import React, { useState } from "react";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    status: string;
    featured: boolean;
    liveUrl: string;
    githubUrl: string;
    previewUrl: string;
    views: string;
    stars: number;
    forks: number;
    lastUpdated: string;
  };
  onPreview: (project: any) => void;
  onViewCode: (project: any) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onPreview,
  onViewCode,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const techColors: Record<string, string> = {
    React: "text-blue-400",
    "Next.js": "text-white",
    TypeScript: "text-blue-500",
    "Tailwind CSS": "text-cyan-400",
    "Node.js": "text-green-500",
    MongoDB: "text-green-600",
    Firebase: "text-orange-500",
    "Framer Motion": "text-purple-400",
  };

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />

        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name="Image" size={32} className="text-muted-foreground" />
          </div>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "bg-opacity-60" : "bg-opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPreview(project)}
              iconName="Eye"
              iconPosition="left"
              className="bg-background bg-opacity-90 hover:bg-opacity-100"
            >
              Preview
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewCode(project)}
              iconName="Code"
              iconPosition="left"
              className="bg-background bg-opacity-90 hover:bg-opacity-100"
            >
              Code
            </Button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              project?.status === "live"
                ? "bg-success text-success-foreground"
                : project?.status === "development"
                ? "bg-warning text-warning-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {project?.status === "live" && (
              <Icon name="Globe" size={12} className="inline mr-1" />
            )}
            {project?.status === "development" && (
              <Icon name="Wrench" size={12} className="inline mr-1" />
            )}
            {project?.status === "archived" && (
              <Icon name="Archive" size={12} className="inline mr-1" />
            )}
            {project?.status}
          </div>
        </div>
      </div>
      {/* Project Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {project?.name}
          </h3>
          <div className="flex items-center space-x-1">
            {project?.featured && (
              <Icon
                name="Star"
                size={16}
                className="text-warning fill-current"
              />
            )}
            <button
              onClick={() => window.open(project?.githubUrl, "_blank")}
              className="p-1 hover:bg-muted rounded transition-colors duration-200"
              title="View on GitHub"
            >
              <Icon name="Github" size={16} />
            </button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies
            ?.slice(0, 4)
            ?.map((tech: string, index: number) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 bg-muted rounded-full ${
                  techColors?.[tech] || "text-foreground"
                }`}
              >
                {tech}
              </span>
            ))}
          {project?.technologies && project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{project?.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} />
              <span>{project?.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="GitFork" size={12} />
              <span>{project?.forks}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{project?.lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
