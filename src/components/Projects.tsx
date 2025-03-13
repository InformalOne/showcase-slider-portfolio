
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy project data
const projects = [
  {
    id: 1,
    title: "E-commerce UI Redesign",
    description: "A complete overhaul of an e-commerce platform with focus on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX Design", "UI", "Figma", "Prototyping"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    title: "Financial Dashboard",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["React", "D3.js", "Tailwind CSS", "API Integration"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application with collaborative features, notifications, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Mobile Development"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional journey.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 5,
    title: "AI-Powered Content Creator",
    description: "An application that leverages AI to help users generate and optimize content for various platforms.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    tags: ["Python", "Machine Learning", "Next.js", "OpenAI API"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    id: 6,
    title: "Health & Fitness Tracker",
    description: "A comprehensive application for tracking fitness goals, nutrition, and overall wellness metrics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "GraphQL", "Node.js", "MongoDB"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.appear-animate');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('is-visible');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="appear-animate">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
          </div>
          <h2 className="section-title appear-animate">Featured Projects</h2>
          <p className="section-subtitle appear-animate">
            A selection of my recent work, showcasing my skills in design, development, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="appear-animate"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-card group h-full flex flex-col">
                <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-opacity duration-300",
                      activeProject === project.id ? "opacity-90" : "group-hover:opacity-80"
                    )}
                  >
                    <div className="flex space-x-4">
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} className="text-primary" />
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                          aria-label="View GitHub repository"
                        >
                          <Github size={18} className="text-primary" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-primary font-medium text-sm group"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
