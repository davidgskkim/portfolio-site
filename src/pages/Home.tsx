import { TypeAnimation } from 'react-type-animation';
import { Code2, Database, Terminal, Cpu, Layers, Cloud, Smartphone, Globe, Github, Linkedin, Mail } from 'lucide-react';
import './Home.css';

export const Home = () => {
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
              Feel free to explore via the navbar above and learn all about me!<br/>
              Don't hesitate to reach out if you're interested in working together.
            </p>
            <div className="contact-links">
              <a href="mailto:davidgsk.kim@gmail.com" className="contact-icon" title="Email">
                <Mail size={24} />
              </a>
              <a href="https://github.com/davidgskkim" target="_blank" rel="noreferrer" className="contact-icon" title="GitHub">
                <Github size={24} />
              </a>
              <a href="#" className="contact-icon" title="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="hero-right">
          <div className="profile-photo-wrapper">
            <img
              src="/profile-placeholder.png"
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
