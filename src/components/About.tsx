
import React, { useEffect, useRef } from 'react';
import { Code, PenTool, Layout, Terminal, BarChart } from 'lucide-react';
import gsap from 'gsap';

// CSS for metallic effect
const metalStyle = {
  background: 'linear-gradient(145deg, #e6e9ef 0%, #c8cdd4 100%)',
  boxShadow: 'inset -2px -2px 6px rgba(255,255,255,.7), inset 2px 2px 6px rgba(0,0,0,.2)',
  color: '#2a2f36',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  padding: '0.75rem',
  minHeight: '2.75rem',
} as const;

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="appear-animate">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
          </div>
          <h2 className="section-title appear-animate">Who I Am</h2>
          <p className="section-subtitle appear-animate">
            An AI/ML engineer dedicated to crafting exceptional user experiences through thoughtful design and clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="appear-animate">
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl"></div>
      <img
        src="/hero.png"
        alt="About Me"
        className="w-full h-full object-cover object-top rounded-2xl p-2"
      />
    </div>
  </div>

          <div className="space-y-8">
            <div className="appear-animate">
              <h3 className="text-2xl font-bold mb-3">My Journey</h3>
              <p className="text-muted-foreground">
                I'm a Machine learning engineer and full stack developer with a passion for research in the domain of artificial intelligence. With a background in both design and development, I bring a unique perspective to every project. Having hands on expereince in practical application of Machine learning and Generative AI.
              </p>
            </div>

            <div className="appear-animate">
              <h3 className="text-2xl font-bold mb-3">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in a thoughtful, user-centered approach to design and development. Every project begins with thorough research and planning, ensuring that the end result not only looks beautiful but also solves real problems.
              </p>
            </div>

            <div className="appear-animate">
              <h3 className="text-2xl font-bold mb-3">Expertise</h3>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { icon: Code, text: "Python Programming", color: '#4A90E2' },
                  { icon: PenTool, text: "Problem Solving", color: '#50E3C2' },
                  { icon: Layout, text: "Responsive Design", color: '#F5A623' },
                  { icon: Terminal, text: "Full Stack Development", color: '#B8E986' },
                  { icon: BarChart, text: "Data Visualization", color: '#9013FE' }
                ].map((item, index) => {
                  const cardRef = useRef<HTMLDivElement>(null);
                  const shineRef = useRef<HTMLDivElement>(null);
                  const lightingRef = useRef<HTMLDivElement>(null);
                  const IconComponent = item.icon;

                  useEffect(() => {
                    const card = cardRef.current;
                    if (!card) return;

                    // Create lighting effects
                    const shine = document.createElement('div');
                    shine.className = 'absolute inset-0 opacity-0 pointer-events-none';
                    shine.style.background = 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)';
                    card.appendChild(shine);
                    shineRef.current = shine;

                    const lighting = document.createElement('div');
                    lighting.className = 'absolute inset-0 opacity-0 pointer-events-none mix-blend-overlay';
                    lighting.style.background = `linear-gradient(45deg, ${item.color}20 0%, transparent 100%)`;
                    card.appendChild(lighting);
                    lightingRef.current = lighting;

                    // GSAP animations for hover effect
                    const handleMouseMove = (e: MouseEvent) => {
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      
                      // Calculate rotation based on mouse position
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 15; // Reduced rotation
                      const rotateY = (centerX - x) / 15;

                      // Calculate light position
                      const percentX = (x / rect.width) * 100;
                      const percentY = (y / rect.height) * 100;

                      // Animate card with multiple effects
                      gsap.to(card, {
                        duration: 0.3,
                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
                        boxShadow: `
                          inset -1px -1px 4px rgba(255,255,255,.9),
                          inset 1px 1px 4px rgba(0,0,0,.3),
                          0 5px 10px rgba(0,0,0,0.1)
                        `,
                        ease: 'power2.out'
                      });

                      // Animate shine effect
                      gsap.to(shine, {
                        duration: 0.3,
                        opacity: 0.3,
                        x: x - 75, // Reduced shine size
                        y: y - 75,
                        ease: 'power2.out'
                      });

                      // Animate dynamic lighting
                      gsap.to(lighting, {
                        duration: 0.3,
                        opacity: 0.5,
                        background: `
                          radial-gradient(
                            circle at ${percentX}% ${percentY}%,
                            ${item.color}30 0%,
                            transparent 60%
                          )
                        `,
                        ease: 'power2.out'
                      });
                    };

                    const handleMouseLeave = () => {
                      gsap.to(card, {
                        duration: 0.3,
                        transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
                        boxShadow: 'inset -1px -1px 4px rgba(255,255,255,.7), inset 1px 1px 4px rgba(0,0,0,.2)',
                        ease: 'power2.out'
                      });

                      gsap.to([shine, lighting], {
                        duration: 0.3,
                        opacity: 0,
                        ease: 'power2.out'
                      });
                    };

                    card.addEventListener('mousemove', handleMouseMove);
                    card.addEventListener('mouseleave', handleMouseLeave);

                    return () => {
                      card.removeEventListener('mousemove', handleMouseMove);
                      card.removeEventListener('mouseleave', handleMouseLeave);
                      if (shine.parentNode === card) {
                        card.removeChild(shine);
                      }
                      if (lighting.parentNode === card) {
                        card.removeChild(lighting);
                      }
                    };
                  }, [item.color]);

                  return (
                    <div
                      key={index}
                      ref={cardRef}
                      className="flex items-center space-x-2 rounded-lg cursor-pointer transform transition-transform"
                      style={{
                        ...metalStyle,
                        willChange: 'transform',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <IconComponent 
                        size={16} 
                        style={{ 
                          filter: 'drop-shadow(0.5px 0.5px 0.5px rgba(0,0,0,0.2))',
                          color: item.color
                        }} 
                      />
                      <span 
                        className="font-medium text-sm" 
                        style={{ 
                          textShadow: '0.5px 0.5px 0.5px rgba(255,255,255,0.5)',
                          color: '#4a4a4a'
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
