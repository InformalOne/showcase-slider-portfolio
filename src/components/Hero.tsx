
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  // Animation for elements entering the viewport
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.appear-animate');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, 200 * index);
      });
    };
    
    animateElements();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-tight py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="appear-animate">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Creating 
                <span className="text-primary"> digital</span> experiences
              </h1>
            </div>
            
            <div className="appear-animate mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                A portfolio showcasing my skills, projects, and journey in the world of design and development.
              </p>
            </div>
            
            <div className="appear-animate flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d9bf0_0%,#ffffff_50%,#1d9bf0_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                  View Projects
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 appear-animate flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl animate-float shadow-lg"></div>
              <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
