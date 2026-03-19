import { Heart, Coffee } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-dark/60">
      <p className="text-xs text-ink-faint font-sans">
        &copy; 2026 Shivangi Sharma
      </p>

      <a
        href="https://buymeacoffee.com/wouffle"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                   border border-warm/30 text-sm font-sans text-ink-light
                   hover:border-warm hover:text-warm transition-all duration-300"
      >
        <Coffee size={15} weight="regular" className="text-warm" />
        Buy me a coffee
      </a>

      <p className="text-xs text-ink-faint/60 font-sans flex items-center gap-1">
        Made with <Heart size={12} weight="fill" className="text-warm" /> by Shivangi
      </p>
    </footer>
  );
};

export default Footer;
