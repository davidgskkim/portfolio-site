import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Projects />
      </main>
      
      <footer style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-subtle)', marginTop: '60px' }}>
        <p>© 2026 David Kim. Structured for performance.</p>
      </footer>
    </ThemeProvider>
  );
}

export default App;
