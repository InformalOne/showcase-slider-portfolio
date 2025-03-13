
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

// Dummy education data
const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    duration: "2019 - 2021",
    description: "Specialized in Human-Computer Interaction and Artificial Intelligence. Conducted research on adaptive user interfaces and published papers on interaction design patterns.",
    achievements: ["Dean's List", "Research Grant Recipient", "Teaching Assistant for Design Thinking course"]
  },
  {
    id: 2,
    degree: "Bachelor of Arts in Design",
    institution: "Rhode Island School of Design",
    location: "Providence, RI",
    duration: "2015 - 2019",
    description: "Focused on digital media design and interactive systems. Developed a thesis project on immersive digital experiences that was exhibited at the annual showcase.",
    achievements: ["Graduated with Honors", "Design Excellence Award", "Student Representative"]
  },
  {
    id: 3,
    degree: "Professional Certification in Product Management",
    institution: "Product School",
    location: "San Francisco, CA",
    duration: "2018",
    description: "Intensive program covering product strategy, roadmap planning, user research, and product analytics. Completed a capstone project involving market research and product specification.",
    achievements: ["Capstone Project Excellence", "Peer Mentor"]
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    };
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="appear-animate">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Education
            </span>
          </div>
          <h2 className="section-title appear-animate">Academic Journey</h2>
          <p className="section-subtitle appear-animate">
            My educational background that has shaped my skills, knowledge, and professional trajectory.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2 z-0"></div>

          {/* Timeline items */}
          <div className="space-y-12 relative z-10">
            {educationData.map((item, index) => (
              <div key={item.id} className="appear-animate">
                <div className={`md:flex items-stretch gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white transform -translate-x-1/2 mt-6"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start mb-4">
                        <GraduationCap className="text-primary w-6 h-6 mt-1 mr-3 md:hidden" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{item.degree}</h3>
                          <h4 className="text-lg text-foreground/80 font-medium mt-1">{item.institution}</h4>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-4 md:justify-start gap-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      {item.achievements && item.achievements.length > 0 && (
                        <div>
                          <h5 className="font-medium mb-2 flex items-center">
                            <Award size={16} className="mr-2 text-primary" />
                            Achievements
                          </h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Date for desktop */}
                  <div className="hidden md:flex md:items-center md:w-24 justify-center">
                    <div className={`rounded-lg bg-primary text-white text-sm py-1 px-3 font-medium ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                      {item.duration.split(' - ')[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
