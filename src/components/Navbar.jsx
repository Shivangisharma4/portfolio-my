import { motion } from 'framer-motion';
import { GithubLogo, XLogo, LinkedinLogo } from '@phosphor-icons/react';

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 bg-cream/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <button
        onClick={() => scrollTo('#home')}
        className="font-handwritten text-2xl text-navy hover:text-accent transition-colors"
      >
        Shivangi
      </button>

      <div className="flex items-center gap-8">
        {[
          { label: 'Projects', id: '#projects' },
          { label: 'Writing', id: '#writing' },
          { label: 'Contact', id: '#contact' },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="hidden sm:block text-sm font-sans text-ink-light hover:text-navy transition-colors tracking-wide"
          >
            {label}
          </button>
        ))}

        <div className="flex items-center gap-4 ml-2">
          <a href="https://github.com/Shivangisharma4" target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-navy transition-colors" aria-label="GitHub">
            <GithubLogo size={18} weight="regular" />
          </a>
          <a href="https://x.com/shivangitwt" target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-navy transition-colors" aria-label="Twitter">
            <XLogo size={16} weight="regular" />
          </a>
          <a href="https://www.linkedin.com/in/shivangi44sharma/" target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-navy transition-colors" aria-label="LinkedIn">
            <LinkedinLogo size={18} weight="regular" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
