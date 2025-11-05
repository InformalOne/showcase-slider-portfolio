
import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import styles from './WorkExperience.module.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Ensure ScrollTrigger refreshes on window resize
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}

// Dummy work experience data
const experiences = [
  {
    id: 1,
    position: "Machine Learning Engineer",
    company: "goML pvt ltd.",
    location: "NewYork, USA",
    duration: "2024 - Present",
    description: "Leading the development of generative AI models for content creation and image synthesis. Implemented transformer-based architecture that improved output quality by 35%.",
    responsibilities: [
      "Template Generation with respect to personalized documents",
      "Created Hyper-personalized Marketing Collateral Generation Interface",
      "Finetuning LLM's and Automating data processing workflows to boost ROI by 60% with AI-Driven Marketing Collateral"
    ]
  },
  {
    id: 2,
    position: "Machine Learning Engineer Intern",
    company: "goML pvt ltd.",
    location: "NewYork, USA",
    duration: "2023 - 2024",
    description: "Developed and deployed machine learning models for natural language processing and computer vision applications. Created a recommendation system that increased user engagement by 28%.",
    responsibilities: [
      "Built end-to-end ML and RAG pipelines from data preprocessing to model deployment",
      "Created Hyper-personalized Marketing Collateral Generation Interface",
      "Automating data processing workflows to boost ROI by 60% with AI-Driven Marketing Collateral"
    ]
  },
  {
    id: 3,
    position: "Web Development Intern",
    company: "Ceiyone",
    location: "TN, India",
    duration: "2022",
    description: "Developed responsive websites using HTML, CSS, and JavaScript while learning fundamental web development concepts. Collaborated with senior developers to implement client requirements.",
    responsibilities: [
    "Building and maintaining responsive web pages using HTML5, CSS3, and JavaScript",
    "Implementing front-end functionality and user interface components",
    "Testing website performance and fixing bugs across different browsers",
    "Learning and applying web development best practices under senior guidance"
    ]
  }
];

