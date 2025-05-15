import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <main className="px-6 py-16 max-w-4xl mx-auto space-y-16">
        <About data-aos="fade-up" />
        <Projects data-aos="fade-up" />
        <Contact data-aos="fade-up" />
      </main>
      <Footer />
    </div>
  );
}

export default App;

