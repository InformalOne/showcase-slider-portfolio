
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 500);
      const scale = Math.max(0.8, 1 - scrollY / 2000);
      const translateY = scrollY * 0.3;
      
      if (sectionRef.current) {
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="h-screen w-full fixed top-0 left-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-50px] right-[-100px] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                Machine Learning Engineer
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl mt-4 text-muted-foreground">
                Creating the future with Generative AI
              </p>
            </motion.div>
          </div>
          
          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute top-[-20px] left-[-20px] right-[-20px] bottom-[-20px] bg-gradient-to-br from-primary/30 to-blue-400/30 rounded-full blur-lg"></div>
                <div className="relative z-10 w-full h-full">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1d9bf0" />
                        <stop offset="100%" stopColor="#4b6fff" />
                      </linearGradient>
                    </defs>
                    <path 
                      fill="url(#gradient)" 
                      d="M45.4,-53.2C58.3,-42.5,68.2,-27.7,72.1,-11C76,-5.7,73.8,11.5,67.1,26.7C60.3,41.9,49,55,34.6,63.2C20.2,71.4,2.7,74.6,-14.5,71.9C-31.7,69.1,-48.6,60.4,-61.4,46.8C-74.3,33.1,-83.1,14.5,-80.9,-2.2C-78.8,-18.9,-65.8,-33.7,-51.2,-44.7C-36.7,-55.7,-20.6,-62.9,-2.8,-60.1C14.9,-57.3,32.5,-64.1,45.4,-53.2Z" 
                      transform="translate(100 100)" 
                      className="animate-morphing"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1613294326089-a01b2b450670?q=80&w=1974&auto=format&fit=crop" 
                      alt="AI visualization" 
                      className="w-3/4 h-3/4 object-cover rounded-full shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-10 left-0 bg-white p-2 rounded-lg shadow-lg flex items-center justify-center w-14 h-14"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ animationDelay: '1s' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.4 28.4" className="w-10 h-10">
                <path fill="#1d9bf0" d="M13.4,0.9c0.4-0.4,1.1-0.4,1.6,0l13,13c0.4,0.4,0.4,1.1,0,1.6l-13,13c-0.4,0.4-1.1,0.4-1.6,0 l-13-13c-0.4-0.4-0.4-1.1,0-1.6L13.4,0.9z"/>
                <path fill="#fff" d="M11.9,6.4c1.1,0.9,3.5,2.5,6.6,2.5c0.4,0,0.9,0,1.3-0.1c-0.2,0.5-0.4,1.2-0.5,1.9c-0.3,0-0.6,0.1-1,0.1 c-2.3,0-4.3-0.9-5.8-1.8c0.8,1.2,2.4,3.4,5.2,4.7c0.7,0.3,1.4,0.5,2.1,0.7c-0.2,0.5-0.4,1-0.5,1.5c-0.6-0.1-1.2-0.3-1.8-0.6 c-3.6-1.6-5.2-4.8-5.9-6.4c-0.7,1.6-2.3,4.8-5.9,6.4c-0.6,0.3-1.2,0.5-1.8,0.6c-0.1-0.5-0.3-1-0.5-1.5c0.7-0.1,1.4-0.4,2.1-0.7 c2.8-1.3,4.4-3.5,5.2-4.7c-1.5,0.9-3.5,1.8-5.8,1.8c-0.3,0-0.6,0-1-0.1c-0.1-0.6-0.3-1.3-0.5-1.9c0.4,0.1,0.9,0.1,1.3,0.1 C8.4,8.9,10.8,7.3,11.9,6.4 M14.2,2L2.8,13.4l11.4,11.4l11.4-11.4L14.2,2z"/>
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 right-0 bg-white p-2 rounded-lg shadow-lg flex items-center justify-center w-16 h-16"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-12 h-12">
                <path fill="#1d9bf0" d="M17.41,36A17.67,17.67,0,0,1,0,18.59,17.67,17.67,0,0,1,17.41,0,17.67,17.67,0,0,1,35.08,18.59,17.67,17.67,0,0,1,17.41,36Zm-2.94-14.83c-.58,0-1.16,0-1.74,0a1.25,1.25,0,0,1-1.24-.76,1.21,1.21,0,0,1,.35-1.4c.26-.23.61-.35.92-.51a18.76,18.76,0,0,0,2.61-1.52A7.85,7.85,0,0,0,17.8,13.8a5,5,0,0,0,.3-1.44c0-.31.14-.41.47-.41H19c.35,0,.47.09.5.43a5.28,5.28,0,0,0,.38,1.62A7.41,7.41,0,0,0,22.36,17a21.1,21.1,0,0,0,2.38,1.35c.36.18.74.34,1.11.53a1.22,1.22,0,0,1,.66,1.49,1.33,1.33,0,0,1-1.29.8H14.47Z"/>
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 transform -translate-y-1/2 -right-4 bg-white p-1 rounded-lg shadow-lg flex items-center justify-center w-10 h-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path fill="#1d9bf0" d="M16.5,19.5h-9V18h9V19.5z M16.5,13.5h-9V12h9V13.5z M16.5,7.5h-9V6h9V7.5z M12,24c-6.63,0-12-5.37-12-12 S5.37,0,12,0s12,5.37,12,12S18.63,24,12,24z M12,1.5C6.21,1.5,1.5,6.21,1.5,12S6.21,22.5,12,22.5S22.5,17.79,22.5,12S17.79,1.5,12,1.5z"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
