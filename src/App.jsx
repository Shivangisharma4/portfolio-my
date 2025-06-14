// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Vault from "./components/Vault";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 400);
  };

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <Hero />;
      case "blogs":
        return <Blogs />;
      case "projects":
        return <Projects />;
      case "publications":
        return <Publications />;
      case "vault":
        return <Vault />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-mono bg-light-mode-bg text-light-text dark:bg-dark-mode-bg dark:text-dark-text scroll-smooth min-h-screen relative"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-50"
        style={{ scaleX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Navbar */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content */}
      <div className="mt-6 px-4 min-h-[60vh]">
        {loading ? (
          <Spinner />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <Footer />
      <Analytics />
    </motion.div>
  );
}

export default App;
