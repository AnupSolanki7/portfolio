import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../AppIcon";
import { useRouter } from "next/navigation";

const WelcomeHero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const texts = [
    "Software Developer",
    "Frontend Specialist",
    "React & Next.js Expert",
    "UI/UX Enthusiast",
    "Team Collaborator",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const handleProjectRedirect = () => {
    router.push("/projects");
  };

  const handleResumeView = () => {
    window.open("/Anup_Solanki_Resume.pdf", "_blank");
  }

  return (
    <motion.div
      className="flex-1 flex flex-col justify-center px-8 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl">
        {/* Status Indicator */}
        <motion.div
          className="flex items-center space-x-2 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <span className="text-success text-sm font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Hi, I'm <span className="text-primary">Anup Solanki</span>
          </h1>
          <div className="text-2xl lg:text-3xl text-muted-foreground">
            <span className="text-accent">{currentText}</span>
            <span className="animate-blink text-primary">|</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          I’m a passionate software developer with 3 years of experience
          building high-performance, scalable, and SEO-friendly web
          applications. Skilled in React.js, Next.js, Redux, and GraphQL, I
          focus on crafting clean, responsive, and efficient digital experiences
          that drive real business impact.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-2">
            <Icon name="Code" size={20} className="text-accent" />
            <span className="text-foreground font-medium">
              3+ Years of Experience
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Briefcase" size={20} className="text-accent" />
            <span className="text-foreground font-medium">
              Projects Led: SaaS, E-Commerce, CRM
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={20} className="text-accent" />
            <span className="text-foreground font-medium">
              Team Collaboration & Code Reviews
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={handleProjectRedirect}
            className="flex cursor-pointer items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            <Icon name="Eye" size={18} />
            <span>View Projects</span>
          </button>
          <button onClick={handleResumeView} className="flex cursor-pointer items-center space-x-2 bg-card hover:bg-muted text-foreground border border-border px-6 py-3 rounded-lg font-medium transition-all duration-200">
            <Icon name="Download" size={18} />
            <span>Download Resume</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeHero;
