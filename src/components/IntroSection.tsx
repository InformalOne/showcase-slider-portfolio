
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<HTMLDivElement>(null);
  const scannerLidRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scannerRef.current || !scannerLidRef.current || !scanLineRef.current) return;
      
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.min(1, scrollY / viewportHeight);
      
      // Scanner opacity and scale reduces as we scroll
      const opacity = Math.max(0, 1 - scrollY / 500);
      const scale = Math.max(0.8, 1 - scrollY / 1500);
      
      // Scanner lid closes as we scroll
      const lidRotation = scrollProgress * 90; // 0 to 90 degrees
      
      if (sectionRef.current) {
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.transform = `scale(${scale})`;
      }
      
      if (scannerLidRef.current) {
        scannerLidRef.current.style.transform = `rotateX(${lidRotation}deg)`;
        // Change z-index to show lid on top as it closes
        scannerLidRef.current.style.zIndex = scrollProgress > 0.5 ? '10' : '1';
      }
      
      // Animate scan line on initial view
      if (scanLineRef.current && scrollY < 100) {
        scanLineRef.current.style.animation = 'scanAnimation 2s infinite alternate';
      } else if (scanLineRef.current) {
        scanLineRef.current.style.animation = 'none';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add animation styles for the scanning effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scanAnimation {
        0% { transform: translateY(0); opacity: 0.7; }
        100% { transform: translateY(100%); opacity: 0.3; }
      }
      
      .scanner-top {
        transform-origin: bottom;
        transition: transform 0.3s ease-out;
        backface-visibility: hidden;
      }
      
      .scanner-body {
        perspective: 1000px;
        transform-style: preserve-3d;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="h-screen w-full fixed top-0 left-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="scanner-container relative w-full max-w-4xl mx-auto"
        >
          {/* Scanner body */}
          <div ref={scannerRef} className="scanner-body bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg shadow-2xl relative mx-auto" style={{ width: '80%', height: '50vh' }}>
            {/* Scanner glass/bed */}
            <div className="scanner-glass absolute inset-0 m-8 bg-gradient-to-r from-blue-400/10 to-blue-300/20 rounded-md overflow-hidden">
              {/* Scanner content - ML/AI related images or text that appear to be scanned */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2 opacity-80">Machine Learning Engineer</h1>
                  <p className="text-xl md:text-2xl text-gray-600 opacity-70">Specializing in Generative AI</p>
                  
                  <div className="mt-8 flex justify-center space-x-8">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm8 13v-6m-3 3h6" />
                      </svg>
                    </div>
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scanning line effect */}
              <div 
                ref={scanLineRef} 
                className="h-4 w-full bg-gradient-to-b from-blue-400/70 to-transparent absolute top-0 left-0"
                style={{ animation: 'scanAnimation 2s infinite alternate' }}
              ></div>
            </div>
            
            {/* Scanner buttons/panel - side of scanner */}
            <div className="scanner-panel absolute -right-8 top-1/4 bg-gray-800 h-24 w-12 rounded-r-lg flex flex-col justify-center items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <div className="w-6 h-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
          
          {/* Scanner top/lid */}
          <div 
            ref={scannerLidRef} 
            className="scanner-top bg-gradient-to-b from-gray-400 to-gray-300 rounded-t-lg shadow-xl absolute mx-auto"
            style={{ 
              width: '80%', 
              height: '10vh',
              top: '-10vh',
              left: '10%',
              transformOrigin: 'bottom'
            }}
          >
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gray-500 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down to Scan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSection;
