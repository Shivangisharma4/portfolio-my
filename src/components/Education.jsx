import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  }),
};

const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'RGPV University',
    year: '2023 - 2027',
  },
  {
    degree: 'High School',
    school: 'Orion International',
    year: '2023',
  },
];

const experience = [
  {
    role: 'Technical Writer',
    org: 'GeeksforGeeks',
    detail: 'DSA & Web Dev',
  },
  {
    role: 'Open Source Contributor',
    org: 'Nix, Gemini CLI, LangChain',
    detail: 'Documentation & Code',
  },
  {
    role: 'Frontend Intern',
    org: 'Campus Cell',
    detail: 'React & Tailwind',
  },
];

const Education = () => {
  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-headline mb-2 doodle-star">Education</h2>
          <div className="editorial-divider" />

          <div className="space-y-8 mt-6">
            {education.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-6 border-l border-warm/30"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-warm/60" />
                <h3 className="font-sans font-semibold text-navy text-base">{item.degree}</h3>
                <p className="text-sm text-ink-faint mt-0.5">{item.school}</p>
                <span className="text-xs font-sans text-ink-faint/60 tracking-wide mt-1 block">{item.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h2 className="text-headline mb-2">Experience</h2>
          <div className="editorial-divider" />

          <div className="space-y-5 mt-6">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className="group flex items-center justify-between py-3 border-b border-cream-dark/60 last:border-b-0
                           hover:border-warm/30 transition-colors duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
              >
                <div>
                  <h3 className="font-sans font-semibold text-navy text-sm group-hover:text-accent transition-colors">{item.role}</h3>
                  <p className="text-xs text-ink-faint mt-0.5">{item.org}</p>
                </div>
                <span className="text-xs font-sans text-ink-faint/50 tracking-wide">{item.detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
