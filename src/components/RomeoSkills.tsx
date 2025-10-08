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
  { src: "/Romeo Portfolio_files/Scikit_learn_logo_small.svg", name: "Scikit-learn", alt: "Scikit-learn" },
  { src: "/Romeo Portfolio_files/pandas-original.svg", name: "Pandas", alt: "Pandas" },
  { src: "/Romeo Portfolio_files/numpy-original.svg", name: "NumPy", alt: "NumPy" },
  { src: "/Romeo Portfolio_files/opencv-original.svg", name: "OpenCV", alt: "OpenCV" },
  { src: "/Romeo Portfolio_files/keras-original.svg", name: "Keras", alt: "Keras" },
  { src: "/Romeo Portfolio_files/pytorch-original.svg", name: "PyTorch", alt: "PyTorch" },
  { src: "/Romeo Portfolio_files/huggingface_logo-noborder.svg", name: "Hugging Face", alt: "Hugging Face" },
  { src: "/Romeo Portfolio_files/langchain.svg", name: "LangChain", alt: "LangChain" },
  { src: "/Romeo Portfolio_files/openai.svg", name: "OpenAI", alt: "OpenAI" },
  { src: "/Romeo Portfolio_files/anthropic.svg", name: "Anthropic", alt: "Anthropic" },
  { src: "/Romeo Portfolio_files/streamlit-original.svg", name: "Streamlit", alt: "Streamlit" },
  { src: "/Romeo Portfolio_files/gradio.svg", name: "Gradio", alt: "Gradio" },
  { src: "/Romeo Portfolio_files/python-original.svg", name: "Python", alt: "Python" },
  { src: "/Romeo Portfolio_files/tensorflow-original.svg", name: "TensorFlow", alt: "TensorFlow" },
];

const secondColumn = [
  { src: "/Romeo Portfolio_files/react-original.svg", name: "React", alt: "React" },
  { src: "/Romeo Portfolio_files/javascript-original.svg", name: "JavaScript", alt: "JavaScript" },
  { src: "/Romeo Portfolio_files/git-original.svg", name: "Git", alt: "Git" },
  { src: "/Romeo Portfolio_files/docker-original.svg", name: "Docker", alt: "Docker" },
  { src: "/Romeo Portfolio_files/kubernetes-plain.svg", name: "Kubernetes", alt: "Kubernetes" },
  { src: "/Romeo Portfolio_files/Amazon_Web_Services_Logo.svg", name: "AWS", alt: "AWS" },
  { src: "/Romeo Portfolio_files/googlecloud-original.svg", name: "Google Cloud", alt: "Google Cloud" },
  { src: "/Romeo Portfolio_files/azure-original.svg", name: "Azure", alt: "Azure" },
  { src: "/Romeo Portfolio_files/mongodb-original.svg", name: "MongoDB", alt: "MongoDB" },
  { src: "/Romeo Portfolio_files/postgresql-original.svg", name: "PostgreSQL", alt: "PostgreSQL" },
  { src: "/Romeo Portfolio_files/redis-original.svg", name: "Redis", alt: "Redis" },
  { src: "/Romeo Portfolio_files/fastapi-original.svg", name: "FastAPI", alt: "FastAPI" },
  { src: "/Romeo Portfolio_files/flask-original.svg", name: "Flask", alt: "Flask" },
  { src: "/Romeo Portfolio_files/django-plain.svg", name: "Django", alt: "Django" },
];

const thirdColumn = [
  { src: "/Romeo Portfolio_files/n8n-color.png", name: "n8n", alt: "n8n" },
  { src: "/Romeo Portfolio_files/zapier.png", name: "Zapier", alt: "Zapier" },
  { src: "/Romeo Portfolio_files/make-color.png", name: "Make.com", alt: "Make.com" },
  { src: "/Romeo Portfolio_files/ef01eadad26d827d5dafd2bd5946fb999dddcf6d-2400x2400.png", name: "Runpod", alt: "Runpod" },
  { src: "/Romeo Portfolio_files/retell-ai-icon-unplated.png", name: "Retell AI", alt: "Retell AI" },
//   { src: "/Romeo Portfolio_files/voiceflow.png", name: "Voiceflow", alt: "Voiceflow" },
  { src: "/Romeo Portfolio_files/portfolio-vapi.png", name: "VAPI", alt: "VAPI" },
  { src: "/Romeo Portfolio_files/elevenlabs.svg", name: "ElevenLabs", alt: "ElevenLabs" },
  { src: "/Romeo Portfolio_files/twilio_logo_icon_168416.png", name: "Twilio", alt: "Twilio" },
  { src: "/Romeo Portfolio_files/asterisk.png", name: "Asterisk", alt: "Asterisk" },
  { src: "/Romeo Portfolio_files/pinecone-icon-logo-png_seeklogo-482365.png", name: "Pinecone", alt: "Pinecone" },
  { src: "/Romeo Portfolio_files/faiss--logo.png", name: "FAISS", alt: "FAISS" },
  { src: "/Romeo Portfolio_files/expo_icon_132404.png", name: "Expo", alt: "Expo" },
  { src: "/Romeo Portfolio_files/deepseek.svg", name: "Deepseek", alt: "Deepseek" },
  { src: "/Romeo Portfolio_files/6697e68b90253f000eed3a7c_HighLevel-Logo-(PNG).png", name: "GoHiLevel", alt: "GoHiLevel" },
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