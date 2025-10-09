
import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import styles from './WorkExperience.module.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
      "Finetuning LLM's for Fintech company",
      "Template Generation with respect to personalized documents",
      "Created Hyper-personalized Marketing Collateral Generation Interface",
      "Automating data processing workflows to boost ROI by 60% with AI-Driven Marketing Collateral"
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
      "Building end-to-end ML pipelines from data preprocessing to model deployment",
      "Implementing RAG pipelines and Faq chatbot that increased user retention",
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
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const curveRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    // Initialize timeline refs array
    timelineRefs.current = timelineRefs.current.slice(0, experiences.length);
    curveRefs.current = curveRefs.current.slice(0, experiences.length);

    experiences.forEach((_, index) => {
      if (timelineRefs.current[index] && curveRefs.current[index]) {
        const path = curveRefs.current[index];
        const timelineElement = timelineRefs.current[index];
        
        gsap.to(timelineElement, {
          scrollTrigger: {
            trigger: timelineElement,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true
          },
          duration: 2,
          ease: 'power1.inOut'
        });
      }
    });

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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 overflow-hidden relative">
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

        {/* SVG Timeline */}
        <svg className="absolute left-0 w-full h-full pointer-events-none" style={{ zIndex: 0, top: '20%' }}>
          {experiences.map((_, index) => (
            <path
              key={`curve-${index}`}
              ref={ref => curveRefs.current[index] = ref}
              d={`M ${index % 2 === 0 ? '30%, 0%' : '70%, 0%'} 
                C ${index % 2 === 0 ? '70%, 33%' : '30%, 33%'} 
                  ${index % 2 === 0 ? '30%, 66%' : '70%, 66%'} 
                  ${index % 2 === 0 ? '70%, 100%' : '30%, 100%'}`}
              stroke="rgba(var(--primary-rgb), 0.2)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className={styles['timeline-path']}
            />
          ))}
        </svg>

        <div className="space-y-10 relative">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="appear-animate bg-white rounded-xl shadow-sm border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-md relative"
            >
              <div
                ref={ref => timelineRefs.current[index] = ref}
                className={`${styles['timeline-dot']} absolute w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10`}
                style={{ 
                  left: index % 2 === 0 ? '30%' : '70%',
                  top: '50%'
                }}
              />

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
    </section>
  );
};

export default WorkExperience;
