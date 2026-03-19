import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown, ChatCircleDots, Coffee, MusicNote, Moon, GameController, Cat } from '@phosphor-icons/react';

const questions = [
  {
    icon: Coffee,
    q: 'Tea or coffee?',
    a: 'Chai, always. With exactly too much sugar.',
  },
  {
    icon: MusicNote,
    q: 'What do you listen to while coding?',
    a: 'Lo-fi when focused, Bollywood when not. There\'s no in-between.',
  },
  {
    icon: Moon,
    q: 'Morning person or night owl?',
    a: 'Night owl pretending to be a morning person. The code hits different at 2am.',
  },
  {
    icon: GameController,
    q: 'Favorite thing you\'ve ever built?',
    a: 'A Whack-A-Mole game. Not because it was complex, but because it made my friends laugh.',
  },
  {
    icon: Cat,
    q: 'One fun fact people don\'t expect?',
    a: 'I write poetry. Three of my poems got published in actual book collections. Surprised?',
  },
  {
    icon: ChatCircleDots,
    q: 'What would you tell your past self?',
    a: 'Stop overthinking and just ship it. The first version is never the last one.',
  },
];

const ChitChat = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section relative">
      {/* Constellation doodle */}
      <svg className="absolute bottom-10 left-8 opacity-[0.06] pointer-events-none hidden md:block" width="80" height="80" viewBox="0 0 80 80">
        <circle cx="10" cy="20" r="2" fill="#6B7FA3" />
        <circle cx="40" cy="10" r="2" fill="#6B7FA3" />
        <circle cx="70" cy="30" r="2" fill="#6B7FA3" />
        <circle cx="50" cy="60" r="2" fill="#6B7FA3" />
        <circle cx="20" cy="65" r="2" fill="#6B7FA3" />
        <path d="M10 20 L40 10 L70 30 L50 60 L20 65 Z" fill="none" stroke="#6B7FA3" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-headline doodle-circle mb-2">Chit Chat</h2>
        <p className="font-handwritten text-accent text-lg mt-3 mb-4">things people ask me</p>
        <div className="editorial-divider" />
      </motion.div>

      <div className="max-w-2xl mt-8 space-y-3">
        {questions.map((item, i) => (
          <motion.div
            key={i}
            className="chitchat-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left"
            >
              <div className="shrink-0 w-8 h-8 rounded-full border border-accent/15 flex items-center justify-center">
                <item.icon size={14} weight="light" className="text-accent" />
              </div>
              <span className="flex-1 font-sans font-medium text-navy text-sm">{item.q}</span>
              <CaretDown
                size={16}
                weight="bold"
                className={`text-ink-faint/40 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 pl-[4.5rem] text-sm text-ink-light leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChitChat;
