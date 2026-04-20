import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
      </main>
    </ThemeProvider>
  );
}

export default App;
