
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CertificationsSlider from '@/components/CertificationsSlider';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
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

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CertificationsSlider />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
