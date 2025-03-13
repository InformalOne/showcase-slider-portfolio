
import React, { useEffect, useState } from 'react';
import { ArrowDown, Users, Briefcase, GraduationCap, Trophy, Mail } from 'lucide-react';

const IntroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activePaper, setActivePaper] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Determine if we've scrolled enough to start the printer animation
      setScrolled(scrollPosition > 10);
      
      // Show paper after scrolling a bit
      if (scrollPosition > 100 && !activePaper) {
        setActivePaper(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activePaper]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-100">
      {/* Printer image and container */}
      <div className="relative w-full max-w-3xl mx-auto px-4">
        {/* Main printer body */}
        <div className="relative w-full aspect-[4/3] bg-[#e8e8e8] rounded-3xl shadow-2xl overflow-hidden">
          {/* Printer top (scanner lid) */}
          <div 
            className={`absolute inset-0 bg-[#d2d2d2] transition-transform duration-1000 origin-bottom rounded-3xl border-b-2 border-gray-300 ${
              scrolled ? 'transform -translate-y-full' : ''
            }`}
          >
            <div className="absolute inset-x-0 bottom-10 flex justify-center">
              <div className="h-0.5 w-32 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Scanner glass */}
          <div className="absolute inset-x-0 top-0 h-3/4 m-8 bg-gray-800/30 rounded-2xl">
            {/* Scanner light animation */}
            <div 
              className={`absolute inset-x-0 h-4 bg-blue-400/50 top-0 transform ${
                scrolled ? 'animate-ping' : ''
              }`}
            ></div>
          </div>
          
          {/* Printer control panel */}
          <div className="absolute top-5 right-5 bottom-5 w-20 bg-[#626670] rounded-lg shadow-inner p-2 flex flex-col items-center justify-between">
            {/* Screen */}
            <div className="w-full h-10 bg-gray-200 mb-4 rounded"></div>
            
            {/* Navigation buttons */}
            <div className="flex flex-col space-y-4 items-center flex-grow">
              <button 
                className="printer-button bg-[#0EA5E9]" 
                onClick={() => scrollToSection('about')}
                aria-label="About section"
              >
                <Users size={20} />
              </button>
              <button 
                className="printer-button bg-[#F97316]" 
                onClick={() => scrollToSection('projects')}
                aria-label="Projects section"
              >
                <Trophy size={20} />
              </button>
              <button 
                className="printer-button bg-[#8B5CF6]" 
                onClick={() => scrollToSection('work-experience')}
                aria-label="Experience section"
              >
                <Briefcase size={20} />
              </button>
              <button 
                className="printer-button bg-[#22C55E]" 
                onClick={() => scrollToSection('education')}
                aria-label="Education section"
              >
                <GraduationCap size={20} />
              </button>
              <button 
                className="printer-button bg-[#EF4444]" 
                onClick={() => scrollToSection('contact')}
                aria-label="Contact section"
              >
                <Mail size={20} />
              </button>
            </div>
            
            {/* Bottom buttons */}
            <div className="flex flex-col space-y-2 w-full">
              <button className="w-full h-8 bg-[#22C55E] rounded-full"></button>
              <button className="w-full h-8 bg-[#EF4444] rounded-full"></button>
            </div>
          </div>
          
          {/* Paper output slot */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-[#d9d9d9] rounded-t-lg shadow-inner">
            {/* Outputting paper */}
            {activePaper && (
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[95%] bg-white shadow-md rounded-t-lg overflow-hidden paper-out">
                <div className="p-8 text-center">
                  <h1 className="text-3xl font-bold mb-4">Hello There!</h1>
                  <p className="text-gray-600">Welcome to my portfolio. Scroll down to see my work.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Brand names on printer */}
        <div className="absolute bottom-3 left-8 text-xs text-gray-500">BRAND</div>
        <div className="absolute bottom-3 right-32 text-xs text-gray-500">TechSoScan</div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse text-gray-500">
        <span className="text-sm mb-2">Scroll to Scan</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default IntroSection;
