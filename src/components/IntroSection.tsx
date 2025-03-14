
import React, { useEffect, useState } from 'react';
import { ArrowDown, Users, Briefcase, GraduationCap, Trophy, Mail } from 'lucide-react';

const IntroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activePaper, setActivePaper] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  
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

  // Scanning animation effect
  useEffect(() => {
    if (activePaper) {
      // Start the scanning animation
      const scanInterval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(scanInterval);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      
      return () => clearInterval(scanInterval);
    }
  }, [activePaper]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll with slower animation
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-100">
      {/* Printer image and container - made bigger */}
      <div className="relative w-full max-w-5xl mx-auto px-4 h-screen flex items-center justify-center">
        {/* Main printer body - enlarged */}
        <div className="relative w-full max-w-4xl aspect-[4/3] bg-[#e8e8e8] rounded-3xl shadow-2xl overflow-hidden">
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
          <div className="absolute inset-x-0 top-0 h-3/4 m-8 bg-gray-800/30 rounded-2xl overflow-hidden">
            {/* A4 paper with scanning effect */}
            <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center overflow-hidden">
              {/* Blue scanning animation */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
                style={{ 
                  top: `${scanProgress - 20}%`,
                  opacity: activePaper ? 0.6 : 0,
                  transition: 'top 0.1s linear, opacity 0.5s ease',
                  height: '20%'
                }}
              ></div>
              
              {/* Grid overlay for scanner effect */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              {/* Welcome text */}
              <div className="text-4xl font-bold text-gray-800 z-10">Welcome</div>
            </div>
            
            {/* Scanner light animation */}
            <div 
              className={`absolute inset-x-0 h-4 bg-blue-400/50 top-0 transform ${
                scrolled ? 'animate-ping' : ''
              }`}
            ></div>
          </div>
          
          {/* Printer control panel - enhanced with more vibrant colors */}
          <div className="absolute top-5 right-5 bottom-5 w-24 bg-[#626670] rounded-lg shadow-inner p-2 flex flex-col items-center justify-between">
            {/* Screen */}
            <div className="w-full h-12 bg-gray-200 mb-4 rounded flex items-center justify-center text-xs text-gray-700 font-semibold">
              PORTFOLIO
            </div>
            
            {/* Navigation buttons with enhanced colors */}
            <div className="flex flex-col space-y-6 items-center flex-grow">
              <button 
                className="printer-button bg-[#0EA5E9] hover:bg-[#0EA5E9]/80 transform hover:scale-110 transition-all duration-300" 
                onClick={() => scrollToSection('about')}
                aria-label="About section"
              >
                <Users size={20} />
              </button>
              <button 
                className="printer-button bg-[#F97316] hover:bg-[#F97316]/80 transform hover:scale-110 transition-all duration-300" 
                onClick={() => scrollToSection('projects')}
                aria-label="Projects section"
              >
                <Trophy size={20} />
              </button>
              <button 
                className="printer-button bg-[#8B5CF6] hover:bg-[#8B5CF6]/80 transform hover:scale-110 transition-all duration-300" 
                onClick={() => scrollToSection('work-experience')}
                aria-label="Experience section"
              >
                <Briefcase size={20} />
              </button>
              <button 
                className="printer-button bg-[#22C55E] hover:bg-[#22C55E]/80 transform hover:scale-110 transition-all duration-300" 
                onClick={() => scrollToSection('education')}
                aria-label="Education section"
              >
                <GraduationCap size={20} />
              </button>
              <button 
                className="printer-button bg-[#EF4444] hover:bg-[#EF4444]/80 transform hover:scale-110 transition-all duration-300" 
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
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-[#d9d9d9] rounded-t-lg shadow-inner"></div>
        </div>

        {/* Brand names on printer */}
        <div className="absolute bottom-10 left-8 text-xs text-gray-500">BRAND</div>
        <div className="absolute bottom-10 right-32 text-xs text-gray-500">TechSoScan</div>
      </div>
    </section>
  );
};

export default IntroSection;
