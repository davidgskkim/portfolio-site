import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container" style={{ marginTop: '100px' }}>
        {/* Placeholder for future sections */}
        <div style={{ height: '2000px', padding: '2rem 0' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>HQ Initialized.</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Shadow assassin vibes online.</p>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
