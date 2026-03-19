import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const writings = [
  {
    title: 'Database Management System (DBMS): Part I',
    platform: 'Medium',
    link: 'https://medium.com/@Shivangi444/database-management-system-dbms-i-7adf4f1dc3ea',
  },
  {
    title: 'Finite Automata: Part I',
    platform: 'Medium',
    link: 'https://medium.com/@Shivangi444/finite-automata-i-be19fec63706',
  },
  {
    title: 'Cognitive Dissonance: A Psychological Theory',
    platform: 'Medium',
    link: 'https://medium.com/@Shivangi444/cognitive-dissonance-a-psychological-theory-9811b5f825b7',
  },
  {
    title: 'GeeksForGeeks Articles',
    platform: 'GFG',
    link: 'https://www.geeksforgeeks.org/user/shivangi444/contributions/',
  },
];

const publications = [
  { title: 'Celestial', link: 'https://amzn.in/d/6uOSY71' },
  { title: 'Serenity', link: 'https://amzn.in/d/hzh4EaU' },
  { title: 'Goofball', link: 'https://amzn.in/d/8SVXggM' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
  }),
};

const Writing = () => {
  return (
    <section id="writing" className="section relative">
      {/* Botanical between columns */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden md:block" width="100" height="200" viewBox="0 0 100 200">
        <path d="M50 200 Q50 140, 35 110 Q20 85, 45 60 Q60 40, 45 15 Q40 5, 50 0" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M35 110 Q20 100, 12 118" fill="none" stroke="#C17F4E" strokeWidth="1" strokeLinecap="round" />
        <path d="M45 60 Q60 50, 68 65" fill="none" stroke="#C17F4E" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">

        {/* Blog Articles */}
        <div className="md:col-span-7">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-headline doodle-arrow mb-2">Writing</h2>
            <p className="font-handwritten text-accent text-lg mt-3 mb-4">articles & thoughts</p>
            <div className="editorial-divider" />
          </motion.div>

          <div className="space-y-1 mt-6">
            {writings.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-cream-dark/60 last:border-b-0
                           hover:border-accent/20 transition-colors duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <h3 className="font-sans font-medium text-navy text-sm md:text-base group-hover:text-accent transition-colors pr-4">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] uppercase tracking-widest text-ink-faint font-sans">{item.platform}</span>
                  <ArrowUpRight
                    size={14}
                    weight="regular"
                    className="text-ink-faint/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="md:col-span-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-headline mb-2">Poetry</h2>
            <p className="text-sm text-ink-faint leading-relaxed mt-3 mb-4">
              Three poems selected by{' '}
              <a
                href="https://writerspocket.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Writers Pocket
              </a>
              , published in three book collections.
            </p>
            <div className="editorial-divider" />
          </motion.div>

          <div className="space-y-4 mt-6">
            {publications.map((pub, i) => (
              <motion.a
                key={i}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-3 hover:translate-x-1 transition-transform duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-warm/30 text-xs font-serif text-warm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-navy group-hover:text-accent transition-colors italic">
                    {pub.title}
                  </h3>
                  <p className="text-[11px] text-ink-faint font-sans uppercase tracking-wider mt-0.5">Published Collection</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Writing;
