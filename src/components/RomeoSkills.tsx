import React, { useEffect, useRef } from "react";
import "./RomeoSkills.css";

/**
 * RomeoSkills
 *
 * Renders the "Skills" marquee section with continuous horizontal sliding animation.
 * Hover over the skills to pause the animation.
 *
 * Notes:
 * - Images are referenced using absolute paths under "/Romeo Portfolio_files/...".
 *   If your dev server doesn't serve them, move the `Romeo Portfolio_files` folder into `public/`.
 */

const firstColumn = [
  { src: "/images/Scikit_learn_logo_small.svg", name: "Scikit-learn", alt: "Scikit-learn" },
  { src: "/images/pandas-original.svg", name: "Pandas", alt: "Pandas" },
  { src: "/images/numpy-original.svg", name: "NumPy", alt: "NumPy" },
  { src: "/images/opencv-original.svg", name: "OpenCV", alt: "OpenCV" },
  { src: "/images/keras-original.svg", name: "Keras", alt: "Keras" },
  { src: "/images/pytorch-original.svg", name: "PyTorch", alt: "PyTorch" },
  { src: "/images/huggingface_logo-noborder.svg", name: "Hugging Face", alt: "Hugging Face" },
  { src: "/images/langchain.svg", name: "LangChain", alt: "LangChain" },
  { src: "/images/openai.svg", name: "OpenAI", alt: "OpenAI" },
  { src: "/images/anthropic.svg", name: "Anthropic", alt: "Anthropic" },
  { src: "/images/streamlit-original.svg", name: "Streamlit", alt: "Streamlit" },
  { src: "/images/gradio.svg", name: "Gradio", alt: "Gradio" },
  { src: "/images/python-original.svg", name: "Python", alt: "Python" },
  { src: "/images/tensorflow-original.svg", name: "TensorFlow", alt: "TensorFlow" },
];

const secondColumn = [
  { src: "/images/react-original.svg", name: "React", alt: "React" },
  { src: "/images/javascript-original.svg", name: "JavaScript", alt: "JavaScript" },
  { src: "/images/git-original.svg", name: "Git", alt: "Git" },
  { src: "/images/docker-original.svg", name: "Docker", alt: "Docker" },
  { src: "/images/kubernetes-plain.svg", name: "Kubernetes", alt: "Kubernetes" },
  { src: "/images/Amazon_Web_Services_Logo.svg", name: "AWS", alt: "AWS" },
  { src: "/images/googlecloud-original.svg", name: "Google Cloud", alt: "Google Cloud" },
  { src: "/images/azure-original.svg", name: "Azure", alt: "Azure" },
  { src: "/images/mongodb-original.svg", name: "MongoDB", alt: "MongoDB" },
  { src: "/images/postgresql-original.svg", name: "PostgreSQL", alt: "PostgreSQL" },
  { src: "/images/redis-original.svg", name: "Redis", alt: "Redis" },
  { src: "/images/fastapi-original.svg", name: "FastAPI", alt: "FastAPI" },
  { src: "/images/flask-original.svg", name: "Flask", alt: "Flask" },
  { src: "/images/django-plain.svg", name: "Django", alt: "Django" },
];

const thirdColumn = [
  { src: "/images/n8n-color.png", name: "n8n", alt: "n8n" },
  { src: "/images/zapier.png", name: "Zapier", alt: "Zapier" },
  { src: "/images/make-color.png", name: "Make.com", alt: "Make.com" },
  { src: "/images/ef01eadad26d827d5dafd2bd5946fb999dddcf6d-2400x2400.png", name: "Runpod", alt: "Runpod" },
  { src: "/images/retell-ai-icon-unplated.png", name: "Retell AI", alt: "Retell AI" },
  { src: "/images/portfolio-vapi.png", name: "VAPI", alt: "VAPI" },
  { src: "/images/elevenlabs.svg", name: "ElevenLabs", alt: "ElevenLabs" },
  { src: "/images/twilio_logo_icon_168416.png", name: "Twilio", alt: "Twilio" },
  { src: "/images/asterisk.png", name: "Asterisk", alt: "Asterisk" },
  { src: "/images/pinecone-icon-logo-png_seeklogo-482365.png", name: "Pinecone", alt: "Pinecone" },
  { src: "/images/faiss--logo.png", name: "FAISS", alt: "FAISS" },
  { src: "/images/expo_icon_132404.png", name: "Expo", alt: "Expo" },
  { src: "/images/deepseek.svg", name: "Deepseek", alt: "Deepseek" },
  { src: "/images/6697e68b90253f000eed3a7c_HighLevel-Logo-(PNG).png", name: "GoHiLevel", alt: "GoHiLevel" },
];

function SkillsList({ items }: { items: { src: string; name: string; alt?: string }[] }) {
  return (
    <div className="skills-list">
      {items.map((it, i) => (
        <div 
          className="skill-item" 
          key={`${it.name}-${i}`}
        >
          <div className="skill-icon">
            <img src={it.src} alt={it.alt ?? it.name} loading="lazy" />
          </div>
          <span className="skill-name">{it.name}</span>
        </div>
      ))}
    </div>
  );
}

const RomeoSkills: React.FC = () => {
  return (
    <section className="section testimonial" aria-label="Skills">
       <h2 className="section-title appear-animate opacity-100">My <span className="highlight-text">Skills</span></h2>
          <p className="section-subtitle appear-animate opacity-100">
            My technical expertise spans across cutting-edge AI/ML technologies, enabling me to deliver innovative solutions that drive business growth and digital transformation.
      </p>
      <div className="skills-container">
        <div className="skills-marquee-container">
          <div className="skills-marquee">
            <SkillsList items={firstColumn} />
            <SkillsList items={firstColumn} />
          </div>
        </div>

        <div className="skills-gap">
          <div className="border-glow-horizontal" />
        </div>

        <div className="skills-marquee-container reverse">
          <div className="skills-marquee reverse">
            <SkillsList items={secondColumn} />
            <SkillsList items={secondColumn} />
          </div>
        </div>

        <div className="skills-gap">
          <div className="border-glow-horizontal" />
        </div>

        <div className="skills-marquee-container">
          <div className="skills-marquee">
            <SkillsList items={thirdColumn} />
            <SkillsList items={thirdColumn} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RomeoSkills;