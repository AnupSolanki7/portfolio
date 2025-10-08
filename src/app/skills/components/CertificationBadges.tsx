import Icon from '@/component/AppIcon';
import Image from '@/component/AppImage';
import React, { useState } from 'react';

const CertificationBadges = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2023-08-15',
      category: 'frontend',
      status: 'completed',
      credentialId: 'META-REACT-2023-AS001',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop',
      skills: ['React.js', 'JSX', 'Hooks', 'State Management'],
      description: 'Comprehensive certification covering React fundamentals, advanced patterns, and best practices for building scalable applications.'
    },
    {
      id: 2,
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023-03-22',
      category: 'programming',
      status: 'completed',
      credentialId: 'FCC-JS-ALG-2023-AS002',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
      description: 'Advanced JavaScript programming concepts including ES6+, functional programming, and algorithmic thinking.'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024-01-10',
      category: 'cloud',
      status: 'completed',
      credentialId: 'AWS-CP-2024-AS003',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop',
      skills: ['AWS', 'Cloud Computing', 'DevOps', 'Infrastructure'],
      description: 'Foundational understanding of AWS cloud services, architecture, and deployment strategies.'
    },
    {
      id: 4,
      title: 'Advanced TypeScript',
      issuer: 'Microsoft Learn',
      date: '2024-02-28',
      category: 'programming',
      status: 'completed',
      credentialId: 'MS-TS-ADV-2024-AS004',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop',
      skills: ['TypeScript', 'Type Safety', 'Generics', 'Advanced Patterns'],
      description: 'Deep dive into TypeScript advanced features, type system, and enterprise-level application development.'
    },
    {
      id: 5,
      title: 'AI-Powered Web Development',
      issuer: 'OpenAI Academy',
      date: '2024-06-15',
      category: 'ai',
      status: 'in-progress',
      credentialId: 'OAI-WEB-2024-AS005',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop',
      skills: ['AI Integration', 'Machine Learning', 'OpenAI APIs', 'Intelligent UIs'],
      description: 'Cutting-edge certification focusing on integrating AI capabilities into modern web applications.'
    },
    {
      id: 6,
      title: 'Next.js Performance Optimization',
      issuer: 'Vercel',
      date: '2024-09-20',
      category: 'frontend',
      status: 'planned',
      credentialId: 'VER-NEXT-2024-AS006',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop',
      skills: ['Next.js', 'Performance', 'SSR', 'Optimization'],
      description: 'Advanced Next.js techniques for building high-performance, scalable web applications.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Certifications', icon: 'Award' },
    { key: 'frontend', label: 'Frontend', icon: 'Monitor' },
    { key: 'programming', label: 'Programming', icon: 'Code' },
    { key: 'cloud', label: 'Cloud & DevOps', icon: 'Cloud' },
    { key: 'ai', label: 'AI & ML', icon: 'Brain' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success bg-success/10 border-success/20';
      case 'in-progress': return 'text-warning bg-warning/10 border-warning/20';
      case 'planned': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return 'CheckCircle';
      case 'in-progress': return 'Clock';
      case 'planned': return 'Calendar';
      default: return 'Circle';
    }
  };

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications?.filter(cert => cert?.category === selectedCategory);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Award" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Certifications & Achievements</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="TrendingUp" size={16} />
          <span>{certifications?.filter(c => c?.status === 'completed')?.length} Completed</span>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.key}
            onClick={() => setSelectedCategory(category?.key)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
              selectedCategory === category?.key
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={14} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCertifications?.map((cert) => (
          <div
            key={cert?.id}
            className="group p-4 bg-muted hover:bg-border rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="flex items-start space-x-3 mb-3">
              <div className="relative">
                <Image
                  src={cert?.image}
                  alt={cert?.issuer}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="absolute -top-1 -right-1">
                  <Icon
                    name={getStatusIcon(cert?.status)}
                    size={16}
                    className={cert?.status === 'completed' ? 'text-success' : 'text-muted-foreground'}
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                  {cert?.title}
                </h4>
                <p className="text-sm text-muted-foreground">{cert?.issuer}</p>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">
                  {new Date(cert.date)?.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short' 
                  })}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(cert?.status)}`}>
                  {cert?.status?.replace('-', ' ')}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {cert?.description}
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {cert?.skills?.slice(0, 3)?.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-background text-foreground rounded border"
                >
                  {skill}
                </span>
              ))}
              {cert?.skills?.length > 3 && (
                <span className="px-2 py-1 text-xs text-muted-foreground">
                  +{cert?.skills?.length - 3} more
                </span>
              )}
            </div>

            {/* Credential ID */}
            {cert?.status === 'completed' && (
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Credential ID</span>
                  <button className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80">
                    <span className="font-mono">{cert?.credentialId?.slice(-6)}</span>
                    <Icon name="ExternalLink" size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Achievement Stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-success">
              {certifications?.filter(c => c?.status === 'completed')?.length}
            </div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-warning">
              {certifications?.filter(c => c?.status === 'in-progress')?.length}
            </div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-muted-foreground">
              {certifications?.filter(c => c?.status === 'planned')?.length}
            </div>
            <div className="text-xs text-muted-foreground">Planned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;