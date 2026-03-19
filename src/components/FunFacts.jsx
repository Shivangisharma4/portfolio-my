import { motion } from 'framer-motion';
import { Books, Translate, FlowerLotus, GameController, GitBranch, HandWaving } from '@phosphor-icons/react';

const facts = [
  { icon: Books, text: '3 published poems in book collections' },
  { icon: Translate, text: 'Learning German on Duolingo (200+ day streak)' },
  { icon: FlowerLotus, text: 'Avid reader and love a good cup of chai' },
  { icon: GitBranch, text: 'Contributed to Nix, Gemini CLI, and LangChain' },
  { icon: HandWaving, text: 'Always up for a good conversation' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07 }
  }),
};

const FunFacts = () => {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-headline mb-2">Fun Facts</h2>
        <p className="font-handwritten text-accent text-lg mt-3 mb-4">a few things about me</p>
        <div className="editorial-divider" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {facts.map((fact, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 p-5 rounded-xl bg-paper border border-cream-dark/40
                       hover:border-warm-light/50 hover:shadow-sm transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full border border-accent/15 flex items-center justify-center">
              <fact.icon size={15} weight="light" className="text-accent" />
            </div>
            <p className="text-sm text-ink-light leading-relaxed">{fact.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
