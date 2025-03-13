
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
          <Link to="/#about" className="navlink">About</Link>
          <Link to="/#projects" className="navlink">Projects</Link>
          <Link to="/#certifications" className="navlink">Certifications</Link>
          <Link to="/#education" className="navlink">Education</Link>
          <Link to="/#contact" className="navlink">Contact</Link>
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
        <Link 
          to="/#about" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="/#projects" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Projects
        </Link>
        <Link 
          to="/#certifications" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Certifications
        </Link>
        <Link 
          to="/#education" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Education
        </Link>
        <Link 
          to="/#contact" 
          className="text-lg font-medium py-3 px-4 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
