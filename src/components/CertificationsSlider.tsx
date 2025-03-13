
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

// Dummy certification data
const certifications = [
  {
    id: 1,
    title: "Advanced UX Design",
    issuer: "Google",
    date: "February 2023",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Frontend Web Development",
    issuer: "Udacity",
    date: "October 2022",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "React Certification",
    issuer: "Meta",
    date: "July 2022",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Data Science & ML",
    issuer: "Coursera",
    date: "March 2022",
    image: "https://images.unsplash.com/photo-1669277038743-9ce16b3c8497?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "UI/UX Research Methods",
    issuer: "Nielsen Norman Group",
    date: "December 2021",
    image: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Full-Stack Development",
    issuer: "IBM",
    date: "August 2021",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop"
  },
  // Duplicate items for infinite scrolling effect
  {
    id: 7,
    title: "Advanced UX Design",
    issuer: "Google",
    date: "February 2023",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Frontend Web Development",
    issuer: "Udacity",
    date: "October 2022",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "React Certification",
    issuer: "Meta",
    date: "July 2022",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
  }
];

const CertificationsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollTimerRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    if (autoScrollTimerRef.current) {
      window.clearInterval(autoScrollTimerRef.current);
    }
    
    autoScrollTimerRef.current = window.setInterval(() => {
      if (sliderRef.current && !isPaused) {
        sliderRef.current.scrollLeft += 1;
        
        // Reset to beginning when reached end for infinite scroll effect
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 20) {
          sliderRef.current.scrollLeft = 0;
        }
        
        updateScrollButtons();
      }
    }, 20); // Smooth, slow scroll
  };

  const updateScrollButtons = () => {
    if (sliderRef.current) {
      setCanScrollLeft(sliderRef.current.scrollLeft > 0);
      setCanScrollRight(sliderRef.current.scrollLeft < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
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

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      startAutoScroll();
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', updateScrollButtons);
      }
      if (autoScrollTimerRef.current) {
        window.clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isPaused]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-20 md:py-32 overflow-hidden appear-animate">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="appear-animate">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Credentials
            </span>
          </div>
          <h2 className="section-title appear-animate">My Certifications</h2>
          <p className="section-subtitle appear-animate">
            A collection of professional certifications that highlight my expertise and continuous learning journey.
          </p>
        </div>

        <div className="relative"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          {/* Navigation buttons */}
          <button 
            onClick={scrollLeft} 
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md transition-opacity",
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={scrollRight} 
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md transition-opacity",
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto space-x-6 py-8 px-2 custom-scrollbar-hide scroll-smooth horizontal-slider-mask"
          >
            {certifications.map((cert, index) => (
              <div 
                key={cert.id}
                className="flex-none w-72 appear-animate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="certification-card group">
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold">{cert.title}</h3>
                      <Award size={18} className="text-primary flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
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

export default CertificationsSlider;
