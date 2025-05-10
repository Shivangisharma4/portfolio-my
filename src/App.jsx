import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from './components/Blogs';
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import './index.css';
import React from "react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-light-mode-bg text-light-text dark:bg-dark-mode-bg dark:text-dark-text scroll-smooth"
    >
      <Navbar />
      <Hero />
      <Blogs/>
      <Projects />
      <Publications/>
      <Contact />
      <Footer />
      <Analytics/>
    </motion.div>
    
  );
}

export default App;