
export const projects = [
  {
    id: 1,
    title: "Seatsync",
    description: "An application that helps organizations to acknowledge the availablibilty of team mates and schedules of other employees.",
    longDescription: "This comprehensive redesign project focused on improving the customer journey from discovery to checkout. By conducting extensive user research and implementing data-driven design decisions, we were able to increase team engagement, team work  and attendance rates by 48% and reduce traffic at workplace by 15%.",
    image: "/seat.png",
    tags: ["UX Design", "UI", "Figma", "Prototyping", "Saas", "FullStack"],
    technologies: ["React", "Figma", "Mongo DB", "CSS", "User Testing", "Python", "Fastapi", "Rest API's", "webhooks"],
    challenge: "The organization faced difficulties in coordinating employee schedules and tracking team availability. The existing tools lacked real-time visibility, causing overlapping meetings, miscommunication, and reduced productivity. The challenge was to create a centralized, user-friendly platform to streamline team scheduling and enhance collaboration.",
    features: [
      "Real-time visibility of teammate availability and work status",
      "Interactive team calendar with color-coded schedules",
      "Smart conflict detection and meeting overlap alerts",
      "Role-based access control for managers and employees",
      "Seamless integration with Google Calendar and Outlook",
      "Automated reminders and attendance tracking",
      "Analytics dashboard to monitor team engagement and availability trends"
    ],
    timeline: "July - August 2025",
    role: "Full Stack Developer",
    type: "Saas Application",
    links: {
      live: "https://landingpage-xi-mocha.vercel.app",
      video: "https://example.com/video/seatsync"
    }
  },
  {
    id: 2,
    title: "Crisis Jounralist AI",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
    longDescription: "This financial dashboard provides users with a comprehensive view of their financial health through intuitive visualizations and real-time data analysis. The application enables users to track investments, monitor spending patterns, and receive personalized financial insights.",
    image: "/globe.png",
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
    timeline: "October 2025",
    role: "Full-stack Developer",
    type: "Web Application",
    links: {
      live: "main.d1gbvovx2pgfa8.amplifyapp.com",
      video: "https://example.com/video/crisis-ai"
    }
  },
  {
    id: 3,
    title: "Meet AI",
    description: "A productivity application with collaborative features, notifications, and progress tracking.",
    longDescription: "This task management application was designed to enhance team productivity by providing a centralized platform for task assignment, progress tracking, and collaboration. The system includes intelligent task prioritization and integrates with existing calendar and email systems.",
    image: "/meet.png",
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
      github: "https://github.com",
      video: "https://example.com/video/meet-ai"
    }
  },
  {
    id: 4,
    title: "Todos App",
    description: "A personal portfolio website showcasing projects, skills, and professional journey.",
    longDescription: "This portfolio was designed as a creative showcase of professional work and skills. With a focus on visual appeal and performance optimization, the site provides visitors with an engaging experience while effectively communicating professional capabilities.",
    image: "/hand_gesture.png",
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
      github: "https://github.com",
      video: "https://example.com/video/todos"
    }
  },
  {
    id: 5,
    title: "Hand Gesture Recognition",
    description: "An application that leverages AI to help users generate and optimize content for various platforms.",
    longDescription: "This innovative tool uses advanced natural language processing to assist content creators in generating, editing, and optimizing written content for different platforms. The application includes sentiment analysis, readability scoring, and SEO recommendations.",
    image: "/crop.png",
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
      github: "https://github.com",
      video: "https://example.com/video/hand-gesture"
    }
  },
  {
    id: 6,
    title: "Crop Disease Prediction",
    description: "A comprehensive application for tracking fitness goals, nutrition, and overall wellness metrics.",
    longDescription: "This health and fitness application provides users with a holistic approach to tracking their wellness journey. By combining activity monitoring, nutrition logging, and sleep analysis, the app gives users comprehensive insights into their health patterns.",
    image: "/plant.png",
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
      github: "https://github.com",
      video: "https://example.com/video/crop-disease"
    }
  }
];
