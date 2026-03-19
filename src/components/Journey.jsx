import { motion } from 'framer-motion';
import { Terminal, PencilLine, Lightbulb, Heart } from '@phosphor-icons/react';

const chapters = [
  {
    icon: Lightbulb,
    text: "It started with curiosity. The kind that makes you take apart things just to see how they work. I remember the first time I opened a browser's \"View Source\" and saw HTML. It felt like finding a secret language. I didn't understand most of it, but I wanted to.",
  },
  {
    icon: Terminal,
    text: "My first real program was embarrassingly simple. A calculator that barely calculated. But I remember the feeling when it worked. Making something from nothing, telling a machine what to do and watching it listen. That's what got me hooked.",
  },
  {
    icon: PencilLine,
    text: "Somewhere along the way, I realized I liked explaining things as much as building them. Writing about tech taught me that understanding something deeply enough to teach it is its own kind of skill. Code and words became two sides of the same coin for me.",
  },
  {
    icon: Heart,
    text: "CS wasn't a grand plan. It was a series of small, genuine moments. Each project, each article, each late-night debugging session. I'm still figuring things out, still learning, still building. And honestly, that's the part I like the most.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
  }),
};

const Journey = () => {
  return (
    <section className="section relative">
      {/* Background botanical */}
      <svg className="absolute top-8 right-0 opacity-[0.08] pointer-events-none hidden md:block" width="120" height="300" viewBox="0 0 120 300">
        <path d="M60 300 Q60 220, 40 180 Q25 150, 50 120 Q70 95, 55 60 Q45 35, 60 10 Q65 0, 60 0" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 120 Q30 110, 20 130" fill="none" stroke="#C17F4E" strokeWidth="1" strokeLinecap="round" />
        <path d="M55 180 Q75 170, 85 185" fill="none" stroke="#C17F4E" strokeWidth="1" strokeLinecap="round" />
        <path d="M40 60 Q25 50, 15 65" fill="none" stroke="#C17F4E" strokeWidth="1" strokeLinecap="round" />
        <path d="M55 240 Q70 230, 80 245" fill="none" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" />
        <circle cx="60" cy="5" r="3" fill="none" stroke="#C17F4E" strokeWidth="0.8" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-headline doodle-underline mb-2">How I Ended Up Here</h2>
        <p className="font-handwritten text-accent text-lg mt-6 mb-4">a story in four parts</p>
        <div className="editorial-divider" />
      </motion.div>

      <div className="max-w-2xl mt-8 space-y-10">
        {chapters.map((ch, i) => (
          <motion.div
            key={i}
            className="flex gap-5 items-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="shrink-0 mt-1 w-9 h-9 rounded-full border border-accent/25 flex items-center justify-center">
              <ch.icon size={16} weight="light" className="text-accent" />
            </div>
            <p className="text-ink-light leading-relaxed text-[15px]">
              {ch.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
