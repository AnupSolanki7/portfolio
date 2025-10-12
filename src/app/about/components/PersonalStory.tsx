import Icon from '@/component/AppIcon';
import Profile from "../../../../public/profile.jpg";
import React from 'react';
import Image from 'next/image';

const PersonalStory = () => {
  const personalInfo = {
    name: "Anup Solanki",
    title: "Senior Frontend Developer",
    location: "Ahmedabad, India",
    experience: "2+ Years",
    avatar: Profile,
    bio: `I'm a passionate frontend developer focused on crafting digital experiences that solve real business problems. My journey in web development is driven by curiosity, continuous learning, and writing clean, maintainable code.`,
    philosophy: `Development philosophy: **User-Centric Design**, **Technical Excellence**, **Continuous Innovation**. Every line of code is an opportunity to improve UX, performance, and solve complex challenges.`,
    values: [
      { icon: "Code", title: "Clean Code Advocate" },
      { icon: "Users", title: "User-First Mindset" },
      { icon: "Lightbulb", title: "Innovation Driver" },
      { icon: "Target", title: "Business Impact Focus" }
    ]
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-6 py-8">
      {/* Personal Introduction */}
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="relative flex-shrink-0">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-28 h-28 rounded-full object-cover border-2 border-primary"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border border-card">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-foreground">{personalInfo.name}</h2>
          <p className="text-primary font-medium">{personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="MapPin" size={14} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>{personalInfo.experience}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Briefcase" size={14} />
              <span>Open to opportunities</span>
            </div>
          </div>
          <p className="text-foreground text-sm mt-2">{personalInfo.bio}</p>
        </div>
      </div>

      {/* Development Philosophy */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Icon name="Compass" size={18} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Development Philosophy</h3>
        </div>
        <p className="text-sm text-foreground">
          {personalInfo.philosophy.split('**').map((part, idx) => 
            idx % 2 === 1 ? <strong key={idx} className="text-primary">{part}</strong> : part
          )}
        </p>
      </div>

      {/* Core Values */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Icon name="Heart" size={18} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Core Values</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {personalInfo.values.map((value, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name={value.icon} size={16} className="text-primary-foreground" />
              </div>
              <span className="text-sm text-foreground font-medium">{value.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalStory;
