import { motion } from 'framer-motion';
import { GithubLogo, XLogo, LinkedinLogo, Briefcase } from '@phosphor-icons/react';

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
      <div className="flex items-center gap-3">
        <button
          onClick={() => scrollTo('#home')}
          className="font-handwritten text-2xl text-navy hover:text-accent transition-colors"
        >
          Shivangi
        </button>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[10px] font-medium tracking-widest text-[#059669] uppercase font-sans">Available</span>
        </div>
      </div>

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
          <a href="https://www.upwork.com/freelancers/~012f1915a3bf257f8e?mp_source=share" target="_blank" rel="noopener noreferrer" className="relative group text-ink-faint hover:text-navy transition-colors flex items-center justify-center" aria-label="Upwork">
            <Briefcase size={18} weight="regular" />
            <span className="absolute pt-3 top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-handwritten text-accent text-lg md:text-xl opacity-95 rotate-[-6deg] select-none pointer-events-none transition-all group-hover:-translate-y-1 group-hover:opacity-100">
              hire me! ↑
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
