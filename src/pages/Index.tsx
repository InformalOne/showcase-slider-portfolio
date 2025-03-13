
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import IntroSection from '@/components/IntroSection';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CertificationsSlider from '@/components/CertificationsSlider';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Add smooth scrolling behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.body.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Add animation styles for the morphing blob
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes morphing {
        0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
        75% { border-radius: 60% 40% 60% 30% / 60% 40% 30% 70%; }
        100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      }
      
      .animate-morphing {
        animation: morphing 15s ease-in-out infinite;
      }
      
      .animate-pulse-slow {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      .content-container {
        position: relative;
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.99);
        transform: translateZ(0);
        will-change: transform;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      {/* Fixed animated background section */}
      <IntroSection />
      
      {/* Scrollable content container */}
      <div 
        ref={contentRef}
        className="content-container" 
        style={{ marginTop: '100vh' }}
      >
        <About />
        <Projects />
        <CertificationsSlider />
        <WorkExperience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
