
export const projects = [
  {
    id: 1,
    title: "Seatsync",
    description: "An application that helps organizations to acknowledge the availablibilty of team mates and schedules of other employees.",
    longDescription: "This comprehensive redesign project focused on improving the customer journey from discovery to checkout. By conducting extensive user research and implementing data-driven design decisions, we were able to increase team engagement, team work  and attendance rates by 48% and reduce traffic at workplace by 15%.",
    image: "/seat.png",
    detailImage: "/Business team discusses project.json",
    isLottie: true,
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
      // video: "https://example.com/video/seatsync"
    }
  },
  {
    id: 2,
    title: "Crisis Jounralist AI",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
    longDescription: "This financial dashboard provides users with a comprehensive view of their financial health through intuitive visualizations and real-time data analysis. The application enables users to track investments, monitor spending patterns, and receive personalized financial insights.",
    image: "/globe.png",
    detailImage: "/Man and robot with computers sitting together in workplace.json",
    isLottie: true,
    tags: ["React", "D3.js", "Tailwind CSS", "API Integration"],
  technologies: [
    "React",
    "FastAPI",
    "AWS Bedrock",
    "AWS Lambda",
    "DynamoDB",
    "S3",
    "Amplify",
    "GSAP",
    "AgentCore",
    "AWS Polly"
  ],
  challenge: "Designing a real-time, multi-agent AI workflow capable of validating and generating accurate crisis information while maintaining speed, reliability, and trustworthiness. Ensuring data integrity, mitigating model bias, and building a responsive UI that meets newsroom-grade standards were key challenges.",
  features: [
    "AI-verified news generation using Bedrock Claude models",
    "Multi-agent orchestration for ingestion, validation, summarization, and media creation",
    "Real-time data ingestion from verified global APIs",
    "Dynamic prompt templates stored in S3 with version control",
    "Automated generation of short videos and social media captions",
    "Secure user authentication with individualized dashboards via FastAPI",
    "Scalable CI/CD pipeline with AWS Amplify and Lambda"
  ],
  timeline: "October 2025",
  role: "Lead AI Engineer & Full-Stack Developer",
  type: "Cloud-Native Web Application",
    links: {
      live: "https://main.d1gbvovx2pgfa8.amplifyapp.com",
      video: "https://vimeo.com/1129615449?fl=pl&fe=vl"
    }
  },
  {
    id: 3,
    title: "Meet AI",
    description: "A productivity application with collaborative features, notifications, and progress tracking.",
    longDescription: "This task management application was designed to enhance team productivity by providing a centralized platform for task assignment, progress tracking, and collaboration. The system includes intelligent task prioritization and integrates with existing calendar and email systems.",
    image: "/meet.png",
    detailImage: "/Man Working on Laptop in Office.json",
    isLottie: true,
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
      // live: "https://example.com",
      github: "https://github.com",
      video: "https://example.com/video/meet-ai"
    }
  },
  {
    id: 4,
    title: "Piano Notes",
    description: "An AI-powered music recognition app that converts piano-playing videos into readable musical notes in real time.",
    longDescription: "Piano Notes is a deep learning-based application that translates visual piano performances into structured musical notation. The system processes uploaded videos showing piano keys being played, detects falling bars or keypress movements, and converts them into corresponding note sequences (C, D, E, F, G, A, B). Using computer vision and sequence modeling, it bridges the gap between video-based piano learning and sheet music generation, helping learners and creators visualize their music in an interpretable format.",
    image: "/pianp-eall.jpeg",
    detailImage: "/pianp-eall.jpeg",
  tags: ["Deep Learning", "Computer Vision", "Audio Processing", "React"],
  technologies: [
    "Python",
    "OpenCV",
    "TensorFlow",
    "FastAPI",
    "React",
    "Tailwind CSS",
    "Vite"
  ],
  challenge: "Developing an accurate system capable of detecting piano key movements and converting them into musical notes across varying lighting conditions, hand positions, and video qualities. Ensuring temporal synchronization between visual keypresses and generated notes was a major technical challenge.",
  features: [
    "Video upload and frame-wise piano key detection",
    "Automatic note extraction from falling-bar piano videos",
    "Support for multiple video formats and real-time processing",
    "Interactive visual playback of detected notes",
    "Integration with AI models for keypress and timing detection",
    "Clean, responsive interface built with React and Tailwind CSS"
  ],
  timeline: "In Progress",
  role: "ML Researcher & Full-Stack Developer",
  type: "Deep Learning Application",
    links: {
      // live: "https://example.com",
      // github: "https://github.com",
      // video: "https://example.com/video/todos"
    }
  },
  {
    id: 5,
    title: "Hand Gesture Recognition",
    description: "An AI-driven system that recognizes real-time hand gestures using MediaPipe and Python to control system and OS-level operations seamlessly.",
    longDescription: "Hand Gesture Recognition is a computer vision-based AI project designed to interpret and map human hand movements to digital commands. Using MediaPipe for precise hand landmark detection and TensorFlow for gesture classification, the system enables users to perform OS operations such as volume control, media playbook, and window navigation through intuitive gestures. The goal was to create a touchless interaction interface that enhances accessibility, efficiency, and user experience in human-computer interaction.",
    image: "/hand_gesture.png",
    detailImage: "/hand-wall.png",
   tags: ["Computer Vision", "AI Interaction", "MediaPipe", "Gesture Control"],
  technologies: [
    "Python",
    "MediaPipe",
    "OpenCV",
    "TensorFlow",
    "PyAutoGUI",
    "FastAPI",
    "React"
  ],
  challenge: "Designing a robust gesture recognition model capable of accurately detecting hand poses under varying lighting conditions, backgrounds, and camera angles. Ensuring minimal latency between gesture detection and execution of OS-level actions was critical to achieving a natural user experience.",
  features: [
    "Real-time hand tracking using MediaPipe",
    "Gesture-based system and media control (volume, brightness, playback)",
    "Dynamic gesture classification using TensorFlow models",
    "Cross-platform integration with OS-level commands via PyAutoGUI",
    "Fast and lightweight execution optimized for CPU performance",
    "Interactive frontend visualization with React for live gesture feedback"
  ],
  timeline: "December 2023",
  role: "Computer Vision Engineer & Developer",
  type: "AI Interaction System",
    links: {
      // live: "https://example.com",
      github: "https://github.com",
      // video: "https://example.com/video/hand-gesture"
    }
  },
  {
    id: 6,
    title: "Crop Disease Prediction",
    description: "An AI-powered system that detects and classifies crop diseases from leaf images using deep learning models for smarter agricultural insights.",
  longDescription: "Crop Disease Prediction is a deep learning-based application built to assist farmers and agricultural researchers in early disease detection and prevention. By leveraging image classification techniques with convolutional neural networks (CNNs), the system analyzes plant leaf images to accurately identify disease types and suggest preventive measures. The project integrates a scalable backend for storing crop image data and real-time inference through an API service, empowering users with rapid and accessible plant health diagnostics.",
  image: "/plant.png",
  detailImage: "/agri.png",
  tags: ["Deep Learning", "Computer Vision", "Agriculture AI", "Sustainability"],
  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "FastAPI",
    "React",
    "Tailwind CSS",
    "AWS S3"
  ],
  challenge: "Developing a high-accuracy image classification model capable of handling diverse lighting conditions, backgrounds, and crop species. Ensuring the model’s scalability and efficiency for real-time predictions on large datasets was a major technical challenge.",
  features: [
    "Leaf image upload and real-time disease prediction",
    "CNN-based image classification with TensorFlow/Keras",
    "Detailed disease insights and prevention suggestions",
    "Interactive dashboard for monitoring crop health trends",
    "Integration with FastAPI for serving ML models at scale",
    "Responsive frontend visualization using React and Tailwind CSS"
  ],
  timeline: "June - September 2025",
  role: "Machine Learning Engineer & Researcher",
  type: "Deep Learning Project",
    links: {
      // live: "https://example.com",
      // github: "https://github.com",
      // video: "https://example.com/video/crop-disease"
    }
  }
];
