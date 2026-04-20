import './About.css';
import { Target, Zap, Activity } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">Core Directives</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="buckets-grid">
        <div className="bucket-card sharp-card">
          <div className="bucket-icon">
            <Target size={32} />
          </div>
          <h3 className="bucket-title">Professional</h3>
          <p className="bucket-desc">
            Laser-focused on software engineering, AI architecture, and intense structural discipline. Currently engineering intelligent agent pipelines.
          </p>
        </div>

        <div className="bucket-card sharp-card">
          <div className="bucket-icon" style={{color: "var(--text-primary)"}}>
            <Zap size={32} />
          </div>
          <h3 className="bucket-title">Spiritual</h3>
          <p className="bucket-desc">
            Rooted in philosophy, writing, and self-reflection. Building a life system governed by deep focus, discipline, and intentional routine.
          </p>
        </div>

        <div className="bucket-card sharp-card">
          <div className="bucket-icon">
            <Activity size={32} />
          </div>
          <h3 className="bucket-title">Recreational</h3>
          <p className="bucket-desc">
            Demanding physical fitness and agility, channeling the high-APM precision of competitive gaming into maintaining peak physical condition.
          </p>
        </div>
      </div>
    </section>
  );
};
