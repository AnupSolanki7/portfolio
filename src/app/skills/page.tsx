'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/component/ui/Sidebar';
import Header from '@/component/ui/Header';
import Icon from '@/component/AppIcon';
import Image from '@/component/AppImage';

const SkillsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const skillAreas = [
    {
      icon: 'Monitor',
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
      level: 'Expert'
    },
    {
      icon: 'Server',
      title: 'Backend', 
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      level: 'Proficient'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile',
      skills: ['React Native', 'Expo', 'Mobile UI'],
      level: 'Intermediate'
    },
    {
      icon: 'Cloud',
      title: 'DevOps',
      skills: ['AWS', 'Docker', 'Vercel', 'CI/CD'],
      level: 'Learning'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      category: 'frontend',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop',
      skills: ['React.js', 'Hooks', 'State Management']
    },
    {
      id: 2,
      title: 'JavaScript Algorithms',
      issuer: 'freeCodeCamp',
      date: '2023',
      category: 'programming',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop',
      skills: ['JavaScript', 'Algorithms', 'Data Structures']
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      category: 'cloud',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop',
      skills: ['AWS', 'Cloud Computing', 'DevOps']
    },
    {
      id: 4,
      title: 'Advanced TypeScript',
      issuer: 'Microsoft',
      date: '2024',
      category: 'programming',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop',
      skills: ['TypeScript', 'Type Safety', 'Generics']
    }
  ];

  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: 'Grid3X3' },
    { id: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { id: 'backend', label: 'Backend', icon: 'Server' },
    { id: 'tools', label: 'Tools', icon: 'Settings' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' }
  ];

  const getStatusColor = (status: string) => {
    return status === 'completed' ? 'text-success' : 'text-muted-foreground';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name="Code" size={24} className="text-primary" />
          </div>
          <p className="text-muted-foreground">Loading skills...</p>
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
        
        <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-0' : 'ml-0 lg:ml-0'}`}>
          <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="text-center space-y-4 mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Code" size={24} className="text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Skills & Expertise</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to build modern web applications
              </p>
            </div>

            {/* Content Sections */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'overview' && (
                <div className="space-y-8">
                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillAreas.map((area, index) => (
                      <motion.div
                        key={area.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card/50 border border-border rounded-xl p-6 space-y-4 group hover:bg-card/80 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon name={area.icon} size={20} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{area.title}</h3>
                            <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {area.level}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {area.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full border border-border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Certifications Preview */}
                  <div className="bg-card/30 border border-border rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="Award" size={20} className="text-primary" />
                      <h3 className="font-semibold text-foreground">Certifications</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certifications.slice(0, 2).map((cert, index) => (
                        <div key={cert.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <Image
                            src={cert.image}
                            alt={cert.issuer}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground text-sm truncate">{cert.title}</h4>
                            <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                          </div>
                          <Icon name="CheckCircle" size={16} className="text-success" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'certifications' && (
                <div className="space-y-6">
                  <div className="text-center space-y-2 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon name="Award" size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Certifications</h2>
                    <p className="text-muted-foreground">Professional certifications and achievements</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card/50 border border-border rounded-xl p-4 space-y-3 group hover:bg-card/80 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <Image
                            src={cert.image}
                            alt={cert.issuer}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-muted-foreground">{cert.date}</span>
                              <Icon name="CheckCircle" size={14} className="text-success" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other sections can be added similarly */}
              {activeSection !== 'overview' && activeSection !== 'certifications' && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={navigationSections.find(s => s.id === activeSection)?.icon || 'Settings'} 
                          size={24} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {navigationSections.find(s => s.id === activeSection)?.label}
                  </h3>
                  <p className="text-muted-foreground">Content coming soon</p>
                </div>
              )}
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Icon name="Target" size={18} />
                <span className="text-sm font-medium">Currently Learning</span>
              </div>
              <p className="text-foreground font-medium">
                Advanced React Patterns & AI Integration
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillsPage;