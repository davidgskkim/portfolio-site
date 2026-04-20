import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Terminal, Globe, Mail, Code2, Database, Cpu, Layers, Cloud, Smartphone } from 'lucide-react';
import './Home.css';

export const Home = () => {
  const techIcons = [Code2, Database, Terminal, Cpu, Layers, Cloud, Smartphone, Globe];

  return (
    <div className="home-dashboard">
      
      {/* Hero Header */}
      <section className="dashboard-hero">
        <div className="hero-bg-glow"></div>
        <h1 className="hero-title" style={{fontSize: '4.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px'}}>
          Hi, I'm <span className="accent-text gradient-glow">David Kim</span>.
        </h1>
        <div className="typewriter-container">
          <TypeAnimation
            sequence={[
              'Software Engineer.',
              1000,
              'High-Performance Architect.',
              1000,
              'Agentic Systems Builder.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="hero-subtitle"
            style={{fontSize: '1.6rem', color: 'var(--text-secondary)'}}
            repeat={Infinity}
            cursor={true}
          />
        </div>

        {/* Tech Stack Marquee */}
        <div className="tech-marquee-container">
          <div className="tech-marquee">
            <div className="tech-marquee-content">
              {techIcons.map((Icon, idx) => <Icon key={idx} />)}
            </div>
            <div className="tech-marquee-content" aria-hidden="true">
              {techIcons.map((Icon, idx) => <Icon key={`dup-${idx}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid layout */}
      <section className="bento-grid">
        
        {/* Intro/About snippet */}
        <Link to="/about" className="bento-card sharp-card glass bento-about">
          <h3>Core Directives</h3>
          <p>
            Building precise, ambitious, and highly scalable systems. From technical architecture to aesthetic precision, I operate at peak efficiency. 
          </p>
          <span className="bento-link-text">Read more →</span>
        </Link>

        {/* Projects Teaser */}
        <Link to="/projects" className="bento-card sharp-card glass bento-projects">
          <h3>Active Missions</h3>
          <p>Automated intelligence pipelines, complex APIs, and React Native builds.</p>
          <div className="mini-tech-stack">
            <Code2 size={16}/> Python / TypeScript / React 
          </div>
          <span className="bento-link-text">View Arsenal →</span>
        </Link>
        
        {/* GitHub Heatmap Placeholder */}
        <div className="bento-card sharp-card glass bento-github">
          <h3 style={{marginBottom: '20px'}}>Commit History</h3>
          <div className="heatmap-placeholder">
            {Array.from({ length: 42 }).map((_, i) => (
               <div key={i} className={`heat-square level-${Math.floor(Math.random() * 4)}`}></div>
            ))}
          </div>
          <p className="subtext">283 Contributions this year</p>
        </div>

        {/* Contact/CTA */}
        <div className="bento-card sharp-card bento-cta">
          <h3>Interested?</h3>
          <p>Let's build something elite.</p>
          <a href="mailto:davidgsk.kim@gmail.com" className="email-link">Shoot me an email <Mail size={16}/></a>
          <div className="social-links-bento">
            <a href="https://github.com/davidgskkim" target="_blank" rel="noreferrer" className="social-icon"><Terminal size={20}/></a>
            <a href="#" className="social-icon"><Globe size={20}/></a>
          </div>
        </div>

      </section>
    </div>
  );
};
