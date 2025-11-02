'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/component/ui/Header';
import Sidebar from '@/component/ui/Sidebar';
import Icon from '@/component/AppIcon';

const ContactPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // VS Code Dark+ Theme Colors
  const theme = {
    background: 'bg-[#1e1e1e]',
    editor: 'bg-[#1e1e1e]',
    surface: 'bg-[#252526]',
    surfaceLight: 'bg-[#2d2d30]',
    surfaceLighter: 'bg-[#3e3e42]',
    border: 'border-[#404040]',
    borderLight: 'border-[#464647]',
    textPrimary: 'text-[#d4d4d4]',
    textSecondary: 'text-[#969696]',
    textMuted: 'text-[#6a6a6a]',
    comment: 'text-[#6a9955]',
    keyword: 'text-[#569cd6]',
    string: 'text-[#ce9178]',
    function: 'text-[#dcdcaa]',
    variable: 'text-[#9cdcfe]',
    number: 'text-[#b5cea8]',
    class: 'text-[#4ec9b0]',
    accent: 'text-[#007acc]',
    success: 'text-[#4ec9b0]',
    warning: 'text-[#ce9178]',
    error: 'text-[#f44747]',
  };

  const contactData = [
    {
      channel: 'Email',
      value: 'anupsolanki.dev@gmail.com',
      icon: 'Mail',
      file: 'contact.md',
      color: theme.string,
      action: () => window.open('mailto:anupsolanki.dev@gmail.com', '_blank')
    },
    {
      channel: 'GitHub',
      value: 'github.com/anupsolanki',
      icon: 'GitHub',
      file: 'github.json',
      color: theme.function,
      action: () => window.open('https://github.com/anupsolanki', '_blank')
    },
    {
      channel: 'LinkedIn',
      value: 'linkedin.com/in/anupsolanki',
      icon: 'Linkedin',
      file: 'linkedin.yaml',
      color: theme.keyword,
      action: () => window.open('https://linkedin.com/in/anupsolanki', '_blank')
    },
    {
      channel: 'Portfolio',
      value: 'anupsolanki.dev',
      icon: 'Globe',
      file: 'portfolio.js',
      color: theme.class,
      action: () => window.open('https://anupsolanki.dev', '_blank')
    }
  ];

  const availability = [
    { status: 'Open for opportunities', color: theme.success, icon: 'CheckCircle' },
    { status: 'Remote work preferred', color: theme.keyword, icon: 'Globe' },
    { status: 'Full-time positions', color: theme.string, icon: 'Briefcase' },
    { status: 'Contract projects', color: theme.warning, icon: 'FileCode' }
  ];

  // Terminal simulation
  const runTerminalCommand = (command: string) => {
    const output = [
      `$ ${command}`,
      '> Connecting to contact channels...',
      '> ✓ Email: anupsolanki.dev@gmail.com',
      '> ✓ GitHub: github.com/anupsolanki',
      '> ✓ LinkedIn: linkedin.com/in/anupsolanki',
      '> ℹ️  Type "help" for contact options'
    ];
    setTerminalOutput(output);
  };

  const toggleTerminal = () => {
    setTerminalOpen(prev => {
      if (!prev) {
        runTerminalCommand('contact --list');
      }
      return !prev;
    });
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Update terminal with success message
        setTerminalOutput([
          `$ contact --send`,
          '> Sending message...',
          '> ✓ Message delivered successfully!',
          '> ✓ I\'ll get back to you within 24 hours',
          '> ℹ️  Thank you for reaching out!'
        ]);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      // Update terminal with error message
      setTerminalOutput([
        `$ contact --send`,
        '> Sending message...',
        '> ✗ Failed to send message',
        '> ℹ️  Please try again or email directly',
        '> $ mailto:anupsolanki.dev@gmail.com'
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`min-h-screen ${theme.background} font-mono`}>
      <Header />
      
      <div className="flex">
        {/* Your Existing Sidebar */}
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />
        
        {/* Main Coding-Themed Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-0' : 'md:ml-0'} w-full`}>
          <div className="flex flex-col min-h-[calc(100vh-64px)]">

            {/* File Tabs Navigation */}
            <div className={`${theme.surface} border-b ${theme.border}`}>
              <div className="flex overflow-x-auto scrollbar-hide">
                <button className={`flex items-center gap-2 px-4 py-3 border-r ${theme.border} ${theme.editor} ${theme.textPrimary} border-t-2 border-t-[#007acc] font-mono text-sm`}>
                  <Icon name="Mail" size={14} className={theme.string} />
                  <span>contact.js</span>
                </button>
              </div>
            </div>

            {/* Editor Content Area */}
            <div className="flex-1 flex overflow-hidden">

              {/* Main Editor Area */}
              <div className="flex-1 overflow-auto">
                <div className="min-h-full">
                  {/* Editor Status Bar */}
                  <div className={`flex items-center justify-between ${theme.surfaceLight} border-b ${theme.border} px-4 py-1 text-xs`}>
                    <div className="flex items-center gap-4">
                      <span className={theme.textSecondary}>contact.js</span>
                      <span className={theme.textSecondary}>4 channels</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={theme.success}>Available</span>
                      <span className={theme.textSecondary}>Last online: Now</span>
                    </div>
                  </div>

                  {/* Editor Content */}
                  <div className={`${theme.editor} p-6 min-h-full`}>
                    
                    {/* Contact Form */}
                    <div className={`${theme.surface} border ${theme.border} rounded-lg p-6 mb-8`}>
                      <div className="flex items-center gap-3 mb-6">
                        <Icon name="Send" size={18} className={theme.accent} />
                        <h3 className={`font-semibold ${theme.textPrimary}`}>Send Message</h3>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className={`text-xs ${theme.textSecondary} font-mono mb-2 block`}>
                              name: string
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className={`w-full ${theme.surfaceLight} border ${theme.border} rounded p-3 ${theme.textPrimary} font-mono text-sm focus:outline-none focus:border-[#007acc] transition-colors`}
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className={`text-xs ${theme.textSecondary} font-mono mb-2 block`}>
                              email: string
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className={`w-full ${theme.surfaceLight} border ${theme.border} rounded p-3 ${theme.textPrimary} font-mono text-sm focus:outline-none focus:border-[#007acc] transition-colors`}
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className={`text-xs ${theme.textSecondary} font-mono mb-2 block`}>
                            subject: string
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className={`w-full ${theme.surfaceLight} border ${theme.border} rounded p-3 ${theme.textPrimary} font-mono text-sm focus:outline-none focus:border-[#007acc] transition-colors`}
                            placeholder="Project collaboration"
                          />
                        </div>

                        <div>
                          <label className={`text-xs ${theme.textSecondary} font-mono mb-2 block`}>
                            message: string
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className={`w-full ${theme.surfaceLight} border ${theme.border} rounded p-3 ${theme.textPrimary} font-mono text-sm focus:outline-none focus:border-[#007acc] transition-colors resize-none`}
                            placeholder="Tell me about your project..."
                          />
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className={`text-xs ${theme.textMuted} font-mono`}>
                            {submitStatus === 'success' && (
                              <span className={theme.success}>✓ Message sent successfully!</span>
                            )}
                            {submitStatus === 'error' && (
                              <span className={theme.error}>✗ Failed to send message</span>
                            )}
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex items-center gap-2 px-6 py-3 ${theme.surfaceLight} hover:${theme.surfaceLighter} ${theme.textPrimary} rounded-lg border ${theme.border} transition-all duration-200 font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-[#007acc] border-t-transparent rounded-full animate-spin"></div>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Icon name="Send" size={14} className={theme.accent} />
                                <span>Send Message</span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Contact Channels Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {contactData.map((contact, index) => (
                        <motion.div
                          key={contact.channel}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={contact.action}
                          className={`${theme.surface} border ${theme.border} rounded-lg p-4 space-y-3 hover:${theme.surfaceLight} transition-all duration-300 cursor-pointer group`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 ${theme.surfaceLight} rounded-lg flex items-center justify-center border ${theme.border}`}>
                                <Icon name={contact.icon} size={18} className={contact.color} />
                              </div>
                              <div>
                                <div className={`text-sm font-semibold ${theme.textPrimary}`}>
                                  {contact.channel}
                                </div>
                                <div className={`text-xs ${theme.textMuted} font-mono`}>
                                  {contact.file}
                                </div>
                              </div>
                            </div>
                            <Icon name="ExternalLink" size={14} className={`${theme.textMuted} group-hover:${theme.accent}`} />
                          </div>
                          
                          <div className={`text-sm ${theme.textSecondary} font-mono truncate`}>
                            {contact.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Availability Status */}
                    <div className={`${theme.surface} border ${theme.border} rounded-lg p-6 mb-8`}>
                      <div className="flex items-center gap-3 mb-4">
                        <Icon name="CheckCircle" size={18} className={theme.success} />
                        <h3 className={`font-semibold ${theme.textPrimary}`}>Current Availability</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {availability.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Icon name={item.icon} size={14} className={item.color} />
                            <span className={`text-sm ${theme.textSecondary}`}>{item.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal */}
            {terminalOpen && (
              <div className={`border-t ${theme.border}`}>
                <div className={`${theme.surface} border-b ${theme.border} px-4 py-2 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <Icon name="Terminal" size={14} className={theme.textSecondary} />
                    <span className={`text-sm ${theme.textPrimary} font-mono`}>TERMINAL</span>
                  </div>
                  <button 
                    onClick={toggleTerminal}
                    className="p-1 hover:bg-[#3e3e42] rounded"
                  >
                    <Icon name="X" size={12} className={theme.textSecondary} />
                  </button>
                </div>
                <div className={`${theme.editor} p-4 font-mono text-sm h-40 overflow-auto`}>
                  {terminalOutput.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${
                        line.startsWith('$') ? theme.keyword : 
                        line.startsWith('>') ? theme.textPrimary : 
                        line.includes('✓') ? theme.success : 
                        line.includes('✗') ? theme.error :
                        theme.comment
                      } mb-1`}
                    >
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center">
                    <span className={theme.keyword}>$</span>
                    <span className={`${theme.textPrimary} ml-2 animate-pulse`}>_</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
            {/* Terminal Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              onClick={toggleTerminal}
              className={`${theme.surfaceLighter} hover:${theme.surfaceLight} ${theme.textPrimary} rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center w-12 h-12 border ${theme.border}`}
            >
              <Icon name="Terminal" size={20} className={theme.accent} />
            </motion.button>
          </div>

          {/* Status Bar */}
          <div className={`fixed bottom-0 left-0 right-0 ${theme.surface} border-t ${theme.border} px-4 py-2 flex items-center justify-between text-xs font-mono z-30`}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="GitBranch" size={12} className={theme.textSecondary} />
                <span className={theme.textPrimary}>contact-portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Circle" size={8} className={theme.success} />
                <span className={theme.textSecondary}>Available</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={theme.textSecondary}>contact.js</span>
              <span className={theme.textSecondary}>4 channels</span>
              <span className={theme.textSecondary}>UTF-8</span>
            </div>
          </div>

          {/* Mobile Bottom Spacer */}
          {isMobile && <div className="h-16"></div>}
        </main>
      </div>
    </div>
  );
};

export default ContactPage;