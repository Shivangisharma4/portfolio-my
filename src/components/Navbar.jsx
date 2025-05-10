import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-4 inset-x-0 mx-auto z-50 max-w-[90vw] md:max-w-[70vw] transition-all duration-300 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-md shadow-md'
          : 'bg-white/10 backdrop-blur-sm'
      } rounded-full px-4 py-2`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.ul
        className="flex justify-evenly flex-wrap items-center text-sm font-medium text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#blogs" className="hover:text-pink-400 transition">Blogs</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#publications" className="hover:text-yellow-400 transition">Publications</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
