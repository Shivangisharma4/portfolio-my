import { motion } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/10 rounded-full animate-gentle-bob" />
      <div className="absolute bottom-32 right-16 w-20 h-20 border border-warm/10 rounded-full" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-12 font-handwritten text-ink-faint/15 text-6xl select-none rotate-12">✦</div>
      <div className="absolute bottom-1/4 left-8 font-handwritten text-accent/10 text-4xl select-none -rotate-6">~</div>

      {/* Dashed curve */}
      <svg className="absolute top-16 left-1/4 opacity-[0.08] pointer-events-none" width="200" height="200" viewBox="0 0 200 200">
        <path d="M20 180 Q 60 20, 180 60" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="6 4" />
      </svg>

      {/* Paper plane */}
      <svg className="absolute top-28 right-[15%] opacity-[0.1] pointer-events-none animate-float hidden md:block" width="50" height="50" viewBox="0 0 60 60">
        <path d="M5 35 L55 5 L35 55 L28 32 Z" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M28 32 L55 5" fill="none" stroke="#D4A574" strokeWidth="1" />
      </svg>

      {/* Small constellation */}
      <svg className="absolute bottom-40 left-[15%] opacity-[0.06] pointer-events-none hidden md:block" width="70" height="70" viewBox="0 0 70 70">
        <circle cx="10" cy="20" r="2" fill="#D4A574" />
        <circle cx="35" cy="5" r="1.5" fill="#D4A574" />
        <circle cx="60" cy="25" r="2" fill="#D4A574" />
        <circle cx="45" cy="55" r="1.5" fill="#D4A574" />
        <circle cx="15" cy="60" r="2" fill="#D4A574" />
        <path d="M10 20 L35 5 L60 25 L45 55 L15 60 Z" fill="none" stroke="#D4A574" strokeWidth="0.4" strokeDasharray="2 3" />
      </svg>

      <div className="z-10 flex flex-col items-center gap-4 max-w-3xl text-center">

        {/* Name in handwritten */}
        <motion.p
          className="font-handwritten text-accent text-2xl md:text-3xl mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Shivangi Sharma
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="font-serif text-display text-navy leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Portfolio
        </motion.h1>

        {/* Role subtitle */}
        <motion.div
          className="mt-4 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 border border-ink-faint/20 rounded-full text-sm font-sans text-ink-light tracking-wide">
            Developer &amp; Writer
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-16 md:mt-24 flex flex-col items-center gap-2 text-ink-faint/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
          <CaretDown size={18} weight="light" className="animate-gentle-bob" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
