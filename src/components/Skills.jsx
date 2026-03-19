import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js',
  'Node.js', 'Express', 'MongoDB', 'SQL',
  'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion',
  'Git', 'GitHub', 'VS Code', 'Vercel',
  'Gemini API', 'ChatGPT', 'Cursor', 'GitHub Copilot',
  'Figma', 'Postman', 'Firebase',
  'REST APIs', 'Open Source', 'Technical Writing',
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
        <p className="font-handwritten text-accent text-lg mb-6">things I work with</p>
        <div className="editorial-divider" />
      </motion.div>

      <div className="flex flex-wrap gap-3 mt-8">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            className="tag"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
