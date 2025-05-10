import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer bg-black text-white py-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2025 My Portfolio</p>
    </motion.footer>
  );
};

export default Footer;
