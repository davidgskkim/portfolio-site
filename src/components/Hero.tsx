import './Hero.css';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="hero-section">
      {/* Dynamic background effect element */}
      <div className="hero-bg-glow"></div>
      
      <div className="hero-content">
        <h2 className="hero-greeting">Initialize &lt;Protocol /&gt;</h2>
        <h1 className="hero-title">
          Hi, I'm <span className="accent-text gradient-glow">David Kim</span>.
        </h1>
        <p className="hero-subtitle">
          Software Engineer // High-Performance Architect.
        </p>
        <p className="hero-desc">
          Building precise, ambitious, and highly scalable systems. From technical architecture to aesthetic precision, I operate at peak efficiency. 
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', width: 'fit-content' }}>
            View Missions <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
