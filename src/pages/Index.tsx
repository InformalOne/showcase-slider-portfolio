
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import IntroSection from '@/components/IntroSection';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CertificationsSlider from '@/components/CertificationsSlider';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RomeoSkills from '../components/RomeoSkills';

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Add smooth scrolling behavior for anchor links with even slower animation
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

  // Add animation styles for the content transition
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
        box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
      }
      
      /* Transition effect for content appearing */
      @keyframes content-appear {
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      
      .content-section {
        animation: content-appear 0.8s ease-out forwards;
      }
      
      /* Staggered animation delay for content sections */
      .content-section:nth-child(1) { animation-delay: 0.1s; }
      .content-section:nth-child(2) { animation-delay: 0.2s; }
      .content-section:nth-child(3) { animation-delay: 0.3s; }
      .content-section:nth-child(4) { animation-delay: 0.4s; }
      .content-section:nth-child(5) { animation-delay: 0.5s; }
      .content-section:nth-child(6) { animation-delay: 0.6s; }
      
      /* Blue scanner animation */
      @keyframes scanLine {
        0% { top: -20%; }
        100% { top: 100%; }
      }
      
      .scan-line {
        animation: scanLine 3s linear infinite;
      }
      
      /* Fix for blinking images */
      img {
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      /* Project highlight animation - stronger */
      @keyframes projectHighlight {
        0% { transform: scale(1); box-shadow: 0 0 0 rgba(59, 130, 246, 0); border-color: rgba(59, 130, 246, 0); }
        50% { transform: scale(1.02); box-shadow: 0 0 30px rgba(59, 130, 246, 0.9); border-color: rgba(59, 130, 246, 1); background-color: rgba(59, 130, 246, 0.15); }
        100% { transform: scale(1); box-shadow: 0 0 0 rgba(59, 130, 246, 0); border-color: rgba(59, 130, 246, 0); background-color: transparent; }
      }
      
      .project-highlight {
        animation: projectHighlight 4s ease-in-out;
        border-width: 3px;
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
      
      {/* Fixed animated printer as background section */}
      <IntroSection />
      
      {/* Scrollable content container - adjusted to have no gap from the printer */}
      <div 
        ref={contentRef}
        className="content-container" 
        style={{ marginTop: '0', position: 'relative', zIndex: 20 }}
      >
        <div className="w-full h-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-3xl flex justify-center items-center">
          <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        <div id="about" className="content-section">
          <About />
        </div>
        <div id="skills" className="content-section">
          <RomeoSkills />
        </div>
        <div id="projects" className="content-section">
          <Projects />
        </div>
        <div id="certifications" className="content-section">
          <CertificationsSlider />
        </div>
        <div id="work-experience" className="content-section">
          <WorkExperience />
        </div>
        <div id="education" className="content-section">
          <Education />
        </div>
        <div id="contact" className="content-section">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
