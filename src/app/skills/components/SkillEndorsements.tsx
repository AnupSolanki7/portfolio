import React, { useState } from 'react';
import Icon from '../../../component/AppIcon';
import Image from '../../../component/AppImage';

const SkillEndorsements = () => {
  const [selectedSkill, setSelectedSkill] = useState('React.js');

  const skillEndorsements:any = {
    'React.js': {
      totalEndorsements: 28,
      averageRating: 4.8,
      endorsements: [
        {
          id: 1,
          endorser: 'Rajesh Patel',
          role: 'Senior Frontend Developer',
          company: 'Solguruz',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rating: 5,
          comment: `Anup's React skills are exceptional. He built our entire Property Dollar frontend with clean, maintainable code and excellent performance optimization. His understanding of React patterns is impressive.`,
          date: '2024-09-15',relationship: 'Colleague',
          verified: true
        },
        {
          id: 2,
          endorser: 'Priya Sharma',role: 'Tech Lead',company: 'Solguruz',avatar: 'https://randomuser.me/api/portraits/women/44.jpg',rating: 5,comment: `Outstanding React developer. Anup consistently delivers high-quality components and has a deep understanding of modern React practices. Great team player and mentor.`,date: '2024-08-22',relationship: 'Manager',
          verified: true
        },
        {
          id: 3,
          endorser: 'Michael Johnson',role: 'Full Stack Developer',company: 'Tech Solutions Inc',avatar: 'https://randomuser.me/api/portraits/men/56.jpg',rating: 4,comment: `Worked with Anup on a complex React project. His component architecture and state management skills are solid. Reliable and knowledgeable developer.`,date: '2024-07-10',relationship: 'Client',
          verified: false
        }
      ]
    },
    'JavaScript': {
      totalEndorsements: 25,
      averageRating: 4.7,
      endorsements: [
        {
          id: 4,
          endorser: 'Sarah Wilson',role: 'Senior Developer',company: 'WebTech Solutions',avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          rating: 5,
          comment: `Anup has excellent JavaScript fundamentals and stays current with ES6+ features. His code is clean, efficient, and well-documented.`,
          date: '2024-09-01',relationship: 'Peer',
          verified: true
        },
        {
          id: 5,
          endorser: 'David Chen',role: 'Frontend Architect',company: 'Digital Innovations',avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
          rating: 4,
          comment: `Strong JavaScript skills with good understanding of async programming and modern syntax. Anup writes maintainable and performant code.`,
          date: '2024-08-18',relationship: 'Colleague',
          verified: true
        }
      ]
    },
    'TypeScript': {
      totalEndorsements: 18,
      averageRating: 4.6,
      endorsements: [
        {
          id: 6,
          endorser: 'Emma Thompson',role: 'Lead Developer',company: 'Enterprise Solutions',avatar: 'https://randomuser.me/api/portraits/women/25.jpg',rating: 5,comment: `Anup quickly adapted to TypeScript and now writes type-safe code with advanced patterns. His understanding of generics and utility types is impressive.`,date: '2024-08-30',relationship: 'Manager',
          verified: true
        }
      ]
    },
    'Next.js': {
      totalEndorsements: 15,
      averageRating: 4.5,
      endorsements: [
        {
          id: 7,
          endorser: 'Alex Rodriguez',role: 'Full Stack Engineer',company: 'Modern Web Co',avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
          rating: 4,
          comment: `Good Next.js skills with understanding of SSR and performance optimization. Anup delivered a fast, SEO-friendly application for our e-commerce project.`,
          date: '2024-07-25',relationship: 'Client',
          verified: false
        }
      ]
    },
    'Node.js': {
      totalEndorsements: 12,
      averageRating: 4.3,
      endorsements: [
        {
          id: 8,
          endorser: 'Lisa Park',role: 'Backend Developer',company: 'API Solutions',avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
          rating: 4,
          comment: `Solid Node.js fundamentals with good API development skills. Anup built reliable REST endpoints for our project integration.`,
          date: '2024-06-15',relationship: 'Colleague',
          verified: true
        }
      ]
    },
    'AI Integration': {
      totalEndorsements: 8,
      averageRating: 4.4,
      endorsements: [
        {
          id: 9,
          endorser: 'Dr. James Mitchell',role: 'AI Research Lead',company: 'AI Innovations Lab',avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          rating: 5,
          comment: `Anup has shown great aptitude for AI integration in web applications. His work on intelligent content generation was innovative and well-executed.`,
          date: '2024-09-10',relationship: 'Client',
          verified: true
        }
      ]
    }
  };

  const skills = Object.keys(skillEndorsements);

  const getRelationshipColor = (relationship: any) => {
    switch (relationship) {
      case 'Manager': return 'text-primary bg-primary/10 border-primary/20';
      case 'Colleague': return 'text-accent bg-accent/10 border-accent/20';
      case 'Client': return 'text-success bg-success/10 border-success/20';
      case 'Peer': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={12}
        className={index < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Skill Endorsements</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Shield" size={16} />
          <span>Verified Reviews</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Skills Sidebar */}
        <div className="lg:col-span-1">
          <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
            Skills
          </h4>
          <div className="space-y-2">
            {skills?.map((skill) => {
              const skillData = skillEndorsements?.[skill];
              return (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    selectedSkill === skill
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-border text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{skill}</span>
                    <span className="text-xs opacity-70">
                      {skillData?.totalEndorsements}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(Math.round(skillData?.averageRating))}
                    <span className="text-xs opacity-70 ml-1">
                      {skillData?.averageRating}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Endorsements Content */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold text-foreground">{selectedSkill}</h4>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{skillEndorsements?.[selectedSkill]?.totalEndorsements} endorsements</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning" />
                  <span>{skillEndorsements?.[selectedSkill]?.averageRating} average</span>
                </div>
              </div>
            </div>
            
            {/* Rating Distribution */}
            <div className="flex items-center space-x-2 mb-4">
              {renderStars(Math.round(skillEndorsements?.[selectedSkill]?.averageRating))}
              <span className="text-sm text-muted-foreground ml-2">
                Based on {skillEndorsements?.[selectedSkill]?.totalEndorsements} reviews
              </span>
            </div>
          </div>

          {/* Endorsements List */}
          <div className="space-y-4">
            {skillEndorsements?.[selectedSkill]?.endorsements?.map((endorsement:any) => (
              <div
                key={endorsement?.id}
                className="p-4 bg-muted hover:bg-border rounded-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Image
                      src={endorsement?.avatar}
                      alt={endorsement?.endorser}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {endorsement?.verified && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                        <Icon name="Check" size={10} className="text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-medium text-foreground">{endorsement?.endorser}</h5>
                        <p className="text-sm text-muted-foreground">
                          {endorsement?.role} at {endorsement?.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full border ${getRelationshipColor(endorsement?.relationship)}`}>
                          {endorsement?.relationship}
                        </span>
                        {endorsement?.verified && (
                          <Icon name="ShieldCheck" size={14} className="text-success" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {renderStars(endorsement?.rating)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(endorsement.date)?.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                      "{endorsement?.comment}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request Endorsement */}
          <div className="mt-6 p-4 bg-background border border-border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium text-foreground mb-1">Request an Endorsement</h5>
                <p className="text-sm text-muted-foreground">
                  Have you worked with me on {selectedSkill}? Share your experience!
                </p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <Icon name="Plus" size={14} />
                <span className="text-sm">Add Endorsement</span>
              </button>
            </div>
          </div>

          {/* Endorsement Summary */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-success">
                {skillEndorsements?.[selectedSkill]?.endorsements?.filter((e: { verified: any; }) => e?.verified)?.length}
              </div>
              <div className="text-xs text-muted-foreground">Verified</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">
                {skillEndorsements?.[selectedSkill]?.endorsements?.filter((e: { relationship: string; }) => e?.relationship === 'Manager')?.length}
              </div>
              <div className="text-xs text-muted-foreground">From Managers</div>
            </div>
            <div>
              <div className="text-lg font-bold text-accent">
                {skillEndorsements?.[selectedSkill]?.endorsements?.filter((e: { relationship: string; }) => e?.relationship === 'Colleague')?.length}
              </div>
              <div className="text-xs text-muted-foreground">From Colleagues</div>
            </div>
            <div>
              <div className="text-lg font-bold text-warning">
                {skillEndorsements?.[selectedSkill]?.endorsements?.filter((e: { relationship: string; }) => e?.relationship === 'Client')?.length}
              </div>
              <div className="text-xs text-muted-foreground">From Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillEndorsements;