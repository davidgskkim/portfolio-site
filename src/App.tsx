import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container">
        <Hero />
      </main>
    </ThemeProvider>
  );
}

export default App;
