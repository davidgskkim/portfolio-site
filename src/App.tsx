import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main className="container" style={{ marginTop: '100px', paddingBottom: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        
        <footer style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto' }}>
          <p>© 2026 David Kim. Structured for performance.</p>
        </footer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
