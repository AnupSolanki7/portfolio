"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import ProjectStats from "./components/ProjectStats";
import FeaturedProject from "./components/FeaturedProject";
import Icon from "@/component/AppIcon";
import Button from "@/component/ui/Button";
import Header from "@/component/ui/Header";
import Sidebar from "@/component/ui/Sidebar";

const ProjectsPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Property Dollar - Real Estate Platform",
      category: "Web Application",
      description:
        "A comprehensive real estate platform enabling property listings, virtual tours, and seamless buyer-seller connections with advanced search and filtering capabilities.",
      fullDescription: `Property Dollar revolutionizes the real estate industry by providing a comprehensive digital platform that connects buyers, sellers, and agents in an intuitive ecosystem. The platform features advanced property search algorithms, virtual tour integration, mortgage calculators, and real-time market analytics.\n\nBuilt with modern React architecture and optimized for performance, the application handles thousands of concurrent users while maintaining sub-second load times. The responsive design ensures seamless experience across all devices, from desktop browsing to mobile property hunting.`,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "AWS S3",
        "Stripe API",
        "Google Maps API",
      ],
      year: "2024",
      status: "live",
      featured: true,
      liveUrl: "https://propertydollar.com",
      githubUrl: "https://github.com/anupsolanki/property-dollar",
      metrics: {
        performance: "95/100",
        users: "10K+",
        impact: "+40% Sales",
      },
      detailedMetrics: {
        pageLoadTime: "1.2s",
        userRetention: "85%",
        conversionRate: "12%",
        customerSatisfaction: "4.8/5",
      },
      features: [
        "Advanced property search with 20+ filters",
        "Virtual 360° property tours",
        "Real-time chat between buyers and agents",
        "Mortgage calculator with live rates",
        "Neighborhood analytics and insights",
        "Mobile-first responsive design",
        "Secure payment processing",
        "Multi-language support",
      ],
      achievements: [
        "Increased property inquiries by 40%",
        "Reduced average time-to-sale by 25%",
        "Achieved 95+ Google PageSpeed score",
        "Processed over $50M in property transactions",
      ],
      technicalDetails: [
        {
          title: "Performance Optimization",
          description:
            "Implemented advanced caching strategies and code splitting to achieve sub-second load times.",
          code: `// Lazy loading implementation
const PropertyDetails = lazy(() => import('./PropertyDetails'));

// Image optimization
const optimizedImage = useMemo(() => 
  generateResponsiveImage(imageUrl, screenSize), [imageUrl, screenSize]
);`,
        },
        {
          title: "Real-time Features",
          description:
            "Built real-time chat and notification system using Socket.io for instant communication.",
          code: `// Socket.io implementation
useEffect(() => {
  socket.on('newMessage', (message) => {
    setMessages(prev => [...prev, message]);
  });
  
  return () => socket.off('newMessage');
}, []);`,
        },
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "Real Estate Agent",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          feedback:
            "Property Dollar transformed how I connect with clients. The platform's intuitive design and powerful features helped me close 40% more deals this year.",
          rating: 5,
        },
        {
          name: "Mike Chen",
          role: "Property Buyer",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          feedback:
            "Found my dream home in just 2 weeks! The virtual tours and detailed analytics made the decision process so much easier.",
          rating: 5,
        },
      ],
    },
    {
      id: 2,
      title: "iManagify - Business Management Suite",
      category: "Enterprise Software",
      description:
        "An all-in-one business management platform featuring project tracking, team collaboration, financial analytics, and automated workflow management.",
      fullDescription: `iManagify is a comprehensive business management suite designed to streamline operations for small to medium enterprises. The platform integrates project management, team collaboration, financial tracking, and automated workflows into a single, cohesive system.\n\nThe application features a modern dashboard with real-time analytics, customizable reporting, and intelligent automation that helps businesses reduce operational overhead by up to 35%. Built with scalability in mind, it supports multi-tenant architecture and can handle enterprise-level workloads.`,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop",
      ],
      techStack: [
        "React.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
        "GraphQL",
        "Material-UI",
      ],
      year: "2023",
      status: "live",
      featured: false,
      liveUrl: "https://imanagify.com",
      githubUrl: "https://github.com/anupsolanki/imanagify",
      metrics: {
        performance: "92/100",
        users: "5K+",
        impact: "+35% Efficiency",
      },
      detailedMetrics: {
        pageLoadTime: "1.5s",
        userRetention: "78%",
        conversionRate: "8%",
        customerSatisfaction: "4.6/5",
      },
      features: [
        "Comprehensive project management dashboard",
        "Real-time team collaboration tools",
        "Advanced financial analytics and reporting",
        "Automated workflow management",
        "Multi-tenant architecture support",
        "Custom role-based permissions",
        "API integrations with popular tools",
        "Mobile app for iOS and Android",
      ],
      achievements: [
        "Reduced operational overhead by 35%",
        "Improved team productivity by 50%",
        "Achieved 99.9% uptime reliability",
        "Served over 500 businesses globally",
      ],
      technicalDetails: [
        {
          title: "Multi-tenant Architecture",
          description:
            "Designed scalable multi-tenant system supporting thousands of organizations.",
          code: `// Tenant isolation middleware
const tenantMiddleware = (req, res, next) => {
  const tenantId = req.headers['x-tenant-id'];
  req.tenant = await Tenant.findById(tenantId);
  next();
};`,
        },
        {
          title: "Real-time Analytics",
          description:
            "Built real-time dashboard with WebSocket connections for live data updates.",
          code: `// Real-time analytics hook
const useRealTimeAnalytics = (tenantId) => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const ws = new WebSocket(\`ws://api/analytics/\${tenantId}\`);
    ws.onmessage = (event) => setData(JSON.parse(event.data));
    return () => ws.close();
  }, [tenantId]);
  
  return data;
};`,
        },
      ],
      testimonials: [
        {
          name: "David Rodriguez",
          role: "Operations Manager",
          avatar: "https://randomuser.me/api/portraits/men/28.jpg",
          feedback:
            "iManagify streamlined our entire operation. We've seen a 35% reduction in administrative overhead and much better team coordination.",
          rating: 5,
        },
      ],
    },
    {
      id: 3,
      title: "EcoTrack - Sustainability Dashboard",
      category: "Environmental Tech",
      description:
        "A comprehensive sustainability tracking platform helping organizations monitor, analyze, and reduce their environmental footprint with AI-powered insights.",
      fullDescription: `EcoTrack empowers organizations to take control of their environmental impact through comprehensive tracking and intelligent analytics. The platform monitors carbon emissions, energy consumption, waste generation, and water usage across multiple facilities and operations.\n\nUtilizing machine learning algorithms, EcoTrack provides predictive insights and actionable recommendations to help organizations achieve their sustainability goals. The platform integrates with IoT sensors and existing systems to provide real-time environmental data and automated reporting for compliance and certification purposes.`,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1569163139394-de44cb5894c6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      ],
      techStack: [
        "React.js",
        "Python",
        "TensorFlow",
        "PostgreSQL",
        "InfluxDB",
        "Docker",
        "Kubernetes",
        "D3.js",
      ],
      year: "2024",
      status: "development",
      featured: false,
      liveUrl: null,
      githubUrl: "https://github.com/anupsolanki/ecotrack",
      metrics: {
        performance: "88/100",
        users: "2K+",
        impact: "+60% Awareness",
      },
      detailedMetrics: {
        pageLoadTime: "2.1s",
        userRetention: "72%",
        conversionRate: "15%",
        customerSatisfaction: "4.4/5",
      },
      features: [
        "Real-time environmental data monitoring",
        "AI-powered sustainability insights",
        "Carbon footprint calculation and tracking",
        "Automated compliance reporting",
        "IoT sensor integration",
        "Predictive analytics for resource optimization",
        "Custom sustainability goal setting",
        "Multi-facility management dashboard",
      ],
      achievements: [
        "Helped reduce carbon emissions by 25% on average",
        "Automated 80% of compliance reporting tasks",
        "Increased sustainability awareness by 60%",
        "Integrated with 50+ IoT sensor types",
      ],
      technicalDetails: [
        {
          title: "AI-Powered Analytics",
          description:
            "Implemented machine learning models for predictive environmental insights.",
          code: `// ML model integration
const predictEmissions = async (facilityData) => {
  const model = await tf.loadLayersModel('/models/emissions-predictor');
  const prediction = model.predict(tf.tensor2d([facilityData]));
  return prediction.dataSync()[0];
};`,
        },
        {
          title: "IoT Data Processing",
          description:
            "Built real-time data pipeline for processing IoT sensor data at scale.",
          code: `// IoT data stream processing
const processIoTData = (sensorData) => {
  return sensorData
    .filter(data => data.quality > 0.8)
    .map(data => ({
      ...data,
      normalized: normalizeValue(data.value, data.type)
    }));
};`,
        },
      ],
      testimonials: [
        {
          name: "Emma Thompson",
          role: "Sustainability Director",
          avatar: "https://randomuser.me/api/portraits/women/41.jpg",
          feedback:
            "EcoTrack gave us the visibility we needed to make real environmental impact. The AI insights helped us identify areas we never knew were problematic.",
          rating: 4,
        },
      ],
    },
    {
      id: 4,
      title: "FinanceFlow - Personal Finance Manager",
      category: "FinTech",
      description:
        "A smart personal finance management app with AI-powered budgeting, expense tracking, investment insights, and financial goal planning.",
      fullDescription: `FinanceFlow revolutionizes personal finance management by combining intuitive design with powerful AI-driven insights. The application automatically categorizes expenses, tracks spending patterns, and provides personalized recommendations for better financial health.\n\nWith bank-level security and seamless integration with major financial institutions, FinanceFlow offers users a comprehensive view of their financial landscape. The app includes advanced features like investment portfolio tracking, bill reminders, and goal-based savings plans.`,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      ],
      techStack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Plaid API",
        "TensorFlow.js",
        "Firebase",
        "Stripe",
        "Chart.js",
      ],
      year: "2023",
      status: "live",
      featured: false,
      liveUrl: "https://financeflow.app",
      githubUrl: "https://github.com/anupsolanki/financeflow",
      metrics: {
        performance: "90/100",
        users: "15K+",
        impact: "+45% Savings",
      },
      detailedMetrics: {
        pageLoadTime: "1.8s",
        userRetention: "82%",
        conversionRate: "18%",
        customerSatisfaction: "4.7/5",
      },
      features: [
        "Automatic expense categorization with AI",
        "Real-time budget tracking and alerts",
        "Investment portfolio monitoring",
        "Bill reminder and payment scheduling",
        "Financial goal setting and tracking",
        "Secure bank account integration",
        "Personalized financial insights",
        "Multi-currency support",
      ],
      achievements: [
        "Helped users save 45% more on average",
        "Processed over $100M in tracked transactions",
        "Achieved 4.8/5 app store rating",
        "Reduced financial stress by 60% (user survey)",
      ],
      technicalDetails: [
        {
          title: "AI Expense Categorization",
          description:
            "Built machine learning model for automatic transaction categorization.",
          code: `// AI categorization service
const categorizeTransaction = async (transaction) => {
  const features = extractFeatures(transaction);
  const model = await loadModel('expense-categorizer');
  const category = await model.predict(features);
  return category;
};`,
        },
        {
          title: "Secure Bank Integration",
          description:
            "Implemented secure bank data aggregation using Plaid API with encryption.",
          code: `// Secure bank connection
const connectBank = async (publicToken) => {
  const { access_token } = await plaidClient.itemPublicTokenExchange({
    public_token: publicToken,
  });
  
  return encrypt(access_token, process.env.ENCRYPTION_KEY);
};`,
        },
      ],
      testimonials: [
        {
          name: "Alex Kumar",
          role: "Software Engineer",
          avatar: "https://randomuser.me/api/portraits/men/35.jpg",
          feedback:
            "FinanceFlow completely changed how I manage money. The AI insights are spot-on and helped me save $3000 last year!",
          rating: 5,
        },
      ],
    },
    {
      id: 5,
      title: "HealthHub - Telemedicine Platform",
      category: "HealthTech",
      description:
        "A comprehensive telemedicine platform connecting patients with healthcare providers through secure video consultations, health records, and appointment management.",
      fullDescription: `HealthHub bridges the gap between patients and healthcare providers through a secure, HIPAA-compliant telemedicine platform. The application facilitates virtual consultations, manages electronic health records, and provides integrated prescription management.\n\nBuilt with healthcare-specific requirements in mind, the platform ensures data privacy and security while delivering a seamless user experience for both patients and medical professionals. The system includes features for appointment scheduling, medical history tracking, and secure messaging.`,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
      ],
      techStack: [
        "React.js",
        "WebRTC",
        "Node.js",
        "PostgreSQL",
        "Socket.io",
        "AWS",
        "Twilio",
        "FHIR API",
      ],
      year: "2024",
      status: "live",
      featured: false,
      liveUrl: "https://healthhub.medical",
      githubUrl: "https://github.com/anupsolanki/healthhub",
      metrics: {
        performance: "94/100",
        users: "8K+",
        impact: "+70% Access",
      },
      detailedMetrics: {
        pageLoadTime: "1.3s",
        userRetention: "88%",
        conversionRate: "22%",
        customerSatisfaction: "4.9/5",
      },
      features: [
        "HD video consultations with WebRTC",
        "HIPAA-compliant data handling",
        "Electronic health records management",
        "Prescription management system",
        "Appointment scheduling and reminders",
        "Secure patient-doctor messaging",
        "Insurance verification integration",
        "Multi-language support",
      ],
      achievements: [
        "Increased healthcare access by 70%",
        "Reduced appointment wait times by 60%",
        "Achieved 99.9% uptime for critical consultations",
        "Served patients across 25+ countries",
      ],
      technicalDetails: [
        {
          title: "WebRTC Video Integration",
          description:
            "Implemented secure, high-quality video consultations using WebRTC technology.",
          code: `// WebRTC connection setup
const initializeVideoCall = async (roomId) => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  });
  
  const peerConnection = new RTCPeerConnection(iceServers);
  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });
  
  return peerConnection;
};`,
        },
        {
          title: "HIPAA Compliance",
          description:
            "Implemented end-to-end encryption and audit logging for healthcare data protection.",
          code: `// Data encryption for HIPAA compliance
const encryptHealthData = (data) => {
  const cipher = crypto.createCipher('aes-256-gcm', process.env.HEALTH_KEY);
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};`,
        },
      ],
      testimonials: [
        {
          name: "Dr. Maria Santos",
          role: "Primary Care Physician",
          avatar: "https://randomuser.me/api/portraits/women/52.jpg",
          feedback:
            "HealthHub has transformed my practice. I can now reach patients who couldn't visit in person, and the platform is incredibly secure and easy to use.",
          rating: 5,
        },
      ],
    },
    {
      id: 6,
      title: "EduConnect - Learning Management System",
      category: "EdTech",
      description:
        "A modern learning management system with interactive courses, real-time collaboration, progress tracking, and AI-powered personalized learning paths.",
      fullDescription: `EduConnect transforms online education by providing an intuitive, feature-rich learning management system that adapts to individual learning styles. The platform combines traditional course management with modern interactive features and AI-powered personalization.\n\nDesigned for educational institutions and corporate training programs, EduConnect supports various content types, assessment methods, and collaboration tools. The system includes advanced analytics to track learning progress and identify areas for improvement.`,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "PostgreSQL",
        "Redis",
        "WebRTC",
        "TensorFlow",
        "AWS",
        "Stripe",
      ],
      year: "2023",
      status: "live",
      featured: false,
      liveUrl: "https://educonnect.learning",
      githubUrl: "https://github.com/anupsolanki/educonnect",
      metrics: {
        performance: "91/100",
        users: "12K+",
        impact: "+55% Engagement",
      },
      detailedMetrics: {
        pageLoadTime: "1.6s",
        userRetention: "79%",
        conversionRate: "14%",
        customerSatisfaction: "4.5/5",
      },
      features: [
        "Interactive course creation tools",
        "Real-time virtual classrooms",
        "AI-powered learning recommendations",
        "Advanced progress tracking and analytics",
        "Collaborative study groups",
        "Automated grading system",
        "Mobile learning app",
        "Integration with popular tools",
      ],
      achievements: [
        "Increased student engagement by 55%",
        "Reduced course completion time by 30%",
        "Served over 50 educational institutions",
        "Achieved 95% student satisfaction rate",
      ],
      technicalDetails: [
        {
          title: "AI Learning Paths",
          description:
            "Developed machine learning algorithm for personalized learning recommendations.",
          code: `// AI learning path generation
const generateLearningPath = async (studentProfile) => {
  const model = await tf.loadLayersModel('/models/learning-path');
  const preferences = extractLearningPreferences(studentProfile);
  const path = model.predict(tf.tensor2d([preferences]));
  return path.dataSync();
};`,
        },
        {
          title: "Real-time Collaboration",
          description:
            "Built real-time collaborative features for virtual study groups and discussions.",
          code: `// Real-time collaboration
const useCollaboration = (roomId) => {
  const [participants, setParticipants] = useState([]);
  
  useEffect(() => {
    socket.emit('join-room', roomId);
    socket.on('participant-joined', setParticipants);
    socket.on('content-updated', handleContentUpdate);
    
    return () => socket.emit('leave-room', roomId);
  }, [roomId]);
};`,
        },
      ],
      testimonials: [
        {
          name: "Prof. James Wilson",
          role: "Computer Science Professor",
          avatar: "https://randomuser.me/api/portraits/men/58.jpg",
          feedback:
            "EduConnect has revolutionized how I deliver courses. The AI recommendations help students learn more effectively, and the analytics give me insights I never had before.",
          rating: 5,
        },
      ],
    },
  ];

  // Mock statistics
  const projectStats = {
    totalProjects: projects?.length,
    liveProjects: projects?.filter((p) => p?.status === "live")?.length,
    technologiesUsed: [...new Set(projects.flatMap((p) => p.techStack))]
      ?.length,
    totalUsers: "50K+",
    avgPerformance: 92,
    clientSatisfaction: 4.7,
  };

  // Filter and sort logic
  const categories = [
    { value: "all", label: "All Projects", count: projects?.length },
    {
      value: "Web Application",
      label: "Web Apps",
      count: projects?.filter((p) => p?.category === "Web Application")?.length,
    },
    {
      value: "Enterprise Software",
      label: "Enterprise",
      count: projects?.filter((p) => p?.category === "Enterprise Software")
        ?.length,
    },
    {
      value: "FinTech",
      label: "FinTech",
      count: projects?.filter((p) => p?.category === "FinTech")?.length,
    },
    {
      value: "HealthTech",
      label: "HealthTech",
      count: projects?.filter((p) => p?.category === "HealthTech")?.length,
    },
    {
      value: "EdTech",
      label: "EdTech",
      count: projects?.filter((p) => p?.category === "EdTech")?.length,
    },
    {
      value: "Environmental Tech",
      label: "GreenTech",
      count: projects?.filter((p) => p?.category === "Environmental Tech")
        ?.length,
    },
  ];

  const technologies = [
    { value: "all", label: "All Technologies", count: projects?.length },
    {
      value: "React.js",
      label: "React.js",
      count: projects?.filter((p) => p?.techStack?.includes("React.js"))
        ?.length,
    },
    {
      value: "Node.js",
      label: "Node.js",
      count: projects?.filter((p) => p?.techStack?.includes("Node.js"))?.length,
    },
    {
      value: "TypeScript",
      label: "TypeScript",
      count: projects?.filter((p) => p?.techStack?.includes("TypeScript"))
        ?.length,
    },
    {
      value: "MongoDB",
      label: "MongoDB",
      count: projects?.filter((p) => p?.techStack?.includes("MongoDB"))?.length,
    },
    {
      value: "PostgreSQL",
      label: "PostgreSQL",
      count: projects?.filter((p) => p?.techStack?.includes("PostgreSQL"))
        ?.length,
    },
    {
      value: "AWS",
      label: "AWS",
      count: projects?.filter((p) => p?.techStack?.includes("AWS"))?.length,
    },
  ];

  const filteredProjects = projects
    ?.filter((project) => {
      const categoryMatch =
        selectedCategory === "all" || project?.category === selectedCategory;
      const techMatch =
        selectedTech === "all" || project?.techStack?.includes(selectedTech);
      const searchMatch =
        searchQuery === "" ||
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()) ||
        project?.techStack?.some((tech) =>
          tech?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        );

      return categoryMatch && techMatch && searchMatch;
    })
    ?.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return Number(b?.featured) - Number(a?.featured);
        case "impact":
          return parseInt(b?.metrics?.impact) - parseInt(a?.metrics?.impact);
        case "alphabetical":
          return a?.title?.localeCompare(b?.title);
        case "recent":
        default:
          return parseInt(b?.year) - parseInt(a?.year);
      }
    });

  const featuredProject = projects?.find((p) => p?.featured);

  const handleViewDetails = (project: React.SetStateAction<null>) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewLive = (project: { liveUrl: string | URL | undefined }) => {
    if (project?.liveUrl) {
      window.open(project?.liveUrl, "_blank");
    }
  };

  const handleViewCode = (project: { githubUrl: string | URL | undefined }) => {
    window.open(project?.githubUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects - Anup Solanki | React Developer Portfolio</title>
        <meta
          name="description"
          content="Explore my portfolio of React.js projects including Property Dollar, iManagify, and other innovative web applications. View live demos, source code, and detailed case studies."
        />
        <meta
          name="keywords"
          content="React projects, web development portfolio, JavaScript applications, frontend development, Anup Solanki projects"
        />
      </Helmet>
      <Header />

      <div className="flex ">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <>
          <div className="max-w-7xl max-h-[92vh] overflow-y-scroll mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="FolderOpen" size={32} className="text-primary" />
                <h1 className="text-4xl font-bold text-foreground">
                  projects.js
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A showcase of innovative web applications and enterprise
                solutions that drive real business results. Each project
                represents a unique challenge solved with modern React
                architecture and cutting-edge technologies.
              </p>

              {/* Quick Stats */}
              <div className="flex items-center justify-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {projectStats?.totalProjects}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">
                    {projectStats?.liveProjects}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Live Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    {projectStats?.technologiesUsed}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">
                    {projectStats?.totalUsers}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Users Impacted
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="X" size={16} />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Project Statistics */}
            <ProjectStats stats={projectStats} />

            {/* Featured Project */}
            {featuredProject && (
              <FeaturedProject
                project={featuredProject}
                onViewDetails={handleViewDetails}
              />
            )}

            {/* Filter Controls */}
            <ProjectFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              technologies={technologies}
              selectedTech={selectedTech}
              onTechChange={setSelectedTech}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {searchQuery
                    ? `Search Results for "${searchQuery}"`
                    : "All Projects"}
                </h2>
                <span className="text-sm text-muted-foreground">
                  ({filteredProjects?.length}{" "}
                  {filteredProjects?.length === 1 ? "project" : "projects"})
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
                onClick={() =>
                  window.open("https://github.com/anupsolanki", "_blank")
                }
              >
                View All on GitHub
              </Button>
            </div>

            {/* Projects Grid/List */}
            {filteredProjects?.length > 0 ? (
              <motion.div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-6"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {filteredProjects?.map((project, index) => (
                  <motion.div
                    key={project?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project={project}
                      onViewDetails={handleViewDetails}
                      onViewLive={handleViewLive}
                      onViewCode={handleViewCode}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Icon
                  name="Search"
                  size={48}
                  className="mx-auto mb-4 text-muted-foreground opacity-50"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
                <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedTech("all");
                    setSearchQuery("");
                    setSortBy("recent");
                  }}
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}

            {/* Call to Action */}
            <motion.div
              className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to build innovative solutions that drive real
                business results. I'm passionate about creating exceptional user
                experiences with modern React architecture.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() =>
                    (window.location.href = "mailto:anup.solanki@example.com")
                  }
                >
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() =>
                    window.open("https://calendly.com/anupsolanki", "_blank")
                  }
                >
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </div>
          {/* Project Modal */}
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedProject(null);
            }}
          />
        </>
      </div>
    </div>
  );
};

export default ProjectsPage;
