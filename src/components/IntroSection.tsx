
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Users, Briefcase, Trophy } from 'lucide-react';

const IntroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activePaper, setActivePaper] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [welcomeText, setWelcomeText] = useState('Welcome to my portfolio');
  const scanRef = useRef<NodeJS.Timeout | null>(null);
  const textTransitionRef = useRef<NodeJS.Timeout | null>(null);
  
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
      // Start the scanning animation - slower pace
      scanRef.current = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            return 0; // Reset to start a new scan cycle
          }
          return prev + 0.5; // Slower speed
        });
      }, 50);
      
      // Text transition after 3 seconds
      textTransitionRef.current = setTimeout(() => {
        setWelcomeText('Scroll down to begin');
      }, 3000);
      
      return () => {
        if (scanRef.current) clearInterval(scanRef.current);
        if (textTransitionRef.current) clearTimeout(textTransitionRef.current);
      };
    }
  }, [activePaper]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll with even slower animation
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 pb-0">
      {/* Printer image and container - made bigger and fully fills the section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Main printer body - enlarged to fill section */}
        <div className="relative w-full max-w-5xl aspect-[4/3] mx-auto bg-[#e8e8e8] rounded-3xl shadow-2xl overflow-hidden">
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
          
          {/* Scanner glass with enhanced graphics */}
          <div className="absolute inset-x-0 top-0 h-3/4 m-8 bg-gray-800/30 rounded-2xl overflow-hidden">
            {/* A4 paper with enhanced grid and scanning effect */}
            <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center overflow-hidden">
              {/* Enhanced grid overlay with more visible lines */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              {/* Blue scanning animation - slower and more visible */}
              <div 
                className="absolute inset-x-0 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
                style={{ 
                  top: `${scanProgress - 20}%`,
                  opacity: activePaper ? 0.8 : 0,
                  transition: 'top 0.2s linear, opacity 0.5s ease',
                  height: '20%'
                }}
              ></div>
              
              {/* Welcome text with transition effect */}
              <div className="text-4xl font-bold text-gray-800 z-10 transition-opacity duration-500">
                {welcomeText}
              </div>
            </div>
            
            {/* Scanner light animation */}
            <div 
              className={`absolute inset-x-0 h-4 bg-blue-400/50 top-0 transform ${
                scrolled ? 'animate-ping' : ''
              }`}
            ></div>
          </div>
          
          {/* Simplified printer control panel with only three buttons */}
          <div className="absolute top-5 right-5 bottom-5 w-24 bg-[#626670] rounded-lg shadow-inner p-2 flex flex-col items-center justify-between">
            {/* Screen */}
            <div className="w-full h-12 bg-gray-200 mb-4 rounded flex items-center justify-center text-xs text-gray-700 font-semibold">
              PORTFOLIO
            </div>
            
            {/* Navigation buttons with enhanced colors - only three buttons */}
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
            </div>
            
            {/* Bottom rectangular buttons with rounded edges */}
            <div className="flex flex-col space-y-2 w-full">
              <button 
                className="w-full h-8 bg-[#22C55E] rounded-full text-white text-xs font-semibold"
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
              <button 
                className="w-full h-8 bg-[#EF4444] rounded-full text-white text-xs font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Paper output slot */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-[#d9d9d9] rounded-t-lg shadow-inner"></div>
        </div>

        {/* Brand names on printer */}
        <div className="absolute bottom-10 left-8 text-xs text-gray-500">PORTFOLIO PRO</div>
        <div className="absolute bottom-10 right-32 text-xs text-gray-500">TechSoScan 2000</div>
      </div>
    </section>
  );
};

export default IntroSection;
