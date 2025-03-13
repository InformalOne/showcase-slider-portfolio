
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { projects } from '@/data/projects'; // We'll create this data file

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projects.find(p => p.id === Number(id));
    if (foundProject) {
      setProject(foundProject);
      // Set page title
      document.title = `${foundProject.title} | Portfolio`;
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-tight">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all projects
          </Link>
          
          {/* Hero section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-medium"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80 transition-colors text-sm font-medium"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </a>
              )}
              {project.links.live && (
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
          
          {/* Project image */}
          <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Project details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground mb-6">
                {project.longDescription || "This project focused on creating an innovative solution that addresses real-world challenges. Utilizing modern technologies and design principles, this application demonstrates a comprehensive approach to problem-solving in the digital space."}
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Challenge & Solution</h2>
              <p className="text-muted-foreground mb-6">
                {project.challenge || "The main challenge was to create an intuitive, responsive interface that could handle complex data visualization while maintaining excellent performance across all devices. By implementing a modular architecture and optimizing critical rendering paths, we achieved both functionality and speed."}
              </p>
              
              {project.features && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-6">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            {/* Project meta information */}
            <div className="bg-secondary/50 p-6 rounded-xl h-fit">
              <h3 className="text-lg font-semibold mb-4">Project Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Project Type</h4>
                  <p>{project.type || "Web Application"}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Timeline</h4>
                  <p className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {project.timeline || "3 months, 2023"}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies ? (
                      project.technologies.map((tech: string, index: number) => (
                        <span key={index} className="inline-block px-2 py-1 bg-secondary rounded-md text-xs">
                          {tech}
                        </span>
                      ))
                    ) : (
                      project.tags.map((tag: string, index: number) => (
                        <span key={index} className="inline-block px-2 py-1 bg-secondary rounded-md text-xs">
                          {tag}
                        </span>
                      ))
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">My Role</h4>
                  <p>{project.role || "Lead Developer & Designer"}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation between projects */}
          <div className="border-t border-border pt-8 mt-12">
            <div className="flex justify-between">
              {Number(id) > 1 ? (
                <Link 
                  to={`/project/${Number(id) - 1}`} 
                  className="inline-flex items-center text-sm hover:text-primary transition-colors"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Previous Project
                </Link>
              ) : (
                <div></div>
              )}
              
              {Number(id) < projects.length ? (
                <Link 
                  to={`/project/${Number(id) + 1}`} 
                  className="inline-flex items-center text-sm hover:text-primary transition-colors"
                >
                  Next Project
                  <ArrowLeft size={16} className="ml-2 rotate-180" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
