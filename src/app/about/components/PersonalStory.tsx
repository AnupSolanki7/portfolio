import Icon from '@/component/AppIcon';
import Profile from "../../../../public/profile.jpg"
import React from 'react';
import Image from 'next/image';

const PersonalStory = () => {
  const personalInfo = {
    name: "Anup Solanki",
    title: "Senior Frontend Developer",
    location: "Ahmedabad, India",
    experience: "2+ Years",
    avatar: Profile,
    bio: `I'm a passionate frontend developer who believes that great code is not just about functionality—it's about crafting digital experiences that solve real business problems. My journey in web development has been driven by curiosity, continuous learning, and a deep appreciation for clean, maintainable code.\n\nWhat sets me apart is my ability to bridge the gap between technical excellence and business impact. I don't just write React components; I architect solutions that scale, perform, and delight users while driving measurable business results.`,
    philosophy: `My development philosophy centers around three core principles: **User-Centric Design**, **Technical Excellence**, and **Continuous Innovation**. I believe that the best applications are born from understanding user needs deeply, implementing them with robust technical solutions, and constantly evolving with emerging technologies.\n\nEvery line of code I write is an opportunity to create something meaningful—whether it's improving user experience, optimizing performance, or solving complex business challenges.`,
    values: [
      {
        icon: "Code",
        title: "Clean Code Advocate",
        description: "Writing maintainable, scalable code that stands the test of time"
      },
      {
        icon: "Users",
        title: "User-First Mindset",
        description: "Every technical decision is made with the end user in mind"
      },
      {
        icon: "Lightbulb",
        title: "Innovation Driver",
        description: "Constantly exploring new technologies and methodologies"
      },
      {
        icon: "Target",
        title: "Business Impact Focus",
        description: "Aligning technical solutions with business objectives"
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Personal Introduction */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src={personalInfo?.avatar}
                alt="Anup Solanki"
                className="w-32 h-32 rounded-full object-cover border-2 border-primary"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-2 border-card flex items-center justify-center">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{personalInfo?.name}</h2>
              <p className="text-lg text-primary font-medium mb-1">{personalInfo?.title}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="MapPin" size={14} />
                  <span>{personalInfo?.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={14} />
                  <span>{personalInfo?.experience}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Briefcase" size={14} />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              {personalInfo?.bio?.split('\n\n')?.map((paragraph, index) => (
                <p key={index} className="text-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Development Philosophy */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Compass" size={20} className="text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Development Philosophy</h3>
        </div>
        
        <div className="prose prose-invert max-w-none">
          {personalInfo?.philosophy?.split('\n\n')?.map((paragraph, index) => (
            <p key={index} className="text-foreground leading-relaxed mb-4">
              {paragraph?.split('**')?.map((part, partIndex) => 
                partIndex % 2 === 1 ? (
                  <strong key={partIndex} className="text-primary font-semibold">{part}</strong>
                ) : (
                  part
                )
              )}
            </p>
          ))}
        </div>
      </div>
      {/* Core Values */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Icon name="Heart" size={20} className="text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Core Values</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalInfo?.values?.map((value, index) => (
            <div key={index} className="flex gap-4 p-4 bg-muted rounded-lg hover:bg-border transition-colors duration-200">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={value?.icon} size={18} className="text-primary-foreground" />
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{value?.title}</h4>
                <p className="text-sm text-muted-foreground">{value?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalStory;