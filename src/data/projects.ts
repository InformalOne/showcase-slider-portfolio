
export const projects = [
  {
    id: 1,
    title: "E-commerce UI Redesign",
    description: "A complete overhaul of an e-commerce platform with focus on user experience and conversion optimization.",
    longDescription: "This comprehensive redesign project focused on improving the customer journey from discovery to checkout. By conducting extensive user research and implementing data-driven design decisions, we were able to increase conversion rates by 28% and reduce cart abandonment by 15%.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX Design", "UI", "Figma", "Prototyping"],
    technologies: ["React", "Figma", "Adobe XD", "CSS", "User Testing"],
    challenge: "The client's existing platform had an outdated interface with a complicated checkout process leading to high cart abandonment rates. The challenge was to simplify the user journey while maintaining all functionality and improving visual appeal.",
    features: [
      "Simplified checkout process reducing steps by 40%",
      "Responsive design system for consistent experience across devices",
      "Advanced filtering and search capabilities",
      "Personalized product recommendations",
      "Real-time inventory updates"
    ],
    timeline: "January - March 2023",
    role: "Lead UX Designer",
    type: "Website Redesign",
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
    longDescription: "This financial dashboard provides users with a comprehensive view of their financial health through intuitive visualizations and real-time data analysis. The application enables users to track investments, monitor spending patterns, and receive personalized financial insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["React", "D3.js", "Tailwind CSS", "API Integration"],
    technologies: ["React", "TypeScript", "D3.js", "RESTful APIs", "Tailwind CSS", "Firebase"],
    challenge: "Creating a system that could handle large datasets while maintaining performance and providing a responsive user interface. Additionally, ensuring data security and privacy was paramount for this financial application.",
    features: [
      "Real-time data visualization with customizable charts",
      "Budget tracking and forecasting",
      "Investment portfolio analysis",
      "Expense categorization with AI assistance",
      "Financial goal setting and tracking",
      "Secure authentication and data encryption"
    ],
    timeline: "April - August 2023",
    role: "Full-stack Developer",
    type: "Web Application",
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application with collaborative features, notifications, and progress tracking.",
    longDescription: "This task management application was designed to enhance team productivity by providing a centralized platform for task assignment, progress tracking, and collaboration. The system includes intelligent task prioritization and integrates with existing calendar and email systems.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Mobile Development"],
    technologies: ["React Native", "Redux", "Firebase", "Push Notifications", "Cloud Functions"],
    challenge: "Building a cross-platform mobile application that could work offline while syncing data when connectivity was restored. Additionally, creating an intuitive UI that accommodated complex team hierarchies and permission systems.",
    features: [
      "Intuitive drag-and-drop interface for task management",
      "Team collaboration with real-time updates",
      "File sharing and commenting system",
      "Custom workflow creation",
      "Detailed analytics and reporting",
      "Integration with popular productivity tools"
    ],
    timeline: "June - November 2023",
    role: "Mobile Developer & UI Designer",
    type: "Mobile Application",
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional journey.",
    longDescription: "This portfolio was designed as a creative showcase of professional work and skills. With a focus on visual appeal and performance optimization, the site provides visitors with an engaging experience while effectively communicating professional capabilities.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"],
    challenge: "Creating a unique, memorable design that would stand out while ensuring fast loading times and optimal performance across all devices. The site needed to effectively showcase diverse projects while maintaining a cohesive visual identity.",
    features: [
      "Interactive project showcase with detailed case studies",
      "Animated page transitions and scroll effects",
      "Responsive design optimized for all devices",
      "Dark/light mode toggle",
      "Contact form with validation",
      "Performance-optimized image loading"
    ],
    timeline: "December 2023",
    role: "Developer & Designer",
    type: "Personal Website",
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 5,
    title: "AI-Powered Content Creator",
    description: "An application that leverages AI to help users generate and optimize content for various platforms.",
    longDescription: "This innovative tool uses advanced natural language processing to assist content creators in generating, editing, and optimizing written content for different platforms. The application includes sentiment analysis, readability scoring, and SEO recommendations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    tags: ["Python", "Machine Learning", "Next.js", "OpenAI API"],
    technologies: ["Python", "TensorFlow", "Next.js", "OpenAI API", "MongoDB", "Node.js"],
    challenge: "Integrating multiple AI models to create a cohesive content creation tool that could understand context, maintain consistent tone, and provide meaningful suggestions across different content types and platforms.",
    features: [
      "AI-powered content generation and editing",
      "Platform-specific formatting suggestions",
      "SEO analysis and keyword optimization",
      "Tone and style customization",
      "Content performance predictions",
      "Integration with popular CMS platforms"
    ],
    timeline: "February - July 2023",
    role: "ML Engineer & Front-end Developer",
    type: "SaaS Application",
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 6,
    title: "Health & Fitness Tracker",
    description: "A comprehensive application for tracking fitness goals, nutrition, and overall wellness metrics.",
    longDescription: "This health and fitness application provides users with a holistic approach to tracking their wellness journey. By combining activity monitoring, nutrition logging, and sleep analysis, the app gives users comprehensive insights into their health patterns.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "GraphQL", "Node.js", "MongoDB"],
    technologies: ["React", "GraphQL", "Node.js", "MongoDB", "D3.js", "Wearable Device APIs"],
    challenge: "Creating a unified platform that could integrate data from multiple sources (wearable devices, user input, third-party nutrition databases) while providing actionable insights and maintaining user privacy.",
    features: [
      "Workout and activity tracking with visual progress reports",
      "Nutrition logging with macro and micronutrient analysis",
      "Sleep quality monitoring and recommendations",
      "Goal setting and achievement tracking",
      "Integration with popular fitness devices",
      "Personalized workout and meal recommendations"
    ],
    timeline: "August - December 2023",
    role: "Back-end Developer & Data Scientist",
    type: "Web & Mobile Application",
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  }
];
