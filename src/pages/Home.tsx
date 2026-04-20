import { TypeAnimation } from 'react-type-animation';
import { Code2, Database, Terminal, Cpu, Layers, Cloud, Smartphone, Globe, Mail } from 'lucide-react';
import './Home.css';

export const Home = () => {
  const GithubIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
      <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
    </svg>
  );

  const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  const techIcons = [Code2, Database, Terminal, Cpu, Layers, Cloud, Smartphone, Globe];

  return (
    <div className="home-dashboard">
      <section className="hero-split">

        {/* LEFT — Text */}
        <div className="hero-left">
          <div className="hero-bg-glow"></div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-glow">David Kim</span>.
          </h1>
          <div className="status-badge">
            <span className="status-dot"></span>
            Seeking 2026 Roles
          </div>

          <div className="typewriter-container">
            <TypeAnimation
              sequence={[
                'Software Engineer.',
                1000,
                '0-to-1 Builder.',
                1000,
                'Severe Claude Addict.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="hero-subtitle"
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

          {/* Contact + Nav Invite */}
          <div className="hero-contact-block">
            <p className="contact-invite">
              Optimized for humans who value their scroll wheels. I build things that get straight to the point — explore my work via the navigation bar or reach out using the links below.
            </p>
            <div className="contact-links">
              <a href="mailto:davidgsk.kim@gmail.com" className="contact-icon" title="Email">
                <Mail size={24} />
              </a>
              <a href="https://github.com/davidgskkim" target="_blank" rel="noreferrer" className="contact-icon" title="GitHub">
                <GithubIcon size={24} />
              </a>
              <a href="#" className="contact-icon" title="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="hero-right">
          <div className="profile-photo-wrapper">
            <img
              src="/Professional_photo.jpg"
              alt="David Kim"
              className="profile-photo"
            />
            <div className="photo-glow-ring"></div>
          </div>
        </div>

      </section>
    </div>
  );
};
