'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillRadarChart from './components/SkillRadarChart';
import TechnologyTimeline from './components/TechnologyTimeline';
import CertificationBadges from './components/CertificationBadges';
import ProjectSkillMapping from './components/ProjectSkillMapping';
import LearningResources from './components/LearningResources';
import SkillEndorsements from './components/SkillEndorsements';
import Sidebar from '@/component/ui/Sidebar';
import Header from '@/component/ui/Header';
import Icon from '@/component/AppIcon';
import Button from '@/component/ui/Button';

const SkillsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for realistic experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const skillOverview = {
    totalSkills: 24,
    yearsExperience: 2.5,
    certifications: 6,
    projectsCompleted: 15,
    currentFocus: 'AI Integration & Advanced React Patterns',
    nextGoal: 'Full-Stack Architecture & System Design'
  };

  const quickStats = [
    {
      label: 'Frontend Mastery',
      value: '95%',
      icon: 'Monitor',
      color: 'text-success',
      description: 'React, JavaScript, TypeScript'
    },
    {
      label: 'Backend Proficiency',
      value: '75%',
      icon: 'Server',
      color: 'text-warning',
      description: 'Node.js, APIs, Databases'
    },
    {
      label: 'AI Integration',
      value: '70%',
      icon: 'Brain',
      color: 'text-error',
      description: 'OpenAI, ML Models, Intelligent UIs'
    },
    {
      label: 'DevOps Knowledge',
      value: '65%',
      icon: 'Cloud',
      color: 'text-primary',
      description: 'Docker, AWS, CI/CD'
    }
  ];

  const navigationSections = [
    { id: 'overview', label: 'Skills Overview', icon: 'BarChart3' },
    { id: 'proficiency', label: 'Proficiency Matrix', icon: 'Target' },
    { id: 'timeline', label: 'Learning Journey', icon: 'Clock' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'projects', label: 'Skills in Action', icon: 'GitBranch' },
    { id: 'resources', label: 'Learning Resources', icon: 'GraduationCap' },
    { id: 'endorsements', label: 'Endorsements', icon: 'Users' }
  ];

  const handleSectionChange = (sectionId: React.SetStateAction<string>) => {
    setActiveSection(sectionId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading skills.js...</p>
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
        
        <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-0' : 'ml-0 lg:ml-60'}`}>
          {/* Code Editor Header */}
          <div className="bg-card border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Code" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">src/pages/</span>
                  <span className="text-sm font-medium text-foreground">skills.js</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Icon name="Circle" size={8} className="text-success" />
                  <span>Saved</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                >
                  Export Skills
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="Share"
                  iconPosition="left"
                >
                  Share Profile
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Technical Skills & Expertise
                  </h1>
                  <p className="text-muted-foreground max-w-2xl">
                    Interactive skill matrix showcasing proficiency levels, learning journey, and real-world application. 
                    Building the future of web applications with React and AI integration.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{skillOverview?.totalSkills}</div>
                  <div className="text-sm text-muted-foreground">Total Skills</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {quickStats?.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-card border border-border rounded-lg hover:bg-muted transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={stat?.icon} size={20} className={stat?.color} />
                      <span className={`text-lg font-bold ${stat?.color}`}>{stat?.value}</span>
                    </div>
                    <h3 className="font-medium text-foreground text-sm mb-1">{stat?.label}</h3>
                    <p className="text-xs text-muted-foreground">{stat?.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Current Focus */}
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon name="Target" size={20} className="text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Current Focus</h3>
                    <p className="text-sm text-muted-foreground mb-2">{skillOverview?.currentFocus}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Next Goal: {skillOverview?.nextGoal}</span>
                      <span>•</span>
                      <span>{skillOverview?.yearsExperience} years experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 p-1 bg-muted rounded-lg">
              {navigationSections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => handleSectionChange(section?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                    activeSection === section?.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background'
                  }`}
                >
                  <Icon name={section?.icon} size={14} />
                  <span className="hidden sm:inline">{section?.label}</span>
                </button>
              ))}
            </div>

            {/* Content Sections */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {activeSection === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon name="BarChart3" size={20} className="text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Skill Categories</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { category: 'Frontend Development', skills: 8, level: 'Expert' },
                        { category: 'Backend & APIs', skills: 6, level: 'Proficient' },
                        { category: 'Tools & DevOps', skills: 6, level: 'Intermediate' },
                        { category: 'AI & Emerging Tech', skills: 4, level: 'Learning' }
                      ]?.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <div className="font-medium text-foreground">{item?.category}</div>
                            <div className="text-sm text-muted-foreground">{item?.skills} skills</div>
                          </div>
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                            {item?.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon name="TrendingUp" size={20} className="text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Learning Progress</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">Overall Proficiency</span>
                          <span className="text-muted-foreground">82%</span>
                        </div>
                        <div className="w-full bg-background rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-border">
                        <div>
                          <div className="text-2xl font-bold text-success">{skillOverview?.certifications}</div>
                          <div className="text-xs text-muted-foreground">Certifications</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{skillOverview?.projectsCompleted}</div>
                          <div className="text-xs text-muted-foreground">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'proficiency' && <SkillRadarChart />}
              {activeSection === 'timeline' && <TechnologyTimeline />}
              {activeSection === 'certifications' && <CertificationBadges />}
              {activeSection === 'projects' && <ProjectSkillMapping />}
              {activeSection === 'resources' && <LearningResources />}
              {activeSection === 'endorsements' && <SkillEndorsements />}
            </motion.div>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p>Skills continuously updated • Last updated: October {new Date()?.getFullYear()}</p>
              <p className="mt-1">Building the future of web applications with React and AI</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillsPage;