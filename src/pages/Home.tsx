import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Terminal, Globe, Mail, Code2 } from 'lucide-react';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-dashboard">
      
      {/* Hero Header */}
      <section className="dashboard-hero">
        <div className="hero-bg-glow"></div>
        <h2 className="hero-greeting" style={{fontSize: '1rem', color: 'var(--text-secondary)', letterSpacing: '2px', marginBottom: '10px', fontWeight: 600}}>INITIALIZE &lt;PROTOCOL /&gt;</h2>
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
