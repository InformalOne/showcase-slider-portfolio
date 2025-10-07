import React from 'react';
import Marquee from 'react-fast-marquee';
import { Award } from 'lucide-react';

const certifications = [
  { id: 1, title: "Machine Learning with Python", issuer: "Coursera", date: "May 2021", image: "/ml.png" },
  { id: 2, title: "AWS Cloud Practitioner", issuer: "Amazon Web Services Training and Certification", date: "April 2023", image: "/cloud.png" },
  { id: 3, title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services Training and Certification", date: "February 2025", image: "/ai.png" },
  { id: 4, title: "AWS Certified AI Practitioner Early Adopter", issuer: "Amazon Web Services Training and Certification", date: "February 2025", image: "/early.png" },
  { id: 5, title: "DeepLearning.AI TensorFlow Developer", issuer: "Coursera", date: "March 2025", image: "/course.png" },
  { id: 6, title: "Generative AI with Large Language Models", issuer: "Coursera", date: "March 2023", image: "/gen.png" }
];


const CertificationsSlider = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 overflow-hidden">
      <div className="container-tight text-center mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Credentials
        </span>
        <h2 className="section-title">My Certifications</h2>
        <p className="section-subtitle mx-auto text-center">
          A collection of professional certifications that highlight my expertise and continuous learning journey.
        </p>
      </div>

      <Marquee speed={50} gradient={false} pauseOnHover>
        {certifications.map((cert) => (
          <div key={cert.id} className="flex-none w-72 mx-6">
            <div className="certification-card group">
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
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
      </Marquee>
    </section>
  );
};

export default CertificationsSlider;
