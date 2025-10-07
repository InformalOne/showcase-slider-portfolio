
import React, { useEffect, useRef } from 'react';
import { Code, PenTool, Layout, Terminal, BarChart } from 'lucide-react';

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
              <h3 className="text-2xl font-bold mb-3">My Skills</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center space-x-3 bg-secondary rounded-lg p-3">
                  <Code className="text-primary" size={20} />
                  <span className="font-medium">Python Programming</span>
                </div>
                <div className="flex items-center space-x-3 bg-secondary rounded-lg p-3">
                  <PenTool className="text-primary" size={20} />
                  <span className="font-medium">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3 bg-secondary rounded-lg p-3">
                  <Layout className="text-primary" size={20} />
                  <span className="font-medium">Responsive Design</span>
                </div>
                <div className="flex items-center space-x-3 bg-secondary rounded-lg p-3">
                  <Terminal className="text-primary" size={20} />
                  <span className="font-medium">Full Stack Development</span>
                </div>
                <div className="flex items-center space-x-3 bg-secondary rounded-lg p-3">
                  <BarChart className="text-primary" size={20} />
                  <span className="font-medium">Data Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
