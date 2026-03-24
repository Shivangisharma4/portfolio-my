import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Rust (Learning)', 'SQL']
  },
  {
    title: 'Stack',
    skills: ['Next.js', 'MERN Stack', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Framer Motion', 'Firebase']
  },
  {
    title: 'Focus & Tools',
    skills: [
      'Distributed Systems', 'AI Agentic Workflows', 'Internal Tooling',
      'REST APIs', 'Open Source', 'Technical Writing',
      'Git & GitHub', 'Vercel', 'Postman', 'Figma',
      'Gemini API', 'Cursor', 'GitHub Copilot', 'ChatGPT'
    ]
  }
];

const Skills = () => {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-headline doodle-circle mb-2">Skills</h2>
        <p className="font-handwritten text-accent text-lg mb-6">the truthful list</p>
        <div className="editorial-divider" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mt-12">
        {skillCategories.map((category, idx) => (
          <div key={category.title} className="flex flex-col">
            <h3 className="font-sans text-xs tracking-widest text-ink-light opacity-80 uppercase mb-5">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="tag"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (idx * 0.1) + (i * 0.04), ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
