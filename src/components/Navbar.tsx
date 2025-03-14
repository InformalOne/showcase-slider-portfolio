
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll function with even slower animation
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const targetId = href.substring(1);
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
        
        // Close mobile menu if open
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container-tight flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="text-primary">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="navlink" onClick={handleNavLinkClick}>About</a>
          <a href="#projects" className="navlink" onClick={handleNavLinkClick}>Projects</a>
          <a href="#certifications" className="navlink" onClick={handleNavLinkClick}>Certifications</a>
          <a href="#education" className="navlink" onClick={handleNavLinkClick}>Education</a>
          <a href="#contact" className="navlink" onClick={handleNavLinkClick}>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 rounded-full bg-secondary/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white flex flex-col pt-20 pb-6 px-4 space-y-6 transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <a 
          href="#about" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={handleNavLinkClick}
        >
          About
        </a>
        <a 
          href="#projects" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={handleNavLinkClick}
        >
          Projects
        </a>
        <a 
          href="#certifications" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={handleNavLinkClick}
        >
          Certifications
        </a>
        <a 
          href="#education" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={handleNavLinkClick}
        >
          Education
        </a>
        <a 
          href="#contact" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={handleNavLinkClick}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
