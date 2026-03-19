import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Dreams from './components/Dreams';
import FunFacts from './components/FunFacts';
import Contact from './components/Contact';
import GardenScene from './components/GardenScene';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-cream text-ink min-h-screen relative overflow-x-hidden selection:bg-accent/15 dot-grid">

      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Education />
      <Skills />
      <Projects />
      <Writing />
      <Dreams />
      <FunFacts />
      <Contact />
      <GardenScene />
      <Footer />

      <Analytics />
    </div>
  );
}

export default App;
