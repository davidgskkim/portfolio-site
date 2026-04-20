import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="accent-text">DK</span>
          <span className="logo-hq">/ HQ</span>
        </div>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#hobbies" className="nav-link">Missions</a>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
