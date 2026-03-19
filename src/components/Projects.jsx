import { motion } from 'framer-motion';
import lawLingoImage from '../assets/law_lingo.png';
import pagelyImage from '../assets/pagely_mario.png';
import mritunjayImage from '../assets/mritunjay_mario.png';
import algoplayImage from '../assets/algoplay_mario.png';
import stargazersImage from '../assets/stargazers_mario.png';
import pinvibeImage from '../assets/pinvibe_mario.png';
import kathanaImage from '../assets/kathana_mario.png';

const projects = [
  {
    title: 'Law-Lingo',
    description: 'An AI-powered legal analysis platform that breaks down grievances and generates drafts in plain language. Built with React, Node, and Gemini.',
    href: 'https://github.com/Shivangisharma4/Law-lingo',
    image: lawLingoImage,
    tags: ['AI', 'Legal Tech', 'Full Stack'],
    status: 'Live',
  },
  {
    title: 'Pagely',
    description: 'A personal reading journal. Track what you read, how it made you feel, and where it took you.',
    href: 'https://pagely-one.vercel.app/',
    image: pagelyImage,
    tags: ['Reading', 'Journal', 'Productivity'],
    status: 'Live',
  },
  {
    title: 'Mritunjay',
    description: 'A freelanced web project for a client, designed and delivered from scratch.',
    href: 'https://mritunjay-eosin.vercel.app',
    image: mritunjayImage,
    tags: ['Freelance', 'Web Dev', 'Complete'],
    status: 'Live',
  },
  {
    title: 'AlgoPlay',
    description: 'Sorting algorithms visualized. Watch them race, swap, and settle into order.',
    href: 'https://www.algoplay.live/',
    image: algoplayImage,
    tags: ['Algorithms', 'Visualization', 'Interactive'],
    status: 'Live',
  },
  {
    title: 'Stargazers',
    description: 'Space-themed productivity and galaxy explorer. Because why not do your tasks among the stars?',
    href: 'https://star-gazers-neon.vercel.app/',
    image: stargazersImage,
    tags: ['Space', 'Productivity', 'Explorer'],
    status: 'Live',
  },
  {
    title: 'Pinvibe Quiz',
    description: 'An interactive quiz app with a playful, fast, and slightly competitive edge.',
    href: 'https://pinvibe-quiz.vercel.app/',
    image: pinvibeImage,
    tags: ['Quiz', 'Interactive', 'UI/UX'],
    status: 'Live',
  },
  {
    title: 'Kathana AI',
    description: 'Writer-focused AI story generation. Helping you get past the blank page.',
    href: '#',
    image: kathanaImage,
    tags: ['AI', 'Storytelling', 'In Progress'],
    status: 'Coming Soon',
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