const WorkExperience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const spiralPathRef = useRef<SVGPathElement>(null);
  const blueLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing ScrollTriggers first
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Animate the blue light along the spiral path on scroll
      if (spiralPathRef.current && blueLightRef.current && sectionRef.current) {
        // Set initial position at the start of the path
        gsap.set(blueLightRef.current, {
          xPercent: -50,
          yPercent: -50,
        });

        // Create the scroll-triggered animation
        const scrollAnimation = gsap.to(blueLightRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
            markers: false, // Set to true for debugging
            refreshPriority: -1,
            invalidateOnRefresh: true,
          },
          motionPath: {
            path: spiralPathRef.current,
            align: spiralPathRef.current,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0,
            end: 1,
          },
          ease: 'none',
          duration: 1,
        });

        // Refresh ScrollTrigger after a short delay to ensure everything is ready
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
      }
    }, 100);

    // Original intersection observer for other animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.appear-animate');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('is-visible');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Blue light that follows the spiral */}
      <div 
        ref={blueLightRef}
        className="absolute w-6 h-6 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 1) 0%, rgba(59, 130, 246, 0.8) 30%, rgba(96, 165, 250, 0.4) 60%, transparent 100%)',
          boxShadow: '0 0 30px 15px rgba(59, 130, 246, 0.6), 0 0 60px 30px rgba(96, 165, 250, 0.3), inset 0 0 10px rgba(147, 197, 253, 0.8)',
          filter: 'blur(1px)',
          zIndex: 50,
          willChange: 'transform',
        }}
      >
        <div 
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="appear-animate">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Experience
            </span>
          </div>
          <h2 className="section-title appear-animate">Work Experience</h2>
          <p className="section-subtitle appear-animate">
            My professional journey and contributions in the field of machine learning and AI.
          </p>
        </div>

        {/* Wrapper for experiences with DNA spiral - flex layout */}
        <div className="relative flex gap-8">
          {/* Left side: DNA Spiral reserved space */}
          <div className="hidden lg:block w-80 flex-shrink-0 relative" style={{ perspective: '1200px', minHeight: '100%' }}>
            {/* SVG Timeline with DNA-like Spiral - 3D perspective */}
            <svg 
              className="absolute left-0 top-0 pointer-events-none" 
              style={{ 
                width: '320px', 
                height: '100%',
                minHeight: '100%',
                zIndex: 1,
                transform: 'rotateY(-15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
              }}
              viewBox="0 0 320 1200"
              preserveAspectRatio="xMinYMin meet"
            >
          {/* Glow effect background */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="spiralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: 'rgb(37, 99, 235)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(29, 78, 216)', stopOpacity: 0.7 }} />
            </linearGradient>
            <linearGradient id="spiralGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(96, 165, 250)', stopOpacity: 0.7 }} />
              <stop offset="50%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(37, 99, 235)', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>

          {/* Main DNA-like spiral path - LEFT STRAND - Crisscross pattern */}
          <path
            ref={spiralPathRef}
            className={styles['dna-spiral']}
            d="M 60 20 
               L 140 80
               L 60 140
               L 140 200
               L 60 260
               L 140 320
               L 60 380
               L 140 440
               L 60 500
               L 140 560
               L 60 620
               L 140 680
               L 60 740
               L 140 800
               L 60 860
               L 140 920
               L 60 980
               L 140 1040
               L 60 1100
               L 140 1160
               L 60 1180"
            stroke="url(#spiralGradient1)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Secondary strand - RIGHT STRAND - Crisscross opposite */}
          <path
            className={styles['dna-spiral']}
            d="M 140 20
               L 60 80
               L 140 140
               L 60 200
               L 140 260
               L 60 320
               L 140 380
               L 60 440
               L 140 500
               L 60 560
               L 140 620
               L 60 680
               L 140 740
               L 60 800
               L 140 860
               L 60 920
               L 140 980
               L 60 1040
               L 140 1100
               L 60 1160
               L 140 1180"
            stroke="url(#spiralGradient2)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Connecting bridges - MORE LINES between strands with 0.5 opacity */}
          {Array.from({ length: 30 }, (_, i) => {
            const y = 40 + (i * 40);
            const progress = i / 29;
            
            // Calculate X positions for crisscross effect
            const leftStrand = 60 + (Math.floor(i / 1.5) % 2 === 0 ? 0 : 80);
            const rightStrand = 140 - (Math.floor(i / 1.5) % 2 === 0 ? 0 : 80);
            
            return (
              <g key={`bridge-${i}`} className={styles['dna-bridge']} style={{ animationDelay: `${0.3 + i * 0.04}s` }}>
                <line
                  x1={leftStrand}
                  y1={y}
                  x2={rightStrand}
                  y2={y}
                  stroke={`rgba(${59 + progress * 40}, ${130 + progress * 35}, 246, 0.5)`}
                  strokeWidth="2.5"
                />
                <circle 
                  cx={leftStrand} 
                  cy={y} 
                  r="4" 
                  fill={`rgba(37, 99, 235, ${0.5 + progress * 0.3})`}
                  filter="url(#glow)"
                />
                <circle 
                  cx={rightStrand} 
                  cy={y} 
                  r="4" 
                  fill={`rgba(29, 78, 216, ${0.5 + progress * 0.3})`}
                  filter="url(#glow)"
                />
              </g>
            );
          })}

          {/* Additional futuristic connecting lines - diagonal cross patterns */}
          {Array.from({ length: 15 }, (_, i) => {
            const y = 80 + (i * 80);
            return (
              <g key={`cross-${i}`} opacity="0.3">
                <line
                  x1="60"
                  y1={y - 20}
                  x2="140"
                  y2={y + 20}
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                />
                <line
                  x1="140"
                  y1={y - 20}
                  x2="60"
                  y2={y + 20}
                  stroke="rgba(147, 197, 253, 0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                />
              </g>
            );
          })}

        </svg>
        </div>

        {/* Right side: Experience cards */}
        <div className="flex-1">
          <div className="space-y-10 relative">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="appear-animate bg-white rounded-xl shadow-sm border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-md relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="flex flex-col md:items-start">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={16} className="mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                      <Briefcase size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <h4 className="text-lg text-primary mb-4">{exp.company}</h4>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
