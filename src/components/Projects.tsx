
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [randomHighlight, setRandomHighlight] = useState<number | null>(null);
  
  // Random project highlight effect
  useEffect(() => {
    const highlightInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      setRandomHighlight(projects[randomIndex].id);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setRandomHighlight(null);
      }, 3000);
    }, 5000);
    
    return () => {
      clearInterval(highlightInterval);
    };
  }, []);

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
          <div className="appear-animate opacity-100">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
          </div>
          <h2 className="section-title appear-animate opacity-100">Featured Projects</h2>
          <p className="section-subtitle appear-animate opacity-100">
            A selection of my recent work, showcasing my skills in design, development, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="appear-animate opacity-100"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={cn(
                "project-card group h-full flex flex-col transition-all duration-500",
                randomHighlight === project.id 
                  ? "border-primary border-2 bg-primary/5 shadow-lg shadow-primary/30" 
                  : ""
              )}>
                <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg">
                  {/* Use real project images; fall back to one of the supplied images if missing */}
                  {/**
                   * Fallbacks order: project.image -> crop.png -> globe.png -> meet.png -> hand_gesture.png -> plant.png -> seat.png
                   */}
                  <img
                    src={
                      project.image ||
                      '/crop.png' ||
                      '/globe.png' ||
                      '/meet.png' ||
                      '/hand_gesture.png' ||
                      '/plant.png' ||
                      '/seat.png'
                    }
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-opacity duration-300",
                      activeProject === project.id ? "opacity-100" : "group-hover:opacity-100"
                    )}
                  >
                    <div className="flex space-x-4 relative z-10">
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
                      {project.links.video && (
                        <a 
                          href={project.links.video} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                          aria-label="Watch project video"
                        >
                          <Video size={18} className="text-primary" />
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
