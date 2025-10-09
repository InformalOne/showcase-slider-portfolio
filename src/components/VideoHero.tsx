import React, { useEffect, useRef } from 'react';
import styles from './VideoHero.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const introLoopRef = useRef<boolean>(true);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!video || !section || !container) return;

    // Set up initial video state
    video.currentTime = 0;
    video.pause();

    const setupVideoScrolling = () => {
      // Calculate total scroll distance needed for video
      const videoDuration = video.duration;
      const scrollDistance = window.innerHeight * 1.5; // Adjust scroll distance for smoother playback
      
      // Create a timeline for the video playback
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}px`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
          markers: false,
          onUpdate: (self: { progress: number, direction: number }) => {
            // Calculate video time based on scroll progress
            const targetTime = self.progress * videoDuration;
            
            // Ensure smooth playback in both directions
            const currentTime = video.currentTime;
            const diff = Math.abs(targetTime - currentTime);
            
            if (diff > 0.1) { // Only update if there's a significant difference
              video.currentTime = targetTime;
            }
          },
          onLeave: (self: { progress: number }) => {
            if (self.progress >= 0.99) {
              // Only hide when scrolling down and reaching the end
              gsap.to(section, {
                autoAlpha: 0,
                duration: 0.3,
                onComplete: () => {
                  section.style.visibility = 'hidden';
                }
              });
            }
          },
          onEnterBack: () => {
            // Make section visible again when scrolling back up
            section.style.visibility = 'visible';
            gsap.to(section, {
              autoAlpha: 1,
              duration: 0.3
            });
          }
        }
      });

      scrollTriggerRef.current = tl.scrollTrigger;
      return tl;
    };

    // Wait for video metadata to load before setting up scroll
    const handleVideoLoad = () => {
      const timeline = setupVideoScrolling();
      scrollTriggerRef.current = timeline.scrollTrigger;
    };

    video.addEventListener('loadedmetadata', handleVideoLoad);

    // Cleanup
    return () => {
      video.removeEventListener('loadedmetadata', handleVideoLoad);
      scrollTriggerRef.current?.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="video-hero"
      className={styles['video-section']}
    >
      <div 
        ref={containerRef}
        className={styles['video-container']}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className={styles.video}
        >
          <source src="/landing_vid.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className={styles['scroll-prompt']}>
        <div className={styles['scroll-box']}>
          <div className={styles['scroll-text']}>
            Scroll down to begin
          </div>
          <div className={styles['scroll-icon']}>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;