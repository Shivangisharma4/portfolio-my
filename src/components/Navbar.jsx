import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faAddressBook,
  faProjectDiagram,
  faPen,
  faEnvelope,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  // Persist and apply dark mode on first load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', prefersDark);
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    setIsDark(newMode);
  };

  return (
    <motion.nav
      className="fixed bottom-6 inset-x-0 flex justify-center z-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20 flex items-center">
        <motion.ul
          className="flex gap-6 items-center text-sm font-medium text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Home */}
          <NavItem href="#home" icon={faHome} label="Home" hoverColor="text-blue-400" />

          {/* Blogs */}
          <NavItem href="#blogs" icon={faPen} label="Blogs" hoverColor="text-pink-400" />

          {/* Projects */}
          <NavItem href="#projects" icon={faProjectDiagram} label="Projects" hoverColor="text-green-400" />

          {/* Publications */}
          <NavItem href="#publications" icon={faNewspaper} label="Publications" hoverColor="text-yellow-400" />

          {/* Contact */}
          <NavItem href="#contact" icon={faEnvelope} label="Contact" hoverColor="text-purple-400" />
        </motion.ul>

        {/* Divider */}
        <div className="w-px h-6 bg-white/30 mx-4" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl text-white hover:scale-110 transition"
          aria-label="Toggle Theme"
        >
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ href, icon, label, hoverColor }) => (
  <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative group">
    <a href={href} className={`transition ${hoverColor}`}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
      {label}
    </span>
  </motion.li>
);

export default Navbar;
