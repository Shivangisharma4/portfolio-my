import { motion } from 'framer-motion';
import stackArchitectImage from '../assets/stack_architect_mario.png';
import reasoningPlaygroundImage from '../assets/reasoning_playground_mario.png';
import focusflowImage from '../assets/focusflow_mario.png';
import aegisAiImage from '../assets/aegis_ai_mario.png';
import turingMachineImage from '../assets/turing_machine_mario.png';
import kathanaImage from '../assets/kathana_mario.png';
import lawLingoImage from '../assets/law_lingo.png';

const projects = [
  {
    title: 'Stack Architect',
    description: 'An algorithmic tech stack advisor that recommends the exact technologies for your project based on your constraints.',
    href: 'https://stack-architect.vercel.app/',
    image: stackArchitectImage,
    tags: ['Architecture', 'Tech Stack', 'Advisor'],
    status: 'Live',
  },
  {
    title: 'Reasoning Playground',
    description: 'A collaborative canvas where teams co-write prompts and watch an AI agent think out loud. Presence syncs in real time, and the agent streams its extended thinking and final output side by side as it moves through tools and a vector-RAG knowledge base.',
    href: 'https://reasoning-playground.vercel.app/',
    image: reasoningPlaygroundImage,
    tags: ['AI', 'Collaborative', 'Real-Time'],
    status: 'Live',
  },
  {
    title: 'FocusFlow Max',
    description: 'A specialized study environment designed to combat under stimulation in neurodivergent users. It combines a high performance PDF reader with an integrated multi channel sensory engine like Minecraft parkour and Azure powered TTS to maintain focus during academic reading.',
    href: 'https://focusflow-max.vercel.app/',
    image: focusflowImage,
    tags: ['Productivity', 'Accessibility', 'Reader'],
    status: 'Live',
  },
  {
    title: 'Aegis AI',
    description: 'A specialized Retrieval Augmented Generation system prioritizing privacy by processing documents entirely within the browser without cloud reliance.',
    href: '#',
    image: aegisAiImage,
    tags: ['AI', 'Privacy', 'RAG'],
    status: 'Coming Soon',
  },
  {
    title: 'Kathana AI',
    description: 'Writer focused AI story generation. Helping you get past the blank page.',
    href: '#',
    image: kathanaImage,
    tags: ['AI', 'Storytelling', 'In Progress'],
    status: 'Coming Soon',
  },
  {
    title: 'Law Lingo',
    description: 'An AI powered legal analysis platform that breaks down grievances and generates drafts in plain language. Built with React, Node, and Gemini.',
    href: 'https://github.com/Shivangisharma4/Law-lingo',
    image: lawLingoImage,
    tags: ['AI', 'Legal Tech', 'Full Stack'],
    status: 'Live',
  },
  {
    title: 'Turing Machine',
    description: 'An interactive web experience that simulates and demystifies the inner workings of a classic Turing machine.',
    href: 'https://turing-mystery.vercel.app/',
    image: turingMachineImage,
    tags: ['Interactive', 'Simulation', 'Web'],
    status: 'Live',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Projects = () => (
  <section id="projects" className="section">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-headline doodle-underline mb-2">Projects</h2>
      <p className="font-handwritten text-accent text-lg mt-6 mb-4">selected work</p>
      <div className="editorial-divider" />
    </motion.div>

    <div className="mt-12 space-y-20">
      {projects.map((project, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.a
            key={project.title}
            href={project.href}
            target={project.href === '#' ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`project-card group block md:flex ${isEven ? '' : 'md:flex-row-reverse'} ${project.href === '#' ? 'cursor-default' : ''}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Image */}
            <div className="md:w-1/2 overflow-hidden bg-cream-dark/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div className={`md:w-1/2 p-8 md:p-10 flex flex-col justify-center ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-serif text-2xl md:text-3xl text-navy group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.status === 'Coming Soon' && (
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-warm bg-warm/10 px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </div>

              <p className="text-ink-light text-sm md:text-base leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-[11px]">{tag}</span>
                ))}
              </div>

              {project.href !== '#' && (
                <span className="mt-6 text-sm text-accent font-sans font-medium inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              )}
            </div>
          </motion.a>
        );
      })}
    </div>
  </section>
);

export default Projects;
