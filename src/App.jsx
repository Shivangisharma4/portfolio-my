import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "framer-motion";
import './index.css';
import React from "react";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-light-mode-bg text-light-text dark:bg-dark-mode-bg dark:text-dark-text scroll-smooth"
    >
      <ThemeToggle />
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;