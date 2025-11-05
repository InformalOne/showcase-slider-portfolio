
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Custom smooth scroll function matching Navbar functionality
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('/#')) {
      const targetId = href.substring(2); // Remove '/#' prefix
      const element = document.getElementById(targetId);
      if (element) {
        // Slower animation (doubled duration)
        const startPosition = window.pageYOffset;
        const targetPosition = element.offsetTop - 80;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Increased duration for slower scroll
        let start: number | null = null;
        
        // Custom animation function for smoother scrolling
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          
          // Easing function for smoother movement
          const easeInOutCubic = (t: number) => 
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          
          window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));
          
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container-tight py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              <span className="text-primary">Portfolio</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-md">
              A showcase of my work, skills, and professional journey.
              I'm passionate about creating beautiful, functional digital experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors" onClick={handleNavLinkClick}>
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-muted-foreground hover:text-primary transition-colors" onClick={handleNavLinkClick}>
                  Skills
                </a>
              </li>
              <li>
                <a href="/#certifications" className="text-muted-foreground hover:text-primary transition-colors" onClick={handleNavLinkClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/#education" className="text-muted-foreground hover:text-primary transition-colors" onClick={handleNavLinkClick}>
                  Expertise
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors" onClick={handleNavLinkClick}>
                  Education
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.linkedin.com/in/sanjay-s-33bbb71bb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/InformalOne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
             
              <li>
                <a 
                  href="https://x.com/Informal_one" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              
               <li>
                <a 
                  href="https://www.youtube.com/@formalinfinity2117" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Youtube
                </a>
              </li>

            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-border hover:bg-primary hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
