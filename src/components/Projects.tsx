import './Projects.css';
import { ExternalLink, GitBranch } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Job Scout',
      role: 'Automated Intelligence',
      desc: 'Tiered filter pipeline using Gemini AI. Classifies job listings, hardens spam defenses, and dispatches strict-filtered opportunities directly to inbox.',
      tech: ['Python', 'Gemini API', 'GitHub Actions']
    },
    {
      title: 'Manager Agent',
      role: 'Personalized OS',
      desc: 'Custom-built anchor AI agent tracking LeetCode streaks, daily commits, and optimizing time across professional and spiritual axes.',
      tech: ['React', 'FastAPI', 'LLM Agents']
    },
    {
      title: 'Apex Refactor',
      role: 'Mobile Architecture',
      desc: 'Deconstructing a foundational monolithic passion project into a highly coherent React Native application for optimal performance.',
      tech: ['Expo', 'React Native', 'Node.js']
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header" style={{ marginBottom: '60px' }}>
        <h2 className="section-title">Active Missions</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card sharp-card glass">
            <div className="project-content">
              <span className="project-role">{p.role}</span>
              <h3 className="project-name">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              
              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              <button className="icon-link" aria-label="GitHub Repo"><GitBranch size={20} /></button>
              <button className="icon-link" aria-label="Live Demo"><ExternalLink size={20} /></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
