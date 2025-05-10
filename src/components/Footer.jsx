import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';  // Existing imports
import { FaPinterest } from 'react-icons/fa'; // Pinterest icon import
import duolingoLogo from '../assets/duolingo.png'; // Add Duolingo logo image to your assets folder

const Footer = () => {
  return (
    <motion.footer
      className="footer bg-black text-white py-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center gap-6 mb-4">
        {/* Social Icons */}
        <a href="https://github.com/Shivangisharma4" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-pink-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/shivangi44sharma/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-pink-400 transition" />
        </a>
        <a href="https://x.com/shivangitwt" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-pink-400 transition" />
        </a>
        <a href="https://in.pinterest.com/wouffle_/" target="_blank" rel="noopener noreferrer">
          <FaPinterest className="text-2xl hover:text-pink-400 transition" />
        </a>
        <a href="https://www.duolingo.com/profile/wouffle_" target="_blank" rel="noopener noreferrer">
          <img src={duolingoLogo} alt="Duolingo" className="w-8 h-8 hover:scale-110 transition-all" />
        </a>
      </div>

      <p>&copy; 2025 My Portfolio</p>
      <p className="text-sm mt-2 text-gray-400">Made with ❤️</p>
    </motion.footer>
  );
};

export default Footer;
