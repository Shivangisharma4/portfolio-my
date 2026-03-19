import { motion } from 'framer-motion';
import { Compass, Rocket, BookOpen, Globe, Code, Sparkle } from '@phosphor-icons/react';

const dreams = [
  {
    icon: Rocket,
    title: 'Build something people actually use',
    note: 'Not just a side project, but a product that lives and breathes in the real world.',
  },
  {
    icon: Code,
    title: 'Contribute to a major open source project',
    note: 'Give back to the community that taught me everything I know.',
  },
  {
    icon: BookOpen,
    title: 'Write a book someday',
    note: 'Maybe technical, maybe not. Definitely honest.',
  },
  {
    icon: Globe,
    title: 'Work with people across the world',
    note: 'Collaborate with brilliant minds, learn from different perspectives.',
  },
  {
    icon: Compass,
    title: 'Never stop being a beginner',
    note: 'The best part about tech is there\'s always something new to not know.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  }),
};

const Dreams = () => {
  return (
    <section className="section relative">
      {/* Paper plane SVG */}
      <svg className="absolute top-12 right-16 opacity-[0.1] pointer-events-none hidden md:block animate-float" width="60" height="60" viewBox="0 0 60 60">
        <path d="M5 35 L55 5 L35 55 L28 32 Z" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M28 32 L55 5" fill="none" stroke="#D4A574" strokeWidth="1" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-headline">Where I'm Headed</h2>
          <Sparkle size={20} weight="light" className="text-warm/50" />
        </div>
        <p className="font-handwritten text-accent text-lg mt-3 mb-4">dreams & things I want to do</p>
        <div className="editorial-divider" />
      </motion.div>

      <div className="mt-8 max-w-2xl space-y-6">
        {dreams.map((dream, i) => (
          <motion.div
            key={i}
            className="group flex items-start gap-5 py-4 border-b border-cream-dark/50 last:border-b-0
                       hover:border-accent/20 transition-colors duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg border border-warm/25 flex items-center justify-center
                            group-hover:border-warm/50 group-hover:bg-warm/5 transition-all duration-300">
              <dream.icon size={16} weight="light" className="text-warm group-hover:text-warm transition-colors" />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-navy text-sm group-hover:text-accent transition-colors">
                {dream.title}
              </h3>
              <p className="text-xs text-ink-faint mt-1 leading-relaxed">{dream.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Dreams;
